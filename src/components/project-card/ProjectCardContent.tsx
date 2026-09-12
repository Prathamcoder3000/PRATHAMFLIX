import React from "react";
import type { ProjectCardData } from "@/types";

export interface ProjectCardContentProps {
  project: ProjectCardData;
  className?: string;
}

export const ProjectCardContent: React.FC<ProjectCardContentProps> = ({
  project,
  className = "",
}) => {
  return (
    <div className={`p-3.5 sm:p-4 flex flex-col justify-between flex-1 gap-2.5 bg-[#0e1017] ${className}`}>
      {/* Title and Short Description */}
      <div className="space-y-1">
        <h3 className="text-sm sm:text-base font-semibold text-neutral-100 group-hover:text-white transition-colors truncate">
          {project.title}
        </h3>
        {project.shortDescription && (
          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-normal">
            {project.shortDescription}
          </p>
        )}
      </div>

      {/* Technology Tags */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="flex items-center flex-wrap gap-1.5 pt-1 border-t border-white/5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[10px] font-mono text-neutral-500">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
