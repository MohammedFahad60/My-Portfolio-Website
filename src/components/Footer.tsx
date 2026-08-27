import { Link } from "react-router-dom";
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

            <a href="#" target="_blank" rel="noreferrer">
              GITHUB ↗
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              LINKEDIN ↗
            </a>

            <a href="mailto:your-email@example.com">
              EMAIL ↗
            </a>

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