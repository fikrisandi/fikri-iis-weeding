"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Wish {
  name: string;
  message: string;
  timestamp: string;
}

export default function Wishes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [wishes, setWishes] = useState<Wish[]>([
    { name: "Budi Santoso", message: "Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin!", timestamp: "2025-06-10" },
    { name: "Siti Rahayu", message: "Barakallahu lakuma wa baraka 'alaikuma. Selamat menempuh hidup baru!", timestamp: "2025-06-09" },
  ]);
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newWish: Wish = {
      name: formData.name,
      message: formData.message,
      timestamp: new Date().toISOString().split("T")[0],
    };

    try {
      const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (SCRIPT_URL) {
        await fetch(SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "wish", ...formData }),
        });
      }
    } catch {
      // Silently fail for UX
    }

    setWishes([newWish, ...wishes]);
    setFormData({ name: "", message: "" });
    setSubmitted(true);
    setLoading(false);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="wishes" className="bg-[var(--color-cream-dark)] py-20">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--color-gold)] tracking-[0.3em] uppercase text-sm mb-4">
            Kirim Doa
          </p>
          <h2
            className="text-3xl md:text-4xl text-[var(--color-primary-dark)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Ucapan & Doa
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto mb-12"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-[var(--color-cream)] bg-white text-[var(--color-text)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
              placeholder="Nama Anda"
            />
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-[var(--color-cream)] bg-white text-[var(--color-text)] focus:border-[var(--color-gold)] focus:outline-none transition-colors resize-none"
              placeholder="Tulis ucapan & doa untuk kedua mempelai..."
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full border border-[var(--color-gold)] text-[var(--color-primary-dark)] px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-[var(--color-gold)] hover:text-white transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim Ucapan"}
            </button>
            {submitted && (
              <p className="text-center text-[var(--color-gold)] text-sm">
                Terima kasih atas doa dan ucapannya!
              </p>
            )}
          </form>
        </motion.div>

        {/* Wishes list */}
        <div className="max-w-md mx-auto space-y-4 max-h-96 overflow-y-auto pr-2">
          {wishes.map((wish, i) => (
            <motion.div
              key={`${wish.name}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-white p-5 border border-[var(--color-cream)]"
            >
              <div className="flex justify-between items-start mb-2">
                <h4
                  className="text-[var(--color-primary-dark)] font-medium"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {wish.name}
                </h4>
                <span className="text-xs text-[var(--color-text-light)]">{wish.timestamp}</span>
              </div>
              <p className="text-[var(--color-text-light)] text-sm leading-relaxed">
                {wish.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
