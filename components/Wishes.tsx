"use client";

import { GoldDivider } from "./FloralOrnament";
import Particles from "./Particles";

const wishes = [
  { name: "Budi Santoso", msg: "Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Barakallahu lakuma!", date: "10 Jun", badge: "hadir" },
  { name: "Siti Rahayu", msg: "Barakallahu lakuma wa baraka 'alaikuma. Selamat menempuh hidup baru!", date: "09 Jun", badge: "hadir" },
  { name: "Andi Pratama", msg: "Semoga Allah memberkahi pernikahan kalian. Bahagia selalu dunia akhirat.", date: "08 Jun", badge: "mungkin" },
];
const bc: Record<string,string> = { hadir: "#4A9E6B", tidak_hadir: "#D44", mungkin: "#D4A853" };
const bl: Record<string,string> = { hadir: "Hadir", tidak_hadir: "Tidak Hadir", mungkin: "Ragu" };

export default function Wishes() {
  return (
    <section id="wishes" className="grad-wishes relative overflow-hidden geo-pattern">
      <Particles count={15} />
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "140px 32px", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div className="reveal-up" style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{ letterSpacing: "0.5em", textTransform: "uppercase", fontSize: "9px", fontWeight: 500, marginBottom: "24px", color: "var(--color-gold-dark)" }}>Wishes</p>
          <h2 style={{ fontFamily: "var(--font-script)", fontSize: "clamp(2.2rem, 7vw, 3rem)", marginBottom: "16px", color: "var(--color-gold-light)" }}>
            Ucapan &amp; Doa
          </h2>
          <GoldDivider />
        </div>

        {/* Wishes list */}
        <div style={{ maxWidth: "480px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px", maxHeight: "500px", overflowY: "auto", paddingRight: "4px" }}>
          {wishes.map((w, i) => (
            <div key={i} className={`glass rounded-2xl reveal-up delay-${i+1}`} style={{ padding: "24px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--color-emerald-deep)", fontSize: "13px", fontWeight: 500, fontFamily: "var(--font-display)",
                  background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))", flexShrink: 0,
                }}>
                  {w.name.charAt(0)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <h4 style={{ color: "var(--color-cream)", fontSize: "13px", fontWeight: 500, fontFamily: "var(--font-display)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{w.name}</h4>
                    <span style={{ flexShrink: 0, fontSize: "7px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 8px", borderRadius: "20px", color: "white", fontWeight: 500, background: bc[w.badge] }}>{bl[w.badge]}</span>
                  </div>
                  <span style={{ color: "var(--color-text-dim)", fontSize: "10px" }}>{w.date}</span>
                </div>
              </div>
              <p style={{ color: "var(--color-text-light)", fontSize: "12px", lineHeight: 1.9, paddingLeft: "48px" }}>{w.msg}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
