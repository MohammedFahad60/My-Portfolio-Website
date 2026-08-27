import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const links = [
  { name: "HOME", path :"/"},
  { name: "ABOUT", path: "/about" },
  { name: "PROJECTS", path: "/projects" },
  { name: "EXPERIENCE", path: "/experience" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">

        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          FAHAD<span>.DEV</span>
        </Link>

        <nav className="navbar-links">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={
                location.pathname === link.path ? "nav-active" : ""
              }
            >
              {link.name}
            </Link>
          ))}

          <Link to="/contact" className="nav-hire">
            HIRE ME <span>↗</span>
          </Link>
        </nav>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

      </div>

      <div className={`mobile-navigation ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={closeMenu}
            className={
              location.pathname === link.path ? "nav-active" : ""
            }
          >
            {link.name}
          </Link>
        ))}

        <Link
          to="/contact"
          className="mobile-hire"
          onClick={closeMenu}
        >
          HIRE ME ↗
        </Link>
      </div>
    </header>
  );
}