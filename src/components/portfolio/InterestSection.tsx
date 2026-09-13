"use client";

import React from "react";
import { Surface } from "@/components/ui/Surface";
import { Heading2, Heading3, Paragraph } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import type { InterestArea } from "@/types/portfolio";
import {
  Network,
  BrainCircuit,
  Smartphone,
  Terminal,
  Cpu,
  Compass,
} from "lucide-react";

interface InterestSectionProps {
  interests: InterestArea[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Network,
  BrainCircuit,
  Smartphone,
  Terminal,
  Cpu,
};

export const InterestSection: React.FC<InterestSectionProps> = ({
  interests,
  title = "Active Research & Technical Curiosity",
  subtitle = "Emerging engineering paradigms and specialized technical domains under active exploration.",
  className = "",
}) => {
  return (
    <section id="interests" aria-labelledby="interests-heading" className={`space-y-8 ${className}`}>
      <div className="space-y-2 max-w-3xl">
        <div className="flex items-center gap-2">
          <Compass className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
          <Badge variant="accent">Areas of Focus</Badge>
        </div>
        <Heading2 id="interests-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {title}
        </Heading2>
        {subtitle && (
          <Paragraph className="text-sm sm:text-base text-neutral-400">
            {subtitle}
          </Paragraph>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {interests.map((item) => {
          const IconComponent = ICON_MAP[item.iconName] || Compass;

          return (
            <Surface
              key={item.id}
              elevation="subtle"
              padding="lg"
              className="group border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl bg-neutral-950/60 backdrop-blur-md flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="h-9 w-9 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:scale-105 transition-transform">
                  <IconComponent className="h-4 w-4" />
                </div>

                <div className="space-y-1">
                  <Heading3 className="text-base sm:text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </Heading3>
                  <Paragraph className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </Paragraph>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-neutral-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Surface>
          );
        })}
      </div>
    </section>
  );
};
