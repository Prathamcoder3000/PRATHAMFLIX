import React from "react";
import { ArrowUpRight } from "lucide-react";

export interface ProjectCardOverlayProps {
  accentColor?: string;
  className?: string;
}

export const ProjectCardOverlay: React.FC<ProjectCardOverlayProps> = ({
  accentColor = "var(--accent)",
  className = "",
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none flex items-center justify-center transition-opacity duration-300 ${className}`}
      aria-hidden="true"
    >
      {/* Cinematic Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 via-transparent to-black/30 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Center Subtle Action Affordance (Visual indicator for future interaction) */}
      <div
        className="relative z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 shadow-xl"
        style={{
          boxShadow: `0 0 20px -4px ${accentColor}40`,
        }}
      >
        <ArrowUpRight className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
      </div>
    </div>
  );
};
