"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { LeafOrnamentTop, GoldDivider } from "../components/FloralOrnament";

const acaraOptions = [
  {
    label: "Resepsi Wanita",
    description: "Sabtu, 06 Juni 2026",
    acara: "wanita",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
  {
    label: "Resepsi Pria — Siang",
    description: "Minggu, 07 Juni 2026",
    acara: "pria-siang",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      </svg>
    ),
  },
  {
    label: "Resepsi Pria — Malam",
    description: "Minggu, 07 Juni 2026",
    acara: "pria-malam",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
      </svg>
    ),
  },
];

export default function Home() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 200); }, []);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-auto grad-cover">
      <div className="absolute inset-0 geo-pattern" />

      <div className="relative z-10 text-center px-8 max-w-md w-full py-16">
        <div style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(15px)", transition: "all 0.8s ease 0.3s" }}>
          <LeafOrnamentTop className="text-[var(--color-gold-light)] mb-6" />
        </div>

        <p style={{ opacity: ready ? 1 : 0, transition: "all 0.6s ease 0.5s", fontFamily: "var(--font-body)",
          fontSize: "9px", fontWeight: 400, letterSpacing: "0.5em", color: "var(--color-mint)", textTransform: "uppercase", marginBottom: "24px" }}>
          The Wedding Of
        </p>

        <h1 className="shimmer-gold" style={{ fontFamily: "var(--font-script)", fontSize: "clamp(3rem, 10vw, 4.5rem)", lineHeight: 1.1,
          opacity: ready ? 1 : 0, transform: ready ? "none" : "scale(0.85)", transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.7s" }}>
          Fikri <span style={{ fontFamily: "var(--font-script)", fontSize: "1.8rem", color: "var(--color-gold-dark)", opacity: 0.6 }}>&amp;</span> Iis
        </h1>

        <div style={{ opacity: ready ? 1 : 0, transition: "all 0.8s ease 1s", marginTop: "16px", marginBottom: "48px" }}>
          <GoldDivider />
        </div>

        <p style={{ opacity: ready ? 1 : 0, transition: "all 0.6s ease 1.2s", fontFamily: "var(--font-display)",
          fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "32px" }}>
          Pilih Acara
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(20px)", transition: "all 0.8s ease 1.4s" }}>
          {acaraOptions.map((opt) => (
            <Link
              key={opt.acara}
              href={`/Tamu+Undangan?acara=${opt.acara}`}
              className="glass"
              style={{
                display: "flex", alignItems: "center", gap: "16px",
                padding: "20px 24px", borderRadius: "16px",
                textDecoration: "none", transition: "all 0.3s ease",
                border: "1px solid rgba(212,168,83,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,168,83,0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,168,83,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))",
                color: "var(--color-emerald-deep)",
              }}>
                {opt.icon}
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 500, color: "var(--color-cream)", marginBottom: "2px" }}>
                  {opt.label}
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--color-text-muted)" }}>
                  {opt.description}
                </p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-dark)" strokeWidth="1.5" style={{ marginLeft: "auto", flexShrink: 0 }}>
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </Link>
          ))}
        </div>

        <p style={{ opacity: ready ? 1 : 0, transition: "all 0.6s ease 1.8s", fontFamily: "var(--font-body)",
          fontSize: "10px", color: "var(--color-text-dim)", marginTop: "40px", lineHeight: 1.6 }}>
          Halaman ini untuk preview.<br/>
          Link undangan personal akan dikirim via WhatsApp.
        </p>
      </div>
    </div>
  );
}
