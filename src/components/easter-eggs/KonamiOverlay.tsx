"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KONAMI_EVENT } from "@/hooks/useKeyboardShortcuts";
import { Zap, Sparkles, Terminal, X } from "lucide-react";

export const KonamiOverlay: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleKonami = () => {
      setIsActive(true);
      timer = setTimeout(() => {
        setIsActive(false);
      }, 4500);
    };

    window.addEventListener(KONAMI_EVENT, handleKonami);
    return () => {
      window.removeEventListener(KONAMI_EVENT, handleKonami);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 max-w-md w-[90%] p-4 rounded-2xl bg-zinc-950/95 border-2 border-red-500 shadow-[0_0_40px_rgba(229,9,20,0.5)] backdrop-blur-xl pointer-events-auto"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/20 text-red-500 border border-red-500/40 animate-pulse">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">
                    Easter Egg Unlocked
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  SYSTEM OVERRIDE: ELITE DEVELOPER MODE
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5 font-mono">
                  &quot;The code is the architecture.&quot; — PRATHAMFLIX Engine Core
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsActive(false)}
              type="button"
              aria-label="Dismiss easter egg notification"
              className="p-1 text-zinc-400 hover:text-white rounded transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
