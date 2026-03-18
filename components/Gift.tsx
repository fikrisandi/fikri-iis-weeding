"use client";

import { useState } from "react";
import { GoldDivider } from "./FloralOrnament";

function BankCard({ bank, number, name, delay }: { bank: string; number: string; name: string; delay: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(number); setCopied(true); setTimeout(() => setCopied(false), 2500); };

  return (
    <div className={`glass p-8 md:p-10 text-center reveal-up ${delay}`}>
      <p className="text-[var(--color-cream)] text-[16px] font-medium mb-1" style={{ fontFamily: "var(--font-display)" }}>{bank}</p>
      <p className="text-[var(--color-text-dim)] text-[11px] mb-5">{name}</p>
      <div className="glass-gold rounded-xl py-3 px-6 mb-5 inline-block">
        <span className="text-[var(--color-gold-light)] text-[18px] tracking-[0.1em] font-light" style={{ fontFamily: "var(--font-display)" }}>{number}</span>
      </div>
      <div>
        <button onClick={copy} className="btn-outline" style={{ padding: "10px 24px", fontSize: "9px" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
          {copied ? "Tersalin!" : "Salin Rekening"}
        </button>
      </div>
    </div>
  );
}

export default function Gift() {
  return (
    <section id="gift" className="grad-main relative overflow-hidden geo-pattern">
      <div className="section-inner">
        <div className="text-center mb-14 reveal-up">
          <p className="text-[var(--color-gold-dark)] tracking-[0.5em] uppercase text-[9px] mb-3 font-medium">Wedding Gift</p>
          <h2 className="text-[var(--color-gold-light)] mb-2" style={{ fontFamily: "var(--font-script)", fontSize: "clamp(2.2rem, 7vw, 3rem)" }}>Kirim Hadiah</h2>
          <GoldDivider />
          <p className="text-[var(--color-text-muted)] max-w-sm mx-auto text-[12px] leading-[2] mt-4">
            Doa restu Anda merupakan karunia yang sangat berarti. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat mengirimkan melalui:
          </p>
        </div>
        <div className="space-y-5 max-w-sm mx-auto">
          <BankCard bank="Bank BCA" number="1234567890" name="a.n. Muhammad Fikri Sandi Pratama" delay="delay-2" />
          <BankCard bank="Bank Mandiri" number="0987654321" name="a.n. Isnaini Nur Adinda Puspita Sari" delay="delay-3" />
        </div>
      </div>
    </section>
  );
}
