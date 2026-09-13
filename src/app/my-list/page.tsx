"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  AppShell,
  Container,
  Heading1,
  Paragraph,
  Badge,
  Button,
  MyListGrid,
  MyListEmptyState,
} from "@/components";

const ProjectPreview = dynamic(
  () => import("@/components/project-preview/ProjectPreview").then((mod) => mod.ProjectPreview),
  { ssr: true }
);
import { useMyList } from "@/hooks/useMyList";
import type { ProjectCardData } from "@/types";
import { Bookmark, Trash2, ArrowLeft, Compass } from "lucide-react";

export default function MyListPage() {
  const { savedProjects, isHydrated, clearMyList } = useMyList();
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null);

  const handleSelectProject = (project: ProjectCardData) => {
    setSelectedProject(project);
  };

  const handleClosePreview = () => {
    setSelectedProject(null);
  };

  const hasItems = isHydrated && savedProjects.length > 0;

  return (
    <AppShell>
      <main className="py-8 sm:py-12 md:py-16 min-h-[75vh]">
        <Container maxWidth="2xl" className="space-y-8 sm:space-y-10">
          {/* Header Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              {/* Back to Home / Explore Link */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-md px-2 py-1 -ml-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Overview</span>
              </Link>

              {/* Status Badges */}
              <div className="flex items-center gap-2">
                <Badge variant="accent" className="font-mono text-xs uppercase">
                  Saved Library
                </Badge>
                {isHydrated && (
                  <span className="text-xs font-mono font-medium text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    {savedProjects.length} {savedProjects.length === 1 ? "Project" : "Projects"}
                  </span>
                )}
              </div>
            </div>

            {/* Title & Actions Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)]">
                    <Bookmark className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                  </div>
                  <Heading1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                    My List
                  </Heading1>
                </div>
                <Paragraph className="text-sm sm:text-base text-neutral-400 max-w-xl">
                  Projects you&apos;ve saved for a closer look. Quick access to architectures,
                  case studies, and technical specifications.
                </Paragraph>
              </div>

              {/* Clear List Button */}
              {hasItems && (
                <div className="flex items-center gap-3 shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={<Trash2 className="h-3.5 w-3.5 text-neutral-400" />}
                    onClick={clearMyList}
                    className="text-xs text-neutral-400 hover:text-rose-400 hover:border-rose-500/30"
                  >
                    Clear List
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Body Section */}
          <div>
            {!isHydrated ? (
              // Initial SSR / Hydration Placeholder (avoids layout shift)
              <div className="py-20 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full border-2 border-white/10 border-t-[var(--accent)] animate-spin" />
              </div>
            ) : hasItems ? (
              // Saved Projects Grid
              <div className="space-y-8">
                <MyListGrid
                  projects={savedProjects}
                  onSelectProject={handleSelectProject}
                />

                <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
                  <span>Showing {savedProjects.length} saved engineering systems</span>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
                  >
                    <Compass className="h-3.5 w-3.5" />
                    <span>Discover More Projects</span>
                  </Link>
                </div>
              </div>
            ) : (
              // Empty State
              <MyListEmptyState />
            )}
          </div>
        </Container>

        {/* Project Preview Dialog */}
        <ProjectPreview
          project={selectedProject}
          isOpen={Boolean(selectedProject)}
          onClose={handleClosePreview}
        />
      </main>
    </AppShell>
  );
}
