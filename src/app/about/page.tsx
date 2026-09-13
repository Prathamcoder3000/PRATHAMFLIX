"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AppShell,
  Container,
  Divider,
  PortfolioIdentity,
  AboutSection,
  CapabilitySection,
  EducationSection,
  DevelopmentPhilosophy,
  InterestSection,
  CareerTimeline,
  DeveloperTerminal,
  Button,
} from "@/components";
import {
  getPortfolioIdentity,
  getCapabilities,
  getTimeline,
  getEducation,
  getPhilosophy,
  getInterests,
} from "@/data/portfolio";
import { useProfile } from "@/hooks";
import { ArrowLeft, Sparkles, User, Briefcase } from "lucide-react";

export default function AboutPage() {
  const { profileId } = useProfile();
  const isRecruiter = profileId === "recruiter";

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const identity = getPortfolioIdentity();
  const capabilities = getCapabilities();
  const timeline = getTimeline();
  const education = getEducation();
  const philosophy = getPhilosophy();
  const interests = getInterests();

  return (
    <AppShell>
      <main className="py-8 sm:py-12 md:py-16">
        <Container maxWidth="2xl">
          <div className="space-y-12 sm:space-y-16">
            {/* Top Navigation & Breadcrumb */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<ArrowLeft className="h-4 w-4" />}
                >
                  Back to Overview
                </Button>
              </Link>

              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <User className="h-3.5 w-3.5 text-[var(--accent)]" />
                <span>PRATHAMFLIX / About & Career</span>
              </div>
            </div>

            {/* 1. Identity Banner */}
            <PortfolioIdentity
              identity={identity}
              onOpenTerminal={() => setIsTerminalOpen(true)}
              isRecruiterView={isRecruiter}
            />

            {/* In Recruiter View, prioritize capabilities and education first */}
            {isRecruiter ? (
              <>
                {/* 2. Core Capabilities */}
                <CapabilitySection
                  capabilities={capabilities}
                  title="Professional Capabilities & Stacks"
                  subtitle="Core architectural proficiencies prioritized for engineering evaluation."
                />

                <Divider variant="subtle" />

                {/* 3. Education */}
                <EducationSection education={education} />

                <Divider variant="subtle" />

                {/* 4. Timeline */}
                <CareerTimeline
                  entries={timeline}
                  title="Engineering Timeline & Projects"
                  subtitle="Key development and architecture milestones."
                />

                <Divider variant="subtle" />

                {/* 5. About & Mindset */}
                <AboutSection identity={identity} />

                <Divider variant="subtle" />

                {/* 6. Philosophy */}
                <DevelopmentPhilosophy principles={philosophy} />
              </>
            ) : (
              <>
                {/* In Standard PRATHAM view: Full narrative flow */}
                {/* 2. About Narrative */}
                <AboutSection identity={identity} />

                <Divider variant="subtle" />

                {/* 3. Capabilities Grid */}
                <CapabilitySection capabilities={capabilities} />

                <Divider variant="subtle" />

                {/* 4. Timeline */}
                <CareerTimeline entries={timeline} />

                <Divider variant="subtle" />

                {/* 5. Education */}
                <EducationSection education={education} />

                <Divider variant="subtle" />

                {/* 6. Development Philosophy */}
                <DevelopmentPhilosophy principles={philosophy} />

                <Divider variant="subtle" />

                {/* 7. Areas of Interest */}
                <InterestSection interests={interests} />
              </>
            )}
          </div>
        </Container>
      </main>

      {/* Interactive Developer Terminal Modal */}
      <DeveloperTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        isModal={true}
      />
    </AppShell>
  );
}
