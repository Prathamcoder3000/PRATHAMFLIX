import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FolderGit2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading1, Paragraph } from "@/components/ui/Typography";
import { ProjectDetailMedia } from "./ProjectDetailMedia";
import { MyListButton } from "@/components/my-list/MyListButton";
import type { ProjectDetailData } from "@/types";

export interface ProjectDetailHeroProps {
  project: ProjectDetailData;
  className?: string;
}

export const ProjectDetailHero: React.FC<ProjectDetailHeroProps> = ({
  project,
  className = "",
}) => {
  return (
    <div className={`space-y-8 sm:space-y-10 ${className}`}>
      {/* Top Bar: Back to Projects Navigation */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-md px-2 py-1 -ml-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Projects</span>
        </Link>

        <div className="flex items-center gap-2">
          {project.category && (
            <Badge variant={project.featured ? "accent" : "subtle"} size="md" className="font-mono uppercase text-xs">
              {project.category}
            </Badge>
          )}
          {project.year && (
            <span className="text-xs font-mono font-medium text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
              {project.year}
            </span>
          )}
        </div>
      </div>

      {/* Hero Header Typography */}
      <div className="space-y-4 max-w-4xl">
        <Heading1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          {project.title}
        </Heading1>

        {project.shortDescription && (
          <Paragraph className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed">
            {project.shortDescription}
          </Paragraph>
        )}
      </div>

      {/* Action Buttons: My List + External Links */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <MyListButton projectId={project.id} variant="default" />

        {project.links?.github && (
          <Button
            variant="outline"
            size="md"
            leftIcon={<FolderGit2 className="h-4 w-4" />}
            onClick={() => window.open(project.links?.github, "_blank", "noopener,noreferrer")}
          >
            Source Code
          </Button>
        )}
        {(project.links?.live || project.links?.demo) && (
          <Button
            variant="outline"
            size="md"
            rightIcon={<ArrowUpRight className="h-4 w-4" />}
            onClick={() => window.open(project.links?.live || project.links?.demo, "_blank", "noopener,noreferrer")}
          >
            Live Demo
          </Button>
        )}
      </div>

      {/* Large Cinematic Project Visual */}
      <ProjectDetailMedia project={project} />
    </div>
  );
};
