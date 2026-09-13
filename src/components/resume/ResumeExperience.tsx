"use client";

import React from "react";
import type { ResumeExperienceItem } from "@/types/resume";

interface ResumeExperienceProps {
  experience: ResumeExperienceItem[];
}

export const ResumeExperience: React.FC<ResumeExperienceProps> = ({ experience }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] print:text-neutral-900 border-b border-white/5 print:border-neutral-200 pb-1">
        Engineering Experience & Architecture
      </h2>

      <div className="space-y-4">
        {experience.map((item) => (
          <div key={item.id} className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-sm font-bold text-white print:text-neutral-900">
                  {item.role}
                </span>
                <span className="text-xs text-neutral-400 print:text-neutral-600 ml-2">
                  — {item.organization}
                </span>
              </div>
              <span className="text-xs font-mono text-[var(--accent)] print:text-neutral-600">
                {item.period}
              </span>
            </div>

            {item.summary && (
              <p className="text-xs text-neutral-300 print:text-neutral-700 italic">
                {item.summary}
              </p>
            )}

            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-neutral-300 print:text-neutral-700">
              {item.points.map((pt, i) => (
                <li key={i} className="leading-relaxed">
                  {pt}
                </li>
              ))}
            </ul>

            {item.technologies && item.technologies.length > 0 && (
              <div className="text-[11px] font-mono text-neutral-400 print:text-neutral-600 pt-0.5">
                <span className="font-semibold text-neutral-300 print:text-neutral-800">Stack: </span>
                {item.technologies.join(" · ")}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
