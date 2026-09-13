"use client";

import React from "react";
import Link from "next/link";
import { Surface } from "@/components/ui/Surface";
import { Button } from "@/components/ui/Button";
import { Heading3, Paragraph } from "@/components/ui/Typography";
import { AlertTriangle, ExternalLink, FolderGit2 } from "lucide-react";

interface GitHubErrorProps {
  message?: string;
  isRateLimited?: boolean;
  username?: string;
  className?: string;
}

export const GitHubError: React.FC<GitHubErrorProps> = ({
  message = "GitHub API is currently unreachable. Displaying cached repository data.",
  isRateLimited = false,
  username = "Prathamcoder3000",
  className = "",
}) => {
  return (
    <Surface
      elevation="subtle"
      padding="md"
      className={`rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
          <AlertTriangle className="h-4 w-4" />
        </div>
        <div className="space-y-0.5">
          <div className="text-xs sm:text-sm font-semibold text-amber-200">
            {isRateLimited ? "GitHub API Rate Limited" : "GitHub Telemetry Fallback Active"}
          </div>
          <Paragraph className="text-xs text-neutral-400">
            {message}
          </Paragraph>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <Button variant="outline" size="sm" className="w-full justify-center text-xs">
            <span>Direct Profile</span>
            <ExternalLink className="h-3 w-3 ml-1.5" />
          </Button>
        </a>

        <Link href="/projects" className="w-full sm:w-auto">
          <Button variant="ghost" size="sm" className="w-full justify-center text-xs">
            <span>Portfolio Projects</span>
          </Button>
        </Link>
      </div>
    </Surface>
  );
};
