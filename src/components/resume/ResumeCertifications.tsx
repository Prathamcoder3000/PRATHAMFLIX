"use client";

import React from "react";
import { getCertificationById } from "@/data/credentials";

interface ResumeCertificationsProps {
  certificationIds: string[];
}

export const ResumeCertifications: React.FC<ResumeCertificationsProps> = ({
  certificationIds,
}) => {
  const certs = certificationIds
    .map((id) => getCertificationById(id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <section className="space-y-3">
      <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] print:text-neutral-900 border-b border-white/5 print:border-neutral-200 pb-1">
        Certifications & Specializations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        {certs.map((c) => (
          <div key={c.id} className="space-y-0.5">
            <div className="font-semibold text-neutral-200 print:text-neutral-900">
              {c.title}
            </div>
            <div className="text-[11px] font-mono text-neutral-400 print:text-neutral-600">
              {c.issuer} · {c.category}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
