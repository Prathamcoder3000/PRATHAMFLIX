import React from "react";
import { Badge } from "@/components/ui/Badge";
import type { BadgeVariant } from "@/types/ui";

export interface ProjectCardBadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

export const ProjectCardBadge: React.FC<ProjectCardBadgeProps> = ({
  label,
  variant = "subtle",
  className = "",
}) => {
  return (
    <Badge
      variant={variant}
      size="sm"
      className={`font-mono text-[10px] uppercase tracking-wider backdrop-blur-md ${className}`}
    >
      {label}
    </Badge>
  );
};
