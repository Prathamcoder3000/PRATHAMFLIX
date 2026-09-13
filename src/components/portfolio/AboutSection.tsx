"use client";

import React from "react";
import { Surface } from "@/components/ui/Surface";
import { Heading2, Heading3, Paragraph } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import type { PortfolioIdentityData } from "@/types/portfolio";
import { Code2, Compass, Cpu, Sparkles } from "lucide-react";

interface AboutSectionProps {
  identity: PortfolioIdentityData;
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  identity,
  className = "",
}) => {
  return (
    <section id="about" aria-labelledby="about-heading" className={`space-y-8 ${className}`}>
      <div className="space-y-2 max-w-3xl">
        <div className="flex items-center gap-2">
          <Compass className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
          <Badge variant="accent">About the Engineer</Badge>
        </div>
        <Heading2 id="about-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Engineering Mindset & Narrative
        </Heading2>
        <Paragraph className="text-sm sm:text-base text-neutral-400">
          Bridging structural computational foundations with cinematic, intuitive digital experiences.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Story & Background */}
        <Surface elevation="subtle" padding="lg" className="space-y-4 border border-white/10 rounded-xl bg-neutral-950/60">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
              <Code2 className="h-4 w-4" />
            </div>
            <Heading3 className="text-lg font-bold text-white">Who I Am</Heading3>
          </div>
          <Paragraph className="text-sm text-neutral-300 leading-relaxed">
            {identity.summary}
          </Paragraph>
          <Paragraph className="text-sm text-neutral-400 leading-relaxed">
            As a Computer Engineering student, I enjoy unpacking how complex systems operate under the hood—from hardware registers and network socket layers to React fiber reconciliation and async state propagation.
          </Paragraph>
        </Surface>

        {/* What I Build & Enjoy */}
        <Surface elevation="subtle" padding="lg" className="space-y-4 border border-white/10 rounded-xl bg-neutral-950/60">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
              <Cpu className="h-4 w-4" />
            </div>
            <Heading3 className="text-lg font-bold text-white">What I Build</Heading3>
          </div>
          <Paragraph className="text-sm text-neutral-300 leading-relaxed">
            My engineering work spans multi-layered systems: responsive web applications using Next.js and TypeScript, mobile apps featuring offline-first local synchronization, intelligent multi-agent AI execution pipelines, and IoT telemetry microcontrollers.
          </Paragraph>
          <Paragraph className="text-sm text-neutral-400 leading-relaxed">
            I prioritize writing clear, maintainable code with strict type contracts, deterministic state machines, and resilient error recovery patterns.
          </Paragraph>
        </Surface>
      </div>
    </section>
  );
};
