"use client";

import React from "react";
import { Surface } from "@/components/ui/Surface";
import { Heading2, Heading3, Paragraph } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import type { EducationEntry } from "@/types/portfolio";
import { GraduationCap, CheckCircle2, BookOpen } from "lucide-react";

interface EducationSectionProps {
  education: EducationEntry[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  title = "Academic Foundation",
  subtitle = "Rigorous coursework and foundations in computer engineering, algorithmic thinking, and distributed computing.",
  className = "",
}) => {
  return (
    <section id="education" aria-labelledby="education-heading" className={`space-y-8 ${className}`}>
      <div className="space-y-2 max-w-3xl">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
          <Badge variant="accent">Education</Badge>
        </div>
        <Heading2 id="education-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {title}
        </Heading2>
        {subtitle && (
          <Paragraph className="text-sm sm:text-base text-neutral-400">
            {subtitle}
          </Paragraph>
        )}
      </div>

      <div className="space-y-6">
        {education.map((edu) => (
          <Surface
            key={edu.id}
            elevation="subtle"
            padding="lg"
            className="border border-white/10 rounded-xl bg-neutral-950/60 backdrop-blur-md p-6 sm:p-8 space-y-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-white/5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="subtle" size="sm" className="font-mono text-[11px]">
                    {edu.degree}
                  </Badge>
                  <span className="text-xs font-mono text-neutral-400">{edu.period}</span>
                </div>
                <Heading3 className="text-xl sm:text-2xl font-bold text-white pt-1">
                  {edu.field}
                </Heading3>
                <div className="text-sm font-medium text-[var(--accent)]">
                  {edu.institution}
                </div>
              </div>

              <div className="h-12 w-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
                <BookOpen className="h-6 w-6" />
              </div>
            </div>

            <Paragraph className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl">
              {edu.description}
            </Paragraph>

            {/* Core Coursework Highlights */}
            {edu.highlights && edu.highlights.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
                  Key Academic Highlights & Systems Focus
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {edu.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs text-neutral-200"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Surface>
        ))}
      </div>
    </section>
  );
};
