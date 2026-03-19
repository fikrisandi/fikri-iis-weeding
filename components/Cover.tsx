"use client";

import { useState, useEffect } from "react";
import { LeafOrnamentTop, GoldDivider } from "./FloralOrnament";

export default function Cover({ onOpen, guestName }: { onOpen: () => void; guestName?: string }) {
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

      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Slow orbiting circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
          style={{ animation: "orbit 60s linear infinite" }}>
          <div className="absolute top-0 left-1/2 w-[8px] h-[8px] rounded-full bg-[var(--color-gold)] opacity-[0.12]" />
          <div className="absolute bottom-[10%] right-0 w-[5px] h-[5px] rounded-full bg-[var(--color-mint)] opacity-[0.08]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]"
          style={{ animation: "orbit-reverse 80s linear infinite" }}>
          <div className="absolute top-[5%] right-[10%] w-[6px] h-[6px] rounded-full bg-[var(--color-gold-light)] opacity-[0.1]" />
          <div className="absolute bottom-0 left-[20%] w-[4px] h-[4px] rounded-full bg-[var(--color-gold)] opacity-[0.08]" />
        </div>

        {/* Rotating ring borders */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[rgba(212,168,83,0.06)]"
          style={{ animation: "orbit 90s linear infinite" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-[rgba(168,213,186,0.04)]"
          style={{ animation: "orbit-reverse 120s linear infinite" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-dashed border-[rgba(212,168,83,0.03)]"
          style={{ animation: "orbit 150s linear infinite" }} />

        {/* Glowing sparkle dots */}
        {[...Array(8)].map((_, i) => (
          <div key={`sparkle-${i}`}
            className="absolute w-[3px] h-[3px] rounded-full bg-[var(--color-gold-light)]"
            style={{
              top: `${15 + (i * 11) % 70}%`,
              left: `${10 + (i * 13) % 80}%`,
              animation: `glow-dot ${3 + i * 0.7}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        {/* Rising particles */}
        {[...Array(5)].map((_, i) => (
          <div key={`rise-${i}`}
            className="absolute w-[2px] h-[2px] rounded-full bg-[var(--color-gold)]"
            style={{
              bottom: "20%",
              left: `${20 + i * 15}%`,
              animation: `drift-up ${4 + i}s ease-out infinite`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}

        {/* Subtle light rays from center */}
        {[...Array(4)].map((_, i) => (
          <div key={`ray-${i}`}
            className="absolute top-1/2 left-1/2 origin-bottom"
            style={{
              width: "1px",
              height: "200px",
              background: "linear-gradient(to top, rgba(212,168,83,0.08), transparent)",
              transform: `translate(-50%, -100%) rotate(${i * 90 + 45}deg)`,
              animation: `light-ray ${6 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
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
            06 &mdash; 07 Juni 2026
          </p>
        </div>

        {guestName && (
          <div style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(10px)", transition: "all 0.8s ease 1.5s", marginBottom: "32px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase" as const, color: "var(--color-text-muted)", marginBottom: "8px" }}>
              Kepada Yth.
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 500, color: "var(--color-cream)", letterSpacing: "0.05em" }}>
              {guestName}
            </p>
          </div>
        )}

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
