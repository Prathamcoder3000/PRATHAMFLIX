"use client";

import React from "react";
import { Surface } from "@/components/ui/Surface";
import { Heading2, Heading3, Paragraph } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import type { PhilosophyPrinciple } from "@/types/portfolio";
import {
  PackageCheck,
  Rocket,
  Sparkles,
  ShieldCheck,
  Compass,
  Lightbulb,
} from "lucide-react";

interface DevelopmentPhilosophyProps {
  principles: PhilosophyPrinciple[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  PackageCheck,
  Rocket,
  Sparkles,
  ShieldCheck,
  Compass,
};

export const DevelopmentPhilosophy: React.FC<DevelopmentPhilosophyProps> = ({
  principles,
  title = "Development & Architecture Philosophy",
  subtitle = "Guiding engineering values focused on practical systems, iterative delivery, and intuitive user ergonomics.",
  className = "",
}) => {
  return (
    <section id="philosophy" aria-labelledby="philosophy-heading" className={`space-y-8 ${className}`}>
      <div className="space-y-2 max-w-3xl">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
          <Badge variant="accent">Core Principles</Badge>
        </div>
        <Heading2 id="philosophy-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {title}
        </Heading2>
        {subtitle && (
          <Paragraph className="text-sm sm:text-base text-neutral-400">
            {subtitle}
          </Paragraph>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {principles.map((p) => {
          const IconComponent = ICON_MAP[p.iconName] || Sparkles;

          return (
            <Surface
              key={p.id}
              elevation="subtle"
              padding="lg"
              className="group relative flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl bg-neutral-950/60 backdrop-blur-md overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--accent)] tracking-wider">
                    {p.number}
                  </span>
                  <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-[var(--accent)] transition-colors">
                    <IconComponent className="h-4 w-4" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Heading3 className="text-base sm:text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                    {p.title}
                  </Heading3>
                  <p className="text-xs sm:text-sm font-medium text-neutral-200 leading-snug">
                    {p.statement}
                  </p>
                </div>

                <Paragraph className="text-xs text-neutral-400 leading-relaxed pt-1">
                  {p.description}
                </Paragraph>
              </div>
            </Surface>
          );
        })}
      </div>
    </section>
  );
};
