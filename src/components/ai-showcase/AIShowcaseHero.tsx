import React from "react";
import type { ProjectDetailData } from "@/types";
import { AIShowcaseMeta } from "./AIShowcaseMeta";
import { AIShowcaseFeatures } from "./AIShowcaseFeatures";
import { AIShowcaseActions } from "./AIShowcaseActions";
import { Sparkles } from "lucide-react";

export interface AIShowcaseHeroProps {
  project: ProjectDetailData;
  className?: string;
}

export const AIShowcaseHero: React.FC<AIShowcaseHeroProps> = ({
  project,
  className = "",
}) => {
  return (
    <div className={`space-y-6 flex flex-col justify-between ${className}`}>
      <div className="space-y-4">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-purple-400 uppercase tracking-widest">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Intelligent Systems Spotlight</span>
        </div>

        {/* Project Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {project.title}
        </h2>

        {/* Project Meta Badges */}
        <AIShowcaseMeta project={project} />

        {/* Overview / Description */}
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-normal">
          {project.overview || project.shortDescription}
        </p>

        {/* Highlighted Technical Features */}
        <div className="pt-2">
          <AIShowcaseFeatures features={project.features} />
        </div>
      </div>

      {/* Action Buttons */}
      <AIShowcaseActions project={project} />
    </div>
  );
};
