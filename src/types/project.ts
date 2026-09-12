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
}

export type ProjectCardVariant = "default" | "featured";
