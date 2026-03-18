"use client";

import { useState, useRef } from "react";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export default function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasStarted = useRef(false);

  const startMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.play().then(() => {
      setIsPlaying(true);
      hasStarted.current = true;
    }).catch(() => {});
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  // Auto-play when cover is opened
  if (autoPlay && !hasStarted.current) {
    setTimeout(startMusic, 500);
  }

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/background.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[var(--color-primary-dark)] shadow-xl flex items-center justify-center border-2 border-[var(--color-gold)]/50 hover:border-[var(--color-gold)] transition-all duration-300 group"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {/* Rotating disc effect */}
        <div className={`absolute inset-[3px] rounded-full border border-[var(--color-gold)]/20 ${isPlaying ? "disc-spin" : "disc-paused"}`}>
          <div className="absolute top-1 left-1/2 w-1 h-1 rounded-full bg-[var(--color-gold)]/40 -translate-x-1/2" />
          <div className="absolute bottom-2 left-1/2 w-0.5 h-0.5 rounded-full bg-[var(--color-gold)]/30 -translate-x-1/2" />
        </div>

        {/* Icon */}
        <div className="relative z-10">
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-gold-light)">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-gold-light)">
              <polygon points="6,3 20,12 6,21" />
            </svg>
          )}
        </div>

        {/* Pulse ring when playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full border border-[var(--color-gold)] animate-ping opacity-20" />
        )}
      </button>
    </>
  );
}
