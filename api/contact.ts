const limits = { name: 100, email: 254, subject: 200, message: 5000 } as const;

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") return Response.json({ success: false, error: "Method not allowed." }, { status: 405 });
  let body: Partial<Record<keyof typeof limits, unknown>> & { website?: unknown };
  try { body = await request.json(); } catch { return Response.json({ success: false, error: "Invalid request body." }, { status: 400 }); }
  if (body.website) return Response.json({ success: false, error: "Invalid submission." }, { status: 400 });
  for (const field of Object.keys(limits) as (keyof typeof limits)[]) {
    if (typeof body[field] !== "string" || !body[field]?.trim() || body[field].length > limits[field]) return Response.json({ success: false, error: `Invalid ${field}.` }, { status: 400 });
  }
  if (!/^\S+@\S+\.\S+$/.test(body.email as string)) return Response.json({ success: false, error: "Invalid email." }, { status: 400 });
  if ((body.message as string).trim().length < 20) return Response.json({ success: false, error: "Message is too short." }, { status: 400 });
  if (!process.env.CONTACT_EMAIL_API_KEY || !process.env.CONTACT_EMAIL_TO) return Response.json({ success: false, error: "Contact service is not configured yet." }, { status: 503 });
  return Response.json({ success: false, error: "Email provider integration is not configured yet." }, { status: 503 });
}
