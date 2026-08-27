import "./Experience.css";

const experiences = [
  {
    number: "01",
    period: "JAN 2026 — FEB 2026",
    role: "AI & MACHINE LEARNING INTERN",
    company: "Edunet Foundation · IBM SkillsBuild",
    description:
      "Worked on data preprocessing, validation and machine-learning workflows while gaining practical experience with Python and TensorFlow.",
    achievements: [
      "Processed and validated datasets containing 5,000+ records.",
      "Performed data preprocessing and quality checks using Python.",
      "Worked with TensorFlow for machine-learning experimentation.",
      "Analyzed model-related data and debugging issues.",
    ],
    stack: ["Python", "TensorFlow", "Data Processing", "Machine Learning"],
  },

  {
    number: "02",
    period: "2025 — 2026",
    role: "FULL STACK DEVELOPER",
    company: "Independent Projects",
    description:
      "Designed and developed multiple practical software projects across web development, backend systems, databases, AI and analytics.",
    achievements: [
      "Built full-stack applications with frontend, backend and database layers.",
      "Designed REST APIs and integrated persistent data storage.",
      "Developed responsive web interfaces for desktop and mobile.",
      "Worked with Git and GitHub for source control and project management.",
    ],
    stack: ["React", "Node.js", "Java", "Python", "MySQL", "Git"],
  },
];

const capabilities = [
  {
    title: "FRONTEND",
    description:
      "Responsive interfaces, component architecture and modern web experiences.",
  },
  {
    title: "BACKEND",
    description:
      "REST APIs, server-side logic, authentication and database integration.",
  },
  {
    title: "DATA & AI",
    description:
      "Data preprocessing, machine learning, computer vision and analytics.",
  },
  {
    title: "CLOUD",
    description:
      "Deployment fundamentals, AWS services and production-oriented workflows.",
  },
];

export default function Experience() {
  return (
    <main className="experience-page">
      <div className="experience-container">

        {/* HEADER */}

        <section className="experience-header">
          <div className="page-label">04 / EXPERIENCE</div>

          <h1>
            How I've
            <br />
            <span>grown.</span>
          </h1>

          <p>
            A snapshot of my professional experience and the technical
            capabilities I've developed through internships and hands-on
            projects.
          </p>
        </section>


        {/* EXPERIENCE */}

        <section className="experience-list">

          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={experience.number}
            >

              <div className="experience-top">

                <span className="experience-number">
                  {experience.number}
                </span>

                <span className="experience-period">
                  {experience.period}
                </span>

              </div>


              <div className="experience-main">

                <div className="experience-title">

                  <span>{experience.role}</span>

                  <h2>{experience.company}</h2>

                </div>


                <div className="experience-description">

                  <p>
                    {experience.description}
                  </p>

                </div>

              </div>


              <div className="experience-details">

                <div>

                  <span>KEY CONTRIBUTIONS</span>

                  <ul>
                    {experience.achievements.map((achievement) => (
                      <li key={achievement}>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                </div>


                <div>

                  <span>TECHNOLOGIES</span>

                  <div className="experience-stack">

                    {experience.stack.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </article>
          ))}

        </section>


        {/* CAPABILITIES */}

        <section className="capabilities-section">

          <div className="section-heading">
            <span>02 / CAPABILITIES</span>
            <span>WHAT I CAN BUILD</span>
          </div>

          <div className="capabilities-grid">

            {capabilities.map((item, index) => (
              <div
                className="capability"
                key={item.title}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>
            ))}

          </div>

        </section>


        {/* CURRENT FOCUS */}

        <section className="current-focus">

          <span>03 / CURRENT FOCUS</span>

          <h2>
            Becoming a better
            <br />
            <span>engineer.</span>
          </h2>

          <p>
            Currently focused on improving my system design, backend
            architecture, cloud deployment and production-level development
            skills.
          </p>

        </section>

      </div>
    </main>
  );
}