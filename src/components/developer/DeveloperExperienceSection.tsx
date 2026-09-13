"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { CurrentlyBuilding } from "./CurrentlyBuilding";
import { DeveloperStatus } from "./DeveloperStatus";
import { DeveloperTerminal } from "@/components/developer-terminal/DeveloperTerminal";
import { SectionReveal } from "@/components/transitions/SectionReveal";
import { Code2 } from "lucide-react";

export interface DeveloperExperienceSectionProps {
  className?: string;
}

export const DeveloperExperienceSection: React.FC<DeveloperExperienceSectionProps> = ({
  className = "",
}) => {
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);

  return (
    <SectionReveal>
      <section
        aria-label="Developer Experience & System Telemetry"
        className={`py-8 sm:py-12 relative z-10 ${className}`}
      >
        <Container maxWidth="2xl" className="space-y-6">
          {/* Section Header */}
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 font-bold uppercase tracking-widest">
            <Code2 className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
            <span>Developer Experience & Architecture</span>
          </div>

          {/* 2-Column Grid: Currently Building & Developer Status */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <CurrentlyBuilding />
            <DeveloperStatus onOpenTerminal={() => setIsTerminalModalOpen(true)} />
          </div>
        </Container>

        {/* Terminal Modal Dialog */}
        <DeveloperTerminal
          isOpen={isTerminalModalOpen}
          onClose={() => setIsTerminalModalOpen(false)}
          isModal
        />
      </section>
    </SectionReveal>
  );
};
