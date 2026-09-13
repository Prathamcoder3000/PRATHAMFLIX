import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, Code, Calendar } from "lucide-react";
import type { ProjectDetailData } from "@/types";

export interface AIShowcaseMetaProps {
  project: ProjectDetailData;
  className?: string;
}

export const AIShowcaseMeta: React.FC<AIShowcaseMetaProps> = ({
  project,
  className = "",
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {/* Dynamic AI Category Badge - Data-driven without hardcoded category restrictions */}
      {project.aiCategory && (
        <Badge
          variant="accent"
          size="md"
          className="font-mono text-xs uppercase tracking-wider"
        >
          <Sparkles className="h-3.5 w-3.5 mr-1 text-purple-400" aria-hidden="true" />
          <span>{project.aiCategory}</span>
        </Badge>
      )}

      {/* Model Framework / Core Tech Badge */}
      {(project.modelInfo?.framework || project.framework) && (
        <Badge variant="subtle" size="md" className="font-mono text-xs">
          <Code className="h-3.5 w-3.5 mr-1 text-neutral-400" aria-hidden="true" />
          <span>{project.modelInfo?.framework || project.framework}</span>
        </Badge>
      )}

      {/* Year Badge */}
      {project.year && (
        <span className="inline-flex items-center gap-1 font-mono text-xs text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
          <Calendar className="h-3 w-3 text-neutral-500" aria-hidden="true" />
          <span>{project.year}</span>
        </span>
      )}
    </div>
  );
};
