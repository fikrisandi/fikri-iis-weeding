"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function RSVP() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", attendance: "hadir", guests: "1", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (SCRIPT_URL) {
        await fetch(SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "rsvp", ...formData }),
        });
      }
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="relative bg-white py-24 overflow-hidden">
      {/* Corner ornaments */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[var(--color-gold)] opacity-15 m-4" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[var(--color-gold)] opacity-15 m-4" />

      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--color-gold)] tracking-[0.4em] uppercase text-xs mb-3">
            Attendance
          </p>
          <h2
            className="text-4xl md:text-5xl text-[var(--color-primary)] mb-4"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Konfirmasi Kehadiran
          </h2>
          <div className="ornament mb-4">
            <span className="text-[var(--color-gold)] text-xs">&#10022;</span>
          </div>
          <p className="text-[var(--color-text-light)] text-sm max-w-md mx-auto">
            Mohon konfirmasi kehadiran Anda. Anda juga dapat meninggalkan ucapan dan doa untuk kedua mempelai.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-[var(--color-cream)] border border-[var(--color-cream-dark)]"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-light)" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-3xl text-[var(--color-gold)] mb-2" style={{ fontFamily: "var(--font-script)" }}>
                Terima Kasih
              </p>
              <p className="text-[var(--color-text-light)] text-sm">
                Konfirmasi dan ucapan Anda telah kami terima
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] text-[var(--color-text-light)] mb-2 tracking-[0.2em] uppercase">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 border border-[var(--color-cream-dark)] bg-[var(--color-cream)] text-[var(--color-text)] text-sm focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-[var(--color-text-light)] mb-2 tracking-[0.2em] uppercase">
                    Kehadiran
                  </label>
                  <select
                    value={formData.attendance}
                    onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                    className="w-full px-4 py-3.5 border border-[var(--color-cream-dark)] bg-[var(--color-cream)] text-[var(--color-text)] text-sm focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                  >
                    <option value="hadir">Hadir</option>
                    <option value="tidak_hadir">Tidak Hadir</option>
                    <option value="mungkin">Masih Ragu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-[var(--color-text-light)] mb-2 tracking-[0.2em] uppercase">
                    Jumlah Tamu
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3.5 border border-[var(--color-cream-dark)] bg-[var(--color-cream)] text-[var(--color-text)] text-sm focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                    <option value="3">3 Orang</option>
                    <option value="4">4 Orang</option>
                    <option value="5">5 Orang</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-[var(--color-text-light)] mb-2 tracking-[0.2em] uppercase">
                  Ucapan &amp; Doa
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3.5 border border-[var(--color-cream-dark)] bg-[var(--color-cream)] text-[var(--color-text)] text-sm focus:border-[var(--color-gold)] focus:outline-none transition-colors resize-none"
                  placeholder="Tulis ucapan dan doa untuk kedua mempelai..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--color-primary-dark)] text-[var(--color-gold-light)] px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[var(--color-primary)] transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Mengirim..." : "Kirim Konfirmasi & Ucapan"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
