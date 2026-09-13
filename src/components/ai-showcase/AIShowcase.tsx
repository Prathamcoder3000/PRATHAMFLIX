import React from "react";
import type { ProjectDetailData } from "@/types";
import { AIShowcaseHero } from "./AIShowcaseHero";
import { AIShowcaseModel } from "./AIShowcaseModel";
import { AIShowcasePipeline } from "./AIShowcasePipeline";

export interface AIShowcaseProps {
  project: ProjectDetailData;
  className?: string;
}

export const AIShowcase: React.FC<AIShowcaseProps> = ({
  project,
  className = "",
}) => {
  return (
    <section
      aria-label="AI and Machine Learning Showcase"
      className={`relative rounded-3xl bg-neutral-950/80 border border-white/10 p-6 sm:p-8 lg:p-10 overflow-hidden shadow-2xl backdrop-blur-md ${className}`}
    >
      {/* Background Decorative Ambient Radial Glows */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: project.accent || "#8b5cf6" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ backgroundColor: project.accent || "#8b5cf6" }}
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-8 lg:space-y-10">
        {/* Top 2-Column Grid: Hero Content on Left, Visual Intelligence Core on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <AIShowcaseHero project={project} />
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <AIShowcaseModel
              modelInfo={project.modelInfo}
              accent={project.accent || "#8b5cf6"}
              className="h-full"
            />
          </div>
        </div>

        {/* Bottom Full-Width Pipeline Flow */}
        {project.pipeline && project.pipeline.length > 0 && (
          <div className="pt-6 border-t border-white/8">
            <AIShowcasePipeline pipeline={project.pipeline} />
          </div>
        )}
      </div>
    </section>
  );
};
