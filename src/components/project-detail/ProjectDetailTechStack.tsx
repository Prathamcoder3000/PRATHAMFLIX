import React from "react";
import { ProjectDetailSection } from "./ProjectDetailSection";
import type { ProjectDetailData } from "@/types";

export interface ProjectDetailTechStackProps {
  project: ProjectDetailData;
  className?: string;
}

export const ProjectDetailTechStack: React.FC<ProjectDetailTechStackProps> = ({
  project,
  className = "",
}) => {
  if (!project.techStackCategorized || project.techStackCategorized.length === 0) {
    return null;
  }

  return (
    <ProjectDetailSection
      id="tech-stack"
      eyebrow="Stack Architecture"
      title="Technologies & Tools"
      subtitle="Comprehensive breakdown of frameworks, runtimes, protocols, and infrastructure."
      className={className}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {project.techStackCategorized.map((group) => (
          <div
            key={group.category}
            className="p-6 rounded-2xl bg-neutral-950/60 border border-white/8 space-y-4"
          >
            <h4 className="font-mono text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              {group.category}
            </h4>

            <div className="flex flex-wrap gap-2">
              {group.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/5 text-neutral-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ProjectDetailSection>
  );
};
