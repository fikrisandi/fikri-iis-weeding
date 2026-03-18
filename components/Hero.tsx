"use client";

import { GoldDivider } from "./FloralOrnament";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grad-cover">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-center bg-cover opacity-15" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(4,30,22,0.5), rgba(10,61,46,0.2) 50%, rgba(4,30,22,0.85))" }} />
      </div>
      <div className="absolute inset-0 geo-pattern opacity-50" />

      {[...Array(6)].map((_, i) => (
        <div key={i} className="absolute pointer-events-none text-[var(--color-mint)]"
          style={{ left: `${8+i*15}%`, fontSize: `${9+(i%3)*3}px`, opacity: 0.08,
            animation: `float-leaf ${9+i*2}s linear infinite`, animationDelay: `${i*1.2}s` }}>&#127811;</div>
      ))}

      <div className="relative z-10 text-center px-8 max-w-lg mx-auto">
        {/* Bismillah */}
        <div className="reveal-up mb-16">
          <p className="text-[var(--color-gold-light)] mb-8"
            style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontStyle: "italic", lineHeight: "1.6" }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
          <p className="text-[var(--color-text-muted)] text-[10px] tracking-[0.35em] uppercase leading-relaxed">
            Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
          </p>
        </div>

        {/* Names */}
        <div className="reveal-up delay-2 mb-16">
          <p className="text-[var(--color-gold-dark)] tracking-[0.5em] uppercase text-[9px] mb-10 font-medium">The Wedding Of</p>
          <h1 className="text-[var(--color-cream)] leading-[1.05]"
            style={{ fontFamily: "var(--font-script)", fontSize: "clamp(3.5rem, 12vw, 6rem)", textShadow: "0 4px 40px rgba(0,0,0,0.3)" }}>
            Fikri <span className="text-[var(--color-gold)]">&amp;</span> Iis
          </h1>
        </div>

        {/* Date */}
        <div className="reveal-up delay-4 mt-4">
          <GoldDivider className="mb-8" />
          <p className="text-[var(--color-gold-light)] tracking-[0.25em]"
            style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 300 }}>
            Sabtu, 06 Juni 2026
          </p>
        </div>

        {/* Scroll */}
        <div className="reveal-up delay-6 absolute bottom-12 left-1/2 -translate-x-1/2 opacity-40">
          <div className="w-[1px] h-10 bg-gradient-to-b from-[var(--color-gold-dark)] to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
}
