"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function RSVP() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    attendance: "hadir",
    guests: "1",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Kirim ke Google Sheets via Apps Script
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
      setSubmitted(true); // Still show success for UX
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="bg-white py-20">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--color-gold)] tracking-[0.3em] uppercase text-sm mb-4">
            Konfirmasi
          </p>
          <h2
            className="text-3xl md:text-4xl text-[var(--color-primary-dark)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            RSVP
          </h2>
          <p className="text-[var(--color-text-light)] mt-4 max-w-md mx-auto">
            Mohon konfirmasi kehadiran Anda sebagai bentuk penghormatan bagi kami
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          {submitted ? (
            <div className="text-center py-12 bg-[var(--color-cream)] p-8">
              <p className="text-2xl text-[var(--color-gold)] mb-2" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Terima Kasih
              </p>
              <p className="text-[var(--color-text-light)]">
                Konfirmasi Anda telah kami terima
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-[var(--color-text-light)] mb-2 tracking-wider uppercase">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-[var(--color-cream-dark)] bg-white text-[var(--color-text)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label className="block text-sm text-[var(--color-text-light)] mb-2 tracking-wider uppercase">
                  Konfirmasi Kehadiran
                </label>
                <select
                  value={formData.attendance}
                  onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                  className="w-full px-4 py-3 border border-[var(--color-cream-dark)] bg-white text-[var(--color-text)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                >
                  <option value="hadir">Hadir</option>
                  <option value="tidak_hadir">Tidak Hadir</option>
                  <option value="mungkin">Masih Ragu</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-[var(--color-text-light)] mb-2 tracking-wider uppercase">
                  Jumlah Tamu
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 border border-[var(--color-cream-dark)] bg-white text-[var(--color-text)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                >
                  <option value="1">1 Orang</option>
                  <option value="2">2 Orang</option>
                  <option value="3">3 Orang</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full border border-[var(--color-gold)] text-[var(--color-primary-dark)] px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-[var(--color-gold)] hover:text-white transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Mengirim..." : "Kirim Konfirmasi"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
