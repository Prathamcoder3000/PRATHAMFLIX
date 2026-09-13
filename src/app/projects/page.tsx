import React from "react";
import Link from "next/link";
import {
  AppShell,
  Container,
  Heading1,
  Paragraph,
  Badge,
  Button,
  ContentRow,
  ProjectCard,
} from "@/components";
import {
  featuredProjects,
  systemsProjects,
  experimentsProjects,
} from "@/data/projects";
import { ArrowLeft, FolderGit2 } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Engineering Systems",
  description:
    "Browse all engineering systems, distributed architectures, mobile clients, and experimental projects.",
  openGraph: {
    title: "Projects & Engineering Systems — PRATHAMFLIX",
    description:
      "Browse all engineering systems, distributed architectures, mobile clients, and experimental projects.",
  },
};

export default function ProjectsPage() {
  return (
    <AppShell>
      <main className="py-8 sm:py-12 md:py-16">
        <Container maxWidth="2xl" className="space-y-10 sm:space-y-12">
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <Badge variant="accent">Catalog</Badge>
              <Badge variant="subtle">Engineering Systems</Badge>
            </div>

            <div className="flex items-center gap-3">
              <FolderGit2 className="h-8 w-8 text-[var(--accent)]" aria-hidden="true" />
              <Heading1>Projects & Systems</Heading1>
            </div>

            <Paragraph className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
              Explore distributed backends, real-time media services, full-stack applications, and experimental algorithms. Click any card to inspect the full case study and architecture breakdown.
            </Paragraph>

            <div className="pt-2">
              <Link href="/">
                <Button variant="outline" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>

          {/* Project Content Rows */}
          <div className="space-y-8 pt-4 border-t border-white/5">
            <ContentRow
              title="Featured Work"
              subtitle="Curated structural showcase of engineering systems"
            >
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </ContentRow>

            <ContentRow
              title="Systems & Applications"
              subtitle="Full-stack web apps, cloud services, and real-time tools"
            >
              {systemsProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </ContentRow>

            <ContentRow
              title="Explore & Experiments"
              subtitle="Artificial intelligence, machine learning, and creative code"
            >
              {experimentsProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </ContentRow>
          </div>
        </Container>
      </main>
    </AppShell>
  );
}
