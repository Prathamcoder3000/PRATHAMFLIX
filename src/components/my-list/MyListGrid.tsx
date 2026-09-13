"use client";

import React from "react";
import { ProjectCard } from "@/components/project-card/ProjectCard";
import type { ProjectDetailData, ProjectCardData } from "@/types";

export interface MyListGridProps {
  projects: ProjectDetailData[];
  onSelectProject?: (project: ProjectCardData) => void;
  className?: string;
}

export const MyListGrid: React.FC<MyListGridProps> = ({
  projects,
  onSelectProject,
  className = "",
}) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 ${className}`}
    >
      {projects.map((project) => (
        <div key={project.id} className="flex justify-center sm:justify-start">
          <ProjectCard
            project={project}
            onSelect={onSelectProject ? (p) => onSelectProject(p) : undefined}
            className="w-full max-w-[340px] sm:max-w-none"
          />
        </div>
      ))}
    </div>
  );
};
