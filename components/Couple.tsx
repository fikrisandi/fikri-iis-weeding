"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function CoupleCard({
  name,
  fullName,
  parents,
  image,
  delay,
  direction,
}: {
  name: string;
  fullName: string;
  parents: string;
  image: string;
  delay: number;
  direction: "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      {/* Photo frame with decorative border */}
      <div className="relative w-52 h-52 mx-auto mb-6">
        <div className="absolute inset-0 border-2 border-[var(--color-gold)] rounded-full rotate-6 opacity-30" />
        <div className="absolute inset-0 border-2 border-[var(--color-gold)] rounded-full -rotate-6 opacity-30" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-[var(--color-gold-light)] shadow-xl">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div
              className="w-full h-full bg-gradient-to-br from-[var(--color-cream)] to-[var(--color-cream-dark)] flex items-center justify-center text-[var(--color-text-light)] text-sm"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Foto {name}
            </div>
          )}
        </div>
      </div>

      <h3
        className="text-4xl text-[var(--color-primary)] mb-2"
        style={{ fontFamily: "var(--font-script)" }}
      >
        {name}
      </h3>
      <p
        className="text-[var(--color-text)] text-lg font-light mb-2"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {fullName}
      </p>
      <div className="w-12 h-[1px] bg-[var(--color-gold)] mx-auto my-3" />
      <p className="text-[var(--color-text-light)] text-sm leading-relaxed">{parents}</p>
    </motion.div>
  );
}

export default function Couple() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="couple" className="bg-white relative overflow-hidden">
      {/* Decorative corner ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[var(--color-gold)] opacity-20 m-6" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[var(--color-gold)] opacity-20 m-6" />

      <div className="max-w-3xl mx-auto px-6 py-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-[var(--color-gold)] text-2xl mb-6"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
          <div className="ornament mb-6">
            <span className="text-[var(--color-gold)] text-xs">&#10022;</span>
          </div>
          <p
            className="text-[var(--color-text-light)] leading-relaxed max-w-lg mx-auto text-base"
            style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem" }}
          >
            Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta&apos;ala, kami bermaksud
            mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-4 items-center">
          <CoupleCard
            name="Fikri"
            fullName="Muhammad Fikri Sandi Pratama"
            parents="Putra dari Bapak Hasanuddin &amp; Ibu Saidah"
            image=""
            delay={0.2}
            direction="left"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <span
                className="text-6xl text-[var(--color-gold)] block"
                style={{ fontFamily: "var(--font-script)" }}
              >
                &amp;
              </span>
            </div>
          </motion.div>

          <CoupleCard
            name="Iis"
            fullName="Isnaini Nur Adinda Puspita Sari"
            parents="Putri dari Bapak Sutrisno &amp; Ibu Khosiyah"
            image=""
            delay={0.4}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}
