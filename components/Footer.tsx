"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className="bg-[var(--color-primary-dark)] py-16 text-center" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="section-container"
      >
        <p className="text-[var(--color-gold-light)] italic mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya,
          dan dijadikan-Nya di antaramu rasa kasih dan sayang.&rdquo;
        </p>
        <p className="text-[var(--color-primary-light)] text-sm mb-8">
          — QS. Ar-Rum: 21
        </p>

        <div className="ornament-divider mb-8">
          <span className="text-[var(--color-gold)]">&#9830;</span>
        </div>

        <p
          className="text-3xl text-[var(--color-gold-light)] mb-4"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Ahmad & Fatimah
        </p>

        <p className="text-[var(--color-primary-light)] text-sm">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami
          <br />
          apabila Bapak/Ibu/Saudara/i berkenan hadir
          <br />
          untuk memberikan doa restu kepada kami.
        </p>

        <p className="text-[var(--color-primary-light)] text-xs mt-8 opacity-60">
          &copy; 2025 — Undangan Digital
        </p>
      </motion.div>
    </footer>
  );
}
