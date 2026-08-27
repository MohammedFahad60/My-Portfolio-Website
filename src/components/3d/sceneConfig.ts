export type TechnologyConfig = {
  name: string;
  description: string;
  radius: number;
  speed: number;
  angle: number;
  height: number;
  depth: number;
  phase: number;
};

export const technologies: TechnologyConfig[] = [
  { name: "AWS", description: "Cloud Infrastructure", radius: 2.35, speed: 0.12, angle: 0.2, height: 1.45, depth: -0.1, phase: 0.3 },
  { name: "React", description: "Frontend", radius: 2.15, speed: 0.1, angle: 1.65, height: 0.55, depth: 0.25, phase: 1.1 },
  { name: "TypeScript", description: "Application Development", radius: 2.25, speed: 0.08, angle: 2.85, height: 0.8, depth: -0.35, phase: 2.2 },
  { name: "Node.js", description: "Backend", radius: 2.3, speed: 0.09, angle: 4.05, height: -0.65, depth: 0.1, phase: 3.4 },
  { name: "Python", description: "Backend / AI", radius: 2.05, speed: 0.07, angle: 5.1, height: -1.2, depth: 0.3, phase: 4.2 },
  { name: "MySQL", description: "Database", radius: 2.4, speed: 0.055, angle: 5.95, height: -0.1, depth: -0.45, phase: 5.1 },
  { name: "Git", description: "Version Control", radius: 2.55, speed: 0.045, angle: 3.1, height: 1.35, depth: 0.35, phase: 5.8 },
  { name: "AI / ML", description: "Machine Learning", radius: 2.15, speed: 0.06, angle: 0.95, height: -1.65, depth: -0.2, phase: 6.5 },
];
