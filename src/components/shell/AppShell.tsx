"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Container } from "@/components/ui/Container";
import { AIAssistantButton, AIAssistantPanel } from "@/components/ai-assistant";
import { useAIAssistant } from "@/hooks/useAIAssistant";
import { cn } from "@/lib/utils";
import type { BaseProps } from "@/types/ui";

export interface AppShellProps extends BaseProps {
  children: React.ReactNode;
  hideNavbar?: boolean;
}

export function AppShell({
  children,
  className,
  hideNavbar = false,
}: AppShellProps) {
  const assistant = useAIAssistant();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] antialiased relative">
      {/* Top Persistent Streaming Navigation */}
      {!hideNavbar && <Navbar />}

      {/* Main Viewport Content Area */}
      <div className={cn("flex-1 flex flex-col", !hideNavbar && "pt-16 sm:pt-20", className)}>
        {children}
      </div>

      {/* AI Assistant Floating Button & Panel */}
      <AIAssistantButton onClick={assistant.openAssistant} isOpen={assistant.isOpen} />
      <AIAssistantPanel
        isOpen={assistant.isOpen}
        onClose={assistant.closeAssistant}
        assistantState={assistant}
      />

      {/* Minimal Foundation Footer */}
      <footer
        className="w-full py-8 mt-auto border-t border-white/5 bg-black/40 text-neutral-500 text-xs select-none"
        role="contentinfo"
      >
        <Container maxWidth="2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p>PRATHAMFLIX • Streaming-Inspired Developer Portfolio Experience</p>
            <p className="text-neutral-600">Built by Pratham</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
