"use client";

import { LeafOrnamentTop, GoldDivider } from "./FloralOrnament";
import Particles from "./Particles";

export default function Footer() {
  return (
    <footer className="grad-cover relative overflow-hidden text-center">
      <Particles count={12} />
      <div className="absolute inset-0 geo-pattern opacity-50" />
      <div className="section-inner relative z-10" style={{ paddingBottom: "50px" }}>
        <div className="reveal-up max-w-md mx-auto">
          <LeafOrnamentTop className="text-[var(--color-gold-light)] mb-8" />
          <p className="text-[var(--color-gold-light)] italic leading-[2.2] mb-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 300 }}>
            &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
            pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya,
            dan dijadikan-Nya di antaramu rasa kasih dan sayang.&rdquo;
          </p>
          <p className="text-[var(--color-text-dim)] text-[11px] mb-12 tracking-wider">— QS. Ar-Rum: 21</p>
        </div>

        <div className="reveal-up delay-2">
          <GoldDivider />
          <p className="shimmer-gold my-6" style={{ fontFamily: "var(--font-script)", fontSize: "clamp(2rem, 6vw, 2.6rem)" }}>Fikri &amp; Iis</p>
          <p className="text-[var(--color-text-light)] text-[11px] leading-[2.2] max-w-xs mx-auto mb-4 opacity-70">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami
            apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu.
          </p>
          <p className="text-[var(--color-text-muted)] text-[11px] tracking-[0.15em] mb-12">Wassalamu&apos;alaikum Wr. Wb.</p>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--color-gold-dark)] to-transparent opacity-15 mb-5" />
        <p className="text-[var(--color-text-dim)] text-[9px] tracking-[0.2em] uppercase opacity-40">&copy; 2026 — Kami Yang Berbahagia</p>
      </div>
    </footer>
  );
}
