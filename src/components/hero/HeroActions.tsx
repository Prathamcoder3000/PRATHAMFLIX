"use client";

import React from "react";
import Link from "next/link";
import { Play, Info, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface HeroActionsProps {
  className?: string;
  onReplayIntro?: () => void;
}

export function HeroActions({
  className,
  onReplayIntro,
}: HeroActionsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 sm:gap-4 pt-2",
        className
      )}
    >
      {/* Primary Action: Explore Projects */}
      <Link href="/projects" className="shrink-0">
        <Button
          variant="primary"
          size="lg"
          leftIcon={<Play className="h-4 w-4 fill-current" aria-hidden="true" />}
          className="font-bold tracking-wide shadow-lg shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition-transform"
          aria-label="Explore Projects showcase"
        >
          Explore Projects
        </Button>
      </Link>

      {/* Secondary Action: More Info */}
      <Link href="/resume" className="shrink-0">
        <Button
          variant="secondary"
          size="lg"
          leftIcon={<Info className="h-4 w-4 text-neutral-300" aria-hidden="true" />}
          className="font-medium tracking-wide bg-neutral-900/80 hover:bg-neutral-800 border-white/15 hover:scale-[1.02] active:scale-[0.98] transition-transform"
          aria-label="More Info about developer profile and background"
        >
          More Info
        </Button>
      </Link>

      {/* Tertiary Action: Play Cinematic Intro */}
      {onReplayIntro && (
        <Button
          variant="ghost"
          size="lg"
          onClick={onReplayIntro}
          leftIcon={<RotateCcw className="h-4 w-4 text-neutral-400 group-hover:text-white" aria-hidden="true" />}
          className="text-neutral-400 hover:text-white hover:bg-white/5 text-sm font-medium shrink-0"
          aria-label="Replay Cinematic Opening Intro"
        >
          <span>Play Intro</span>
        </Button>
      )}
    </div>
  );
}
