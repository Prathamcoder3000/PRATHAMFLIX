"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Printer, Download, Award, ArrowLeft, Check, Sparkles } from "lucide-react";

interface ResumeActionsProps {
  isRecruiter?: boolean;
}

export const ResumeActions: React.FC<ResumeActionsProps> = ({
  isRecruiter = false,
}) => {
  const [downloadNote, setDownloadNote] = useState(false);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleDownload = () => {
    // Phase 17: Official PDF asset is scheduled for Phase 22.
    // Triggering print provides instant save-as-PDF capability.
    setDownloadNote(true);
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.print();
      }
    }, 400);
    setTimeout(() => setDownloadNote(false), 4000);
  };

  return (
    <div className="space-y-3 no-print">
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-white/10 bg-neutral-950/80 backdrop-blur-md">
        {/* Left: Breadcrumbs & Status */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<ArrowLeft className="h-4 w-4" />}
            >
              Overview
            </Button>
          </Link>

          <Badge variant={isRecruiter ? "accent" : "subtle"} size="sm" className="font-mono text-[11px]">
            {isRecruiter ? "Recruiter Focused Resume" : "Full Portfolio Resume"}
          </Badge>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Link href="/certifications">
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<Award className="h-4 w-4 text-[var(--accent)]" />}
            >
              Certifications Library
            </Button>
          </Link>

          <Button
            variant="outline"
            size="sm"
            onClick={handlePrint}
            leftIcon={<Printer className="h-4 w-4" />}
          >
            Print Resume
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={handleDownload}
            leftIcon={<Download className="h-4 w-4" />}
          >
            Save as PDF
          </Button>
        </div>
      </div>

      {downloadNote && (
        <div className="p-3 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-xs text-neutral-200 flex items-center justify-between animate-fadeIn">
          <span>
            <strong>Instant Export:</strong> Select &quot;Save as PDF&quot; in the print dialog. (Verified official static PDF asset will be integrated in Phase 22).
          </span>
          <Check className="h-4 w-4 text-emerald-400 shrink-0 ml-2" />
        </div>
      )}
    </div>
  );
};
