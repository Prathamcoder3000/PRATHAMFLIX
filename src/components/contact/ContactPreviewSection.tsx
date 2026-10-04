"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Surface } from "@/components/ui/Surface";
import { Button } from "@/components/ui/Button";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { Mail, ArrowRight, Sparkles, Send, FileText } from "lucide-react";

export const ContactPreviewSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative z-10">
      <Container maxWidth="2xl">
        <Surface
          elevation="subtle"
          padding="lg"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0e0f17] via-[#090a10] to-[#040407] p-8 sm:p-14 md:p-20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-center"
        >
          {/* Atmospheric background glows */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent)]/15 rounded-full blur-[140px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-32 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[var(--accent)] tracking-wider uppercase font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Ready For The Next Build?</span>
            </div>

            <Heading2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Have an engineering opportunity, product idea, or collaboration in mind?
            </Heading2>

            <Paragraph className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl mx-auto">
              Whether you are looking to hire a dedicated full-stack engineer, build an intelligent AI system, or explore innovative software architecture—let&apos;s build together.
            </Paragraph>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  leftIcon={<Send className="h-4 w-4" />}
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  className="w-full sm:w-auto shadow-[0_0_25px_rgba(229,9,20,0.35)]"
                >
                  Get in Touch
                </Button>
              </Link>

              <Link href="/resume" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  leftIcon={<FileText className="h-4 w-4" />}
                  className="w-full sm:w-auto bg-white/5 border-white/15 hover:bg-white/10"
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

