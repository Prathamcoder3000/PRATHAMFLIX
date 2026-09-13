"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, X, Navigation, Terminal, Film, Sparkles } from "lucide-react";

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ShortcutItem {
  keys: string[];
  description: string;
}

interface ShortcutGroup {
  title: string;
  icon: React.ReactNode;
  items: ShortcutItem[];
}

const SHORTCUT_GROUPS: ShortcutGroup[] = [
  {
    title: "Global Navigation",
    icon: <Navigation className="w-4 h-4 text-red-500" />,
    items: [
      { keys: ["Ctrl", "K"], description: "Open Global Search & Command Palette" },
      { keys: ["/"], description: "Quick Search activation" },
      { keys: ["G", "H"], description: "Navigate to Home" },
      { keys: ["G", "P"], description: "Navigate to Projects" },
      { keys: ["G", "S"], description: "Navigate to Skills" },
      { keys: ["G", "R"], description: "Navigate to Resume" },
      { keys: ["G", "C"], description: "Navigate to Contact" },
      { keys: ["G", "M"], description: "Navigate to My List" },
    ],
  },
  {
    title: "Developer & Cinema Tools",
    icon: <Terminal className="w-4 h-4 text-blue-400" />,
    items: [
      { keys: ["Alt", "C"], description: "Toggle Cinema Presentation Mode" },
      { keys: ["?"], description: "Show this Keyboard Shortcuts Reference" },
      { keys: ["Esc"], description: "Close Modals / Exit Cinema Mode" },
    ],
  },
];

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
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
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Keyboard Shortcuts Reference"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Surface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative z-10 w-full max-w-lg rounded-2xl bg-[#0d0e17] border border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-950/60">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-600/20 text-red-500 border border-red-500/30">
                  <Command className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-wider text-white">Keyboard Shortcuts</h3>
                  <p className="text-[11px] text-zinc-400 font-mono">Fast keyboard-first navigation</p>
                </div>
              </div>

              <button
                onClick={onClose}
                type="button"
                aria-label="Close shortcuts modal"
                className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Shortcuts Content */}
            <div className="p-6 space-y-6 overflow-y-auto">
              {SHORTCUT_GROUPS.map((group, groupIdx) => (
                <div key={groupIdx} className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-zinc-300 uppercase">
                    {group.icon}
                    <span>{group.title}</span>
                  </div>

                  <div className="space-y-2">
                    {group.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60"
                      >
                        <span className="text-xs text-zinc-300 leading-snug">{item.description}</span>
                        <div className="flex items-center gap-1 shrink-0">
                          {item.keys.map((k, kIdx) => (
                            <React.Fragment key={kIdx}>
                              <kbd className="px-2 py-0.5 text-[11px] font-mono font-semibold bg-zinc-800 text-zinc-200 border border-zinc-700 rounded shadow-sm">
                                {k}
                              </kbd>
                              {kIdx < item.keys.length - 1 && (
                                <span className="text-zinc-500 text-xs">+</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-zinc-800/80 bg-zinc-950/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Press ESC to dismiss</span>
              <span className="text-red-400 font-semibold">PRATHAMFLIX v1.0.0</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
