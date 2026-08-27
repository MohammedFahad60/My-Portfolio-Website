import "./About.css";

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "Flask",
  "MySQL",
  "REST APIs",
  "Git",
  "GitHub",
  "AWS",
  "Docker",
  "OpenCV",
  "TensorFlow",
  "Power BI",
];

export default function About() {
  return (
    <main className="about-page">
      <div className="about-container">

        <section className="about-hero">
          <div className="about-label">02 / ABOUT</div>

          <h1>
            Building with
            <br />
            <span>purpose.</span>
          </h1>

          <p>
            I am Mohammed Fahad, an Information Science & Engineering
            graduate focused on building practical software using modern
            web, backend, data and AI technologies.
          </p>
        </section>

        <section className="about-profile">
          <div className="about-side-label">
            <span>01</span>
            PROFILE
          </div>

          <div className="about-content">
            <h2>
              I like turning ideas into
              <br />
              <span>working software.</span>
            </h2>

            <p>
              My approach to development is simple: understand the problem,
              build a practical solution, test it properly and keep improving
              it.
            </p>

            <p>
              I have worked across Java, Python and modern web technologies,
              building applications involving databases, APIs, machine
              learning, computer vision and business intelligence.
            </p>

            <p>
              I am particularly interested in full-stack development,
              backend engineering, cloud technologies and AI-powered
              applications.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-heading">
            <span>02 / TECHNOLOGY</span>
            <span>MY TOOLBOX</span>
          </div>

          <div className="skills-area">
            <div className="skills-title">
              My
              <br />
              <span>stack.</span>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill" key={skill}>
                  <small>
                    {String(index + 1).padStart(2, "0")}
                  </small>

                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="section-heading">
            <span>03 / EDUCATION</span>
            <span>BACKGROUND</span>
          </div>

          <div className="education-row">
            <span>2022 — 2026</span>

            <div>
              <h3>B.E. Information Science & Engineering</h3>
              <p>Engineering Degree</p>
            </div>

            <strong>8.98 CGPA</strong>
          </div>

          <div className="education-row">
            <span>2019 — 2022</span>

            <div>
              <h3>Diploma in Engineering</h3>
              <p>Acharya Patashala Polytechnic</p>
            </div>

            <strong>9.00 CGPA</strong>
          </div>
        </section>

        <section className="about-section">
          <div className="section-heading">
            <span>04 / FOCUS</span>
            <span>WHAT I ENJOY</span>
          </div>

          <div className="focus-grid">
            <div>
              <span>01</span>
              <h3>Full Stack</h3>
              <p>
                Building complete applications from frontend interfaces to
                backend APIs and databases.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>AI & Data</h3>
              <p>
                Exploring machine learning, computer vision and
                data-driven applications.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Cloud</h3>
              <p>
                Learning and building with cloud infrastructure and
                production-ready deployment.
              </p>
            </div>
          </div>
        </section>

        <section className="about-bottom">
          <div>LET'S BUILD SOMETHING USEFUL.</div>

          <h2>
            More than
            <br />
            <span>just code.</span>
          </h2>
        </section>

      </div>
    </main>
  );
}