import React from "react";
import type { ProjectCardData } from "@/types";

export interface ProjectPreviewMetaProps {
  project: ProjectCardData;
  className?: string;
}

export const ProjectPreviewMeta: React.FC<ProjectPreviewMetaProps> = ({
  project,
  className = "",
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-400 ${className}`}>
      {project.category && (
        <span className="text-neutral-200 font-medium">{project.category}</span>
      )}
      {project.category && project.year && <span>•</span>}
      {project.year && (
        <span className="font-mono text-neutral-400">{project.year}</span>
      )}
      {project.technologies && project.technologies.length > 0 && (
        <>
          <span>•</span>
          <span className="text-neutral-500 font-mono">
            {project.technologies.length} technologies
          </span>
        </>
      )}
    </div>
  );
};
