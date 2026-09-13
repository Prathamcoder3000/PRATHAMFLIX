"use client";

import React from "react";
import { getProjectById } from "@/data/projects";

interface ResumeProjectsProps {
  projectIds: string[];
}

export const ResumeProjects: React.FC<ResumeProjectsProps> = ({ projectIds }) => {
  const projects = projectIds
    .map((id) => getProjectById(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="space-y-4">
      <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] print:text-neutral-900 border-b border-white/5 print:border-neutral-200 pb-1">
        Featured Systems & Key Projects
      </h2>

      <div className="space-y-3.5">
        {projects.map((proj) => (
          <div key={proj.id} className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-sm font-bold text-white print:text-neutral-900">
                  {proj.title}
                </span>
                {proj.category && (
                  <span className="text-xs text-neutral-400 print:text-neutral-600 ml-2">
                    — {proj.category}
                  </span>
                )}
              </div>
              {proj.year && (
                <span className="text-[11px] font-mono text-[var(--accent)] print:text-neutral-600">
                  {proj.year}
                </span>
              )}
            </div>

            {proj.shortDescription && (
              <p className="text-xs text-neutral-300 print:text-neutral-700 leading-relaxed">
                {proj.shortDescription}
              </p>
            )}

            {proj.technologies && proj.technologies.length > 0 && (
              <div className="text-[11px] font-mono text-neutral-400 print:text-neutral-600 pt-0.5">
                <span className="font-semibold text-neutral-300 print:text-neutral-800">Stack: </span>
                {proj.technologies.join(" · ")}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
