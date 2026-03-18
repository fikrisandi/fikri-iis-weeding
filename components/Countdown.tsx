"use client";

import { useEffect, useState } from "react";
import { GoldDivider } from "./FloralOrnament";

const TARGET = new Date("2026-06-06T08:00:00+07:00").getTime();

export default function Countdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => { const d = Math.max(0, TARGET - Date.now()); setT({ d: Math.floor(d/864e5), h: Math.floor((d/36e5)%24), m: Math.floor((d/6e4)%60), s: Math.floor((d/1e3)%60) }); };
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);

  const blocks = [{ v: t.d, l: "Hari" }, { v: t.h, l: "Jam" }, { v: t.m, l: "Menit" }, { v: t.s, l: "Detik" }];

  return (
    <section className="grad-alt relative overflow-hidden">
      <div className="absolute inset-0 geo-pattern" />
      <div className="section-inner text-center relative z-10">
        <div className="reveal-up">
          <p className="text-[var(--color-gold-dark)] tracking-[0.5em] uppercase text-[9px] mb-3 font-medium">Save The Date</p>
          <h2 className="text-[var(--color-gold-light)] mb-2" style={{ fontFamily: "var(--font-script)", fontSize: "clamp(2.2rem, 7vw, 3rem)" }}>
            Menuju Hari Bahagia
          </h2>
          <GoldDivider />
        </div>

        <div className="flex justify-center gap-3 md:gap-5 my-12">
          {blocks.map((b, i) => (
            <div key={b.l} className={`reveal-scale delay-${i+2}`}>
              <div className="glass-gold w-[72px] h-[82px] md:w-[88px] md:h-[98px] flex items-center justify-center">
                <span className="text-[var(--color-gold-light)]"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 2.4rem)", fontWeight: 300 }}>
                  {String(b.v).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-3 text-[var(--color-text-muted)] text-[9px] tracking-[0.2em] uppercase font-medium">{b.l}</p>
            </div>
          ))}
        </div>

        <div className="reveal-up delay-7">
          <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Fikri+%26+Iis&dates=20260606T010000Z/20260606T070000Z"
            target="_blank" rel="noopener noreferrer" className="btn-outline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Simpan ke Kalender
          </a>
        </div>
      </div>
    </section>
  );
}
