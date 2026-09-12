import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/shell/AppShell";
import { Container } from "@/components/ui/Container";
import { Heading1, Paragraph } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Bookmark } from "lucide-react";

export default function MyListPage() {
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
              <Bookmark className="h-8 w-8 text-[var(--accent)]" aria-hidden="true" />
              <Heading1>My List</Heading1>
            </div>

            <Paragraph className="text-neutral-400">
              Navigation route destination verified. Bookmark management, saved projects, and
              curated collections will be implemented in Phase 12.
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
