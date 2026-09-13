import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AppShell,
  Container,
  ProjectDetailHero,
  ProjectDetailOverview,
  ProjectDetailArchitecture,
  ProjectDetailFeatures,
  ProjectDetailEngineering,
  ProjectDetailTechStack,
  ProjectDetailNavigation,
  ContentRow,
  ProjectCard,
} from "@/components";
import {
  getAllProjects,
  getProjectById,
  getAdjacentProjects,
} from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const title = `${project.title} — Architecture Breakdown`;
  const description =
    project.shortDescription ||
    `Engineering case study and system architecture breakdown for ${project.title}.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} — PRATHAMFLIX`,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — PRATHAMFLIX`,
      description,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(id);
  const relatedProjects = getAllProjects().filter((p) => p.id !== id).slice(0, 6);

  return (
    <AppShell>
      <main className="py-8 sm:py-12 md:py-16">
        <Container maxWidth="2xl" className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* 1. Cinematic Hero & Media Header */}
          <ProjectDetailHero project={project} />

          {/* 2. Overview, Problem & Solution */}
          <ProjectDetailOverview project={project} />

          {/* 3. System Architecture & Pipeline */}
          <ProjectDetailArchitecture project={project} />

          {/* 4. Key Features & Capabilities */}
          <ProjectDetailFeatures project={project} />

          {/* 5. Engineering Highlights & Trade-offs */}
          <ProjectDetailEngineering project={project} />

          {/* 6. Categorized Technology Stack */}
          <ProjectDetailTechStack project={project} />

          {/* 7. Previous / Next Project Navigation */}
          <ProjectDetailNavigation prevProject={prev} nextProject={next} />

          {/* 8. Related Engineering Projects */}
          <section className="pt-8 sm:pt-12 border-t border-white/8">
            <ContentRow
              title="Explore More Engineering Systems"
              subtitle="Browse additional full-stack, distributed, and experimental projects."
              seeAllHref="/projects"
            >
              {relatedProjects.map((rel) => (
                <ProjectCard key={rel.id} project={rel} />
              ))}
            </ContentRow>
          </section>
        </Container>
      </main>
    </AppShell>
  );
}
