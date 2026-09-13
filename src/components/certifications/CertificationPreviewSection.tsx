"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { CertificationCard } from "./CertificationCard";
import { getFeaturedCertifications } from "@/data/credentials";
import { Award, ArrowRight } from "lucide-react";

export const CertificationPreviewSection: React.FC = () => {
  const featured = getFeaturedCertifications().slice(0, 3);

  return (
    <section className="py-12 sm:py-16 relative z-10">
      <Container maxWidth="2xl">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                <Badge variant="accent">Verified Learning</Badge>
              </div>
              <Heading2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Certifications & Specializations
              </Heading2>
              <Paragraph className="text-xs sm:text-sm text-neutral-400">
                Continuous technical specializations across deep learning, cloud architectures, and cross-platform mobile frameworks.
              </Paragraph>
            </div>

            <Link href="/certifications" className="shrink-0">
              <Button
                variant="outline"
                size="md"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                View All Credentials
              </Button>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
