"use client";

import React from "react";
import type { ResumeSkillCategory } from "@/types/resume";

interface ResumeSkillsProps {
  categories: ResumeSkillCategory[];
}

export const ResumeSkills: React.FC<ResumeSkillsProps> = ({ categories }) => {
  return (
    <section className="space-y-3">
      <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] print:text-neutral-900 border-b border-white/5 print:border-neutral-200 pb-1">
        Technical Competencies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        {categories.map((cat) => (
          <div key={cat.title} className="space-y-1">
            <span className="font-semibold text-neutral-200 print:text-neutral-800">
              {cat.title}:{" "}
            </span>
            <span className="text-neutral-400 print:text-neutral-600">
              {cat.skills.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
