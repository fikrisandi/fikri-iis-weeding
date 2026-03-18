"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const photos = [
  { id: 1, label: "Prewed 1", placeholder: "Foto Prewed 1" },
  { id: 2, label: "Prewed 2", placeholder: "Foto Prewed 2" },
  { id: 3, label: "Prewed 3", placeholder: "Foto Prewed 3" },
  { id: 4, label: "Lamaran 1", placeholder: "Foto Lamaran 1" },
  { id: 5, label: "Lamaran 2", placeholder: "Foto Lamaran 2" },
  { id: 6, label: "Bersama", placeholder: "Foto Bersama" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-[var(--color-cream-dark)] py-20">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--color-gold)] tracking-[0.3em] uppercase text-sm mb-4">
            Momen Bahagia
          </p>
          <h2
            className="text-3xl md:text-4xl text-[var(--color-primary-dark)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Galeri Foto
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="aspect-square overflow-hidden cursor-pointer group"
              onClick={() => setSelectedPhoto(photo.id)}
            >
              {/* Replace this div with <img> when you have real photos */}
              <div className="w-full h-full bg-white border border-[var(--color-cream)] flex items-center justify-center text-[var(--color-text-light)] text-sm group-hover:scale-105 transition-transform duration-500">
                <span style={{ fontFamily: "var(--font-serif)" }}>{photo.placeholder}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-2xl w-full aspect-square bg-white flex items-center justify-center text-[var(--color-text-light)]">
            <span style={{ fontFamily: "var(--font-serif)" }}>
              {photos.find((p) => p.id === selectedPhoto)?.placeholder}
            </span>
          </div>
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-[var(--color-gold)] transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            &times;
          </button>
        </motion.div>
      )}
    </section>
  );
}
