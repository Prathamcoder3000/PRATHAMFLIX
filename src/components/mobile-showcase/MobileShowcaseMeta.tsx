import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Smartphone, Code, Calendar } from "lucide-react";
import type { ProjectDetailData } from "@/types";

export interface MobileShowcaseMetaProps {
  project: ProjectDetailData;
  className?: string;
}

export const MobileShowcaseMeta: React.FC<MobileShowcaseMetaProps> = ({
  project,
  className = "",
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {/* Category / Platform Badge */}
      <Badge variant="accent" size="md" className="font-mono text-xs uppercase tracking-wider">
        <Smartphone className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
        <span>{project.platform ? `${project.platform}` : "Mobile App"}</span>
      </Badge>

      {/* Framework Badge */}
      {project.framework && (
        <Badge variant="subtle" size="md" className="font-mono text-xs">
          <Code className="h-3.5 w-3.5 mr-1 text-neutral-400" aria-hidden="true" />
          <span>{project.framework}</span>
        </Badge>
      )}

      {/* Year */}
      {project.year && (
        <span className="inline-flex items-center gap-1 font-mono text-xs text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
          <Calendar className="h-3 w-3 text-neutral-500" aria-hidden="true" />
          <span>{project.year}</span>
        </span>
      )}
    </div>
  );
};
