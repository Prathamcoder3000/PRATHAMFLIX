import React from "react";
import Image from "next/image";
import type { ProjectDetailData } from "@/types";

export interface ProjectDetailMediaProps {
  project: ProjectDetailData;
  className?: string;
}

export const ProjectDetailMedia: React.FC<ProjectDetailMediaProps> = ({
  project,
  className = "",
}) => {
  const accentColor = project.accent || "var(--accent)";

  return (
    <div
      className={`relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl shadow-black/80 select-none ${className}`}
    >
      {/* 1. If Image is available */}
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="object-cover object-center"
        />
      ) : (
        /* 2. Abstract Geometric Procedural Tech Art */
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#12141f] via-[#0e0f17] to-neutral-950">
          {/* Ambient Glowing Glow Accent */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-25"
            style={{ backgroundColor: accentColor }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: accentColor }}
            aria-hidden="true"
          />

          {/* Technical Grid Pattern */}
          <div
            className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"
            aria-hidden="true"
          />

          {/* Central Blueprint Geometry */}
          <svg
            className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 opacity-30 text-neutral-300"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="0.75" strokeDasharray="8 4" />
            <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" />
            <polygon points="50,14 84,72 16,72" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="50" cy="50" r="16" stroke={accentColor} strokeWidth="1.8" />
            <circle cx="50" cy="50" r="5" fill={accentColor} />
            <line x1="50" y1="4" x2="50" y2="96" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.4" />
            <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.4" />
          </svg>

          {/* Watermark identifier */}
          <div className="absolute bottom-5 right-6 font-mono text-xs text-neutral-500 font-bold tracking-widest uppercase">
            {project.id}
          </div>
        </div>
      )}

      {/* Cinematic Vignette Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-black/30 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};
