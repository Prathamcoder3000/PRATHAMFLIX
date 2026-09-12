"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroScrollCue } from "./HeroScrollCue";
import { cn } from "@/lib/utils";

export interface HeroProps {
  className?: string;
  hasReducedMotion?: boolean;
  onReplayIntro?: () => void;
}

export function Hero({
  className,
  hasReducedMotion = false,
  onReplayIntro,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center overflow-hidden pt-12 pb-16 sm:pb-20",
        className
      )}
      aria-label="PRATHAM Featured Developer Showcase"
    >
      {/* Background Lighting & Atmospheric Gradients */}
      <HeroBackground hasReducedMotion={hasReducedMotion} />

      {/* Main Content Area */}
      <div className="relative z-10 w-full my-auto">
        <Container maxWidth="2xl">
          <HeroContent
            hasReducedMotion={hasReducedMotion}
            onReplayIntro={onReplayIntro}
          />
        </Container>
      </div>

      {/* Subtle Bottom Scroll Cue */}
      <div className="relative z-10 mt-auto pt-6 pb-2">
        <HeroScrollCue hasReducedMotion={hasReducedMotion} />
      </div>
    </section>
  );
}
