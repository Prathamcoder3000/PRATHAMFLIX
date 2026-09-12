"use client";

import React from "react";
import Link from "next/link";
import { ProjectCardMedia } from "./ProjectCardMedia";
import { ProjectCardContent } from "./ProjectCardContent";
import type { ProjectCardData, ProjectCardVariant } from "@/types";

export interface ProjectCardProps {
  project: ProjectCardData;
  variant?: ProjectCardVariant;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant = "default",
  className = "",
}) => {
  const isFeatured = variant === "featured" || Boolean(project.featured);

  const containerClasses = `
    group relative flex flex-col shrink-0
    w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px]
    rounded-xl overflow-hidden
    bg-[#0e1017] border border-white/8
    shadow-lg shadow-black/40
    transition-all duration-300 ease-out
    hover:border-white/20 hover:shadow-2xl hover:shadow-black/70
    hover:-translate-y-1 hover:scale-[1.02]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]
    ${isFeatured ? "ring-1 ring-[var(--accent)]/30 hover:ring-[var(--accent)]/60" : ""}
    ${className}
  `.trim();

  // If a valid href is provided, render semantic accessible Link
  if (project.href) {
    return (
      <Link
        href={project.href}
        aria-label={`View project details for ${project.title}`}
        className={containerClasses}
      >
        <ProjectCardMedia project={project} />
        <ProjectCardContent project={project} />
      </Link>
    );
  }

  // If no href is supplied, render semantic article (non-interactive container)
  return (
    <article
      aria-label={`Project: ${project.title}`}
      className={containerClasses}
    >
      <ProjectCardMedia project={project} />
      <ProjectCardContent project={project} />
    </article>
  );
};
