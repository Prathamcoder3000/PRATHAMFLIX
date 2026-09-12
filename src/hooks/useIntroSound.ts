"use client";

import { useCallback, useRef, useState } from "react";

/**
 * Original synthesized cinematic sound architecture for PRATHAMFLIX.
 * Uses Web Audio API to create a unique ambient swell with zero external dependencies or copyrighted audio.
 */
export function useIntroSound() {
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const toggleSound = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  const playIntroSound = useCallback(() => {
    if (isMuted) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;

      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {
          // Graceful handling of browser autoplay restrictions
        });
      }

      const now = ctx.currentTime;
      const duration = 2.6;

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, now);
      masterGain.gain.exponentialRampToValueAtTime(0.35, now + 0.6);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      masterGain.connect(ctx.destination);

      // 1. Deep Sub-Bass Drone (Cinematic Foundation)
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(55, now); // A1 note
      subOsc.frequency.exponentialRampToValueAtTime(73.42, now + 1.2); // D2 note
      subGain.gain.setValueAtTime(0.6, now);
      subOsc.connect(subGain);
      subGain.connect(masterGain);

      // 2. Harmonic Resonance Pad
      const padOsc = ctx.createOscillator();
      const padFilter = ctx.createBiquadFilter();
      const padGain = ctx.createGain();
      padOsc.type = "sawtooth";
      padOsc.frequency.setValueAtTime(110, now); // A2
      padFilter.type = "lowpass";
      padFilter.frequency.setValueAtTime(220, now);
      padFilter.frequency.exponentialRampToValueAtTime(1400, now + 0.8);
      padFilter.frequency.exponentialRampToValueAtTime(200, now + duration);
      padGain.gain.setValueAtTime(0.18, now);
      padOsc.connect(padFilter);
      padFilter.connect(padGain);
      padGain.connect(masterGain);

      // 3. Shimmer Chord Layer (Modern developer/cinematic sparkle)
      const shimmerOsc = ctx.createOscillator();
      const shimmerGain = ctx.createGain();
      shimmerOsc.type = "triangle";
      shimmerOsc.frequency.setValueAtTime(440, now); // A4
      shimmerOsc.frequency.exponentialRampToValueAtTime(587.33, now + 1.0); // D5
      shimmerGain.gain.setValueAtTime(0.001, now);
      shimmerGain.gain.linearRampToValueAtTime(0.12, now + 0.5);
      shimmerGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      shimmerOsc.connect(shimmerGain);
      shimmerGain.connect(masterGain);

      // Start all sound nodes
      subOsc.start(now);
      padOsc.start(now);
      shimmerOsc.start(now);

      // Stop nodes cleanly
      subOsc.stop(now + duration);
      padOsc.stop(now + duration);
      shimmerOsc.stop(now + duration);
    } catch {
      // Safe fallback if Web Audio is unsupported or blocked by policy
    }
  }, [isMuted]);

  return {
    isMuted,
    toggleSound,
    playIntroSound,
  };
}
