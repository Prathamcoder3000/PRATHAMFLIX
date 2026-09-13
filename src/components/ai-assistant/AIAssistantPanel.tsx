"use client";

import React, { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AIAssistantHeader } from "./AIAssistantHeader";
import { AIAssistantSuggestions } from "./AIAssistantSuggestions";
import { AIAssistantMessages } from "./AIAssistantMessages";
import { AIAssistantError } from "./AIAssistantError";
import { AIAssistantInput } from "./AIAssistantInput";
import { useAIAssistant } from "@/hooks/useAIAssistant";
import { useProfile } from "@/hooks/useProfile";

interface AIAssistantPanelProps {
  isOpen: boolean;
  onClose: () => void;
  assistantState: ReturnType<typeof useAIAssistant>;
}

export const AIAssistantPanel: React.FC<AIAssistantPanelProps> = ({
  isOpen,
  onClose,
  assistantState,
}) => {
  const { profileId } = useProfile();
  const {
    messages,
    input,
    isLoading,
    error,
    isConfigured,
    setInput,
    sendMessage,
    clearChat,
  } = assistantState;

  // Handle ESC key to close
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop on mobile/desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm sm:bg-black/30"
            aria-hidden="true"
          />

          {/* Assistant Modal / Drawer */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="PRATHAMFLIX AI Assistant"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed z-50 inset-x-0 bottom-0 top-14 sm:top-auto sm:bottom-6 sm:right-6 sm:left-auto sm:w-[440px] sm:h-[620px] bg-zinc-950 border border-zinc-800 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <AIAssistantHeader
              onClose={onClose}
              onClear={clearChat}
              profileMode={profileId}
              isConfigured={isConfigured}
            />

            {/* Suggestions Chips */}
            <AIAssistantSuggestions
              onSelectSuggestion={(q) => sendMessage(q)}
              disabled={isLoading}
            />

            {/* Error Banner */}
            <AIAssistantError error={error} />

            {/* Chat Messages */}
            <AIAssistantMessages
              messages={messages}
              isLoading={isLoading}
              onNavigate={onClose}
            />

            {/* Input Bar */}
            <AIAssistantInput
              value={input}
              onChange={setInput}
              onSubmit={() => sendMessage()}
              isLoading={isLoading}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
