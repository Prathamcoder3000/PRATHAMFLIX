import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/shell/AppShell";
import { Container } from "@/components/ui/Container";
import { Heading1, Paragraph } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Cpu } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Technical Capabilities",
  description:
    "Comprehensive directory of full-stack engineering proficiencies, languages, tools, and platforms.",
  openGraph: {
    title: "Skills & Technical Capabilities — PRATHAMFLIX",
    description:
      "Comprehensive directory of full-stack engineering proficiencies, languages, tools, and platforms.",
  },
};

export default function SkillsPage() {
  return (
    <AppShell>
      <main className="py-12 sm:py-20">
        <Container maxWidth="2xl">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="accent">Navigation Route</Badge>
              <Badge variant="subtle">Phase 4 Verification</Badge>
            </div>

            <div className="flex items-center gap-3">
              <Cpu className="h-8 w-8 text-[var(--accent)]" aria-hidden="true" />
              <Heading1>Skills & Technologies</Heading1>
            </div>

            <Paragraph className="text-neutral-400">
              Navigation route destination verified. Real technology categorization and
              interactive skill matrices will be integrated in future phases.
            </Paragraph>

            <div className="pt-4">
              <Link href="/">
                <Button variant="outline" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                  Back to Overview
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </AppShell>
  );
}
