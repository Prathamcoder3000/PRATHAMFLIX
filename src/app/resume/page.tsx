"use client";

import React from "react";
import {
  AppShell,
  Container,
  ResumeActions,
  ResumeDocument,
} from "@/components";
import { getResumeData } from "@/data/resume";
import { useProfile } from "@/hooks";

export default function ResumePage() {
  const { profileId } = useProfile();
  const isRecruiter = profileId === "recruiter";
  const resumeData = getResumeData();

  return (
    <AppShell>
      <main className="py-6 sm:py-10 md:py-14">
        <Container maxWidth="2xl">
          <div className="space-y-8">
            {/* Action Bar (Print, Save as PDF, Certifications link) */}
            <ResumeActions isRecruiter={isRecruiter} />

            {/* Render Printable Structured HTML Resume Document */}
            <ResumeDocument data={resumeData} isRecruiter={isRecruiter} />
          </div>
        </Container>
      </main>
    </AppShell>
  );
}
