"use client";

import { useState } from "react";
import { GoldDivider } from "./FloralOrnament";

const photos = [
  { id: 1, label: "Prewed 1", tilt: "photo-tilt-left" },
  { id: 2, label: "Prewed 2", tilt: "photo-tilt-right" },
  { id: 3, label: "Lamaran 1", tilt: "photo-tilt-left" },
  { id: 4, label: "Prewed 3", tilt: "photo-tilt-right" },
  { id: 5, label: "Lamaran 2", tilt: "photo-tilt-left" },
  { id: 6, label: "Bersama", tilt: "photo-tilt-right" },
];

export default function Gallery() {
  const [sel, setSel] = useState<number | null>(null);

  return (
    <section id="gallery" className="grad-alt relative overflow-hidden particles-gold">
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "140px 32px" }}>
        <div className="reveal-up" style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="text-[var(--color-gold-dark)]" style={{ letterSpacing: "0.5em", textTransform: "uppercase" as const, fontSize: "9px", fontWeight: 500, marginBottom: "24px" }}>Our Moments</p>
          <h2 className="text-[var(--color-gold-light)]" style={{ fontFamily: "var(--font-script)", fontSize: "clamp(2.2rem, 7vw, 3rem)", marginBottom: "16px" }}>
            Galeri Foto
          </h2>
          <GoldDivider />
        </div>

        {/* Masonry-style grid with tilted photos */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {photos.map((p, i) => (
            <div key={p.id}
              className={`${p.tilt} reveal-scale delay-${i+1} group relative cursor-pointer`}
              style={{
                aspectRatio: i === 0 || i === 5 ? "4/5" : "3/4",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
              onClick={() => setSel(p.id)}
            >
              <div className="w-full h-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] border border-[var(--color-glass-border)] flex items-center justify-center text-[var(--color-text-dim)] text-[11px] group-hover:scale-110 transition-transform duration-700">
                <span style={{ fontFamily: "var(--font-display)" }}>{p.label}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center pointer-events-none" style={{ borderRadius: "20px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"
                  className="opacity-0 group-hover:opacity-80 scale-75 group-hover:scale-100" style={{ transition: "all 0.4s ease" }}>
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {sel !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setSel(null)} style={{ animation: "fade-in 0.3s ease" }}>
          <div style={{ maxWidth: "400px", width: "100%", aspectRatio: "3/4", borderRadius: "24px", overflow: "hidden" }}
            className="glass-strong flex items-center justify-center text-[var(--color-text-dim)] shadow-2xl"
            onClick={e => e.stopPropagation()}>
            <span style={{ fontFamily: "var(--font-display)" }}>{photos.find(p => p.id === sel)?.label}</span>
          </div>
          <button className="absolute top-5 right-5 w-10 h-10 rounded-full glass text-white text-lg flex items-center justify-center hover:bg-white/10 transition-colors"
            onClick={() => setSel(null)}>&times;</button>
        </div>
      )}
    </section>
  );
}
