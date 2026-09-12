"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import type { ProjectCardData } from "@/types";

export interface ProjectPreviewMediaProps {
  project: ProjectCardData;
  className?: string;
}

export const ProjectPreviewMedia: React.FC<ProjectPreviewMediaProps> = ({
  project,
  className = "",
}) => {
  const accentColor = project.accent || "var(--accent)";

  return (
    <div
      className={`relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-neutral-950 rounded-t-2xl select-none ${className}`}
    >
      {/* If Image exists */}
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover object-center"
        />
      ) : (
        /* Abstract Geometric Procedural Tech Art */
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#12141e] via-[#0d0e15] to-neutral-950">
          {/* Ambient Glow Orbs */}
          <div
            className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ backgroundColor: accentColor }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: accentColor }}
            aria-hidden="true"
          />

          {/* Technical Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
            aria-hidden="true"
          />

          {/* Central Geometric Tech Blueprint Motif */}
          <svg
            className="w-32 h-32 sm:w-40 sm:h-40 opacity-35 text-neutral-300"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 3" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
            <polygon points="50,16 80,68 20,68" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="50" cy="50" r="16" stroke={accentColor} strokeWidth="1.8" />
            <circle cx="50" cy="50" r="5" fill={accentColor} />
            <line x1="50" y1="6" x2="50" y2="94" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
            <line x1="6" y1="50" x2="94" y2="50" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
          </svg>

          {/* Identifier Watermark */}
          <div className="absolute bottom-4 right-5 font-mono text-xs text-neutral-500 font-bold tracking-widest uppercase">
            {project.id}
          </div>
        </div>
      )}

      {/* Cinematic Gradient Vignette */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-black/40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Badges / Status Metadata Overlay */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        {project.category && (
          <Badge
            variant={project.featured ? "accent" : "subtle"}
            size="md"
            className="font-mono text-xs uppercase tracking-wider backdrop-blur-md"
          >
            {project.category}
          </Badge>
        )}
      </div>

      {project.year && (
        <div className="absolute top-4 right-16 z-10">
          <span className="text-xs font-mono font-medium text-neutral-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
            {project.year}
          </span>
        </div>
      )}
    </div>
  );
};
