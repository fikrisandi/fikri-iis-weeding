"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function CoupleCard({
  name,
  fullName,
  parents,
  image,
  delay,
}: {
  name: string;
  fullName: string;
  parents: string;
  image: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="text-center"
    >
      <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[var(--color-gold-light)] shadow-lg">
        <div
          className="w-full h-full bg-[var(--color-cream-dark)] flex items-center justify-center text-[var(--color-primary-light)] text-sm"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span>Foto {name}</span>
          )}
        </div>
      </div>
      <h3
        className="text-3xl text-[var(--color-primary-dark)] mb-2"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        {name}
      </h3>
      <p
        className="text-[var(--color-text)] font-medium mb-1"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {fullName}
      </p>
      <p className="text-[var(--color-text-light)] text-sm">{parents}</p>
    </motion.div>
  );
}

export default function Couple() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="couple" className="bg-white py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--color-gold)] italic mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
          <p className="text-[var(--color-text-light)] leading-relaxed max-w-lg mx-auto" style={{ fontFamily: "var(--font-serif)" }}>
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <CoupleCard
            name="Ahmad"
            fullName="Ahmad Fauzan, S.T."
            parents="Putra dari Bapak Hasan & Ibu Aminah"
            image=""
            delay={0.2}
          />

          <div className="hidden md:flex justify-center">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl text-[var(--color-gold)]"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              &
            </motion.span>
          </div>

          <div className="flex md:hidden justify-center -my-4">
            <span className="text-4xl text-[var(--color-gold)]" style={{ fontFamily: "'Great Vibes', cursive" }}>
              &
            </span>
          </div>

          <CoupleCard
            name="Fatimah"
            fullName="Fatimah Azzahra, S.Pd."
            parents="Putri dari Bapak Ibrahim & Ibu Khadijah"
            image=""
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
