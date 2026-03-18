"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

function BankCard({
  bank,
  accountNumber,
  accountName,
  delay,
}: {
  bank: string;
  accountNumber: string;
  accountName: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="bg-white p-6 md:p-8 text-center shadow-md border border-[var(--color-cream-dark)]"
    >
      <p
        className="text-lg text-[var(--color-primary)] font-semibold mb-1"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {bank}
      </p>
      <p className="text-[var(--color-text-light)] text-sm mb-4">{accountName}</p>

      <div className="bg-[var(--color-cream)] py-3 px-4 mb-4 flex items-center justify-center gap-3">
        <span
          className="text-xl tracking-[0.15em] text-[var(--color-primary-dark)] font-medium"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {accountNumber}
        </span>
      </div>

      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 border border-[var(--color-gold)] text-[var(--color-primary)] px-5 py-2 text-xs tracking-[0.15em] uppercase hover:bg-[var(--color-gold)] hover:text-white transition-all duration-300"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
        {copied ? "Tersalin!" : "Salin No. Rekening"}
      </button>
    </motion.div>
  );
}

export default function Gift() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gift" className="bg-[var(--color-cream-dark)] py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--color-gold)] tracking-[0.4em] uppercase text-xs mb-3">
            Wedding Gift
          </p>
          <h2
            className="text-4xl md:text-5xl text-[var(--color-primary)] mb-4"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Hadiah Pernikahan
          </h2>
          <div className="ornament mb-6">
            <span className="text-[var(--color-gold)] text-xs">&#10022;</span>
          </div>
          <p className="text-[var(--color-text-light)] max-w-md mx-auto text-sm leading-relaxed">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
            Namun, jika Anda ingin memberikan tanda kasih, kami menyediakan informasi berikut:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
          <BankCard
            bank="Bank BCA"
            accountNumber="1234567890"
            accountName="a.n. Muhammad Fikri Sandi Pratama"
            delay={0.2}
          />
          <BankCard
            bank="Bank Mandiri"
            accountNumber="0987654321"
            accountName="a.n. Isnaini Nur Adinda Puspita Sari"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
