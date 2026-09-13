"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Heading1, Paragraph } from "@/components/ui/Typography";
import { Mail, Sparkles, Send } from "lucide-react";

interface ContactHeroProps {
  isRecruiter?: boolean;
  className?: string;
}

export const ContactHero: React.FC<ContactHeroProps> = ({
  isRecruiter = false,
  className = "",
}) => {
  return (
    <div className={`space-y-4 max-w-3xl ${className}`}>
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
        <Badge variant="accent">
          {isRecruiter ? "Hiring & Recruitment Inquiry" : "Direct Transmission"}
        </Badge>
        {isRecruiter && (
          <Badge variant="subtle" size="sm" className="font-mono text-[10px]">
            Recruiter Mode Active
          </Badge>
        )}
      </div>

      <Heading1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
        {isRecruiter ? "Interested in working together?" : "Let's build something meaningful."}
      </Heading1>

      <Paragraph className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
        {isRecruiter
          ? "Connect directly regarding software engineering opportunities, internships, full-time positions, or technical evaluation."
          : "Whether you have a full-stack project in mind, an AI pipeline discussion, or an open-source collaboration, reach out directly."}
      </Paragraph>
    </div>
  );
};
