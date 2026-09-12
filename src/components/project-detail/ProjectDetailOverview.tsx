import React from "react";
import { ProjectDetailSection } from "./ProjectDetailSection";
import { Paragraph } from "@/components/ui/Typography";
import { Target, Lightbulb, Compass } from "lucide-react";
import type { ProjectDetailData } from "@/types";

export interface ProjectDetailOverviewProps {
  project: ProjectDetailData;
  className?: string;
}

export const ProjectDetailOverview: React.FC<ProjectDetailOverviewProps> = ({
  project,
  className = "",
}) => {
  return (
    <div className={`space-y-12 sm:space-y-16 ${className}`}>
      {/* 1. Project Overview */}
      {project.overview && (
        <ProjectDetailSection
          id="overview"
          eyebrow="Case Study"
          title="Executive Overview"
          subtitle="Core concept, motivation, and scope of the engineering effort."
        >
          <div className="prose prose-invert max-w-none">
            <Paragraph className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
              {project.overview}
            </Paragraph>
          </div>
        </ProjectDetailSection>
      )}

      {/* 2. The Problem & Solution Breakdown */}
      {(project.problem || project.solution) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 pt-4 border-t border-white/5">
          {project.problem && (
            <div className="space-y-4 p-6 sm:p-8 rounded-2xl bg-neutral-950/60 border border-white/5">
              <div className="flex items-center gap-2.5 text-[var(--accent)] font-semibold text-sm">
                <Target className="h-5 w-5" aria-hidden="true" />
                <span className="font-mono uppercase tracking-wider text-xs">The Problem</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Architectural Bottleneck & Challenges
              </h3>
              <Paragraph className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                {project.problem}
              </Paragraph>
            </div>
          )}

          {project.solution && (
            <div className="space-y-4 p-6 sm:p-8 rounded-2xl bg-neutral-950/60 border border-white/5">
              <div className="flex items-center gap-2.5 text-emerald-400 font-semibold text-sm">
                <Lightbulb className="h-5 w-5" aria-hidden="true" />
                <span className="font-mono uppercase tracking-wider text-xs">The Solution</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Engineered Approach & Implementation
              </h3>
              <Paragraph className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                {project.solution}
              </Paragraph>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
