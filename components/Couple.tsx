"use client";

import { LeafOrnamentTop, GoldDivider } from "./FloralOrnament";

function PersonCard({
  name, fullName, parents, photoLabel, delay,
}: {
  name: string; fullName: string; parents: string; photoLabel: string; delay: string;
}) {
  return (
    <div className={`glass rounded-3xl overflow-hidden max-w-sm mx-auto reveal-up ${delay}`}>
      {/* Photo area — square, nanti ganti div ini dengan <img> */}
      <div className="w-full aspect-square bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] flex items-center justify-center relative">
        <span className="text-[var(--color-text-dim)] text-sm" style={{ fontFamily: "var(--font-display)" }}>{photoLabel}</span>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold-dark)] to-transparent opacity-40" />
      </div>

      {/* Info area */}
      <div className="text-center px-8 py-10 md:px-10 md:py-12">
        <h3 className="shimmer-gold mb-3" style={{ fontFamily: "var(--font-script)", fontSize: "2.4rem" }}>{name}</h3>
        <p className="text-[var(--color-cream)] mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 400 }}>
          {fullName}
        </p>
        <div className="w-10 h-[1px] bg-[var(--color-gold-dark)] mx-auto my-4 opacity-40" />
        <p className="text-[var(--color-text-muted)] text-[12px] leading-[1.8]">{parents}</p>
      </div>
    </div>
  );
}

export default function Couple() {
  return (
    <section id="couple" className="grad-main relative overflow-hidden geo-pattern">
      <div className="section-inner">

        {/* Header */}
        <div className="text-center mb-20 reveal-up py-6">
          <LeafOrnamentTop className="text-[var(--color-gold)] mb-10" />
          <p className="text-[var(--color-gold-light)] mb-10"
            style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontStyle: "italic", lineHeight: "1.6" }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
          <GoldDivider className="mb-10" />
          <p className="text-[var(--color-text-light)] leading-[2.2] max-w-md mx-auto text-center"
            style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 300 }}>
            Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta&apos;ala,
            kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami:
          </p>
        </div>

        {/* Groom */}
        <PersonCard
          name="Fikri"
          fullName="Muhammad Fikri Sandi Pratama"
          parents="Putra dari Bapak Hasanuddin &amp; Ibu Saidah"
          photoLabel="Foto Fikri"
          delay="delay-2"
        />

        {/* & divider */}
        <div className="text-center my-8 reveal-scale delay-3">
          <span className="text-[var(--color-gold)] opacity-50" style={{ fontFamily: "var(--font-script)", fontSize: "3rem" }}>&amp;</span>
        </div>

        {/* Bride */}
        <PersonCard
          name="Iis"
          fullName="Isnaini Nur Adinda Puspita Sari"
          parents="Putri dari Bapak Sutrisno &amp; Ibu Khosiyah"
          photoLabel="Foto Iis"
          delay="delay-4"
        />
      </div>
    </section>
  );
}
