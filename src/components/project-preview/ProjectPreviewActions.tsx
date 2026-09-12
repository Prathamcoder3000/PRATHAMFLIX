import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ProjectCardData } from "@/types";

export interface ProjectPreviewActionsProps {
  project: ProjectCardData;
  onClose: () => void;
  className?: string;
}

export const ProjectPreviewActions: React.FC<ProjectPreviewActionsProps> = ({
  project,
  onClose,
  className = "",
}) => {
  return (
    <div
      className={`px-6 sm:px-8 pb-6 sm:pb-8 pt-2 flex items-center justify-end gap-3 bg-[#0e1017] rounded-b-2xl ${className}`}
    >
      <Button
        variant="secondary"
        size="md"
        onClick={onClose}
        className="font-medium text-xs sm:text-sm"
      >
        Close
      </Button>

      {project.href && (
        <Link
          href={project.href}
          className="inline-flex items-center justify-center font-semibold transition-colors select-none bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-active)] shadow-sm rounded-lg h-10 px-4 text-sm gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          <span>View Project</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
};
