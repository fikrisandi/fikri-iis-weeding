"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WEDDING_DATE = new Date("2025-06-15T08:00:00+07:00").getTime();

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border border-[var(--color-gold-light)] bg-white shadow-sm">
        <span
          className="text-3xl md:text-4xl text-[var(--color-primary-dark)] font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-2 text-xs tracking-[0.2em] uppercase text-[var(--color-text-light)]">
        {label}
      </p>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, WEDDING_DATE - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[var(--color-cream-dark)] py-20">
      <div className="section-container text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-[var(--color-gold)] tracking-[0.3em] uppercase text-sm mb-4"
          >
            Menuju Hari Bahagia
          </p>
          <h2
            className="text-3xl md:text-4xl text-[var(--color-primary-dark)] mb-10"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Hitung Mundur
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-4 md:gap-8"
        >
          <TimeBlock value={timeLeft.days} label="Hari" />
          <TimeBlock value={timeLeft.hours} label="Jam" />
          <TimeBlock value={timeLeft.minutes} label="Menit" />
          <TimeBlock value={timeLeft.seconds} label="Detik" />
        </motion.div>
      </div>
    </section>
  );
}
