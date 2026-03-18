"use client";

import { useState } from "react";
import { GoldDivider, GeometricFrame } from "./FloralOrnament";

export default function RSVP() {
  const [form, setForm] = useState({ name: "", attendance: "hadir", guests: "1", message: "" });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    try {
      const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (url) await fetch(url, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "rsvp", ...form }) });
      setDone(true);
    } catch { setDone(true); } finally { setLoading(false); }
  };

  return (
    <section id="rsvp" className="grad-alt relative overflow-hidden">
      <div className="absolute inset-0 geo-pattern" />
      <div className="section-inner relative z-10">
        <div className="text-center mb-14 reveal-up">
          <p className="text-[var(--color-gold-dark)] tracking-[0.5em] uppercase text-[9px] mb-3 font-medium">RSVP</p>
          <h2 className="text-[var(--color-gold-light)] mb-2" style={{ fontFamily: "var(--font-script)", fontSize: "clamp(2.2rem, 7vw, 3rem)" }}>Konfirmasi Kehadiran</h2>
          <GoldDivider />
          <p className="text-[var(--color-text-muted)] max-w-sm mx-auto text-[12px] leading-[2] mt-4">
            Mohon konfirmasi kehadiran dan tinggalkan ucapan serta doa untuk kedua mempelai.
          </p>
        </div>

        <GeometricFrame className="glass p-8 md:p-10 max-w-md mx-auto reveal-up delay-2">
          {done ? (
            <div className="text-center py-10" style={{ animation: "fade-in 0.5s ease" }}>
              <div className="w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--color-mint-dark), var(--color-mint))" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <p className="shimmer-gold text-[2rem] mb-2" style={{ fontFamily: "var(--font-script)" }}>Terima Kasih</p>
              <p className="text-[var(--color-text-muted)] text-[12px]">Konfirmasi dan ucapan Anda telah kami terima</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="block text-[var(--color-text-muted)] text-[9px] tracking-[0.2em] uppercase mb-3 font-medium">Nama Lengkap</label>
                <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="input-field" placeholder="Masukkan nama Anda" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[var(--color-text-muted)] text-[9px] tracking-[0.2em] uppercase mb-3 font-medium">Kehadiran</label>
                  <select value={form.attendance} onChange={e => setForm({...form, attendance: e.target.value})} className="input-field">
                    <option value="hadir">Hadir</option><option value="tidak_hadir">Tidak Hadir</option><option value="mungkin">Masih Ragu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[var(--color-text-muted)] text-[9px] tracking-[0.2em] uppercase mb-3 font-medium">Jumlah Tamu</label>
                  <select value={form.guests} onChange={e => setForm({...form, guests: e.target.value})} className="input-field">
                    {[1,2,3,4,5].map(n => <option key={n} value={String(n)}>{n} Orang</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[var(--color-text-muted)] text-[9px] tracking-[0.2em] uppercase mb-3 font-medium">Ucapan &amp; Doa</label>
                <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4} className="input-field resize-none" placeholder="Tulis ucapan dan doa..." />
              </div>
              <button type="submit" disabled={loading} className="btn-gold w-full disabled:opacity-40">
                {loading ? "Mengirim..." : "Kirim Konfirmasi & Ucapan"}
              </button>
            </form>
          )}
        </GeometricFrame>
      </div>
    </section>
  );
}
