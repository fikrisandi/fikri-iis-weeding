"use client";

import { useState, useEffect } from "react";
import { LeafOrnamentTop, GoldDivider } from "./FloralOrnament";

export default function Cover({ onOpen }: { onOpen: () => void }) {
  const [ready, setReady] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => { setTimeout(() => setReady(true), 200); }, []);

  const handleOpen = () => {
    setExiting(true);
    document.body.classList.remove("no-scroll");
    setTimeout(onOpen, 1000);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden grad-cover"
      style={{
        opacity: exiting ? 0 : 1, transform: exiting ? "translateY(-100%)" : "translateY(0)",
        transition: "all 1s cubic-bezier(0.65,0,0.35,1)",
      }}>

      {/* Geometric bg pattern */}
      <div className="absolute inset-0 geo-pattern" />

      {/* Floating leaves */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className="absolute pointer-events-none text-[var(--color-mint)]"
          style={{ left: `${5+i*9}%`, fontSize: `${10+(i%3)*4}px`, opacity: 0.12,
            animation: `float-leaf ${8+i*1.5}s linear infinite`, animationDelay: `${i*0.9}s` }}>
          &#127811;
        </div>
      ))}

      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full border border-[rgba(212,168,83,0.06)]" />
        <div className="absolute bottom-[-20%] right-[-15%] w-[500px] h-[500px] rounded-full border border-[rgba(168,213,186,0.05)]" />
      </div>

      <div className="relative z-10 text-center px-8 max-w-sm">
        <div style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(15px)", transition: "all 0.8s ease 0.3s" }}>
          <LeafOrnamentTop className="text-[var(--color-gold-light)] mb-6" />
        </div>

        <p style={{ opacity: ready ? 1 : 0, transition: "all 0.6s ease 0.5s", fontFamily: "var(--font-body)",
          fontSize: "9px", fontWeight: 400, letterSpacing: "0.5em", color: "var(--color-mint)", textTransform: "uppercase" as const, marginBottom: "24px" }}>
          The Wedding Of
        </p>

        <h1 className="shimmer-gold" style={{ fontFamily: "var(--font-script)", fontSize: "clamp(3.2rem, 12vw, 5.5rem)", lineHeight: 1.1,
          opacity: ready ? 1 : 0, transform: ready ? "none" : "scale(0.85)", transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.7s" }}>
          Fikri
        </h1>

        <p style={{ fontFamily: "var(--font-script)", fontSize: "2rem", color: "var(--color-gold-dark)",
          opacity: ready ? 0.6 : 0, transition: "all 0.5s ease 0.9s", margin: "6px 0" }}>&amp;</p>

        <h1 className="shimmer-gold" style={{ fontFamily: "var(--font-script)", fontSize: "clamp(3.2rem, 12vw, 5.5rem)", lineHeight: 1.1,
          opacity: ready ? 1 : 0, transform: ready ? "none" : "scale(0.85)", transition: "all 1s cubic-bezier(0.16,1,0.3,1) 1s", marginBottom: "24px" }}>
          Iis
        </h1>

        <div style={{ opacity: ready ? 1 : 0, transition: "all 0.8s ease 1.3s" }}>
          <GoldDivider />
          <p style={{ fontFamily: "var(--font-display)", fontSize: "14px", color: "var(--color-text-light)", letterSpacing: "0.2em", fontWeight: 300, marginBottom: "40px" }}>
            Sabtu, 06 Juni 2026
          </p>
        </div>

        <div style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(20px)", transition: "all 0.8s ease 1.8s" }}>
          <button onClick={handleOpen} className="btn-gold pulse-glow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
}
