"use client";

import React from "react";
import Link from "next/link";
import { Film, X, Sparkles, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CinemaModeHUDProps {
  isVisible: boolean;
  onExit: () => void;
}

export const CinemaModeHUD: React.FC<CinemaModeHUDProps> = ({ isVisible, onExit }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Cinema Mode Controls"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed top-4 inset-x-0 z-50 flex items-center justify-center px-4 pointer-events-none"
        >
          <div className="flex items-center gap-2 sm:gap-4 px-3 sm:px-5 py-2 rounded-full bg-zinc-950/85 border border-red-500/40 shadow-[0_4px_30px_rgba(229,9,20,0.3)] backdrop-blur-md pointer-events-auto">
            {/* Status indicator */}
            <div className="flex items-center gap-2 pr-2 sm:pr-3 border-r border-zinc-800">
              <Film className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-white uppercase hidden xs:inline">
                Cinema Mode
              </span>
            </div>

            {/* Quick Navigation Links */}
            <nav aria-label="Cinema Navigation" className="flex items-center gap-1 sm:gap-2">
              <Link
                href="/projects"
                className="px-2.5 py-1 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="px-2.5 py-1 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors hidden sm:inline-block"
              >
                Skills
              </Link>
              <Link
                href="/resume"
                className="px-2.5 py-1 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors hidden md:inline-block"
              >
                Resume
              </Link>
            </nav>

            {/* Exit Action Button */}
            <button
              onClick={onExit}
              type="button"
              aria-label="Exit Cinema Mode (Esc)"
              title="Exit Cinema Mode (Esc)"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow transition-all cursor-pointer ml-1"
            >
              <span>Exit</span>
              <kbd className="hidden sm:inline-block font-mono text-[10px] bg-red-700/80 px-1 py-0.2 rounded text-red-100">
                ESC
              </kbd>
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
