"use client";

import React, { useState, useMemo } from "react";
import { CertificationCard } from "./CertificationCard";
import { Badge } from "@/components/ui/Badge";
import type { Certification, CertificationCategory } from "@/types/credentials";
import { Award, Filter } from "lucide-react";

interface CertificationGridProps {
  certifications: Certification[];
  className?: string;
}

export const CertificationGrid: React.FC<CertificationGridProps> = ({
  certifications,
  className = "",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = new Set<string>(["All"]);
    certifications.forEach((c) => cats.add(c.category));
    return Array.from(cats);
  }, [certifications]);

  const filteredCertifications = useMemo(() => {
    if (selectedCategory === "All") {
      return certifications;
    }
    return certifications.filter((c) => c.category === selectedCategory);
  }, [certifications, selectedCategory]);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 mr-2">
          <Filter className="h-3.5 w-3.5 text-[var(--accent)]" />
          <span>Filter Category:</span>
        </div>

        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={isSelected}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] cursor-pointer ${
                isSelected
                  ? "bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/25"
                  : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCertifications.map((cert) => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>

      {filteredCertifications.length === 0 && (
        <div className="py-12 text-center text-sm text-neutral-400 font-mono">
          No certifications found for category &quot;{selectedCategory}&quot;.
        </div>
      )}
    </div>
  );
};
