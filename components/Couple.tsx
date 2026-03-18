"use client";

import { LeafOrnamentTop, GoldDivider } from "./FloralOrnament";
import Particles from "./Particles";

function PersonCard({ name, fullName, parents, photoLabel }: {
  name: string; fullName: string; parents: string; photoLabel: string;
}) {
  return (
    <div className="glass rounded-3xl overflow-hidden" style={{ width: "100%" }}>
      <div className="w-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] flex items-center justify-center relative"
        style={{ aspectRatio: "1/1" }}>
        <span className="text-[var(--color-text-dim)] text-sm" style={{ fontFamily: "var(--font-display)" }}>{photoLabel}</span>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold-dark)] to-transparent opacity-40" />
      </div>
      <div style={{ textAlign: "center", padding: "40px 32px" }}>
        <h3 className="shimmer-gold" style={{ fontFamily: "var(--font-script)", fontSize: "2.4rem", marginBottom: "12px" }}>{name}</h3>
        <p className="text-[var(--color-cream)]" style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 400, marginBottom: "12px" }}>
          {fullName}
        </p>
        <div style={{ width: "40px", height: "1px", background: "var(--color-gold-dark)", margin: "16px auto", opacity: 0.4 }} />
        <p className="text-[var(--color-text-muted)]" style={{ fontSize: "12px", lineHeight: 1.8 }}>{parents}</p>
      </div>
    </div>
  );
}

export default function Couple() {
  return (
    <section id="couple" className="grad-main relative overflow-hidden geo-pattern">
      <Particles count={20} />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "140px 32px", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div className="reveal-up" style={{ textAlign: "center", marginBottom: "80px" }}>
          <LeafOrnamentTop className="text-[var(--color-gold)]" />
          <div style={{ height: "40px" }} />
          <p className="text-[var(--color-gold-light)]"
            style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontStyle: "italic", lineHeight: 1.6, marginBottom: "40px" }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
          <GoldDivider />
          <div style={{ height: "32px" }} />
          <p className="text-[var(--color-text-light)]"
            style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 300, lineHeight: 2.2, maxWidth: "440px", margin: "0 auto", textAlign: "center" }}>
            Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta&apos;ala,
            kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami:
          </p>
        </div>

        {/* Cards - side by side desktop, stacked mobile */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>

          {/* Groom */}
          <div className="reveal-left delay-2" style={{ flex: "1 1 280px", maxWidth: "340px" }}>
            <PersonCard
              name="Fikri"
              fullName="Muhammad Fikri Sandi Pratama"
              parents="Putra dari Bapak Hasanuddin &amp; Ibu Saidah"
              photoLabel="Foto Fikri"
            />
          </div>

          {/* & */}
          <div className="reveal-scale delay-3" style={{ textAlign: "center", padding: "0 8px", flexShrink: 0 }}>
            <span className="text-[var(--color-gold)]" style={{ fontFamily: "var(--font-script)", fontSize: "3rem", opacity: 0.5 }}>&amp;</span>
          </div>

          {/* Bride */}
          <div className="reveal-right delay-4" style={{ flex: "1 1 280px", maxWidth: "340px" }}>
            <PersonCard
              name="Iis"
              fullName="Isnaini Nur Adinda Puspita Sari"
              parents="Putri dari Bapak Sutrisno &amp; Ibu Khosiyah"
              photoLabel="Foto Iis"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
