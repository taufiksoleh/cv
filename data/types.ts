/**
 * TypeScript type definitions for CV/Resume data
 * This file contains all type definitions used in cv-data.ts
 */

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  description: string;
  professionalSummary: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  projects?: Project[];
}

export interface Project {
  name: string;
  description: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Skills {
  languages: Skill[];
  mobile: Skill[];
  backend: Skill[];
  architecture: Skill[];
  tools: Skill[];
  database: Skill[];
  other: Skill[];
}

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter?: string;
  email: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  keywords: string[];
}
