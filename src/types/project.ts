export interface ProjectCardData {
  id: string;
  title: string;
  shortDescription?: string;
  category?: string;
  year?: string;
  technologies?: string[];
  image?: string;
  accent?: string;
  featured?: boolean;
  href?: string;
  isMobile?: boolean;
}

export type ProjectCardVariant = "default" | "featured";

export interface ArchitectureNode {
  name: string;
  role?: string;
  tech?: string;
  description?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface MobileAppFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface TechStackCategory {
  category: string;
  technologies: string[];
}

export interface ProjectLinks {
  github?: string;
  live?: string;
  demo?: string;
}

export interface ProjectDetailData extends ProjectCardData {
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: ArchitectureNode[];
  features?: ProjectFeature[];
  engineeringHighlights?: string[];
  techStackCategorized?: TechStackCategory[];
  links?: ProjectLinks;
  platform?: "android" | "ios" | "cross-platform";
  framework?: string;
  deviceOrientation?: "portrait" | "landscape";
  appFeatures?: MobileAppFeature[];
}

export type MobileProjectData = ProjectDetailData;
