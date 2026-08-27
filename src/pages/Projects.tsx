import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Festify",
    category: "FULL STACK WEB APPLICATION",
    description:
      "A production-focused festival and event ticket booking platform designed to handle event discovery, ticket selection, bookings and user management.",
    problem:
      "Traditional event discovery and ticket booking can become fragmented across different platforms.",
    solution:
      "A centralized platform where users can discover events, view details, select tickets and manage their bookings.",
    stack: ["React", "Node.js", "Express", "MySQL", "REST API"],
    status: "IN DEVELOPMENT",
  },

  {
    number: "02",
    title: "Store Management Platform",
    category: "FULL STACK APPLICATION",
    description:
      "A web platform designed to help customers discover, evaluate and interact with local businesses through structured feedback and business information.",
    problem:
      "Simple star ratings provide limited information and do not help businesses understand what customers actually experience.",
    solution:
      "A structured platform for collecting meaningful customer feedback while giving businesses actionable insights.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    status: "IN DEVELOPMENT",
  },

  {
    number: "03",
    title: "Brain Tumor Detection",
    category: "AI / COMPUTER VISION",
    description:
      "A machine-learning application that processes medical images and classifies them using computer vision techniques.",
    problem:
      "Manually examining large numbers of medical images can be time-consuming.",
    solution:
      "An automated image-processing pipeline that assists classification using trained machine-learning models.",
    stack: ["Python", "TensorFlow", "OpenCV", "Flask"],
    status: "COMPLETED",
  },

  {
    number: "04",
    title: "Retail Data Analytics",
    category: "DATA ANALYTICS",
    description:
      "A data analytics workflow focused on cleaning retail datasets, extracting business KPIs and presenting insights through dashboards.",
    problem:
      "Raw business data often contains inconsistencies and is difficult to interpret directly.",
    solution:
      "A structured pipeline for preprocessing data, calculating KPIs and communicating trends visually.",
    stack: ["Python", "Pandas", "Excel", "Power BI"],
    status: "COMPLETED",
  },

  {
    number: "05",
    title: "Web Development Projects",
    category: "WEB DEVELOPMENT",
    description:
      "A collection of responsive web applications focused on clean interfaces, reusable components and practical user experiences.",
    problem:
      "Many basic web projects focus primarily on appearance without considering maintainability and usability.",
    solution:
      "Building responsive interfaces with reusable architecture and real-world functionality.",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    status: "COMPLETED",
  },
];

export default function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-container">

        {/* HEADER */}

        <section className="projects-header">

          <div className="page-label">
            03 / PROJECTS
          </div>

          <h1>
            Things I've
            <br />
            <span>built.</span>
          </h1>

          <p>
            A selection of projects exploring full-stack development,
            artificial intelligence, data analytics and practical software
            engineering.
          </p>

        </section>


        {/* PROJECTS */}

        <section className="projects-list">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-status">
                  {project.status}
                </span>

              </div>


              <div className="project-main">

                <div className="project-title-area">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h2>{project.title}</h2>

                </div>


                <div className="project-description">

                  <p>
                    {project.description}
                  </p>

                  <div className="project-links">

                    <a href="#" className="project-link">
                      GITHUB ↗
                    </a>

                    <a href="#" className="project-link">
                      LIVE DEMO ↗
                    </a>

                  </div>

                </div>

              </div>


              <div className="project-details">

                <div>

                  <span>THE PROBLEM</span>

                  <p>
                    {project.problem}
                  </p>

                </div>


                <div>

                  <span>THE SOLUTION</span>

                  <p>
                    {project.solution}
                  </p>

                </div>

              </div>


              <div className="project-tech">

                {project.stack.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

            </article>

          ))}

        </section>


        {/* CTA */}

        <section className="projects-cta">

          <span>
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's make it
            <br />
            <span>real.</span>
          </h2>

          <a
            href="/contact"
            className="button-primary"
          >
            GET IN TOUCH ↗
          </a>

        </section>

      </div>
    </main>
  );
}