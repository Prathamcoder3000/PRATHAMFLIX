"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
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
        "relative w-full min-h-[78vh] lg:min-h-[84vh] flex flex-col justify-center overflow-hidden pt-8 sm:pt-12 pb-10 sm:pb-16",
        className
      )}
      aria-label="PRATHAM Featured Developer Showcase"
    >
      {/* Background Lighting & Atmospheric Gradients */}
      <HeroBackground hasReducedMotion={hasReducedMotion} />

      {/* Main Content Area: 2-Column Cinematic Layout */}
      <div className="relative z-10 w-full my-auto">
        <Container maxWidth="2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 7 Columns: Developer Identity & CTA Actions */}
            <div className="lg:col-span-7">
              <HeroContent
                hasReducedMotion={hasReducedMotion}
                onReplayIntro={onReplayIntro}
              />
            </div>

            {/* Right 5 Columns: Cinematic Developer Universe Architecture Panel */}
            <div className="lg:col-span-5">
              <HeroVisual hasReducedMotion={hasReducedMotion} />
            </div>
          </div>
        </Container>
      </div>

      {/* Subtle Bottom Scroll Cue */}
      <div className="relative z-10 mt-auto pt-4 pb-1">
        <HeroScrollCue hasReducedMotion={hasReducedMotion} />
      </div>
    </section>
  );
}
