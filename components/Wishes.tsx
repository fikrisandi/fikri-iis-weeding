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
      <div className="section-inner">
        <div className="text-center mb-14 reveal-up">
          <p className="text-[var(--color-gold-dark)] tracking-[0.5em] uppercase text-[9px] mb-3 font-medium">Wishes</p>
          <h2 className="text-[var(--color-gold-light)] mb-2" style={{ fontFamily: "var(--font-script)", fontSize: "clamp(2.2rem, 7vw, 3rem)" }}>Ucapan &amp; Doa</h2>
          <GoldDivider />
        </div>

        <div className="max-w-md mx-auto space-y-4 max-h-[500px] overflow-y-auto pr-1">
          {wishes.map((w, i) => (
            <div key={i} className={`glass p-6 reveal-up delay-${i+1}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--color-emerald-deep)] text-[13px] font-medium shrink-0"
                  style={{ fontFamily: "var(--font-display)", background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))" }}>
                  {w.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-[var(--color-cream)] text-[13px] font-medium truncate" style={{ fontFamily: "var(--font-display)" }}>{w.name}</h4>
                    <span className="shrink-0 text-[7px] tracking-wider uppercase px-2 py-[2px] rounded-full text-white font-medium"
                      style={{ background: bc[w.badge] }}>{bl[w.badge]}</span>
                  </div>
                  <span className="text-[var(--color-text-dim)] text-[10px]">{w.date}</span>
                </div>
              </div>
              <p className="text-[var(--color-text-light)] text-[12px] leading-[1.9] pl-12">{w.msg}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
