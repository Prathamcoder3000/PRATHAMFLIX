"use client";

import React from "react";
import Link from "next/link";
import { Surface } from "@/components/ui/Surface";
import { Badge } from "@/components/ui/Badge";
import { Heading3, Paragraph } from "@/components/ui/Typography";
import type { CapabilityGroup } from "@/types/portfolio";
import {
  Globe,
  Smartphone,
  BrainCircuit,
  Cpu,
  Layers,
  ArrowRight,
} from "lucide-react";

interface CapabilityCardProps {
  capability: CapabilityGroup;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Smartphone,
  BrainCircuit,
  Cpu,
  Layers,
};

export const CapabilityCard: React.FC<CapabilityCardProps> = ({ capability }) => {
  const IconComponent = ICON_MAP[capability.iconName] || Layers;

  return (
    <Surface
      elevation="subtle"
      padding="lg"
      className="group relative flex flex-col justify-between border border-white/10 hover:border-[var(--accent)]/40 transition-all duration-300 rounded-xl bg-neutral-950/60 backdrop-blur-md overflow-hidden"
    >
      {/* Subtle background atmospheric gradient */}
      <div
        className="absolute top-0 right-0 w-36 h-36 bg-[var(--accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--accent)]/10 transition-all duration-500 pointer-events-none"
        aria-hidden="true"
      />

      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="h-10 w-10 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="h-5 w-5" />
          </div>
          <Badge variant="subtle" size="sm" className="font-mono text-[10px]">
            {capability.technologies.length} Stacks
          </Badge>
        </div>

        <div className="space-y-1.5">
          <Heading3 className="text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors duration-200">
            {capability.title}
          </Heading3>
          <Paragraph className="text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed">
            {capability.description}
          </Paragraph>
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {capability.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-neutral-300 border border-white/5 group-hover:border-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Projects Link if present */}
      {capability.featuredProjectIds && capability.featuredProjectIds.length > 0 && (
        <div className="pt-5 mt-4 border-t border-white/5 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-[var(--accent)] transition-colors group/link"
          >
            <span>Explore related projects</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      )}
    </Surface>
  );
};
