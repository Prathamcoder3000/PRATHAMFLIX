"use client";

import React, { useState } from "react";
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
  ProjectPreview,
  MobileShowcase,
  AIShowcase,
  DeveloperExperienceSection,
  PortfolioPreviewSection,
  CertificationPreviewSection,
} from "@/components";
import {
  featuredProjects,
  systemsProjects,
  experimentsProjects,
  getMobileProjects,
  getFeaturedMobileProject,
  getAIProjects,
  getFeaturedAIProject,
} from "@/data/projects";
import { useIntroState, useProfile } from "@/hooks";
import type { ProjectCardData } from "@/types";
import { Sparkles, Compass, ShieldCheck } from "lucide-react";

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

  const mobileProjects = getMobileProjects();
  const featuredMobile = getFeaturedMobileProject();
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

        {/* Phase 6, 7, 8, 10, 11: Streaming-Style Content Rows & Product Showcases */}
        <div className="py-4 sm:py-6 space-y-8">
          <ContentRow
            title="Featured Work"
            subtitle="Curated structural showcase of engineering systems"
            seeAllHref="/projects"
          >
            {featuredProjects.map((project) => (
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
            subtitle="Neural inference acceleration, multi-agent DAG orchestrators, and spatial computer vision"
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

          {/* Phase 10: Featured Mobile Application Product Showcase */}
          {featuredMobile && (
            <MobileShowcase project={featuredMobile} />
          )}

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
            title="Systems & Applications"
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
            subtitle="Artificial intelligence, machine learning, and creative code"
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

        {/* Phase 16: Career & Identity Preview */}
        <PortfolioPreviewSection />

        {/* Phase 17: Certifications & Continuous Learning Preview */}
        <CertificationPreviewSection />

        {/* Phase 8: Project Preview Dialog */}
        <ProjectPreview
          project={selectedProject}
          isOpen={Boolean(selectedProject)}
          onClose={handleClosePreview}
        />


        {/* Section Below Hero: Welcome & Architecture Overview */}
        <section className="py-12 sm:py-16 md:py-20 relative z-10">
          <Container maxWidth="2xl">
            <Divider variant="gradient" className="mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Surface elevation="subtle" padding="lg" className="space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  <Badge variant="accent">Cinematic Experience</Badge>
                </div>
                <Heading3 className="text-lg">Streaming UX Philosophy</Heading3>
                <Paragraph className="text-xs sm:text-sm text-neutral-400">
                  Engineered with atmospheric lighting, smooth GPU transitions, and rich
                  cinematic interaction patterns.
                </Paragraph>
              </Surface>

              <Surface elevation="subtle" padding="lg" className="space-y-[3px] space-y-3">
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  <Badge variant="subtle">Modern Architecture</Badge>
                </div>
                <Heading3 className="text-lg">Full-Stack Foundation</Heading3>
                <Paragraph className="text-xs sm:text-sm text-neutral-400">
                  Built on Next.js App Router, TypeScript, and Tailwind CSS v4 with modular
                  design tokens and reusable primitives.
                </Paragraph>
              </Surface>

              <Surface elevation="subtle" padding="lg" className="space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  <Badge variant="subtle">Verified Engineering</Badge>
                </div>
                <Heading3 className="text-lg">Specialized Domains</Heading3>
                <Paragraph className="text-xs sm:text-sm text-neutral-400">
                  Covering Computer Engineering, Full-Stack applications, Mobile development,
                  AI/ML models, and connected IoT systems.
                </Paragraph>
              </Surface>
            </div>
          </Container>
        </section>
      </AppShell>
    </>
  );
}

