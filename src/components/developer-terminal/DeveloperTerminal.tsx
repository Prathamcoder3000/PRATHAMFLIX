"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalHeader } from "./TerminalHeader";
import { TerminalOutput } from "./TerminalOutput";
import { TerminalInput } from "./TerminalInput";
import { useTerminal } from "@/hooks/useTerminal";

export interface DeveloperTerminalProps {
  isOpen?: boolean;
  onClose?: () => void;
  isModal?: boolean;
  className?: string;
}

export const DeveloperTerminal: React.FC<DeveloperTerminalProps> = ({
  isOpen = true,
  onClose,
  isModal = false,
  className = "",
}) => {
  const {
    input,
    setInput,
    history,
    execute,
    navigateHistory,
    autocomplete,
  } = useTerminal();

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal output to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const terminalBody = (
    <div
      className={`rounded-2xl bg-[#090b10] border border-white/10 shadow-2xl overflow-hidden flex flex-col font-mono ${className}`}
    >
      <TerminalHeader onClose={onClose} />

      {/* Terminal Viewport */}
      <div
        ref={scrollRef}
        className="flex-1 p-4 sm:p-6 overflow-y-auto max-h-[420px] sm:max-h-[500px] space-y-3 scrollbar-thin scrollbar-thumb-white/10"
      >
        <TerminalOutput history={history} />
        <TerminalInput
          value={input}
          onChange={setInput}
          onSubmit={execute}
          onNavigateHistory={navigateHistory}
          onAutocomplete={autocomplete}
        />
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-2 border-t border-white/5 bg-black/40 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
        <div>Type &quot;help&quot; for available commands</div>
        <div className="flex items-center gap-3">
          <span>Tab: Autocomplete</span>
          <span>•</span>
          <span>Ctrl+L: Clear</span>
        </div>
      </div>
    </div>
  );

  if (isModal) {
    if (!isOpen) return null;

    return (
      <AnimatePresence>
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Interactive Developer Terminal"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            key="terminal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Surface */}
          <motion.div
            key="terminal-modal"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full max-w-3xl"
          >
            {terminalBody}
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  return terminalBody;
};
