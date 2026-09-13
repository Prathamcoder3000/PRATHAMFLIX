"use client";

import React from "react";
import type { EducationEntry } from "@/types/portfolio";

interface ResumeEducationProps {
  education: EducationEntry[];
}

export const ResumeEducation: React.FC<ResumeEducationProps> = ({ education }) => {
  return (
    <section className="space-y-3">
      <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] print:text-neutral-900 border-b border-white/5 print:border-neutral-200 pb-1">
        Academic Foundation
      </h2>

      <div className="space-y-3">
        {education.map((edu) => (
          <div key={edu.id} className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-sm font-bold text-white print:text-neutral-900">
                  {edu.degree} in {edu.field}
                </span>
                <span className="text-xs text-neutral-400 print:text-neutral-600 ml-2">
                  — {edu.institution}
                </span>
              </div>
              <span className="text-xs font-mono text-[var(--accent)] print:text-neutral-600">
                {edu.period}
              </span>
            </div>

            <p className="text-xs text-neutral-300 print:text-neutral-700 leading-relaxed">
              {edu.description}
            </p>

            {edu.highlights && edu.highlights.length > 0 && (
              <div className="text-[11px] font-mono text-neutral-400 print:text-neutral-600 pt-0.5">
                <span className="font-semibold text-neutral-300 print:text-neutral-800">
                  Relevant Coursework:{" "}
                </span>
                {edu.highlights.join(" · ")}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
