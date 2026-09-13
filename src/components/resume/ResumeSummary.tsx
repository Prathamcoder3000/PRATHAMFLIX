"use client";

import React from "react";

interface ResumeSummaryProps {
  summary: string;
}

export const ResumeSummary: React.FC<ResumeSummaryProps> = ({ summary }) => {
  return (
    <section className="space-y-2">
      <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] print:text-neutral-900 border-b border-white/5 print:border-neutral-200 pb-1">
        Professional Summary
      </h2>
      <p className="text-xs sm:text-sm text-neutral-300 print:text-neutral-700 leading-relaxed">
        {summary}
      </p>
    </section>
  );
};
