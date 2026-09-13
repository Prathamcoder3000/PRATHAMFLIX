import type { EducationEntry } from "./portfolio";
import type { Certification } from "./credentials";
import type { ProjectCardData } from "./project";

export interface ResumeExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  summary?: string;
  points: string[];
  technologies?: string[];
}

export interface ResumeSkillCategory {
  title: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  headline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  portfolioUrl: string;
  summary: string;
  education: EducationEntry[];
  experience: ResumeExperienceItem[];
  featuredProjectIds: string[];
  skillCategories: ResumeSkillCategory[];
  certificationIds: string[];
  achievements: string[];
}
