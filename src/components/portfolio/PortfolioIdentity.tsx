"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading1, Paragraph } from "@/components/ui/Typography";
import type { PortfolioIdentityData } from "@/types/portfolio";
import {
  Sparkles,
  MapPin,
  FolderGit2,
  FileText,
  Terminal,
  Mail,
  ShieldCheck,
} from "lucide-react";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
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

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
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

interface PortfolioIdentityProps {
  identity: PortfolioIdentityData;
  onOpenTerminal?: () => void;
  isRecruiterView?: boolean;
}

export const PortfolioIdentity: React.FC<PortfolioIdentityProps> = ({
  identity,
  onOpenTerminal,
  isRecruiterView = false,
}) => {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 overflow-hidden shadow-2xl">
      {/* Background cinematic atmosphere */}
      <div
        className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[var(--accent)]/15 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 -mb-20 w-60 h-60 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-8">
        {/* Top Status & Mode Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-medium text-emerald-400 tracking-wide">
              {identity.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant={isRecruiterView ? "accent" : "subtle"} size="sm" className="font-mono text-[11px]">
              {isRecruiterView ? "Recruiter Persona View" : "Full Portfolio Persona"}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-neutral-400 font-mono">
              <MapPin className="h-3 w-3 text-neutral-500" />
              <span>{identity.location}</span>
            </div>
          </div>
        </div>

        {/* Hero Identity Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Avatar Monogram & Badges */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <div className="relative group">
              <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-2xl bg-gradient-to-br from-[var(--accent)]/30 via-neutral-900 to-neutral-950 border-2 border-[var(--accent)]/40 flex items-center justify-center shadow-inner shadow-[var(--accent)]/20 transition-all duration-300 group-hover:border-[var(--accent)]">
                <span className="font-heading font-black text-4xl sm:text-5xl text-white tracking-wider">
                  P
                </span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-neutral-900 border border-white/10 rounded-lg p-1.5 shadow-lg">
                <ShieldCheck className="h-4 w-4 text-[var(--accent)]" />
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                Lead Architect & Engineer
              </div>
              <div className="text-sm font-medium text-neutral-400">
                PRATHAMFLIX Engine
              </div>
            </div>
          </div>

          {/* Core Bio & Role Highlights */}
          <div className="lg:col-span-8 space-y-4">
            <div className="space-y-2">
              <Heading1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                {identity.name}
              </Heading1>
              <div className="text-base sm:text-lg text-[var(--accent)] font-medium font-heading">
                {identity.headline}
              </div>
            </div>

            {/* Role Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {identity.roleTitles.map((role) => (
                <Badge
                  key={role}
                  variant="subtle"
                  size="md"
                  className="bg-white/5 border-white/10 text-neutral-200 text-xs sm:text-sm py-1 px-3"
                >
                  {role}
                </Badge>
              ))}
            </div>

            <Paragraph className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl pt-2">
              {identity.shortBio}
            </Paragraph>
          </div>
        </div>

        {/* Action Buttons & Quick Endpoints */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/projects">
              <Button
                variant="primary"
                size="md"
                leftIcon={<FolderGit2 className="h-4 w-4" />}
              >
                Explore Projects
              </Button>
            </Link>

            <Link href="/resume">
              <Button
                variant="secondary"
                size="md"
                leftIcon={<FileText className="h-4 w-4" />}
              >
                View Resume
              </Button>
            </Link>

            {onOpenTerminal && (
              <Button
                variant="outline"
                size="md"
                onClick={onOpenTerminal}
                leftIcon={<Terminal className="h-4 w-4 text-[var(--accent)]" />}
              >
                Open Terminal
              </Button>
            )}
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Prathamcoder3000"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:contact@prathamflix.dev"
              className="h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
              aria-label="Email Contact"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
