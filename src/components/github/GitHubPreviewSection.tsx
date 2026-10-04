"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { GitHubRepositoryCard } from "./GitHubRepositoryCard";
import type { GitHubRepository } from "@/lib/github/github-types";
import { ArrowRight, ExternalLink } from "lucide-react";

interface GitHubPreviewSectionProps {
  repositories?: GitHubRepository[];
  username?: string;
}

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Fallback preview repositories in case props are not passed during static compilation
const DEFAULT_PREVIEW_REPOS: GitHubRepository[] = [
  {
    id: "repo-prathamflix",
    name: "PRATHAMFLIX",
    fullName: "Prathamcoder3000/PRATHAMFLIX",
    description: "Cinematic developer portfolio engine built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.",
    htmlUrl: "https://github.com/Prathamcoder3000/PRATHAMFLIX",
    homepage: "https://prathamflix.dev",
    language: "TypeScript",
    topics: ["nextjs", "react", "typescript", "portfolio"],
    stars: 12,
    forks: 2,
    watchers: 12,
    updatedAt: "2025-01-15T00:00:00Z",
    createdAt: "2024-01-10T00:00:00Z",
    isFork: false,
    isArchived: false,
    linkedProjectId: "prompt-genius",
  },
  {
    id: "repo-prompt-genius",
    name: "prompt-genius",
    fullName: "Prathamcoder3000/prompt-genius",
    description: "The Ultimate Developer Workspace for Mastering Prompt Engineering. Full-stack platform to create, refine, evaluate, and manage AI prompts.",
    htmlUrl: "https://github.com/Prathamcoder3000/prompt-genius",
    homepage: "https://prompt-genius-ivory.vercel.app",
    language: "TypeScript",
    topics: ["nextjs", "react", "typescript", "prompt-engineering", "mongodb"],
    stars: 10,
    forks: 2,
    watchers: 10,
    updatedAt: "2025-01-20T00:00:00Z",
    createdAt: "2024-02-15T00:00:00Z",
    isFork: false,
    isArchived: false,
    linkedProjectId: "prompt-genius",
  },
  {
    id: "repo-study-session-dashboard",
    name: "study-session-dashboard",
    fullName: "Prathamcoder3000/study-session-dashboard",
    description: "Sensor-Based Smart Study Schedule Planning System powered by a Level-2 Model-Based & Utility-Based Agentic AI.",
    htmlUrl: "https://github.com/Prathamcoder3000/study-session-dashboard",
    homepage: null,
    language: "Python",
    topics: ["fastapi", "python", "agentic-ai", "biometrics", "mongodb"],
    stars: 8,
    forks: 1,
    watchers: 8,
    updatedAt: "2024-11-20T00:00:00Z",
    createdAt: "2024-01-20T00:00:00Z",
    isFork: false,
    isArchived: false,
    linkedProjectId: "sensor-study-schedule",
  },
];

export const GitHubPreviewSection: React.FC<GitHubPreviewSectionProps> = ({
  repositories = DEFAULT_PREVIEW_REPOS,
  username = "Prathamcoder3000",
}) => {
  const displayRepos = repositories.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 relative z-10">
      <Container maxWidth="2xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <GithubIcon className="h-4 w-4 text-[var(--accent)]" />
                <Badge variant="accent">Open Source & Activity</Badge>
              </div>
              <Heading2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Engineering Work in Public
              </Heading2>
              <Paragraph className="text-xs sm:text-sm text-neutral-400">
                Open-source repositories, experiments, and engineering systems.
              </Paragraph>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm" rightIcon={<ExternalLink className="h-3.5 w-3.5" />}>
                  @{username}
                </Button>
              </a>

              <Link href="/github">
                <Button
                  variant="outline"
                  size="sm"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Explore All Repositories
                </Button>
              </Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {displayRepos.map((repo) => (
              <GitHubRepositoryCard key={repo.id} repository={repo} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
