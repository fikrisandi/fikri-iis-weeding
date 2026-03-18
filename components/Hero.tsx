"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-cream-dark)]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B7355' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--color-primary)] tracking-[0.3em] uppercase text-sm mb-6"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          The Wedding of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[var(--color-primary-dark)] mb-4"
          style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(3rem, 8vw, 6rem)" }}
        >
          Ahmad & Fatimah
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-32 h-[1px] bg-[var(--color-gold)] mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-[var(--color-text-light)] text-lg tracking-wider"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Minggu, 15 Juni 2025
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-12"
        >
          <a
            href="#couple"
            className="inline-block border border-[var(--color-gold)] text-[var(--color-primary-dark)] px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-[var(--color-gold)] hover:text-white transition-all duration-300"
          >
            Buka Undangan
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border-2 border-[var(--color-primary-light)] rounded-full flex justify-center pt-1"
          >
            <div className="w-1 h-2 bg-[var(--color-primary-light)] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
