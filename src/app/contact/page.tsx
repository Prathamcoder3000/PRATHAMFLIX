"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  AppShell,
  Container,
  Divider,
  Button,
  ContactHero,
  ContactForm,
  ContactDirectLinks,
} from "@/components";
import { useProfile } from "@/hooks";
import { ArrowLeft, Mail } from "lucide-react";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const reasonParam = searchParams.get("reason") || undefined;
  const { profileId } = useProfile();
  const isRecruiter = profileId === "recruiter";

  return (
    <div className="space-y-8 sm:space-y-12">
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
          <Mail className="h-3.5 w-3.5 text-[var(--accent)]" />
          <span>PRATHAMFLIX / Contact</span>
        </div>
      </div>

      {/* Main Content Grid: Hero & Form on left, Direct channels on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 Cols: Narrative Hero & Form */}
        <div className="lg:col-span-7 space-y-8">
          <ContactHero isRecruiter={isRecruiter} />
          <ContactForm initialReason={reasonParam} isRecruiter={isRecruiter} />
        </div>

        {/* Right 5 Cols: Direct Communication Channels & Telemetry */}
        <div className="lg:col-span-5 space-y-6">
          <ContactDirectLinks />
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <AppShell>
      <main className="py-8 sm:py-12 md:py-16">
        <Container maxWidth="2xl">
          <Suspense
            fallback={
              <div className="py-24 text-center text-sm font-mono text-neutral-500 animate-pulse">
                Initializing communication channels...
              </div>
            }
          >
            <ContactPageContent />
          </Suspense>
        </Container>
      </main>
    </AppShell>
  );
}
