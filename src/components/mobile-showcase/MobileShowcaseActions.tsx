import React from "react";
import Link from "next/link";
import { ArrowRight, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ProjectDetailData } from "@/types";

export interface MobileShowcaseActionsProps {
  project: ProjectDetailData;
  className?: string;
}

export const MobileShowcaseActions: React.FC<MobileShowcaseActionsProps> = ({
  project,
  className = "",
}) => {
  const detailHref = project.href || `/projects/${project.id}`;

  return (
    <div className={`flex flex-wrap items-center gap-3 pt-2 ${className}`}>
      {/* Primary Action: Inspect Full Case Study */}
      <Link href={detailHref}>
        <Button
          variant="accent"
          size="md"
          rightIcon={<ArrowRight className="h-4 w-4" />}
          className="font-medium text-xs sm:text-sm"
        >
          Inspect Case Study
        </Button>
      </Link>

      {/* Optional Source Code (when available) */}
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
    </div>
  );
};
