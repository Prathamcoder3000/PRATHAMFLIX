import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/shell/AppShell";
import { Container } from "@/components/ui/Container";
import { Heading1, Paragraph } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Trophy } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements & Milestones",
  description:
    "Engineering awards, hackathon highlights, and architectural project milestones.",
  openGraph: {
    title: "Achievements & Milestones — PRATHAMFLIX",
    description:
      "Engineering awards, hackathon highlights, and architectural project milestones.",
  },
};

export default function AchievementsPage() {
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
              <Trophy className="h-8 w-8 text-[var(--accent)]" aria-hidden="true" />
              <Heading1>Achievements & Milestones</Heading1>
            </div>

            <Paragraph className="text-neutral-400">
              Navigation route destination verified. Real achievements, awards, and verified credentials
              will be displayed in future portfolio phases.
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
