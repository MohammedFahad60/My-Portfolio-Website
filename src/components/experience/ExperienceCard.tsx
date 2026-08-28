import { useState } from "react";
import type { Experience } from "../../types/experience";
import Reveal from "../Reveal";
import TimelineNode from "./TimelineNode";

export default function ExperienceCard({ experience, side }: { experience: Experience; side: "left" | "right" }) {
  const [expanded, setExpanded] = useState(false);
  return <Reveal className={`timeline-item timeline-${side}`}><TimelineNode /><article className="experience-card"><div className="experience-card-top"><span className="experience-number">{experience.number}</span><span className="experience-period">{experience.startDate} — {experience.endDate}</span></div><span className="experience-type">{experience.type}</span><h2>{experience.role}</h2><h3>{experience.company}</h3><p className="experience-description">{experience.description}</p><div className="experience-card-meta"><span>TECHNOLOGIES</span><div className="experience-stack">{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div><button className="responsibilities-toggle" type="button" aria-expanded={expanded} onClick={() => setExpanded((value) => !value)}>KEY RESPONSIBILITIES <b>{expanded ? "−" : "+"}</b></button><div className={`responsibilities ${expanded ? "is-open" : ""}`}><ul>{experience.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul></div></article></Reveal>;
}
