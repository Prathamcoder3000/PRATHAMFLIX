import React from "react";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { MobileShowcaseMeta } from "./MobileShowcaseMeta";
import { MobileShowcaseFeatures } from "./MobileShowcaseFeatures";
import { MobileShowcaseActions } from "./MobileShowcaseActions";
import type { ProjectDetailData } from "@/types";

export interface MobileShowcaseContentProps {
  project: ProjectDetailData;
  className?: string;
}

export const MobileShowcaseContent: React.FC<MobileShowcaseContentProps> = ({
  project,
  className = "",
}) => {
  return (
    <div className={`space-y-6 sm:space-y-7 max-w-xl ${className}`}>
      {/* Eyebrow & Meta */}
      <div className="space-y-3">
        <span className="font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
          Featured Mobile Architecture
        </span>
        <MobileShowcaseMeta project={project} />
      </div>

      {/* Title & Description */}
      <div className="space-y-3">
        <Heading2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
          {project.title}
        </Heading2>

        {project.shortDescription && (
          <Paragraph className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
            {project.shortDescription}
          </Paragraph>
        )}
      </div>

      {/* Key Mobile Features Grid */}
      <MobileShowcaseFeatures project={project} />

      {/* Action Buttons */}
      <MobileShowcaseActions project={project} />
    </div>
  );
};
