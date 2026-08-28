import { Link } from "react-router-dom";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";
import EducationSection from "../components/experience/EducationSection";
import JourneySection from "../components/experience/JourneySection";
import { experiences } from "../data/experience";
import "./Experience.css";

export default function Experience() {
  return <main className="experience-page"><div className="experience-container">
    <section className="experience-header"><span className="page-label">05 / EXPERIENCE</span><h1>EXPERIENCE</h1><p>Experience, internships and technical growth.</p><div className="experience-signal" aria-hidden="true"><i /><i /><i /><span /></div></section>
    <ExperienceTimeline experiences={experiences} />
    <EducationSection />
    <JourneySection />
    <section className="experience-cta"><span>LOOKING FOR A DEVELOPER?</span><h2>LET&apos;S BUILD<br /><em>SOMETHING USEFUL.</em></h2><Link to="/contact" className="button-primary">GET IN TOUCH ↗</Link></section>
  </div></main>;
}
