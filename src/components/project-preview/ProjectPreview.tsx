"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { ProjectPreviewBackdrop } from "./ProjectPreviewBackdrop";
import { ProjectPreviewMedia } from "./ProjectPreviewMedia";
import { ProjectPreviewContent } from "./ProjectPreviewContent";
import { ProjectPreviewActions } from "./ProjectPreviewActions";
import type { ProjectCardData } from "@/types";

export interface ProjectPreviewProps {
  project: ProjectCardData | null;
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  project,
  isOpen,
  onClose,
  triggerRef,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const storedTriggerRef = useRef<HTMLElement | null>(null);

  // Capture trigger element at open time if not provided via prop
  useEffect(() => {
    if (isOpen) {
      if (triggerRef?.current) {
        storedTriggerRef.current = triggerRef.current;
      } else if (document.activeElement instanceof HTMLElement) {
        storedTriggerRef.current = document.activeElement;
      }
    }
  }, [isOpen, triggerRef]);

  // Body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  // Handle focus trapping and keyboard shortcuts
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement || document.activeElement === dialogRef.current) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    },
    [isOpen, onClose]
  );

  // Attach keydown listener and initial focus
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);

      // Focus close button on dialog opening
      const timer = setTimeout(() => {
        if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        } else if (dialogRef.current) {
          dialogRef.current.focus();
        }
      }, 50);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        clearTimeout(timer);
      };
    }
  }, [isOpen, handleKeyDown]);

  // Restore focus to triggering element after dismissal
  const handleExitComplete = () => {
    if (storedTriggerRef.current && document.contains(storedTriggerRef.current)) {
      storedTriggerRef.current.focus();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isOpen && project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
          onClick={handleBackdropClick}
        >
          {/* Backdrop Layer */}
          <ProjectPreviewBackdrop onClick={handleBackdropClick} />

          {/* Dialog Panel */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-title"
            aria-describedby="preview-desc"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 14 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-50 w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-[#0e1017] border border-white/12 shadow-2xl shadow-black/80 focus:outline-none my-auto"
          >
            {/* Close Button Top Right */}
            <div className="absolute top-3 right-3 z-30">
              <IconButton
                ref={closeButtonRef}
                aria-label="Close project preview"
                onClick={onClose}
                variant="outline"
                size="sm"
                className="bg-black/70 hover:bg-black/90 text-white border-white/20 backdrop-blur-md hover:scale-105 transition-all"
              >
                <X className="h-4 w-4" />
              </IconButton>
            </div>

            {/* Scrollable Modal Body */}
            <div className="overflow-y-auto scrollbar-none flex flex-col">
              <ProjectPreviewMedia project={project} />
              <ProjectPreviewContent project={project} />
              <ProjectPreviewActions project={project} onClose={onClose} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
