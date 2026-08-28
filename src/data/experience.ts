export interface Experience {
  id: string;
  number: string;
  company: string;
  role: string;
  type?: string;
  startDate: string;
  endDate: string;
  location?: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: "edunet-ibm",
    number: "01",
    company: "Edunet Foundation · IBM SkillsBuild",
    role: "AI & MACHINE LEARNING INTERN",
    type: "INTERNSHIP",
    startDate: "JAN 2026",
    endDate: "FEB 2026",
    description: "Worked on data preprocessing, validation and machine-learning workflows while gaining practical experience with Python and TensorFlow.",
    technologies: ["Python", "TensorFlow", "Data Processing", "Machine Learning"],
    responsibilities: ["Processed and validated datasets containing 5,000+ records.", "Performed data preprocessing and quality checks using Python.", "Worked with TensorFlow for machine-learning experimentation.", "Analyzed model-related data and debugging issues."],
  },
  {
    id: "independent-projects",
    number: "02",
    company: "Independent Projects",
    role: "FULL STACK DEVELOPER",
    type: "PROJECT WORK",
    startDate: "2025",
    endDate: "2026",
    description: "Designed and developed multiple practical software projects across web development, backend systems, databases, AI and analytics.",
    technologies: ["React", "Node.js", "Java", "Python", "MySQL", "Git"],
    responsibilities: ["Built full-stack applications with frontend, backend and database layers.", "Designed REST APIs and integrated persistent data storage.", "Developed responsive web interfaces for desktop and mobile.", "Worked with Git and GitHub for source control and project management."],
  },
];

export const education = [
  { period: "2022 — 2026", title: "B.E. Information Science & Engineering", detail: "Engineering Degree", result: "8.98 CGPA" },
  { period: "2019 — 2022", title: "Diploma in Engineering", detail: "Acharya Patashala Polytechnic", result: "9.00 CGPA" },
];
