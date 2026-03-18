"use client";

import { useState } from "react";
import { GoldDivider } from "./FloralOrnament";

const photos = [
  { id: 1, label: "Prewed 1", span: "col-span-2 row-span-2" },
  { id: 2, label: "Prewed 2", span: "" },
  { id: 3, label: "Lamaran 1", span: "" },
  { id: 4, label: "Prewed 3", span: "" },
  { id: 5, label: "Lamaran 2", span: "" },
  { id: 6, label: "Bersama", span: "col-span-2" },
];

export default function Gallery() {
  const [sel, setSel] = useState<number | null>(null);

  return (
    <section id="gallery" className="grad-alt relative overflow-hidden">
      <div className="section-inner">
        <div className="text-center mb-14 reveal-up">
          <p className="text-[var(--color-gold-dark)] tracking-[0.5em] uppercase text-[9px] mb-3 font-medium">Our Moments</p>
          <h2 className="text-[var(--color-gold-light)] mb-2" style={{ fontFamily: "var(--font-script)", fontSize: "clamp(2.2rem, 7vw, 3rem)" }}>Galeri Foto</h2>
          <GoldDivider />
        </div>

        <div className="grid grid-cols-4 gap-2 md:gap-3">
          {photos.map((p, i) => (
            <div key={p.id} className={`${p.span} reveal-scale delay-${i+1} aspect-square rounded-2xl overflow-hidden cursor-pointer group relative`}
              onClick={() => setSel(p.id)}>
              <div className="w-full h-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] border border-[var(--color-glass-border)] rounded-2xl flex items-center justify-center text-[var(--color-text-dim)] text-[11px] group-hover:scale-110 transition-transform duration-700">
                <span style={{ fontFamily: "var(--font-display)" }}>{p.label}</span>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center pointer-events-none">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"
                  className="opacity-0 group-hover:opacity-80 scale-75 group-hover:scale-100" style={{ transition: "all 0.4s ease" }}>
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {sel !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setSel(null)} style={{ animation: "fade-in 0.3s ease" }}>
          <div className="max-w-md w-full aspect-[3/4] glass-strong flex items-center justify-center text-[var(--color-text-dim)] shadow-2xl"
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
