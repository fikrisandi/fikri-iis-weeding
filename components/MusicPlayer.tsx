"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Ganti src dengan file musik Anda (taruh di folder public/) */}
      <audio ref={audioRef} loop preload="none">
        <source src="/music/background.mp3" type="audio/mpeg" />
      </audio>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[var(--color-gold)] text-white shadow-lg flex items-center justify-center hover:bg-[var(--color-primary-dark)] transition-colors duration-300"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        )}
      </motion.button>
    </>
  );
}
