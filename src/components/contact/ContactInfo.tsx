import { useState } from "react";
import Reveal from "../Reveal";
import { contact } from "../../data/contact";

const links = [
  { label: "EMAIL", value: contact.email, href: contact.email ? `mailto:${contact.email}` : "" },
  { label: "GITHUB", value: contact.github, href: contact.github },
  { label: "LINKEDIN", value: contact.linkedin, href: contact.linkedin },
];

export default function ContactInfo() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    if (!contact.email) return;
    try { await navigator.clipboard.writeText(contact.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); }
  };
  return <Reveal className="contact-info"><span className="contact-label">GET IN TOUCH</span><h2>Start a<br />conversation.</h2><p>Have an opportunity, project idea or collaboration in mind? Send me a message.</p><div className="contact-links">{links.map((link) => link.href ? <a key={link.label} href={link.href} className="contact-link" target={link.label === "EMAIL" ? undefined : "_blank"} rel={link.label === "EMAIL" ? undefined : "noreferrer"}><span>{link.label}</span><strong>{link.value}</strong><b>↗</b></a> : <div key={link.label} className="contact-link contact-link-disabled"><span>{link.label}</span><strong>DETAILS NOT CONFIGURED</strong></div>)}</div>{contact.email && <button type="button" className="copy-email" onClick={copyEmail}>{copied ? "COPIED ✓" : "COPY EMAIL"}</button>}</Reveal>;
}
