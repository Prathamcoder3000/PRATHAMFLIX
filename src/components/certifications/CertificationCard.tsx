"use client";

import React from "react";
import { Surface } from "@/components/ui/Surface";
import { Badge } from "@/components/ui/Badge";
import { Heading3, Paragraph } from "@/components/ui/Typography";
import type { Certification } from "@/types/credentials";
import {
  Award,
  BrainCircuit,
  Globe,
  Cloud,
  Cpu,
  Code2,
  ExternalLink,
  ShieldCheck,
  Calendar,
} from "lucide-react";

interface CertificationCardProps {
  certification: Certification;
}

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "AI & Machine Learning": BrainCircuit,
  "Web & Mobile Development": Globe,
  "Cloud & Systems": Cloud,
  "Hardware & IoT": Cpu,
  "Programming": Code2,
};

export const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
}) => {
  const IconComponent = CATEGORY_ICONS[certification.category] || Award;
  const isVerified = certification.verificationStatus === "verified";
  const hasCredentialUrl = Boolean(certification.credentialUrl);

  return (
    <Surface
      elevation="subtle"
      padding="lg"
      className="group relative flex flex-col justify-between border border-white/10 hover:border-[var(--accent)]/40 transition-all duration-300 rounded-xl bg-neutral-950/60 backdrop-blur-md overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-full blur-2xl group-hover:bg-[var(--accent)]/10 transition-all duration-500 pointer-events-none"
        aria-hidden="true"
      />

      <div className="space-y-4 relative z-10">
        {/* Header: Category Badge & Status Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:scale-105 transition-transform">
              <IconComponent className="h-4 w-4" />
            </div>
            <Badge variant="subtle" size="sm" className="font-mono text-[10px]">
              {certification.category}
            </Badge>
          </div>

          {isVerified ? (
            <Badge variant="accent" size="sm" className="text-[10px] bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              <ShieldCheck className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          ) : (
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              Coursework Credential
            </span>
          )}
        </div>

        {/* Title & Issuer */}
        <div className="space-y-1">
          <Heading3 className="text-base sm:text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors leading-snug">
            {certification.title}
          </Heading3>
          <div className="text-xs sm:text-sm font-medium text-neutral-400">
            {certification.issuer}
          </div>
        </div>

        {/* Description if provided */}
        {certification.description && (
          <Paragraph className="text-xs text-neutral-300 leading-relaxed line-clamp-3">
            {certification.description}
          </Paragraph>
        )}

        {/* Date if provided */}
        {certification.issueDate && (
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
            <Calendar className="h-3 w-3 text-neutral-500" />
            <span>Issued: {certification.issueDate}</span>
          </div>
        )}

        {/* Skill Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {certification.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-neutral-300 border border-white/5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 mt-4 border-t border-white/5 relative z-10 flex items-center justify-between">
        {hasCredentialUrl ? (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
          >
            <span>View Verified Credential</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span className="text-[11px] font-mono text-neutral-500">
            Credential Details Configured
          </span>
        )}
      </div>
    </Surface>
  );
};
