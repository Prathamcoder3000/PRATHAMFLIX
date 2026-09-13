"use client";

import React from "react";
import Link from "next/link";
import {
  AppShell,
  Container,
  Divider,
  CertificationGrid,
  Button,
  Badge,
  Heading1,
  Paragraph,
} from "@/components";
import { getCertifications } from "@/data/credentials";
import { useProfile } from "@/hooks";
import { ArrowLeft, Award, FileText, Sparkles, CheckCircle2 } from "lucide-react";

export default function CertificationsPage() {
  const { profileId } = useProfile();
  const isRecruiter = profileId === "recruiter";
  const certifications = getCertifications();

  return (
    <AppShell>
      <main className="py-8 sm:py-12 md:py-16">
        <Container maxWidth="2xl">
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

              <div className="flex items-center gap-3">
                <Link href="/resume">
                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={<FileText className="h-4 w-4 text-[var(--accent)]" />}
                  >
                    View Resume
                  </Button>
                </Link>
                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <Award className="h-3.5 w-3.5 text-[var(--accent)]" />
                  <span>PRATHAMFLIX / Certifications</span>
                </div>
              </div>
            </div>

            {/* Header Banner */}
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                <Badge variant="accent">Continuous Engineering Mastery</Badge>
                {isRecruiter && (
                  <Badge variant="subtle" size="sm" className="font-mono text-[10px]">
                    Recruiter View
                  </Badge>
                )}
              </div>

              <Heading1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Certifications & Specializations
              </Heading1>

              <Paragraph className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Curated technical credentials and specialized coursework covering neural network modeling, distributed cloud architectures, mobile client engineering, and IoT telemetry.
              </Paragraph>
            </div>

            <Divider variant="subtle" />

            {/* Filterable Certification Library Grid */}
            <CertificationGrid certifications={certifications} />
          </div>
        </Container>
      </main>
    </AppShell>
  );
}
