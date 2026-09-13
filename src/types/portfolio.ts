export interface PortfolioIdentityData {
  name: string;
  roleTitles: string[];
  shortBio: string;
  location: string;
  status: string;
  headline: string;
  summary: string;
  socialLinks: Array<{
    label: string;
    href: string;
    iconName: "github" | "linkedin" | "mail" | "terminal";
  }>;
}

export interface CapabilityGroup {
  id: string;
  title: string;
  iconName: string;
  description: string;
  technologies: string[];
  featuredProjectIds?: string[];
}

export type TimelineCategory = "engineering" | "education" | "milestone" | "leadership";

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  category: TimelineCategory;
  technologies?: string[];
  isCurrent?: boolean;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface PhilosophyPrinciple {
  id: string;
  number: string;
  title: string;
  statement: string;
  description: string;
  iconName: string;
}

export interface InterestArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}
