import React from "react";
import { Heading2, Paragraph } from "@/components/ui/Typography";

export interface ProjectDetailSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const ProjectDetailSection: React.FC<ProjectDetailSectionProps> = ({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}) => {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={`py-10 sm:py-14 border-t border-white/5 first-of-type:border-t-0 ${className}`}
    >
      <div className="space-y-6">
        <div className="space-y-1.5 max-w-3xl">
          {eyebrow && (
            <span className="text-xs font-mono font-semibold tracking-wider text-[var(--accent)] uppercase">
              {eyebrow}
            </span>
          )}
          <Heading2 id={id ? `${id}-heading` : undefined} className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
            {title}
          </Heading2>
          {subtitle && (
            <Paragraph className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
              {subtitle}
            </Paragraph>
          )}
        </div>

        {children}
      </div>
    </section>
  );
};
