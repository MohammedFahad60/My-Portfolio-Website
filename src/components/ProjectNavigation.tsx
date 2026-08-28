import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

export default function ProjectNavigation({
  projects,
  active,
}: {
  projects: Project[];
  active?: string;
}) {
  return (
    <nav className="project-navigation" aria-label="Project navigation">
      {projects.map((project) => (
        <Link
          key={project.slug}
          to={`/projects/${project.slug}`}
          className={active === project.slug ? "is-active" : ""}
        >
          <span>{project.number}</span>
          {project.title.replace("Retail Data Engineering", "Retail Data")}
        </Link>
      ))}
    </nav>
  );
}
