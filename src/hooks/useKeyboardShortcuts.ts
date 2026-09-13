"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { triggerCinemaModeToggle } from "@/hooks/useCinemaMode";

const OPEN_SHORTCUTS_EVENT = "prathamflix_open_shortcuts";
export const KONAMI_EVENT = "prathamflix_konami_triggered";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

function isInteractiveElement(target: EventTarget | null): boolean {
  if (!target || !(target instanceof HTMLElement)) return false;
  const tagName = target.tagName.toLowerCase();
  return (
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    target.isContentEditable ||
    target.getAttribute("role") === "textbox"
  );
}

export function useKeyboardShortcuts() {
  const router = useRouter();
  const [isShortcutsModalOpen, setIsShortcutsModalOpen] = useState(false);
  const konamiIndexRef = useRef(0);
  const sequencePrefixRef = useRef<string | null>(null);
  const sequenceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openShortcutsModal = useCallback(() => {
    setIsShortcutsModalOpen(true);
  }, []);

  const closeShortcutsModal = useCallback(() => {
    setIsShortcutsModalOpen(false);
  }, []);

  useEffect(() => {
    const handleOpenShortcutsEvent = () => {
      setIsShortcutsModalOpen(true);
    };

    window.addEventListener(OPEN_SHORTCUTS_EVENT, handleOpenShortcutsEvent);
    return () => {
      window.removeEventListener(OPEN_SHORTCUTS_EVENT, handleOpenShortcutsEvent);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Never intercept when typing in input fields
      if (isInteractiveElement(e.target)) {
        return;
      }

      // 2. Konami Code Tracker
      const currentExpectedKey = KONAMI_CODE[konamiIndexRef.current];
      if (e.key.toLowerCase() === currentExpectedKey.toLowerCase()) {
        konamiIndexRef.current += 1;
        if (konamiIndexRef.current === KONAMI_CODE.length) {
          konamiIndexRef.current = 0;
          window.dispatchEvent(new CustomEvent(KONAMI_EVENT));
        }
      } else {
        konamiIndexRef.current = 0;
      }

      // 3. Cinema Mode Shortcut (Alt + C)
      if (e.altKey && (e.key === "c" || e.key === "C")) {
        e.preventDefault();
        triggerCinemaModeToggle();
        return;
      }

      // 4. Question mark (?) opens shortcuts help
      if (e.key === "?" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setIsShortcutsModalOpen(true);
        return;
      }

      // 5. Sequence Navigation (G then ...)
      if (e.key.toLowerCase() === "g" && !sequencePrefixRef.current && !e.ctrlKey && !e.metaKey) {
        sequencePrefixRef.current = "g";
        if (sequenceTimeoutRef.current) clearTimeout(sequenceTimeoutRef.current);
        sequenceTimeoutRef.current = setTimeout(() => {
          sequencePrefixRef.current = null;
        }, 1000);
        return;
      }

      if (sequencePrefixRef.current === "g") {
        const nextKey = e.key.toLowerCase();
        sequencePrefixRef.current = null;
        if (sequenceTimeoutRef.current) clearTimeout(sequenceTimeoutRef.current);

        switch (nextKey) {
          case "h":
            e.preventDefault();
            router.push("/");
            break;
          case "p":
            e.preventDefault();
            router.push("/projects");
            break;
          case "s":
            e.preventDefault();
            router.push("/skills");
            break;
          case "r":
            e.preventDefault();
            router.push("/resume");
            break;
          case "c":
            e.preventDefault();
            router.push("/contact");
            break;
          case "m":
            e.preventDefault();
            router.push("/my-list");
            break;
          case "a":
            e.preventDefault();
            router.push("/about");
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (sequenceTimeoutRef.current) clearTimeout(sequenceTimeoutRef.current);
    };
  }, [router]);

  return {
    isShortcutsModalOpen,
    openShortcutsModal,
    closeShortcutsModal,
  };
}

export function triggerOpenShortcuts() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_SHORTCUTS_EVENT));
  }
}
