import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import "./About.css";

const skillGroups = [
  ["FRONTEND", ["React", "JavaScript", "TypeScript", "HTML", "CSS"]],
  ["BACKEND", ["Node.js", "Python", "Java", "REST APIs"]],
  ["DATABASE", ["MySQL", "SQL"]],
  ["DATA", ["Python", "Pandas", "Excel", "Power BI"]],
  ["AI / ML", ["Python", "OpenCV", "Machine Learning", "TensorFlow"]],
  ["CLOUD / TOOLS", ["AWS", "Git", "GitHub", "Docker"]],
] as const;

const focusAreas = [
  ["01", "FULL STACK", "Frontend, backend, databases and APIs."],
  ["02", "DATA", "Data processing, analysis and business intelligence."],
  ["03", "AI / ML", "Machine learning, computer vision and AI applications."],
] as const;

const process = [
  ["01", "UNDERSTAND", "Understand the problem before choosing the technology."],
  ["02", "BUILD", "Turn the idea into a practical implementation."],
  ["03", "TEST", "Debug, validate and improve the solution."],
  ["04", "SHIP", "Make the final product usable and maintainable."],
] as const;

export default function About() {
  return <main className="about-page"><div className="about-container">
    <section className="about-hero"><span className="about-label">02 / ABOUT</span><h1>ABOUT ME</h1><div className="about-hero-statement">I BUILD<br />PRACTICAL<br /><span>SOFTWARE.</span></div><p>Full Stack Developer focused on building practical web, backend, data and AI solutions.</p></section>

    <Reveal><section className="about-intro"><span className="about-side-label"><b>01</b> WHO I AM</span><div><p className="intro-lead">I&apos;m Mohammed Fahad, a developer interested in building practical software across web development, backend systems, data and AI.</p><p>I enjoy turning ideas into usable applications and learning the technologies required to solve real problems.</p></div></section></Reveal>

    <Reveal><section className="about-section focus-section"><div className="section-heading"><span>02 / WHAT I BUILD</span><span>TECHNICAL FOCUS</span></div><div className="focus-grid">{focusAreas.map(([number, title, description]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p></article>)}</div></section></Reveal>

    <Reveal><section className="about-section skills-section"><div className="section-heading"><span>03 / SKILLS</span><span>TECHNICAL STACK</span></div><div className="skills-grid">{skillGroups.map(([category, items]) => <article className="skill-group" key={category}><h2>{category}</h2><div>{items.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div></section></Reveal>

    <Reveal><section className="about-constellation" aria-label="Technology constellation"><div className="constellation-node constellation-top">AWS</div><div className="constellation-node constellation-left">React</div><div className="constellation-core">FAHAD<span>.DEV</span><small>SYSTEM PROFILE</small></div><div className="constellation-node constellation-right">Python</div><div className="constellation-node constellation-bottom">AI / ML</div><i className="constellation-line line-v" /><i className="constellation-line line-h" /></section></Reveal>

    <Reveal><section className="about-section process-section"><div className="section-heading"><span>04 / APPROACH</span><span>HOW I WORK</span></div><div className="process-grid">{process.map(([number, title, description]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p></article>)}</div></section></Reveal>

    <Reveal><section className="philosophy"><span>05 / PHILOSOPHY</span><blockquote>&quot;Technology should solve a problem,<br /><em>not just demonstrate a technology.</em>&quot;</blockquote></section></Reveal>

    <Reveal><section className="about-section interests-section"><div className="section-heading"><span>06 / CURRENT INTERESTS</span><span>WHAT I&apos;M EXPLORING</span></div><div className="interest-list">{["AI / ML", "Cloud", "Full Stack Development", "Data Engineering", "Production-ready applications"].map((interest, index) => <span key={interest}><b>{String(index + 1).padStart(2, "0")}</b>{interest}</span>)}</div></section></Reveal>

    <Reveal><section className="about-section education-section"><div className="section-heading"><span>07 / EDUCATION</span><span>BACKGROUND</span></div><div className="education-row"><span>2022 — 2026</span><div><h3>B.E. Information Science &amp; Engineering</h3><p>Engineering Degree</p></div><strong>8.98 CGPA</strong></div><div className="education-row"><span>2019 — 2022</span><div><h3>Diploma in Engineering</h3><p>Acharya Patashala Polytechnic</p></div><strong>9.00 CGPA</strong></div></section></Reveal>

    <section className="about-bottom"><span>LET&apos;S BUILD SOMETHING USEFUL.</span><h2>LET&apos;S BUILD<br /><em>SOMETHING USEFUL.</em></h2><Link to="/contact" className="button-primary">GET IN TOUCH ↗</Link></section>
  </div></main>;
}
