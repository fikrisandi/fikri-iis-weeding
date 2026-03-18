"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CoverProps {
  onOpen: () => void;
}

export default function Cover({ onOpen }: CoverProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleOpen = () => {
    setIsExiting(true);
    document.body.classList.remove("no-scroll");
    setTimeout(() => onOpen(), 900);
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-primary-dark)] overflow-hidden"
        >
          {/* Background decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 border border-[var(--color-gold)] rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 border border-[var(--color-gold)] rounded-full translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-[var(--color-gold-dark)] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30" />
          </div>

          {/* Floating petals */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-[var(--color-gold)] opacity-20 text-2xl"
              style={{
                left: `${15 + i * 15}%`,
                animation: `fall ${6 + i * 2}s linear infinite`,
                animationDelay: `${i * 1.5}s`,
              }}
            >
              &#10047;
            </div>
          ))}

          <div className="relative z-10 text-center px-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[var(--color-gold-light)] tracking-[0.4em] uppercase text-xs mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Wedding Of
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="shimmer-gold mb-2"
              style={{
                fontFamily: "var(--font-script)",
                fontSize: "clamp(3.5rem, 10vw, 7rem)",
                lineHeight: 1.2,
              }}
            >
              Fikri
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-[var(--color-gold)] text-3xl my-2"
              style={{ fontFamily: "var(--font-script)" }}
            >
              &
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              className="shimmer-gold mb-8"
              style={{
                fontFamily: "var(--font-script)",
                fontSize: "clamp(3.5rem, 10vw, 7rem)",
                lineHeight: 1.2,
              }}
            >
              Iis
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-[var(--color-sage-light)] text-sm tracking-[0.2em] mb-12"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Sabtu, 06 Juni 2026
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              onClick={handleOpen}
              className="pulse-glow border-2 border-[var(--color-gold)] text-[var(--color-gold)] px-10 py-4 text-sm tracking-[0.3em] uppercase hover:bg-[var(--color-gold)] hover:text-[var(--color-primary-dark)] transition-all duration-500 rounded-none"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Buka Undangan
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] bg-[var(--color-primary-dark)]"
        />
      )}
    </AnimatePresence>
  );
}
