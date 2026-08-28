export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
}

export async function sendContactMessage(data: ContactMessage): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  let result: { success?: boolean; error?: string };
  try {
    result = await response.json();
  } catch {
    throw new Error("Contact service is not configured yet.");
  }

  if (!response.ok || !result.success) {
    throw new Error(result.error || (response.status === 404 ? "Contact service is not configured yet." : "Message could not be sent."));
  }
}
