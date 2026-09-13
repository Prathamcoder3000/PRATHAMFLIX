import React from "react";
import Link from "next/link";
import { ArrowRight, FolderGit2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ProjectDetailData } from "@/types";

export interface AIShowcaseActionsProps {
  project: ProjectDetailData;
  className?: string;
}

export const AIShowcaseActions: React.FC<AIShowcaseActionsProps> = ({
  project,
  className = "",
}) => {
  const detailHref = project.href || `/projects/${project.id}`;

  return (
    <div className={`flex flex-wrap items-center gap-3 pt-2 ${className}`}>
      {/* Primary Action: Inspect AI Architecture & Case Study */}
      <Link href={detailHref}>
        <Button
          variant="accent"
          size="md"
          rightIcon={<ArrowRight className="h-4 w-4" />}
          className="font-medium text-xs sm:text-sm bg-purple-600 hover:bg-purple-500 border-purple-500/30 text-white"
        >
          Inspect Architecture
        </Button>
      </Link>

      {/* Optional Secondary Action: Source Code */}
      {project.links?.github && (
        <Button
          variant="outline"
          size="md"
          leftIcon={<FolderGit2 className="h-4 w-4" />}
          onClick={() => window.open(project.links?.github, "_blank", "noopener,noreferrer")}
          className="font-medium text-xs sm:text-sm"
        >
          Source Code
        </Button>
      )}

      {/* Tech Stack Indicator */}
      <div className="hidden sm:flex items-center gap-1.5 ml-auto font-mono text-[11px] text-neutral-500">
        <Cpu className="h-3.5 w-3.5 text-neutral-400" />
        <span>Hardware Accelerated</span>
      </div>
    </div>
  );
};
