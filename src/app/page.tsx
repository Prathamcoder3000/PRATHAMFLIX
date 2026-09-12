"use client";

import React from "react";
import {
  AppShell,
  CinematicIntro,
  Hero,
  Container,
  Divider,
  Surface,
  Heading3,
  Paragraph,
  Badge,
  ContentRow,
  ContentRowPlaceholderCard,
} from "@/components";
import { useIntroState } from "@/hooks";
import { Sparkles, Compass, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const {
    isIntroActive,
    hasReducedMotion,
    isMounted,
    completeIntro,
    replayIntro,
  } = useIntroState();

  const placeholderItemsRow1 = Array.from({ length: 8 }, (_, i) => i + 1);
  const placeholderItemsRow2 = Array.from({ length: 7 }, (_, i) => i + 1);
  const placeholderItemsRow3 = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <>
      {/* Cinematic Opening Intro Experience */}
      {isMounted && (
        <CinematicIntro
          isActive={isIntroActive}
          onComplete={completeIntro}
          hasReducedMotion={hasReducedMotion}
        />
      )}

      {/* Persistent Application Shell & Navigation */}
      <AppShell>
        {/* Phase 5: Cinematic Hero Experience */}
        <Hero
          hasReducedMotion={hasReducedMotion}
          onReplayIntro={replayIntro}
        />

        {/* Phase 6: Structural Demonstration Rows */}
        <div className="py-4 sm:py-6 space-y-4">
          <ContentRow
            title="Featured Work"
            subtitle="Curated structural showcase of engineering systems"
            seeAllHref="/projects"
          >
            {placeholderItemsRow1.map((id) => (
              <ContentRowPlaceholderCard key={`featured-${id}`} id={id} category="Featured" />
            ))}
          </ContentRow>

          <ContentRow
            title="Systems & Applications"
            subtitle="Full-stack web apps, cloud services, and real-time tools"
            seeAllHref="/projects?category=systems"
          >
            {placeholderItemsRow2.map((id) => (
              <ContentRowPlaceholderCard key={`systems-${id}`} id={id} category="System" />
            ))}
          </ContentRow>

          <ContentRow
            title="Explore & Experiments"
            subtitle="Artificial intelligence, machine learning, and creative code"
            seeAllHref="/projects?category=experiments"
          >
            {placeholderItemsRow3.map((id) => (
              <ContentRowPlaceholderCard key={`experiments-${id}`} id={id} category="Experiment" />
            ))}
          </ContentRow>
        </div>

        {/* Section Below Hero: Welcome & Architecture Overview */}
        <section className="py-12 sm:py-16 md:py-20 relative z-10">
          <Container maxWidth="2xl">
            <Divider variant="gradient" className="mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Surface elevation="subtle" padding="lg" className="space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  <Badge variant="accent">Cinematic Experience</Badge>
                </div>
                <Heading3 className="text-lg">Streaming UX Philosophy</Heading3>
                <Paragraph className="text-xs sm:text-sm text-neutral-400">
                  Engineered with atmospheric lighting, smooth GPU transitions, and rich
                  cinematic interaction patterns.
                </Paragraph>
              </Surface>

              <Surface elevation="subtle" padding="lg" className="space-y-[3px] space-y-3">
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  <Badge variant="subtle">Modern Architecture</Badge>
                </div>
                <Heading3 className="text-lg">Full-Stack Foundation</Heading3>
                <Paragraph className="text-xs sm:text-sm text-neutral-400">
                  Built on Next.js App Router, TypeScript, and Tailwind CSS v4 with modular
                  design tokens and reusable primitives.
                </Paragraph>
              </Surface>

              <Surface elevation="subtle" padding="lg" className="space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  <Badge variant="subtle">Verified Engineering</Badge>
                </div>
                <Heading3 className="text-lg">Specialized Domains</Heading3>
                <Paragraph className="text-xs sm:text-sm text-neutral-400">
                  Covering Computer Engineering, Full-Stack applications, Mobile development,
                  AI/ML models, and connected IoT systems.
                </Paragraph>
              </Surface>
            </div>
          </Container>
        </section>
      </AppShell>
    </>
  );
}

