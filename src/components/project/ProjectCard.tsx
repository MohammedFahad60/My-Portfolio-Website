import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import Reveal from "../Reveal";
import ProjectTechStack from "./ProjectTechStack";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal className="project-case-study">
      <article className="project-card">
        <div className="project-card-top">
          <span className="project-number">{project.number}</span>
          <span className="project-status">{project.status}</span>
        </div>

        <div className="project-card-grid">
          <div className="project-card-info">
            <span className="project-category">{project.category}</span>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <ProjectTechStack technologies={project.technologies} />

            <div className="project-card-links">
              <Link
                className="project-link project-case-link"
                to={`/projects/${project.slug}`}
              >
                VIEW CASE STUDY <b>↗</b>
              </Link>

              {project.live && (
                <a
                  className="project-link project-live-link"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LIVE DEMO <b>↗</b>
                </a>
              )}
            </div>
          </div>

          <ProjectVisual
            title={project.title}
            slug={project.slug}
            image={project.image}
            live={project.live}
          />
        </div>
      </article>
    </Reveal>
  );
}