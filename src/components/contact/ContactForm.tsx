import { useState, type ChangeEvent, type FormEvent } from "react";
import { sendContactMessage } from "../../services/contactService";
import type { ContactMessage } from "../../types/contact";

type FormErrors = Partial<Record<keyof ContactMessage, string>>;
type FormStatus = "idle" | "submitting" | "success" | "error";
const initialForm: ContactMessage = { name: "", email: "", subject: "", message: "", website: "" };

function validate(form: ContactMessage): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Please enter a valid email address.";
  if (!form.subject.trim()) errors.subject = "Please enter a subject.";
  if (!form.message.trim()) errors.message = "Please enter a message.";
  else if (form.message.trim().length < 20) errors.message = "Please write at least 20 characters.";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length || form.website) return;
    setStatus("submitting");
    try { await sendContactMessage(form); setStatus("success"); } catch { setStatus("error"); }
  };
  const reset = () => { setForm(initialForm); setErrors({}); setStatus("idle"); };
  if (status === "success") return <div className="contact-state contact-success"><span>MESSAGE SENT</span><h2>Thanks for reaching out.</h2><p>I&apos;ll get back to you as soon as possible.</p><button type="button" onClick={reset}>SEND ANOTHER MESSAGE ↗</button></div>;
  return <form className="contact-form" onSubmit={submit} noValidate><div className="form-heading"><span>SEND A MESSAGE</span>{status === "error" && <strong>MESSAGE COULD NOT BE SENT</strong>}</div>{status === "error" && <p className="form-status">Something went wrong. Please try again or contact me directly by email.</p>}<input className="honeypot" name="website" value={form.website} onChange={update} tabIndex={-1} autoComplete="off" aria-hidden="true" /><Field label="NAME" name="name" value={form.name} onChange={update} error={errors.name} maxLength={100} autoComplete="name" /><Field label="EMAIL" name="email" type="email" value={form.email} onChange={update} error={errors.email} maxLength={254} autoComplete="email" /><Field label="SUBJECT" name="subject" value={form.subject} onChange={update} error={errors.subject} maxLength={200} /><Field label="MESSAGE" name="message" value={form.message} onChange={update} error={errors.message} maxLength={5000} textarea autoComplete="off" /><button className="contact-submit" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "SENDING..." : "SEND MESSAGE"}<span>↗</span></button></form>;
}

function Field({ label, name, type = "text", value, onChange, error, maxLength, textarea = false, autoComplete }: { label: string; name: keyof ContactMessage; type?: string; value: string; onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; error?: string; maxLength: number; textarea?: boolean; autoComplete?: string }) {
  const id = `contact-${name}`;
  return <div className="form-row"><label htmlFor={id}>{label}</label>{textarea ? <textarea id={id} name={name} value={value} onChange={onChange} maxLength={maxLength} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} rows={6} placeholder="Tell me about your project..." autoComplete={autoComplete} /> : <input id={id} name={name} type={type} value={value} onChange={onChange} maxLength={maxLength} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} placeholder={label === "NAME" ? "Your name" : label === "EMAIL" ? "you@example.com" : "What can I help with?"} autoComplete={autoComplete} />} {error && <small id={`${id}-error`} className="field-error">{error}</small>}</div>;
}
