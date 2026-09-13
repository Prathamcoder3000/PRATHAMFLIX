"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { executeTerminalCommand, autocompleteCommand } from "@/lib/developer-commands";
import { useProfile } from "./useProfile";
import { useMyList } from "./useMyList";
import type { TerminalHistoryItem, TerminalContext } from "@/types/developer";

export function useTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    {
      id: "initial-welcome",
      command: "help",
      output:
        "Welcome to PRATHAMFLIX Developer Terminal (v1.0.0). Type 'help' to view available commands.",
      timestamp: 0,
    },
  ]);
  const [commandBuffer, setCommandBuffer] = useState<string[]>([]);
  const [bufferIndex, setBufferIndex] = useState<number>(-1);

  const { profileId, switchProfile } = useProfile();
  const { savedIds } = useMyList();

  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const openTerminal = useCallback(() => {
    if (typeof document !== "undefined") {
      lastActiveElementRef.current = document.activeElement as HTMLElement | null;
    }
    setIsOpen(true);
  }, []);

  const closeTerminal = useCallback(() => {
    setIsOpen(false);
    if (lastActiveElementRef.current && typeof lastActiveElementRef.current.focus === "function") {
      setTimeout(() => {
        lastActiveElementRef.current?.focus();
      }, 50);
    }
  }, []);

  const toggleTerminal = useCallback(() => {
    if (isOpen) {
      closeTerminal();
    } else {
      openTerminal();
    }
  }, [isOpen, openTerminal, closeTerminal]);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const terminalContext: TerminalContext = {
    activeProfile: profileId,
    savedCount: savedIds.length,
    switchProfile,
    clearTerminal: clearHistory,
  };

  const handleExecute = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim();
      if (!trimmed) return;

      const result = executeTerminalCommand(trimmed, terminalContext);

      // Add to command buffer for ArrowUp history
      setCommandBuffer((prev) => [...prev, trimmed]);
      setBufferIndex(-1);

      if (trimmed.toLowerCase() !== "clear" && trimmed.toLowerCase() !== "cls") {
        setHistory((prev) => [
          ...prev,
          {
            id: `cmd-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            command: trimmed,
            output: result.output,
            timestamp: Date.now(),
          },
        ]);
      }

      setInput("");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [terminalContext, profileId, savedIds.length]
  );

  const navigateHistory = useCallback(
    (direction: "up" | "down") => {
      if (commandBuffer.length === 0) return;

      if (direction === "up") {
        const nextIndex =
          bufferIndex === -1 ? commandBuffer.length - 1 : Math.max(0, bufferIndex - 1);
        setBufferIndex(nextIndex);
        setInput(commandBuffer[nextIndex] || "");
      } else {
        if (bufferIndex === -1) return;
        const nextIndex = bufferIndex + 1;
        if (nextIndex >= commandBuffer.length) {
          setBufferIndex(-1);
          setInput("");
        } else {
          setBufferIndex(nextIndex);
          setInput(commandBuffer[nextIndex] || "");
        }
      }
    },
    [bufferIndex, commandBuffer]
  );

  const handleAutocomplete = useCallback(() => {
    if (!input.trim()) return;
    const match = autocompleteCommand(input);
    if (match) {
      setInput(match);
    }
  }, [input]);

  // Terminal Keyboard listener when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeTerminal();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "l") {
        e.preventDefault();
        clearHistory();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeTerminal, clearHistory]);

  return {
    isOpen,
    openTerminal,
    closeTerminal,
    toggleTerminal,
    input,
    setInput,
    history,
    execute: handleExecute,
    clearHistory,
    navigateHistory,
    autocomplete: handleAutocomplete,
  };
}
