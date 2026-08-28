import { Link } from "react-router-dom";
import { contact } from "../data/contact";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div>
            <Link to="/" className="footer-logo">
              FAHAD<span>.DEV</span>
            </Link>

            <p>
              Full Stack Developer building practical
              software with modern technologies.
            </p>
          </div>

          <div className="footer-links">

            <span>NAVIGATE</span>

            <Link to="/about">ABOUT</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/experience">EXPERIENCE</Link>
            <Link to="/contact">CONTACT</Link>

          </div>

          <div className="footer-links">

            <span>CONNECT</span>

            {contact.github && <a href={contact.github} target="_blank" rel="noreferrer">GITHUB ↗</a>}
            {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a>}
            {contact.email && <a href={`mailto:${contact.email}`}>EMAIL ↗</a>}
            {!contact.github && !contact.linkedin && !contact.email && <span>CONTACT DETAILS NOT CONFIGURED</span>}

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 FAHAD.DEV
          </span>

          <span>
            BUILT WITH REACT
          </span>

          <span>
            INDIA
          </span>

        </div>

      </div>
    </footer>
  );
}