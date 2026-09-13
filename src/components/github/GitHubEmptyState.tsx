"use client";

import React from "react";
import Link from "next/link";
import { Surface } from "@/components/ui/Surface";
import { Button } from "@/components/ui/Button";
import { Heading3, Paragraph } from "@/components/ui/Typography";
import { FolderGit2, ArrowRight } from "lucide-react";

export const GitHubEmptyState: React.FC = () => {
  return (
    <Surface
      elevation="subtle"
      padding="lg"
      className="rounded-2xl border border-white/5 bg-neutral-950/60 p-10 text-center space-y-4 max-w-md mx-auto"
    >
      <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 mx-auto">
        <FolderGit2 className="h-6 w-6" />
      </div>

      <div className="space-y-1">
        <Heading3 className="text-base font-bold text-white">No Public Repositories Found</Heading3>
        <Paragraph className="text-xs text-neutral-400">
          Public repositories will appear once published or synchronized with the GitHub account.
        </Paragraph>
      </div>

      <div className="pt-2">
        <Link href="/projects">
          <Button variant="outline" size="sm" rightIcon={<ArrowRight className="h-4 w-4" />}>
            Explore Portfolio Systems
          </Button>
        </Link>
      </div>
    </Surface>
  );
};
