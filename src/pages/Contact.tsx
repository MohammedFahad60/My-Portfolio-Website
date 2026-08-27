import "./Contact.css";

const contactLinks = [
  {
    label: "EMAIL",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  {
    label: "GITHUB",
    value: "github.com/yourusername",
    href: "#",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/yourusername",
    href: "#",
  },
];

export default function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-container">

        {/* HEADER */}

        <section className="contact-header">

          <div className="page-label">
            05 / CONTACT
          </div>

          <h1>
            Let's build
            <br />
            <span>together.</span>
          </h1>

          <p>
            Have an opportunity, project or idea you'd like to discuss?
            I'd be happy to hear from you.
          </p>

        </section>


        {/* CONTACT GRID */}

        <section className="contact-grid">

          <div className="contact-info">

            <span className="contact-label">
              GET IN TOUCH
            </span>

            <h2>
              Start a
              <br />
              conversation.
            </h2>

            <p>
              Whether you're looking for a developer, have a project in mind,
              or simply want to connect, feel free to reach out.
            </p>


            <div className="contact-links">

              {contactLinks.map((link) => (

                <a
                  key={link.label}
                  href={link.href}
                  className="contact-link"
                >

                  <span>
                    {link.label}
                  </span>

                  <strong>
                    {link.value}
                  </strong>

                  <b>↗</b>

                </a>

              ))}

            </div>

          </div>


          {/* FORM */}

          <form
            className="contact-form"
            onSubmit={(event) => event.preventDefault()}
          >

            <div className="form-row">

              <label>
                YOUR NAME
              </label>

              <input
                type="text"
                placeholder="John Doe"
              />

            </div>


            <div className="form-row">

              <label>
                EMAIL ADDRESS
              </label>

              <input
                type="email"
                placeholder="john@example.com"
              />

            </div>


            <div className="form-row">

              <label>
                SUBJECT
              </label>

              <input
                type="text"
                placeholder="Let's work together"
              />

            </div>


            <div className="form-row">

              <label>
                MESSAGE
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
              />

            </div>


            <button
              type="submit"
              className="contact-submit"
            >
              SEND MESSAGE
              <span>↗</span>
            </button>

          </form>

        </section>


        {/* AVAILABILITY */}

        <section className="contact-bottom">

          <div className="contact-availability">

            <span className="availability-dot" />

            <div>
              <strong>
                CURRENTLY AVAILABLE
              </strong>

              <p>
                Open to full-time opportunities, internships and interesting
                software projects.
              </p>
            </div>

          </div>


          <div className="contact-footer-text">

            <span>
              FAHAD.DEV
            </span>

            <span>
              INDIA · 2026
            </span>

          </div>

        </section>

      </div>
    </main>
  );
}