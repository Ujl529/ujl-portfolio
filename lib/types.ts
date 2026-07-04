export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  techStack: string[];
  image: string;
  github?: string;
  live?: string;
  featured?: boolean;
  highlights?: string[];
  problem?: string;
  solution?: string;
  architecture?: string;
  businessImpact?: string;
  challenges?: string[];
  futureScope?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  details: string;
  type: "work" | "education" | "leadership";
}

export interface Skill {
  name: string;
  category: string;
  level?: number;
}

export interface Education {
  school: string;
  degree: string;
  field?: string;
  year: string;
  score?: string;
  location?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stars: number;
  forks: number;
  language: string;
  updated_at: string;
  topics: string[];
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  year?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}
