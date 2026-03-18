"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image placeholder - ganti dengan foto prewed */}
      <div className="absolute inset-0 bg-[var(--color-primary-dark)]">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-30"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-dark)]/60 via-transparent to-[var(--color-primary-dark)]/80" />
      </div>

      {/* Floating petals */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute text-[var(--color-gold)] opacity-15 text-lg pointer-events-none"
          style={{
            left: `${10 + i * 12}%`,
            animation: `fall ${7 + i * 1.5}s linear infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          &#10047;
        </div>
      ))}

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p
            className="text-[var(--color-gold-light)] text-lg italic mb-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
          <p className="text-[var(--color-sage-light)] text-xs tracking-[0.3em] uppercase mb-8">
            Assalamu&apos;alaikum Wr. Wb.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[var(--color-gold-light)] tracking-[0.4em] uppercase text-xs mb-4"
        >
          We Are Getting Married
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-white mb-6"
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(3rem, 9vw, 6rem)",
            textShadow: "0 2px 30px rgba(0,0,0,0.3)",
          }}
        >
          Fikri <span className="text-[var(--color-gold)]">&</span> Iis
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-40 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-[var(--color-cream)] text-lg tracking-widest"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          06 &middot; 06 &middot; 2026
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 3 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-light)" strokeWidth="1.5">
              <path d="M7 10l5 5 5-5" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
