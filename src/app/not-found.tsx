import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/shell/AppShell";
import { Container } from "@/components/ui/Container";
import { Heading1, Paragraph } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Compass, ArrowLeft, Film } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found",
  description: "The requested engineering universe or project stream could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <AppShell>
      <main className="min-h-[70vh] flex items-center justify-center py-16 px-4">
        <Container maxWidth="md" className="text-center space-y-6">
          {/* Status Badge */}
          <div className="flex items-center justify-center gap-2">
            <Badge variant="accent" className="font-mono text-xs uppercase">
              Signal Lost
            </Badge>
            <span className="text-xs font-mono text-neutral-500">Error 404</span>
          </div>

          {/* Large Monogram / Icon */}
          <div className="flex justify-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-[var(--accent)] shadow-2xl">
              <Film className="h-12 w-12 sm:h-16 sm:w-16 animate-pulse" aria-hidden="true" />
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-3">
            <Heading1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Universe Node Not Found
            </Heading1>
            <Paragraph className="text-sm sm:text-base text-neutral-400 max-w-md mx-auto leading-relaxed">
              The project case study, stream coordinates, or parameter route you are seeking
              does not exist in this catalog or has migrated.
            </Paragraph>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link href="/">
              <Button
                variant="primary"
                size="md"
                leftIcon={<ArrowLeft className="h-4 w-4" />}
              >
                Back to Overview
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                variant="outline"
                size="md"
                leftIcon={<Compass className="h-4 w-4 text-[var(--accent)]" />}
              >
                Browse Projects Catalog
              </Button>
            </Link>
          </div>
        </Container>
      </main>
    </AppShell>
  );
}
