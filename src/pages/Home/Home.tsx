import { Link } from "react-router-dom";
import "./Home.css";
import HeroScene from "../../components/3d/HeroScene.tsx";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";


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
              href="https://drive.google.com/file/d/1D_-ZIeuMdMd0ZHChxO5mQAcvGW5Mvs0Z/view?usp=sharing"
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

      {/* PROFILE */}
      <section className="section container">

        <SectionHeading index="01" label="PROFILE" action={<Link to="/about">ABOUT ME ↗</Link>} />

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