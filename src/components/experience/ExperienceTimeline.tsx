import type { Experience } from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return <section className="timeline-section"><div className="timeline-line" />{experiences.map((experience, index) => <ExperienceCard key={experience.id} experience={experience} side={index % 2 === 0 ? "left" : "right"} />)}</section>;
}
