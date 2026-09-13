"use client";

import React from "react";
import type { ResumeData } from "@/types/resume";
import { Mail, MapPin, Globe } from "lucide-react";

interface ResumeHeaderProps {
  data: ResumeData;
}

function GithubIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export const ResumeHeader: React.FC<ResumeHeaderProps> = ({ data }) => {
  return (
    <div className="border-b border-white/10 pb-6 print:border-neutral-300 print:pb-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight print:text-neutral-900">
            {data.name}
          </h1>
          <div className="text-sm font-medium text-[var(--accent)] print:text-neutral-700 pt-0.5">
            {data.title}
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap sm:flex-col sm:items-end gap-x-4 gap-y-1.5 text-xs text-neutral-300 print:text-neutral-600 font-mono">
          <div className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5 text-neutral-400 print:text-neutral-600" />
            <a href={`mailto:${data.email}`} className="hover:underline">
              {data.email}
            </a>
          </div>

          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-neutral-400 print:text-neutral-600" />
            <span>{data.location}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <GithubIcon className="h-3.5 w-3.5 text-neutral-400 print:text-neutral-600" />
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/Prathamcoder3000
            </a>
          </div>

          <div className="flex items-center gap-1.5">
            <LinkedinIcon className="h-3.5 w-3.5 text-neutral-400 print:text-neutral-600" />
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
