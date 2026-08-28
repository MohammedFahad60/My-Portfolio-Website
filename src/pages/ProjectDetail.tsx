import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectNavigation from "../components/ProjectNavigation";
import ProjectTechStack from "../components/ProjectTechStack";
import ProjectVisual from "../components/ProjectVisual";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project)
    return (
      <main className="project-not-found">
        <span>404</span>
        <h1>PROJECT NOT FOUND</h1>
        <Link to="/projects" className="button-primary">
          BACK TO PROJECTS ↗
        </Link>
      </main>
    );
  return (
    <main className="project-detail-page">
      <div className="project-detail-container">
        <ProjectNavigation
          projects={projects.slice(0, 3)}
          active={project.slug}
        />
        <header className="project-detail-header">
          <span className="page-label">{project.number} / CASE STUDY</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <ProjectTechStack technologies={project.technologies} />
        </header>
        <ProjectVisual
          title={project.title}
          slug={project.slug}
          image={project.image}
          live={project.live}
        />
        <section className="project-detail-sections">
          {project.sections.map((section) => (
            <article key={section.label}>
              <span>{section.label}</span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </article>
          ))}
        </section>
        <div className="project-detail-links">
          <span>07 / LINKS</span>
          <div>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                GITHUB ↗
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer">
                LIVE DEMO ↗
              </a>
            )}
            {!project.github && !project.live && (
              <small>PROJECT LINKS TO BE ADDED</small>
            )}
          </div>
        </div>
        <Link to="/projects" className="back-projects">
          ← BACK TO SELECTED WORK
        </Link>
      </div>
    </main>
  );
}
