import React from "react";
import { ProjectPreviewMeta } from "./ProjectPreviewMeta";
import type { ProjectCardData } from "@/types";

export interface ProjectPreviewContentProps {
  project: ProjectCardData;
  className?: string;
}

export const ProjectPreviewContent: React.FC<ProjectPreviewContentProps> = ({
  project,
  className = "",
}) => {
  return (
    <div className={`p-6 sm:p-8 space-y-6 bg-[#0e1017] ${className}`}>
      {/* Title & Metadata Header */}
      <div className="space-y-2">
        <h2
          id="preview-title"
          className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white"
        >
          {project.title}
        </h2>
        <ProjectPreviewMeta project={project} />
      </div>

      {/* Description Summary */}
      {project.shortDescription && (
        <div className="space-y-1.5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
            Overview
          </h3>
          <p
            id="preview-desc"
            className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal"
          >
            {project.shortDescription}
          </p>
        </div>
      )}

      {/* Technologies Section */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="space-y-2 pt-2 border-t border-white/8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
            Key Technologies & Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-neutral-200 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
