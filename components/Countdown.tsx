"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WEDDING_DATE = new Date("2026-06-06T08:00:00+07:00").getTime();

function TimeBlock({ value, label, delay }: { value: number; label: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[var(--color-primary-dark)] rounded-lg shadow-lg">
        <div className="absolute inset-[1px] rounded-lg border border-[var(--color-gold)]/30" />
        <span
          className="text-3xl md:text-4xl text-[var(--color-gold-light)] font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-3 text-[10px] tracking-[0.25em] uppercase text-[var(--color-text-light)]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = Math.max(0, WEDDING_DATE - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[var(--color-cream)] py-24 overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill='%23C9A84C' fill-opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "40px 40px",
      }} />

      <div className="max-w-3xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[var(--color-gold)] tracking-[0.4em] uppercase text-xs mb-3">
            Save The Date
          </p>
          <h2
            className="text-4xl md:text-5xl text-[var(--color-primary)] mb-4"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Menuju Hari Bahagia
          </h2>
          <div className="ornament mb-10">
            <span className="text-[var(--color-gold)] text-xs">&#10022;</span>
          </div>
        </motion.div>

        <div className="flex justify-center gap-4 md:gap-6 mb-10">
          <TimeBlock value={timeLeft.days} label="Hari" delay={0.2} />
          <TimeBlock value={timeLeft.hours} label="Jam" delay={0.3} />
          <TimeBlock value={timeLeft.minutes} label="Menit" delay={0.4} />
          <TimeBlock value={timeLeft.seconds} label="Detik" delay={0.5} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Fikri+%26+Iis&dates=20260606T010000Z/20260606T070000Z&details=Undangan+Pernikahan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--color-gold)] text-[var(--color-primary)] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[var(--color-gold)] hover:text-white transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Simpan ke Kalender
          </a>
        </motion.div>
      </div>
    </section>
  );
}
