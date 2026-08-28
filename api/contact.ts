import { Resend } from "resend";

const limits = { name: 100, email: 254, subject: 200, message: 5000 } as const;
type ContactBody = Partial<Record<keyof typeof limits, unknown>> & { website?: unknown };
type VercelRequest = AsyncIterable<Buffer> & { method?: string; body?: unknown };
type VercelResponse = {
  status: (statusCode: number) => VercelResponse;
  json: (body: unknown) => void;
};

function sendJson(response: VercelResponse, statusCode: number, body: unknown): void {
  response.status(statusCode).json(body);
}

async function readBody(request: VercelRequest): Promise<unknown> {
  if (request.body !== undefined) return typeof request.body === "string" ? JSON.parse(request.body) : request.body;
  let rawBody = "";
  for await (const chunk of request) rawBody += chunk.toString();
  return JSON.parse(rawBody);
}

export default async function handler(request: VercelRequest, response: VercelResponse): Promise<void> {
  try {
    if (request.method === "OPTIONS") return sendJson(response, 204, null);
    if (request.method !== "POST") return sendJson(response, 405, { success: false, error: "Method not allowed." });

    const parsedBody = await readBody(request);
    if (!parsedBody || typeof parsedBody !== "object" || Array.isArray(parsedBody)) return sendJson(response, 400, { success: false, error: "Invalid request body." });
    const body = parsedBody as ContactBody;
    if (body.website) return sendJson(response, 400, { success: false, error: "Invalid submission." });
    for (const field of Object.keys(limits) as (keyof typeof limits)[]) {
      if (typeof body[field] !== "string" || !body[field]?.trim() || body[field].length > limits[field]) return sendJson(response, 400, { success: false, error: `Invalid ${field}.` });
    }
    if (!/^\S+@\S+\.\S+$/.test(body.email as string)) return sendJson(response, 400, { success: false, error: "Invalid email." });
    if ((body.message as string).trim().length < 20) return sendJson(response, 400, { success: false, error: "Message is too short." });
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL_TO) return sendJson(response, 503, { success: false, error: "Contact service is not configured yet." });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: body.email as string,
      subject: `[Portfolio Contact] ${body.subject as string}`,
      text: `Name: ${body.name as string}\nEmail: ${body.email as string}\nSubject: ${body.subject as string}\n\n${body.message as string}`,
    });

    if (error) return sendJson(response, 502, { success: false, error: "Unable to send your message." });
    return sendJson(response, 200, { success: true });
  } catch {
    return sendJson(response, 500, { success: false, error: "Internal server error." });
  }
}
