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
