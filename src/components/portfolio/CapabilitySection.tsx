"use client";

import React from "react";
import { CapabilityCard } from "./CapabilityCard";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import type { CapabilityGroup } from "@/types/portfolio";
import { Cpu } from "lucide-react";

interface CapabilitySectionProps {
  capabilities: CapabilityGroup[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const CapabilitySection: React.FC<CapabilitySectionProps> = ({
  capabilities,
  title = "Core Capabilities & Domains",
  subtitle = "Architectural proficiencies across full-stack systems, mobile clients, AI workflows, and hardware telemetry.",
  className = "",
}) => {
  return (
    <section id="capabilities" aria-labelledby="capabilities-heading" className={`space-y-8 ${className}`}>
      <div className="space-y-2 max-w-3xl">
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
          <Badge variant="accent">Technical Competencies</Badge>
        </div>
        <Heading2 id="capabilities-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {title}
        </Heading2>
        {subtitle && (
          <Paragraph className="text-sm sm:text-base text-neutral-400">
            {subtitle}
          </Paragraph>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {capabilities.map((cap) => (
          <CapabilityCard key={cap.id} capability={cap} />
        ))}
      </div>
    </section>
  );
};
