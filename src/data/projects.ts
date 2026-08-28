import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "festify",
    number: "01",
    title: "Festify",
    category: "FULL STACK WEB APPLICATION",
    description:
      "Festival ticket booking platform with event management and database persistence.",
    problem:
      "Traditional event discovery and ticket booking can become fragmented across different platforms.",
    solution:
      "A centralized platform where users can discover events, view details, select tickets and manage their bookings.",
    technologies: ["Java", "Swing", "JDBC", "MySQL"],
    status: "IN DEVELOPMENT",
    sections: [
      {
        label: "01 / OVERVIEW",
        title: "A structured booking experience.",
        body: "Festify explores a festival and event ticket booking workflow with event management and persistent database storage.",
      },
      {
        label: "02 / PROBLEM",
        title: "From discovery to booking.",
        body: "Traditional event discovery and ticket booking can become fragmented across different platforms.",
      },
      {
        label: "03 / SOLUTION",
        title: "One place for the workflow.",
        body: "The application brings event discovery, details, ticket selection and booking management into one focused experience.",
      },
      {
        label: "04 / FEATURES",
        title: "Practical foundations.",
        body: "Event management, ticket selection, booking flow and database persistence are the core areas represented in this project.",
      },
      {
        label: "05 / TECHNOLOGY",
        title: "Desktop application stack.",
        body: "Built with Java and Swing, using JDBC to connect the application workflow to MySQL persistence.",
      },
      {
        label: "06 / ARCHITECTURE",
        title: "Interface, logic, persistence.",
        body: "The project is organized around a Java desktop interface, application logic and a relational database layer.",
      },
    ],
    live: ""
  },

    {
    slug: "care-ai",
    number: "04",
    title: "Care AI",
    category: "AI / HEALTHCARE PLATFORM",
    description:
      "AI-powered healthcare assistant combining machine learning, computer vision and generative AI for intelligent health and wellness workflows.",

    problem:
      "Healthcare information and wellness tools are often fragmented across symptom analysis, medical image interpretation, diet planning, medicine safety and local healthcare discovery.",

    solution:
      "Care AI brings multiple AI-assisted healthcare workflows into one platform, combining a local machine-learning model with Gemini, computer vision and practical wellness tools.",

    technologies: [
      "Python",
      "Flask",
      "Machine Learning",
      "Gemini AI",
      "OpenCV",
      "SQLite",
    ],

    status: "COMPLETED",

    github: "https://github.com/MohammedFahad60/Care-AI",

    live: "https://care-ai-szir.onrender.com/",

    sections: [
      {
        label: "01 / OVERVIEW",
        title: "AI for a broader healthcare workflow.",
        body:
          "Care AI is a digital health and wellness platform that combines machine learning, generative AI and computer vision with practical healthcare utilities.",
      },

      {
        label: "02 / AI ENGINE",
        title: "Local ML meets generative AI.",
        body:
          "The platform combines a custom machine-learning model with Google's Gemini to support symptom analysis and provide contextual health guidance.",
      },

      {
        label: "03 / MEDICAL VISION",
        title: "Understanding visual health data.",
        body:
          "The computer-vision workflow accepts medical-related images such as skin images, X-rays, lab reports and medicine labels for AI-assisted analysis.",
      },

      {
        label: "04 / HEALTH TOOLS",
        title: "More than a symptom checker.",
        body:
          "The platform includes a smart diet planner, drug interaction checker, nearby healthcare locator and vitals analysis workflow.",
      },

      {
        label: "05 / PLATFORM",
        title: "Designed around accessibility.",
        body:
          "Care AI includes multilingual interaction, voice input and output, and downloadable PDF reports to make the platform more accessible and practical.",
      },

      {
        label: "06 / TECHNOLOGY",
        title: "A Python-powered AI stack.",
        body:
          "Python and Flask provide the application foundation, while machine learning, Gemini, OpenCV and database technologies support the intelligence and persistence layers.",
      },
    ],
  },

  {
    slug: "brain-tumor-detection",
    number: "02",
    title: "Brain Tumor Detection",
    category: "AI / COMPUTER VISION",
    description:
      "Machine-learning application for image processing and tumor classification.",
    problem:
      "Manually examining large numbers of medical images can be time-consuming.",
    solution:
      "An automated image-processing pipeline that assists classification using trained machine-learning models.",
    technologies: ["Python", "Flask", "OpenCV", "Machine Learning"],
    status: "COMPLETED",
    sections: [
      {
        label: "01 / OVERVIEW",
        title: "Image processing meets inference.",
        body: "This project explores a machine-learning workflow for processing medical images and classifying them with computer vision techniques.",
      },
      {
        label: "02 / PROBLEM",
        title: "Making image review more structured.",
        body: "Manually examining large numbers of medical images can be time-consuming.",
      },
      {
        label: "03 / SOLUTION",
        title: "A focused classification pipeline.",
        body: "The application connects image processing, a trained model workflow and a Flask backend for classification support.",
      },
      {
        label: "04 / IMAGE PROCESSING",
        title: "Preparing visual input.",
        body: "OpenCV is used within the image-processing workflow before the input is passed through the classification process.",
      },
      {
        label: "05 / MODEL",
        title: "Experimenting with machine learning.",
        body: "The project uses machine-learning techniques for image classification without asserting unverified performance metrics.",
      },
      {
        label: "06 / TECHNOLOGY",
        title: "Python-powered tooling.",
        body: "Python, Flask, OpenCV and machine-learning tools form the working stack.",
      },
    ],
    live: ""
  },
  {
    slug: "retail-data-engineering",
    number: "03",
    title: "Retail Data Engineering",
    category: "DATA ANALYTICS",
    description:
      "Data cleaning, KPI analysis and business intelligence dashboard workflow.",
    problem:
      "Raw business data often contains inconsistencies and is difficult to interpret directly.",
    solution:
      "A structured pipeline for preprocessing data, calculating KPIs and communicating trends visually.",
    technologies: ["Python", "Pandas", "Excel", "Power BI"],
    status: "COMPLETED",
    sections: [
      {
        label: "01 / OVERVIEW",
        title: "Turning raw data into direction.",
        body: "Retail Data Engineering is a practical workflow for cleaning datasets, extracting KPIs and presenting insights through dashboards.",
      },
      {
        label: "02 / DATA PROCESSING",
        title: "A repeatable data workflow.",
        body: "The project focuses on preprocessing retail data before analysis and visualization.",
      },
      {
        label: "03 / CLEANING",
        title: "Making source data usable.",
        body: "Python and Pandas are used to organize and clean datasets with a focus on consistent downstream analysis.",
      },
      {
        label: "04 / KPI ANALYSIS",
        title: "Finding useful signals.",
        body: "The workflow calculates business KPIs to make trends easier to inspect and communicate.",
      },
      {
        label: "05 / DASHBOARD",
        title: "Insights people can scan.",
        body: "Power BI and Excel support the presentation of cleaned data and KPI analysis in a business dashboard workflow.",
      },
      {
        label: "06 / TECHNOLOGY",
        title: "A practical analytics stack.",
        body: "Python, Pandas, Excel and Power BI combine data preparation with visual reporting.",
      },
    ],
    github: "https://github.com/MohammedFahad60/Retail-Sales-Data-Engineering-Project",
    live: "https://retail-sales-data-engineering.vercel.app/"
  },
  {
    slug: "store-management-platform",
    number: "04",
    title: "Store Management Platform",
    category: "FULL STACK APPLICATION",
    description:
      "A web platform for structured customer feedback and business information.",
    problem:
      "Simple star ratings provide limited information about what customers actually experience.",
    solution:
      "A structured platform for collecting meaningful customer feedback while giving businesses actionable insights.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    status: "IN DEVELOPMENT",
    sections: [],
  },
  {
    slug: "web-development-projects",
    number: "05",
    title: "Web Development Projects",
    category: "WEB DEVELOPMENT",
    description:
      "Responsive web applications focused on clean interfaces, reusable components and practical user experiences.",
    problem:
      "Many basic web projects focus primarily on appearance without considering maintainability and usability.",
    solution:
      "Building responsive interfaces with reusable architecture and real-world functionality.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    status: "COMPLETED",
    sections: [],
  },
];

export const featuredProjects = projects.slice(0, 3);
