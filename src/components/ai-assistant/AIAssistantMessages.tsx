"use client";

import React, { useEffect, useRef } from "react";
import type { AssistantMessage as MessageType } from "@/types/ai-assistant";
import { AIAssistantMessage } from "./AIAssistantMessage";
import { AIAssistantTyping } from "./AIAssistantTyping";

interface AIAssistantMessagesProps {
  messages: MessageType[];
  isLoading: boolean;
  onNavigate?: () => void;
}

export const AIAssistantMessages: React.FC<AIAssistantMessagesProps> = ({
  messages,
  isLoading,
  onNavigate,
}) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div
      aria-live="polite"
      className="flex-1 overflow-y-auto px-1 py-4 space-y-2 scroll-smooth"
    >
      {messages.map((message) => (
        <AIAssistantMessage
          key={message.id}
          message={message}
          onNavigate={onNavigate}
        />
      ))}
      {isLoading && <AIAssistantTyping />}
      <div ref={bottomRef} className="h-1" />
    </div>
  );
};
