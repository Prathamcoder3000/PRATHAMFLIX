import React from "react";
import Image from "next/image";
import { ProjectCardBadge } from "./ProjectCardBadge";
import { ProjectCardOverlay } from "./ProjectCardOverlay";
import type { ProjectCardData } from "@/types";

export interface ProjectCardMediaProps {
  project: ProjectCardData;
  className?: string;
}

export const ProjectCardMedia: React.FC<ProjectCardMediaProps> = ({
  project,
  className = "",
}) => {
  const accentColor = project.accent || "var(--accent)";

  return (
    <div
      className={`relative w-full aspect-[16/9] overflow-hidden bg-neutral-950/80 rounded-t-xl select-none ${className}`}
    >
      {/* 1. If Image is available */}
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 240px, (max-width: 1200px) 280px, 320px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        /* 2. Procedural Abstract Cinematic Placeholder */
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-[#10121a] to-neutral-950">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            style={{ backgroundColor: accentColor }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity duration-500"
            style={{ backgroundColor: accentColor }}
            aria-hidden="true"
          />

          {/* Technical Grid Pattern */}
          <div
            className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:14px_14px]"
            aria-hidden="true"
          />

          {/* Abstract Geometric Tech Graphic */}
          <svg
            className="w-24 h-24 opacity-25 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500 text-neutral-400"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <polygon points="50,22 75,65 25,65" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="14" stroke={accentColor} strokeWidth="1.5" />
            <circle cx="50" cy="50" r="4" fill={accentColor} />
            <line x1="50" y1="12" x2="50" y2="88" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
            <line x1="12" y1="50" x2="88" y2="50" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
          </svg>

          {/* Monogram Identifier */}
          <div className="absolute bottom-3 right-3 font-mono text-[10px] text-neutral-500/80 font-semibold tracking-wider">
            {project.id.toUpperCase().slice(0, 10)}
          </div>
        </div>
      )}

      {/* Top Left: Category Badge */}
      {project.category && (
        <div className="absolute top-2.5 left-2.5 z-10">
          <ProjectCardBadge
            label={project.category}
            variant={project.featured ? "accent" : "subtle"}
          />
        </div>
      )}

      {/* Top Right: Year if present */}
      {project.year && (
        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="text-[10px] font-mono font-medium text-neutral-400 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10">
            {project.year}
          </span>
        </div>
      )}

      {/* Hover Overlay & Action Affordance */}
      <ProjectCardOverlay accentColor={accentColor} />
    </div>
  );
};
