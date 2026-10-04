"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  AppShell,
  CinematicIntro,
  ProfileSelection,
  Hero,
  Container,
  Divider,
  Surface,
  Heading3,
  Paragraph,
  Badge,
  ContentRow,
  ProjectCard,
  FeaturedSpotlightCard,
  AIShowcase,
  DeveloperExperienceSection,
  PortfolioPreviewSection,
  CertificationPreviewSection,
  GitHubPreviewSection,
  ContactPreviewSection,
} from "@/components";

const ProjectPreview = dynamic(
  () => import("@/components/project-preview/ProjectPreview").then((mod) => mod.ProjectPreview),
  { ssr: true }
);
import {
  featuredProjects,
  systemsProjects,
  experimentsProjects,
  getMobileProjects,
  getAIProjects,
  getFeaturedAIProject,
} from "@/data/projects";
import { useIntroState, useProfile } from "@/hooks";
import type { ProjectCardData } from "@/types";
import { Sparkles, Compass, ShieldCheck, Layers, Cpu, Globe } from "lucide-react";

export default function HomePage() {
  const {
    isIntroActive,
    hasReducedMotion,
    isMounted,
    completeIntro,
    replayIntro,
  } = useIntroState();

  const { profileId, isProfileSelected, setProfile } = useProfile();

  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null);

  const handleSelectProject = (project: ProjectCardData) => {
    setSelectedProject(project);
  };

  const handleClosePreview = () => {
    setSelectedProject(null);
  };

  const promptGenius = featuredProjects[0];
  const supportingFeatured = featuredProjects.slice(1);
  const mobileProjects = getMobileProjects();
  const aiProjects = getAIProjects();
  const featuredAI = getFeaturedAIProject();

  const showProfileSelection = isMounted && !isIntroActive && !isProfileSelected;

  return (
    <>
      {/* Cinematic Opening Intro Experience */}
      {isMounted && (
        <CinematicIntro
          isActive={isIntroActive}
          onComplete={completeIntro}
          hasReducedMotion={hasReducedMotion}
        />
      )}

      {/* Phase 14: Who's watching? Profile Selection on first visit */}
      {showProfileSelection && (
        <ProfileSelection
          onSelect={(id) => setProfile(id)}
          selectedId={profileId}
          hasReducedMotion={hasReducedMotion}
        />
      )}

      {/* Persistent Application Shell & Navigation */}
      <AppShell>
        {/* Phase 5: Cinematic Hero Experience */}
        <Hero
          hasReducedMotion={hasReducedMotion}
          onReplayIntro={replayIntro}
        />

        {/* Cinematic Capability Strip (Connecting Hero to Featured Work) */}
        <section className="py-6 sm:py-8 relative z-10">
          <Container maxWidth="2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5">
              <Surface
                elevation="subtle"
                padding="md"
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-4 sm:p-5 flex items-start gap-3.5 hover:border-white/20 transition-colors"
              >
                <div className="p-2 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] shrink-0 border border-[var(--accent)]/20">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                    Full-Stack Systems
                  </div>
                  <div className="text-sm font-bold text-white tracking-tight">
                    Next.js 16 · React 19 · Node
                  </div>
                  <Paragraph className="text-xs text-neutral-400 line-clamp-2">
                    Production-grade full-stack architectures with low-latency APIs and reactive UI.
                  </Paragraph>
                </div>
              </Surface>

              <Surface
                elevation="subtle"
                padding="md"
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-4 sm:p-5 flex items-start gap-3.5 hover:border-purple-500/30 transition-colors"
              >
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 shrink-0 border border-purple-500/20">
                  <Cpu className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-purple-400/80 font-semibold">
                    Intelligent Agents
                  </div>
                  <div className="text-sm font-bold text-white tracking-tight">
                    Agentic AI · Bio-Telemetry
                  </div>
                  <Paragraph className="text-xs text-neutral-400 line-clamp-2">
                    Model-based closed-loop decision agents and real-time inference workflows.
                  </Paragraph>
                </div>
              </Surface>

              <Surface
                elevation="subtle"
                padding="md"
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-4 sm:p-5 flex items-start gap-3.5 hover:border-blue-500/30 transition-colors"
              >
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0 border border-blue-500/20">
                  <Layers className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-blue-400/80 font-semibold">
                    Engineering Polish
                  </div>
                  <div className="text-sm font-bold text-white tracking-tight">
                    Cinematic UX · TypeScript
                  </div>
                  <Paragraph className="text-xs text-neutral-400 line-clamp-2">
                    Design tokens, GPU animations, high-contrast accessibility, and type safety.
                  </Paragraph>
                </div>
              </Surface>
            </div>
          </Container>
        </section>

        {/* Phase 6: FEATURED WORK (The Main Event) */}
        <section className="pt-6 pb-8 relative z-10">
          <Container maxWidth="2xl">
            {promptGenius && (
              <FeaturedSpotlightCard
                project={promptGenius}
                onSelect={handleSelectProject}
              />
            )}
          </Container>
        </section>

        {/* Content Rows with Atmospheric Transitions */}
        <div className="py-4 sm:py-6 space-y-10 relative z-10">
          <ContentRow
            title="Selected Engineering Systems"
            subtitle="Curated structural showcase of engineering systems and applications"
            seeAllHref="/projects"
          >
            {supportingFeatured.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={handleSelectProject}
              />
            ))}
          </ContentRow>

          {/* Phase 11: Featured AI / ML & Intelligent Systems Showcase */}
          {featuredAI && (
            <AIShowcase project={featuredAI} />
          )}

          <ContentRow
            title="AI / ML & Intelligent Systems"
            subtitle="Agentic AI, intelligent applications, machine learning, and applied AI systems"
            seeAllHref="/projects?category=ai"
          >
            {aiProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={handleSelectProject}
              />
            ))}
          </ContentRow>

          <ContentRow
            title="Mobile Applications"
            subtitle="Cross-platform clients, offline-first sync engines, and native gesture physics"
            seeAllHref="/projects?category=mobile"
          >
            {mobileProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={handleSelectProject}
              />
            ))}
          </ContentRow>

          <ContentRow
            title="Systems & Distributed Services"
            subtitle="Full-stack web apps, cloud services, and real-time tools"
            seeAllHref="/projects?category=systems"
          >
            {systemsProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={handleSelectProject}
              />
            ))}
          </ContentRow>

          <ContentRow
            title="Explore & Experiments"
            subtitle="Artificial intelligence, algorithmic prototypes, and creative code"
            seeAllHref="/projects?category=experiments"
          >
            {experimentsProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={handleSelectProject}
              />
            ))}
          </ContentRow>
        </div>

        {/* Phase 15: Developer Experience, Currently Building & System Telemetry */}
        <DeveloperExperienceSection />

        {/* Phase 18: GitHub & Open Source Preview */}
        <GitHubPreviewSection />

        {/* Phase 16: Career & Identity Preview */}
        <PortfolioPreviewSection />

        {/* Phase 17: Certifications & Continuous Learning Preview */}
        <CertificationPreviewSection />

        {/* Phase 19: Contact System & Direct Outreach CTA */}
        <ContactPreviewSection />

        {/* Phase 8: Project Preview Dialog */}
        <ProjectPreview
          project={selectedProject}
          isOpen={Boolean(selectedProject)}
          onClose={handleClosePreview}
        />
      </AppShell>
    </>
  );
}


