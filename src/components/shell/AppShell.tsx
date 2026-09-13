"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Container } from "@/components/ui/Container";
import { AIAssistantButton, AIAssistantPanel } from "@/components/ai-assistant";
import { CinemaModeHUD } from "@/components/cinema/CinemaModeHUD";
import { ShortcutsModal } from "@/components/shortcuts/ShortcutsModal";
import { KonamiOverlay } from "@/components/easter-eggs/KonamiOverlay";
import { useAIAssistant } from "@/hooks/useAIAssistant";
import { useCinemaMode } from "@/hooks/useCinemaMode";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
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
  const { isCinemaMode, exitCinemaMode } = useCinemaMode();
  const { isShortcutsModalOpen, closeShortcutsModal } = useKeyboardShortcuts();

  const showStandardNavbar = !hideNavbar && !isCinemaMode;

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] antialiased relative",
        isCinemaMode && "cinema-mode-active"
      )}
    >
      {/* Top Persistent Streaming Navigation */}
      {showStandardNavbar && <Navbar />}

      {/* Minimal Cinema Mode HUD */}
      <CinemaModeHUD isVisible={isCinemaMode} onExit={exitCinemaMode} />

      {/* Main Viewport Content Area */}
      <div
        className={cn(
          "flex-1 flex flex-col",
          showStandardNavbar ? "pt-16 sm:pt-20" : "pt-4",
          className
        )}
      >
        {children}
      </div>

      {/* AI Assistant Floating Button & Panel */}
      <AIAssistantButton onClick={assistant.openAssistant} isOpen={assistant.isOpen} />
      <AIAssistantPanel
        isOpen={assistant.isOpen}
        onClose={assistant.closeAssistant}
        assistantState={assistant}
      />

      {/* Global Keyboard Shortcuts Help Modal */}
      <ShortcutsModal isOpen={isShortcutsModalOpen} onClose={closeShortcutsModal} />

      {/* Easter Egg Celebratory Overlay */}
      <KonamiOverlay />

      {/* Minimal Foundation Footer */}
      {!isCinemaMode && (
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
      )}
    </div>
  );
}
