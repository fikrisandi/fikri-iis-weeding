"use client";

import { useState } from "react";
import { GoldDivider } from "./FloralOrnament";

function BankCard({ bank, number, name }: { bank: string; number: string; name: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(number); setCopied(true); setTimeout(() => setCopied(false), 2500); };

  return (
    <div className="glass" style={{ borderRadius: "24px", padding: "40px 32px", textAlign: "center" }}>
      <p className="text-[var(--color-cream)]" style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 500, marginBottom: "8px" }}>{bank}</p>
      <p className="text-[var(--color-text-dim)]" style={{ fontSize: "11px", marginBottom: "24px" }}>{name}</p>
      <div className="glass-gold" style={{ borderRadius: "16px", padding: "14px 24px", display: "inline-block", marginBottom: "24px" }}>
        <span className="text-[var(--color-gold-light)]" style={{ fontFamily: "var(--font-display)", fontSize: "20px", letterSpacing: "0.12em", fontWeight: 300 }}>{number}</span>
      </div>
      <div>
        <button onClick={copy} className="btn-outline" style={{ padding: "12px 28px", fontSize: "9px" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
          {copied ? "Tersalin!" : "Salin Rekening"}
        </button>
      </div>
    </div>
  );
}

export default function Gift() {
  return (
    <section id="gift" className="grad-main relative overflow-hidden geo-pattern particles-gold">
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "140px 32px" }}>
        <div className="reveal-up" style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="text-[var(--color-gold-dark)]" style={{ letterSpacing: "0.5em", textTransform: "uppercase" as const, fontSize: "9px", fontWeight: 500, marginBottom: "24px" }}>Wedding Gift</p>
          <h2 className="text-[var(--color-gold-light)]" style={{ fontFamily: "var(--font-script)", fontSize: "clamp(2.2rem, 7vw, 3rem)", marginBottom: "16px" }}>
            Kirim Hadiah
          </h2>
          <GoldDivider />
          <p className="text-[var(--color-text-muted)]" style={{ maxWidth: "400px", margin: "24px auto 0", fontSize: "12px", lineHeight: 2, textAlign: "center" }}>
            Doa restu Anda merupakan karunia yang sangat berarti. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat mengirimkan melalui:
          </p>
        </div>

        {/* Side by side on desktop, stacked on mobile */}
        <div style={{ display: "flex", flexDirection: "row", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <div className="reveal-left delay-2" style={{ flex: "1 1 260px", maxWidth: "360px" }}>
            <BankCard bank="Bank BCA" number="1234567890" name="a.n. Muhammad Fikri Sandi Pratama" />
          </div>
          <div className="reveal-right delay-3" style={{ flex: "1 1 260px", maxWidth: "360px" }}>
            <BankCard bank="Bank Mandiri" number="0987654321" name="a.n. Isnaini Nur Adinda Puspita Sari" />
          </div>
        </div>
      </div>
    </section>
  );
}
