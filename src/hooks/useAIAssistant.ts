"use client";

import { useState, useCallback, useEffect } from "react";
import type { AssistantMessage, AssistantResponseBody } from "@/types/ai-assistant";
import { useProfile } from "@/hooks/useProfile";

const OPEN_ASSISTANT_EVENT = "prathamflix_open_assistant";

export const INITIAL_ASSISTANT_MESSAGE: AssistantMessage = {
  id: "msg-welcome",
  role: "assistant",
  content:
    "Hello! I'm **PRATHAMFLIX AI**, your intelligent guide to Pratham's portfolio. Ask me about projects, engineering skills, mobile apps, AI pipelines, GitHub activity, credentials, or how to get in touch.",
  timestamp: Date.now(),
  actions: [
    { label: "Explore Projects", href: "/projects" },
    { label: "View Resume", href: "/resume" },
    { label: "Contact Pratham", href: "/contact" },
  ],
};

export function useAIAssistant() {
  const { profileId } = useProfile();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<AssistantMessage[]>([INITIAL_ASSISTANT_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConfigured, setIsConfigured] = useState(true);

  const handleSendMessage = useCallback(
    async (textToSend?: string) => {
      const query = (textToSend !== undefined ? textToSend : input).trim();
      if (!query || isLoading) return;

      const userMessage: AssistantMessage = {
        id: `msg-user-${Date.now()}`,
        role: "user",
        content: query,
        timestamp: Date.now(),
      };

      const updatedHistory = [...messages, userMessage];
      setMessages(updatedHistory);
      setInput("");
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/assistant", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: updatedHistory
              .filter((m) => m.role === "user" || m.role === "assistant")
              .map((m) => ({ role: m.role, content: m.content })),
            profileMode: profileId,
          }),
        });

        const data: AssistantResponseBody = await response.json();

        if (data.message) {
          setMessages((prev) => [...prev, data.message]);
          setIsConfigured(data.isConfigured);
        }

        if (!data.success && data.error) {
          setError(data.error);
        }
      } catch (err) {
        console.error("AI Assistant query failed:", err);
        const errorMessage: AssistantMessage = {
          id: `msg-err-${Date.now()}`,
          role: "assistant",
          content:
            "I encountered a network issue while connecting to the assistant service. Please check your connection and try again, or explore the portfolio directly.",
          timestamp: Date.now(),
          actions: [
            { label: "Explore Projects", href: "/projects" },
            { label: "View Resume", href: "/resume" },
          ],
        };
        setMessages((prev) => [...prev, errorMessage]);
        setError("Network error. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading, messages, profileId]
  );

  const openAssistant = useCallback(
    (initialQuery?: string) => {
      setIsOpen(true);
      if (initialQuery) {
        setTimeout(() => {
          handleSendMessage(initialQuery);
        }, 100);
      }
    },
    [handleSendMessage]
  );

  const closeAssistant = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleAssistant = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const clearChat = useCallback(() => {
    setMessages([INITIAL_ASSISTANT_MESSAGE]);
    setError(null);
  }, []);

  // Listen for global open events (e.g. from Developer Terminal)
  useEffect(() => {
    const handleOpenEvent = (event: Event) => {
      const customEvent = event as CustomEvent<{ query?: string }>;
      setIsOpen(true);
      if (customEvent.detail?.query) {
        const query = customEvent.detail.query;
        setTimeout(() => {
          handleSendMessage(query);
        }, 100);
      }
    };

    window.addEventListener(OPEN_ASSISTANT_EVENT, handleOpenEvent);
    return () => {
      window.removeEventListener(OPEN_ASSISTANT_EVENT, handleOpenEvent);
    };
  }, [handleSendMessage]);

  return {
    isOpen,
    messages,
    input,
    isLoading,
    error,
    isConfigured,
    setInput,
    openAssistant,
    closeAssistant,
    toggleAssistant,
    clearChat,
    sendMessage: handleSendMessage,
  };
}

export function triggerOpenAssistant(query?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(OPEN_ASSISTANT_EVENT, { detail: { query } })
    );
  }
}
