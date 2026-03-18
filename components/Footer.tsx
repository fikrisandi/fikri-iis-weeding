"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className="relative bg-[var(--color-primary-dark)] py-20 overflow-hidden" ref={ref}>
      {/* Decorative circles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 border border-[var(--color-gold)] rounded-full" />
        <div className="absolute -top-10 -right-10 w-40 h-40 border border-[var(--color-gold)] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto px-6 text-center relative z-10"
      >
        <p
          className="text-[var(--color-gold-light)] italic leading-relaxed mb-4"
          style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem" }}
        >
          &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya,
          dan dijadikan-Nya di antaramu rasa kasih dan sayang.&rdquo;
        </p>
        <p className="text-[var(--color-sage)] text-sm mb-10">
          — QS. Ar-Rum: 21
        </p>

        <div className="ornament mb-10">
          <span className="text-[var(--color-gold)]/50 text-xs">&#10022;</span>
        </div>

        <p
          className="shimmer-gold mb-3"
          style={{ fontFamily: "var(--font-script)", fontSize: "2.5rem" }}
        >
          Fikri &amp; Iis
        </p>

        <p className="text-[var(--color-sage-light)] text-sm leading-loose max-w-sm mx-auto mb-6">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami
          apabila Bapak/Ibu/Saudara/i berkenan hadir
          untuk memberikan doa restu.
        </p>

        <p className="text-[var(--color-cream)] text-xs tracking-[0.2em] mb-2">
          Wassalamu&apos;alaikum Wr. Wb.
        </p>

        <div className="gold-line w-24 mx-auto mt-10 mb-6 opacity-30" />

        <p className="text-[var(--color-sage)] text-[10px] tracking-[0.15em] uppercase opacity-50">
          &copy; 2026 &mdash; Kami Yang Berbahagia
        </p>
      </motion.div>
    </footer>
  );
}
