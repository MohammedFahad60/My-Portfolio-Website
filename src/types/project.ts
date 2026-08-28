export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  problem: string;
  solution: string;
  technologies: string[];
  status: string;
  sections: { label: string; title: string; body: string }[];
  github?: string;
  live?: string;
}
