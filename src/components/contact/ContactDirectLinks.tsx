"use client";

import React from "react";
import Link from "next/link";
import { Surface } from "@/components/ui/Surface";
import { Badge } from "@/components/ui/Badge";
import { Heading3, Paragraph } from "@/components/ui/Typography";
import { getPortfolioIdentity } from "@/data/portfolio";
import { Mail, FileText, ExternalLink, MapPin, Sparkles } from "lucide-react";

interface ContactDirectLinksProps {
  className?: string;
}

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

export const ContactDirectLinks: React.FC<ContactDirectLinksProps> = ({
  className = "",
}) => {
  const identity = getPortfolioIdentity();

  const channels = [
    {
      title: "Direct Email",
      subtitle: "contact@prathamflix.dev",
      href: "mailto:contact@prathamflix.dev",
      icon: Mail,
      isExternal: false,
    },
    {
      title: "LinkedIn",
      subtitle: "Connect professionally",
      href: "https://linkedin.com",
      icon: LinkedinIcon,
      isExternal: true,
    },
    {
      title: "GitHub",
      subtitle: "@Prathamcoder3000",
      href: "https://github.com/Prathamcoder3000",
      icon: GithubIcon,
      isExternal: true,
    },
    {
      title: "Resume Document",
      subtitle: "View & Save as PDF",
      href: "/resume",
      icon: FileText,
      isExternal: false,
      isRoute: true,
    },
  ];

  return (
    <Surface
      elevation="subtle"
      padding="lg"
      className={`rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-xl p-6 sm:p-8 space-y-6 ${className}`}
    >
      <div className="space-y-1.5">
        <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
          Alternative Channels
        </span>
        <Heading3 className="text-lg sm:text-xl font-bold text-white">
          Direct Contact Endpoints
        </Heading3>
        <Paragraph className="text-xs sm:text-sm text-neutral-400">
          Fastest communication channels for immediate engineering and recruiter outreach.
        </Paragraph>
      </div>

      <div className="space-y-3">
        {channels.map((ch) => {
          const Icon = ch.icon;

          if (ch.isRoute) {
            return (
              <Link
                key={ch.title}
                href={ch.href}
                className="flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/15 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:scale-105 transition-transform">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                      {ch.title}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-400">
                      {ch.subtitle}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-medium text-neutral-400 group-hover:text-white">
                  Open
                </div>
              </Link>
            );
          }

          return (
            <a
              key={ch.title}
              href={ch.href}
              target={ch.isExternal ? "_blank" : undefined}
              rel={ch.isExternal ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/15 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:scale-105 transition-transform">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                    {ch.title}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400">
                    {ch.subtitle}
                  </div>
                </div>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-neutral-400 group-hover:text-white transition-colors" />
            </a>
          );
        })}
      </div>

      <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
        <MapPin className="h-3.5 w-3.5 text-neutral-500" />
        <span>Location: {identity.location}</span>
      </div>
    </Surface>
  );
};
