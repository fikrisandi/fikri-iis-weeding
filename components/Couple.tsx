"use client";

import { LeafOrnamentTop, GoldDivider, GeometricFrame } from "./FloralOrnament";

export default function Couple() {
  return (
    <section id="couple" className="grad-main relative overflow-hidden geo-pattern">
      <div className="section-inner">

        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <LeafOrnamentTop className="text-[var(--color-gold)] mb-6" />
          <p className="text-[var(--color-gold-light)] mb-6"
            style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontStyle: "italic" }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
          <GoldDivider />
          <p className="text-[var(--color-text-light)] leading-[2.2] max-w-sm mx-auto mt-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 300 }}>
            Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta&apos;ala,
            kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami:
          </p>
        </div>

        {/* Groom */}
        <GeometricFrame className="glass p-10 md:p-12 text-center mb-8 reveal-left delay-2">
          <div className="relative w-36 h-36 mx-auto mb-6">
            <div className="absolute inset-[-10px] rounded-full border border-[var(--color-gold-dark)] opacity-25" style={{ animation: "breathe 5s ease-in-out infinite" }} />
            <div className="absolute inset-[-20px] rounded-full border border-[var(--color-gold-dark)] opacity-10" />
            <div className="photo-frame w-full h-full">
              <div className="w-full h-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] flex items-center justify-center">
                <span className="text-[var(--color-text-dim)] text-xs" style={{ fontFamily: "var(--font-display)" }}>Foto Fikri</span>
              </div>
            </div>
          </div>
          <h3 className="shimmer-gold mb-2" style={{ fontFamily: "var(--font-script)", fontSize: "2.6rem" }}>Fikri</h3>
          <p className="text-[var(--color-cream)] mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 400 }}>
            Muhammad Fikri Sandi Pratama
          </p>
          <div className="w-10 h-[1px] bg-[var(--color-gold-dark)] mx-auto my-4 opacity-40" />
          <p className="text-[var(--color-text-muted)] text-[12px]">Putra dari Bapak Hasanuddin &amp; Ibu Saidah</p>
        </GeometricFrame>

        {/* & */}
        <div className="text-center my-4 reveal-scale delay-3">
          <span className="text-[var(--color-gold)] opacity-50" style={{ fontFamily: "var(--font-script)", fontSize: "3.5rem" }}>&amp;</span>
        </div>

        {/* Bride */}
        <GeometricFrame className="glass p-10 md:p-12 text-center mt-8 reveal-right delay-4">
          <div className="relative w-36 h-36 mx-auto mb-6">
            <div className="absolute inset-[-10px] rounded-full border border-[var(--color-gold-dark)] opacity-25" style={{ animation: "breathe 5s ease-in-out infinite 1.5s" }} />
            <div className="absolute inset-[-20px] rounded-full border border-[var(--color-gold-dark)] opacity-10" />
            <div className="photo-frame w-full h-full">
              <div className="w-full h-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] flex items-center justify-center">
                <span className="text-[var(--color-text-dim)] text-xs" style={{ fontFamily: "var(--font-display)" }}>Foto Iis</span>
              </div>
            </div>
          </div>
          <h3 className="shimmer-gold mb-2" style={{ fontFamily: "var(--font-script)", fontSize: "2.6rem" }}>Iis</h3>
          <p className="text-[var(--color-cream)] mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 400 }}>
            Isnaini Nur Adinda Puspita Sari
          </p>
          <div className="w-10 h-[1px] bg-[var(--color-gold-dark)] mx-auto my-4 opacity-40" />
          <p className="text-[var(--color-text-muted)] text-[12px]">Putri dari Bapak Sutrisno &amp; Ibu Khosiyah</p>
        </GeometricFrame>
      </div>
    </section>
  );
}
