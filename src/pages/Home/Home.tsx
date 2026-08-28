import { Link } from "react-router-dom";
import "./Home.css";
import HeroScene from "../../components/3d/HeroScene.tsx";
import Reveal from "../../components/Reveal";
import TiltCard from "../../components/TiltCard";
import SectionHeading from "../../components/SectionHeading";

const projects = [
  {
    number: "01",
    title: "Festify",
    description:
      "Festival ticket booking platform with event management and database persistence.",
    stack: "Java · Swing · JDBC · MySQL",
  },
  {
    number: "02",
    title: "Brain Tumor Detection",
    description:
      "Machine-learning application for image processing and tumor classification.",
    stack: "Python · Flask · OpenCV · ML",
  },
  {
    number: "03",
    title: "Retail Data Engineering",
    description:
      "Data cleaning, KPI analysis and business intelligence dashboard workflow.",
    stack: "Python · Pandas · Excel · Power BI",
  },
];

export default function Home() {
  return (
    <main className="home-page">

      {/* HERO */}
      <section className="hero container">

        {/* 3D SCENE */}
        <HeroScene />

        <div className="hero-content">
          <div className="availability">
            <span className="availability-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="eyebrow">HELLO, I AM</p>

          <h1>
            Mohammed
            <br />
            <span>Fahad.</span>
          </h1>

          <p className="hero-description">
            Full Stack Developer building practical web, backend, data and AI
            solutions with modern technologies.
          </p>

          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              VIEW RESUME ↗
            </a>

            <Link to="/projects" className="button-secondary">
              VIEW PROJECTS
            </Link>
          </div>
        </div>

      </section>

      {/* SELECTED PROJECTS */}
      <section className="section container">

        <SectionHeading index="01" label="SELECTED WORK" action={<Link to="/projects">VIEW ALL ↗</Link>} />

        <div className="project-preview">
          {projects.map((project) => (
            <TiltCard className="project-preview-card" key={project.number}>
            <Link to="/projects">
              <div className="project-number">
                {project.number}
              </div>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="project-stack">
                {project.stack}
              </div>
            </Link>
            </TiltCard>
          ))}
        </div>

      </section>

      {/* PROFILE */}
      <section className="section container">

        <SectionHeading index="02" label="PROFILE" action={<Link to="/about">ABOUT ME ↗</Link>} />

        <Reveal className="profile-grid">

          <div>
            <span className="profile-label">
              DEVELOPER
            </span>

            <h3>Full-stack builder</h3>

            <p>
              Frontend, backend, databases and REST APIs.
            </p>
          </div>

          <div>
            <span className="profile-label">
              TECHNOLOGY
            </span>

            <h3>Python & Web</h3>

            <p>
              Python, JavaScript, React, Node.js and modern backend tools.
            </p>
          </div>

          <div>
            <span className="profile-label">
              INTEREST
            </span>

            <h3>AI & Data</h3>

            <p>
              Machine learning, computer vision and data-driven solutions.
            </p>
          </div>

        </Reveal>

      </section>

      {/* CTA */}
      <section className="cta container">

        <span>HAVE AN OPPORTUNITY?</span>

        <h2>
          Let's build
          <br />
          <span>something useful.</span>
        </h2>

        <Link
          to="/contact"
          className="button-primary"
        >
          GET IN TOUCH ↗
        </Link>

      </section>

    </main>
  );
}