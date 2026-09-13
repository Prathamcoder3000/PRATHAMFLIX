"use client";

import React from "react";
import Link from "next/link";
import { Surface } from "@/components/ui/Surface";
import { Button } from "@/components/ui/Button";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { CheckCircle2, ArrowRight, RotateCcw, FolderGit2 } from "lucide-react";

interface ContactSuccessProps {
  onReset: () => void;
  className?: string;
}

export const ContactSuccess: React.FC<ContactSuccessProps> = ({
  onReset,
  className = "",
}) => {
  return (
    <Surface
      elevation="subtle"
      padding="lg"
      className={`rounded-2xl border border-emerald-500/20 bg-neutral-950/90 backdrop-blur-xl p-8 sm:p-12 text-center space-y-6 max-w-xl mx-auto shadow-2xl ${className}`}
    >
      <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
        <CheckCircle2 className="h-8 w-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
          Transmission Confirmed
        </span>
        <Heading2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Message Received
        </Heading2>
        <Paragraph className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. Your transmission has been successfully delivered. I will review and reply as soon as possible.
        </Paragraph>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-white/5">
        <Button
          variant="secondary"
          size="md"
          onClick={onReset}
          leftIcon={<RotateCcw className="h-4 w-4" />}
          className="w-full sm:w-auto"
        >
          Send Another Message
        </Button>

        <Link href="/projects" className="w-full sm:w-auto">
          <Button
            variant="primary"
            size="md"
            rightIcon={<ArrowRight className="h-4 w-4" />}
            className="w-full sm:w-auto"
          >
            Explore Projects
          </Button>
        </Link>
      </div>
    </Surface>
  );
};
