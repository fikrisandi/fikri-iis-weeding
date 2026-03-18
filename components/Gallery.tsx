"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const photos = [
  { id: 1, src: "/images/prewed-1.jpg", label: "Foto Prewed 1", span: "col-span-2 row-span-2" },
  { id: 2, src: "/images/prewed-2.jpg", label: "Foto Prewed 2", span: "" },
  { id: 3, src: "/images/lamaran-1.jpg", label: "Foto Lamaran 1", span: "" },
  { id: 4, src: "/images/prewed-3.jpg", label: "Foto Prewed 3", span: "" },
  { id: 5, src: "/images/lamaran-2.jpg", label: "Foto Lamaran 2", span: "" },
  { id: 6, src: "/images/bersama.jpg", label: "Foto Bersama", span: "col-span-2" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-[var(--color-cream)] py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--color-gold)] tracking-[0.4em] uppercase text-xs mb-3">
            Our Moments
          </p>
          <h2
            className="text-4xl md:text-5xl text-[var(--color-primary)] mb-4"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Galeri Foto
          </h2>
          <div className="ornament">
            <span className="text-[var(--color-gold)] text-xs">&#10022;</span>
          </div>
        </motion.div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              className={`${photo.span} aspect-square overflow-hidden cursor-pointer group relative`}
              onClick={() => setSelected(photo.id)}
            >
              {/* Ganti div ini dengan <img src={photo.src}> ketika sudah ada foto */}
              <div className="w-full h-full bg-gradient-to-br from-[var(--color-cream-dark)] to-white border border-[var(--color-cream-dark)] flex items-center justify-center text-[var(--color-text-light)] text-xs">
                <span style={{ fontFamily: "var(--font-serif)" }}>{photo.label}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--color-primary-dark)]/0 group-hover:bg-[var(--color-primary-dark)]/30 transition-all duration-500 flex items-center justify-center">
                <svg
                  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-xl w-full aspect-square bg-white flex items-center justify-center text-[var(--color-text-light)] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <span style={{ fontFamily: "var(--font-serif)" }}>
                {photos.find((p) => p.id === selected)?.label}
              </span>
            </motion.div>
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white text-xl flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
