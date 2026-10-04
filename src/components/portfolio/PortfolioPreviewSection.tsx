"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Surface } from "@/components/ui/Surface";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { getPortfolioIdentity } from "@/data/portfolio";
import { User, ArrowRight, Sparkles, Terminal } from "lucide-react";

export const PortfolioPreviewSection: React.FC = () => {
  const identity = getPortfolioIdentity();

  return (
    <section className="py-12 sm:py-16 relative z-10">
      <Container maxWidth="2xl">
        <Surface
          elevation="subtle"
          padding="lg"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c0e17] via-[#080910] to-[#040508] p-6 sm:p-8 md:p-12 shadow-2xl"
        >
          {/* Atmospheric background blur */}
          <div
            className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-[var(--accent)]/15 rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-[90px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                <Badge variant="accent">Pratham · Engineering & Architecture</Badge>
              </div>

              <div className="space-y-2">
                <Heading2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                  {identity.name}
                </Heading2>
                <div className="text-sm sm:text-base font-medium text-neutral-300">
                  Computer Engineering Student · Full-Stack Developer · AI/ML Enthusiast
                </div>
              </div>

              <Paragraph className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Computer engineering student building full-stack systems, AI applications, mobile experiences, and intelligent software.
              </Paragraph>

              {/* Role Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {identity.roleTitles.map((role) => (
                  <Badge
                    key={role}
                    variant="subtle"
                    size="sm"
                    className="bg-white/5 border-white/10 text-neutral-300 font-mono text-[11px]"
                  >
                    {role}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Right Card Actions & Navigation CTA */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <Link href="/about" className="w-full">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center shadow-[0_0_20px_rgba(229,9,20,0.3)]"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Explore Full Journey
                </Button>
              </Link>

              <Link href="/resume" className="w-full">
                <Button
                  variant="outline"
                  size="md"
                  className="w-full justify-center bg-white/5 border-white/10 hover:bg-white/10"
                >
                  View Resume
                </Button>
              </Link>
            </div>
          </div>
        </Surface>
      </Container>
    </section>
  );
};

