"use client";

import { useState } from "react";
import { GoldDivider } from "./FloralOrnament";
import Particles from "./Particles";

const photos = [
  { id: 1, label: "Prewed 1" },
  { id: 2, label: "Prewed 2" },
  { id: 3, label: "Lamaran 1" },
  { id: 4, label: "Prewed 3" },
  { id: 5, label: "Lamaran 2" },
  { id: 6, label: "Bersama 1" },
  { id: 7, label: "Bersama 2" },
  { id: 8, label: "Prewed 4" },
];

export default function Gallery() {
  const [sel, setSel] = useState<number | null>(null);

  return (
    <section id="gallery" className="grad-alt relative overflow-hidden">
      <Particles count={20} />
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "140px 32px", position: "relative", zIndex: 2 }}>
        <div className="reveal-up" style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{ letterSpacing: "0.5em", textTransform: "uppercase", fontSize: "9px", fontWeight: 500, marginBottom: "24px", color: "var(--color-gold-dark)" }}>Our Moments</p>
          <h2 style={{ fontFamily: "var(--font-script)", fontSize: "clamp(2.2rem, 7vw, 3rem)", marginBottom: "16px", color: "var(--color-gold-light)" }}>
            Galeri Foto
          </h2>
          <GoldDivider />
        </div>

        {/* Masonry layout - mixed sizes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "12px" }}>
          {/* Row 1: 1 besar kiri + 2 kecil kanan */}
          <div className="photo-tilt-left reveal-scale delay-1 group relative cursor-pointer"
            style={{ gridColumn: "span 7", gridRow: "span 2", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", aspectRatio: "4/5" }}
            onClick={() => setSel(1)}>
            <div className="w-full h-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] border border-[var(--color-glass-border)] flex items-center justify-center text-[var(--color-text-dim)] text-sm group-hover:scale-110 transition-transform duration-700">
              <span style={{ fontFamily: "var(--font-display)" }}>Prewed 1</span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
          </div>

          <div className="photo-tilt-right reveal-scale delay-2 group relative cursor-pointer"
            style={{ gridColumn: "span 5", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", aspectRatio: "1/1" }}
            onClick={() => setSel(2)}>
            <div className="w-full h-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] border border-[var(--color-glass-border)] flex items-center justify-center text-[var(--color-text-dim)] text-xs group-hover:scale-110 transition-transform duration-700">
              <span style={{ fontFamily: "var(--font-display)" }}>Prewed 2</span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
          </div>

          <div className="photo-tilt-left reveal-scale delay-3 group relative cursor-pointer"
            style={{ gridColumn: "span 5", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", aspectRatio: "1/1" }}
            onClick={() => setSel(3)}>
            <div className="w-full h-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] border border-[var(--color-glass-border)] flex items-center justify-center text-[var(--color-text-dim)] text-xs group-hover:scale-110 transition-transform duration-700">
              <span style={{ fontFamily: "var(--font-display)" }}>Lamaran 1</span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
          </div>

          {/* Row 2: 3 sama rata */}
          <div className="photo-tilt-right reveal-scale delay-4 group relative cursor-pointer"
            style={{ gridColumn: "span 4", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", aspectRatio: "3/4" }}
            onClick={() => setSel(4)}>
            <div className="w-full h-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] border border-[var(--color-glass-border)] flex items-center justify-center text-[var(--color-text-dim)] text-xs group-hover:scale-110 transition-transform duration-700">
              <span style={{ fontFamily: "var(--font-display)" }}>Prewed 3</span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
          </div>

          <div className="photo-tilt-left reveal-scale delay-5 group relative cursor-pointer"
            style={{ gridColumn: "span 4", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", aspectRatio: "3/4" }}
            onClick={() => setSel(5)}>
            <div className="w-full h-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] border border-[var(--color-glass-border)] flex items-center justify-center text-[var(--color-text-dim)] text-xs group-hover:scale-110 transition-transform duration-700">
              <span style={{ fontFamily: "var(--font-display)" }}>Lamaran 2</span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
          </div>

          <div className="photo-tilt-right reveal-scale delay-6 group relative cursor-pointer"
            style={{ gridColumn: "span 4", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", aspectRatio: "3/4" }}
            onClick={() => setSel(6)}>
            <div className="w-full h-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] border border-[var(--color-glass-border)] flex items-center justify-center text-[var(--color-text-dim)] text-xs group-hover:scale-110 transition-transform duration-700">
              <span style={{ fontFamily: "var(--font-display)" }}>Bersama 1</span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
          </div>

          {/* Row 3: 2 kecil kiri + 1 besar kanan */}
          <div className="photo-tilt-left reveal-scale delay-7 group relative cursor-pointer"
            style={{ gridColumn: "span 5", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", aspectRatio: "1/1" }}
            onClick={() => setSel(7)}>
            <div className="w-full h-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] border border-[var(--color-glass-border)] flex items-center justify-center text-[var(--color-text-dim)] text-xs group-hover:scale-110 transition-transform duration-700">
              <span style={{ fontFamily: "var(--font-display)" }}>Bersama 2</span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
          </div>

          <div className="photo-tilt-right reveal-scale delay-8 group relative cursor-pointer"
            style={{ gridColumn: "span 7", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", aspectRatio: "16/10" }}
            onClick={() => setSel(8)}>
            <div className="w-full h-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] border border-[var(--color-glass-border)] flex items-center justify-center text-[var(--color-text-dim)] text-sm group-hover:scale-110 transition-transform duration-700">
              <span style={{ fontFamily: "var(--font-display)" }}>Prewed 4</span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
          </div>
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
