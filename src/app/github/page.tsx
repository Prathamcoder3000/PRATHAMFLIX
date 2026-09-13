import React from "react";
import Link from "next/link";
import {
  AppShell,
  Container,
  Divider,
  Button,
  Badge,
  Heading1,
  Paragraph,
  GitHubProfile,
  GitHubRepositoryGrid,
  GitHubActivity,
  GitHubError,
} from "@/components";
import { fetchGitHubData, DEFAULT_GITHUB_USERNAME } from "@/lib/github";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub Repositories & Open Source Activity",
  description:
    "Live telemetry, open source repositories, and public engineering commits synchronized directly with GitHub.",
  openGraph: {
    title: "GitHub Repositories & Open Source Activity — PRATHAMFLIX",
    description:
      "Live telemetry, open source repositories, and public engineering commits synchronized directly with GitHub.",
  },
};

export const revalidate = 3600; // 1 hour ISR revalidation

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

export default async function GitHubPage() {
  const data = await fetchGitHubData(DEFAULT_GITHUB_USERNAME);

  return (
    <AppShell>
      <main className="py-8 sm:py-12 md:py-16">
        <Container maxWidth="2xl">
          <div className="space-y-8 sm:space-y-12">
            {/* Top Navigation & Breadcrumb */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<ArrowLeft className="h-4 w-4" />}
                >
                  Back to Overview
                </Button>
              </Link>

              <div className="flex items-center gap-3">
                <a
                  href={`https://github.com/${DEFAULT_GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    rightIcon={<ExternalLink className="h-3.5 w-3.5" />}
                  >
                    View on GitHub
                  </Button>
                </a>
                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <GithubIcon className="h-3.5 w-3.5 text-[var(--accent)]" />
                  <span>PRATHAMFLIX / GitHub</span>
                </div>
              </div>
            </div>

            {/* Header Banner */}
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2">
                <GithubIcon className="h-4 w-4 text-[var(--accent)]" />
                <Badge variant="accent">Open Source Ecosystem</Badge>
              </div>

              <Heading1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                GitHub Repositories & Activity
              </Heading1>

              <Paragraph className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Live telemetry, repositories, and engineering activity synchronized directly with the official GitHub account.
              </Paragraph>
            </div>

            {/* Fallback Notice if rate-limited or offline */}
            {data.status !== "success" && (
              <GitHubError
                message={data.errorMessage}
                isRateLimited={data.status === "rate_limited"}
                username={DEFAULT_GITHUB_USERNAME}
              />
            )}

            {/* Profile Card */}
            {data.profile && <GitHubProfile profile={data.profile} />}

            <Divider variant="subtle" />

            {/* Repository Showcase Grid */}
            <section className="space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-[var(--accent)]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                    Public Repositories
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Repositories & Codebases ({data.repositories.length})
                </h2>
              </div>

              <GitHubRepositoryGrid repositories={data.repositories} />
            </section>

            <Divider variant="subtle" />

            {/* Activity Stream */}
            <GitHubActivity activity={data.recentActivity} />
          </div>
        </Container>
      </main>
    </AppShell>
  );
}
