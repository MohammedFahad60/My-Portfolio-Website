export default function ProjectTechStack({ technologies }: { technologies: string[] }) {
  return <div className="project-tech">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>;
}
