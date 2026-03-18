"use client";

import { LeafOrnamentTop, GoldDivider } from "./FloralOrnament";

function PersonCard({
  name, fullName, parents, photoLabel, direction, delay,
}: {
  name: string; fullName: string; parents: string; photoLabel: string;
  direction: "left" | "right"; delay: string;
}) {
  const isLeft = direction === "left"; // foto di kiri, teks di kanan

  return (
    <div className={`glass rounded-3xl p-6 md:p-8 reveal-up ${delay}`}>
      <div className={`flex items-center gap-6 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
        {/* Photo */}
        <div className="shrink-0">
          <div className="relative w-28 h-28 md:w-32 md:h-32">
            <div className="absolute inset-[-8px] rounded-full border border-[var(--color-gold-dark)] opacity-20" style={{ animation: "breathe 5s ease-in-out infinite" }} />
            <div className="photo-frame w-full h-full">
              <div className="w-full h-full bg-gradient-to-br from-[var(--color-emerald-light)] to-[var(--color-emerald)] flex items-center justify-center">
                <span className="text-[var(--color-text-dim)] text-[10px]" style={{ fontFamily: "var(--font-display)" }}>{photoLabel}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className={`flex-1 min-w-0 ${isLeft ? "text-left" : "text-right"}`}>
          <h3 className="shimmer-gold mb-1" style={{ fontFamily: "var(--font-script)", fontSize: "2.2rem" }}>{name}</h3>
          <p className="text-[var(--color-cream)] mb-2 truncate" style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 400 }}>
            {fullName}
          </p>
          <div className={`w-8 h-[1px] bg-[var(--color-gold-dark)] my-3 opacity-40 ${isLeft ? "" : "ml-auto"}`} />
          <p className="text-[var(--color-text-muted)] text-[11px] leading-relaxed">{parents}</p>
        </div>
      </div>
    </div>
  );
}

export default function Couple() {
  return (
    <section id="couple" className="grad-main relative overflow-hidden geo-pattern">
      <div className="section-inner">

        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <LeafOrnamentTop className="text-[var(--color-gold)] mb-8" />
          <p className="text-[var(--color-gold-light)] mb-6"
            style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontStyle: "italic" }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
          <GoldDivider className="mb-6" />
          <p className="text-[var(--color-text-light)] leading-[2.2] max-w-sm mx-auto"
            style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 300 }}>
            Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta&apos;ala,
            kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami:
          </p>
        </div>

        {/* Groom - foto kiri, nama kanan */}
        <PersonCard
          name="Fikri"
          fullName="Muhammad Fikri Sandi Pratama"
          parents="Putra dari Bapak Hasanuddin &amp; Ibu Saidah"
          photoLabel="Foto Fikri"
          direction="left"
          delay="delay-2"
        />

        {/* & divider */}
        <div className="text-center my-6 reveal-scale delay-3">
          <span className="text-[var(--color-gold)] opacity-50" style={{ fontFamily: "var(--font-script)", fontSize: "3rem" }}>&amp;</span>
        </div>

        {/* Bride - foto kanan, nama kiri */}
        <PersonCard
          name="Iis"
          fullName="Isnaini Nur Adinda Puspita Sari"
          parents="Putri dari Bapak Sutrisno &amp; Ibu Khosiyah"
          photoLabel="Foto Iis"
          direction="right"
          delay="delay-4"
        />
      </div>
    </section>
  );
}
