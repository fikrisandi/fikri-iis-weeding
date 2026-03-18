"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Wish {
  name: string;
  message: string;
  timestamp: string;
}

export default function Wishes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [wishes] = useState<Wish[]>([
    {
      name: "Budi Santoso",
      message: "Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Barakallahu lakuma! Aamiin.",
      timestamp: "10 Jun 2025",
    },
    {
      name: "Siti Rahayu",
      message: "Barakallahu lakuma wa baraka 'alaikuma. Selamat menempuh hidup baru ya!",
      timestamp: "09 Jun 2025",
    },
    {
      name: "Andi Pratama",
      message: "Semoga Allah memberkahi pernikahan kalian. Semoga selalu bahagia dunia akhirat.",
      timestamp: "08 Jun 2025",
    },
  ]);

  return (
    <section id="wishes" className="bg-[var(--color-cream)] py-24">
      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--color-gold)] tracking-[0.4em] uppercase text-xs mb-3">
            Wishes
          </p>
          <h2
            className="text-4xl md:text-5xl text-[var(--color-primary)] mb-4"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Ucapan &amp; Doa
          </h2>
          <div className="ornament">
            <span className="text-[var(--color-gold)] text-xs">&#10022;</span>
          </div>
        </motion.div>

        <div className="max-w-lg mx-auto space-y-4 max-h-[500px] overflow-y-auto pr-2">
          {wishes.map((wish, i) => (
            <motion.div
              key={`${wish.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-white p-6 border border-[var(--color-cream-dark)] shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[var(--color-primary-dark)] flex items-center justify-center text-[var(--color-gold-light)] text-sm font-medium"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {wish.name.charAt(0)}
                </div>
                <div>
                  <h4
                    className="text-[var(--color-primary)] font-medium text-sm"
                    style={{ fontFamily: "var(--font-serif)", fontSize: "1rem" }}
                  >
                    {wish.name}
                  </h4>
                  <span className="text-[10px] text-[var(--color-text-light)]">{wish.timestamp}</span>
                </div>
              </div>
              <p className="text-[var(--color-text-light)] text-sm leading-relaxed pl-12">
                {wish.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
