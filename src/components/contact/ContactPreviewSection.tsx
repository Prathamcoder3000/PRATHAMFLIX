"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Surface } from "@/components/ui/Surface";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { Mail, ArrowRight, Sparkles, Send, FileText } from "lucide-react";

export const ContactPreviewSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 relative z-10">
      <Container maxWidth="2xl">
        <Surface
          elevation="subtle"
          padding="lg"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-8 sm:p-12 md:p-16 shadow-2xl text-center"
        >
          {/* Atmospheric background glows */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent)]/15 rounded-full blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[var(--accent)]">
              <Mail className="h-3.5 w-3.5" />
              <span>Let&apos;s Build Something Meaningful</span>
            </div>

            <Heading2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Have an engineering opportunity or project idea?
            </Heading2>

            <Paragraph className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Whether you are evaluating full-stack engineering candidates, seeking mobile or AI expertise, or proposing an open-source collaboration—let&apos;s connect.
            </Paragraph>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  leftIcon={<Send className="h-4 w-4" />}
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  className="w-full sm:w-auto"
                >
                  Get in Touch
                </Button>
              </Link>

              <Link href="/resume" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  leftIcon={<FileText className="h-4 w-4" />}
                  className="w-full sm:w-auto"
                >
                  View Resume
                </Button>
              </Link>
            </div>
          </div>
        </Surface>
      </Container>
    </section>
  );
};
