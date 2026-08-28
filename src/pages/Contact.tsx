import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactVisual from "../components/contact/ContactVisual";
import Reveal from "../components/Reveal";
import { contact } from "../data/contact";
import "./Contact.css";

export default function Contact() {
  return <main className="contact-page"><div className="contact-container"><Reveal><section className="contact-header"><span className="page-label">06 / CONTACT</span><h1>LET&apos;S<br /><span>TALK.</span></h1><p>Have an opportunity, project idea or collaboration in mind? Send me a message.</p></section></Reveal><section className="contact-grid"><ContactInfo /><ContactVisual /><Reveal className="contact-form-wrap"><ContactForm /></Reveal></section><section className="contact-direct"><span>HAVE SOMETHING IN MIND?</span>{contact.email ? <a href={`mailto:${contact.email}`}>EMAIL ME DIRECTLY ↗</a> : <strong>EMAIL DETAILS NOT CONFIGURED</strong>}</section></div></main>;
}
