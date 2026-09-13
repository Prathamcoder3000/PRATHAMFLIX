"use client";

import React from "react";
import { Surface } from "@/components/ui/Surface";
import { ResumeHeader } from "./ResumeHeader";
import { ResumeSummary } from "./ResumeSummary";
import { ResumeSkills } from "./ResumeSkills";
import { ResumeExperience } from "./ResumeExperience";
import { ResumeProjects } from "./ResumeProjects";
import { ResumeEducation } from "./ResumeEducation";
import { ResumeCertifications } from "./ResumeCertifications";
import type { ResumeData } from "@/types/resume";

interface ResumeDocumentProps {
  data: ResumeData;
  isRecruiter?: boolean;
}

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({
  data,
  isRecruiter = false,
}) => {
  return (
    <Surface
      elevation="subtle"
      padding="lg"
      className="print-document relative rounded-2xl border border-white/10 bg-neutral-950/90 backdrop-blur-xl p-6 sm:p-10 md:p-12 shadow-2xl space-y-8 max-w-4xl mx-auto print:border-none print:shadow-none print:bg-white print:p-0 print:m-0"
    >
      {/* Resume Top Header */}
      <ResumeHeader data={data} />

      {/* Recruiter profile prioritizes Skills & Projects before deep narrative */}
      {isRecruiter ? (
        <>
          <ResumeSummary summary={data.summary} />
          <ResumeSkills categories={data.skillCategories} />
          <ResumeProjects projectIds={data.featuredProjectIds} />
          <ResumeExperience experience={data.experience} />
          <ResumeEducation education={data.education} />
          <ResumeCertifications certificationIds={data.certificationIds} />
        </>
      ) : (
        <>
          <ResumeSummary summary={data.summary} />
          <ResumeExperience experience={data.experience} />
          <ResumeProjects projectIds={data.featuredProjectIds} />
          <ResumeSkills categories={data.skillCategories} />
          <ResumeEducation education={data.education} />
          <ResumeCertifications certificationIds={data.certificationIds} />
        </>
      )}

      {/* Footer / Verification note */}
      <div className="pt-6 border-t border-white/10 text-center text-[11px] font-mono text-neutral-500 print:text-neutral-500 print:border-neutral-200">
        Generated via PRATHAMFLIX Portfolio Platform · Verified Engineering Architecture
      </div>
    </Surface>
  );
};
