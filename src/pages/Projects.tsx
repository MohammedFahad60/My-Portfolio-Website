import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ProjectNavigation from "../components/ProjectNavigation";
import { featuredProjects, projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-container">
        <section className="projects-header">
          <span className="page-label">03 / SELECTED WORK</span>
          <h1>PROJECTS</h1>
          <p>Selected projects across full-stack development, data engineering and AI.</p>
        </section>
        <div className="projects-layout">
          <ProjectNavigation projects={featuredProjects} />
          <section className="projects-list">
            {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            <div className="additional-projects">
              <span className="page-label">04 / MORE WORK</span>
              {projects.slice(3).map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
          </section>
        </div>
        <section className="projects-cta">
          <span>HAVE A PROJECT IN MIND?</span>
          <h2>LET&apos;S BUILD<br /><span>SOMETHING USEFUL.</span></h2>
          <Link to="/contact" className="button-primary">GET IN TOUCH ↗</Link>
        </section>
      </div>
    </main>
  );
}
