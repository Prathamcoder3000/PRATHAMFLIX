import React from "react";
import { ProjectDetailSection } from "./ProjectDetailSection";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import type { ProjectDetailData } from "@/types";

export interface ProjectDetailEngineeringProps {
  project: ProjectDetailData;
  className?: string;
}

export const ProjectDetailEngineering: React.FC<ProjectDetailEngineeringProps> = ({
  project,
  className = "",
}) => {
  if (!project.engineeringHighlights || project.engineeringHighlights.length === 0) {
    return null;
  }

  return (
    <ProjectDetailSection
      id="engineering"
      eyebrow="Deep Dive"
      title="Engineering Highlights & Decisions"
      subtitle="Critical trade-offs, technical breakthroughs, and optimization strategies executed during engineering."
      className={className}
    >
      <div className="space-y-4">
        {project.engineeringHighlights.map((highlight, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-[#0d0f16] border border-white/5"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="h-4 w-4" />
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Decision #{String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
                {highlight}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ProjectDetailSection>
  );
};
