import { Link } from "react-router-dom";
import "./Certificates.css";

const certifications = [
  {
    number: "01",
    title: "Automation AI Accelerator: From Co-pilot to Autonomous Agent",
    issuer: "Datacom / Forage",
    date: "2026",
    type: "AI / AUTOMATION",
    credential: "q7Ksvf8A5AdhfXtZi",
    link: "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/Nw3MzxF2wjmki7Qor_gCW7Xki5Y3vNpBmnn_fdtq9oKzshwyEuBrD_1786724982304_completion_certificate.pdf",
    description:
      "Job simulation focused on AI-powered debugging, process flow design and spec-driven development.",
    skills: [
      "AI",
      "Debugging",
      "Refactoring",
      "Process Design",
      "Spec-Driven Development",
    ],
  },

  {
    number: "02",
    title: "Software Engineering Job Simulation",
    issuer: "HPE / Forage",
    date: "2026",
    type: "SOFTWARE ENGINEERING",
    credential: "6a7f273eba854243f4ff588d",
    link: "https://www.theforage.com/completion-certificates/fgHAi6dLhpRsGKyyN/da2T3WZCbMAJD7bNB_fgHAi6dLhpRsGKyyN_fdtq9oKzshwyEuBrD_1786722574766_completion_certificate.pdf",
    description:
      "Job simulation covering RESTful web service design, implementation, data upload and unit testing.",
    skills: [
      "REST API",
      "Backend Development",
      "Unit Testing",
      "Web Services",
    ],
  },

  {
    number: "03",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte / Forage",
    date: "2026",
    type: "DATA / ANALYTICS",
    credential: "mcsySMpnwEbqtcahK",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_fdtq9oKzshwyEuBrD_1782387178079_completion_certificate.pdf",
    description:
      "Job simulation covering practical data analysis and forensic technology tasks.",
    skills: [
      "Data Analysis",
      "Forensic Technology",
      "Data Interpretation",
    ],
  },

  {
    number: "04",
    title: "Software Development Job Simulation",
    issuer: "Forage",
    date: "2025",
    type: "SOFTWARE DEVELOPMENT",
    credential: "CjphfAbxbmS3MpqcK",
    link: "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/L3NcyCoAjLno9d3T9_gCW7Xki5Y3vNpBmnn_fdtq9oKzshwyEuBrD_1766664251579_completion_certificate.pdf",
    description:
      "Software development job simulation focused on software review, identifying root causes and fixing bugs.",
    skills: [
      "Software Development",
      "Code Review",
      "Debugging",
      "Problem Solving",
    ],
  },

  {
    number: "05",
    title: "Intro to Software Engineering Job Simulation",
    issuer: "Forage",
    date: "2025",
    type: "SOFTWARE ENGINEERING",
    credential: "AigfhnhdhZxHRWA5n",
    link: "https://www.theforage.com/completion-certificates/dYJgjjkektvHXJyoR/kinDTvjiZRcYbwqLo_dYJgjjkektvHXJyoR_fdtq9oKzshwyEuBrD_1759312843819_completion_certificate.pdf",
    description:
      "Introductory software engineering simulation covering project initialization, frontend design, network services and presenting technical work.",
    skills: [
      "Frontend Development",
      "Networking",
      "Software Engineering",
      "Web Development",
    ],
  },
];

export default function Certification() {
  return (
    <main className="certification-page">
      <div className="certification-container">

        {/* Header */}
        <section className="certification-header">
          <span className="page-label">06 / CERTIFICATIONS</span>

          <h1>
            CERTIFI
            <br />
            <em>CATIONS.</em>
          </h1>

          <p>
            Credentials, continuous learning and technical validation.
          </p>

          <div className="certification-signal" aria-hidden="true">
            <span />
            <span />
            <span />
            <i />
          </div>
        </section>

        {/* Stats */}
        <section className="certification-stats">
          <div>
            <span>01</span>
            <strong>
              {certifications.length.toString().padStart(2, "0")}
            </strong>
            <p>CERTIFICATIONS</p>
          </div>

          <div>
            <span>02</span>
            <strong>∞</strong>
            <p>LEARNING MINDSET</p>
          </div>

          <div>
            <span>03</span>
            <strong>+</strong>
            <p>SKILLS VALIDATED</p>
          </div>
        </section>

        {/* Certifications */}
        <section className="certification-list">
          <div className="certification-list-heading">
            <span>VERIFIED CREDENTIALS</span>
            <span>YEAR / TYPE</span>
          </div>

          {certifications.map((certification) => (
            <article
              className="certification-card"
              key={certification.number}
            >
              <div className="certification-card-number">
                {certification.number}
              </div>

              <div className="certification-card-main">
                <div className="certification-card-top">
                  <span>{certification.type}</span>
                  <span>{certification.date}</span>
                </div>

                <h2>{certification.title}</h2>

                <h3>{certification.issuer}</h3>

                <p className="certification-description">
                  {certification.description}
                </p>

                <div className="certification-meta">
                  <div>
                    <span>CREDENTIAL ID</span>
                    <strong>{certification.credential}</strong>
                  </div>

                  <div>
                    <span>TECHNOLOGIES</span>

                    <div className="certification-skills">
                      {certification.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Link */}
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-arrow"
                aria-label={`View ${certification.title} certificate`}
              >
                ↗
              </a>
            </article>
          ))}
        </section>

        {/* Learning Section */}
        <section className="certification-learning">
          <span className="learning-label">
            07 / CONTINUOUS GROWTH
          </span>

          <div className="learning-heading">
            <h2>
              LEARN.
              <br />
              <em>BUILD.</em>
              <br />
              REPEAT.
            </h2>
          </div>

          <div className="learning-copy">
            <p>
              Certifications are more than badges. They represent structured
              learning, consistency and the ability to turn new concepts into
              practical technical skills.
            </p>

            <p>
              My focus is on continuously expanding my knowledge across
              development, cloud technologies, software engineering and
              emerging tools.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="certification-cta">
          <span>WANT TO SEE WHAT I CAN BUILD?</span>

          <h2>
            EXPLORE
            <br />
            <em>MY WORK.</em>
          </h2>

          <Link to="/projects" className="button-primary">
            VIEW PROJECTS ↗
          </Link>
        </section>

      </div>
    </main>
  );
}
