"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface EventCardProps {
  title: string;
  time: string;
  date: string;
  location: string;
  address: string;
  delay: number;
}

function EventCard({ title, time, date, location, address, delay }: EventCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="bg-white p-8 text-center shadow-sm border border-[var(--color-cream-dark)]"
    >
      <h3
        className="text-2xl text-[var(--color-primary-dark)] mb-4"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {title}
      </h3>
      <div className="ornament-divider mb-4">
        <span className="text-[var(--color-gold)]">&#9830;</span>
      </div>
      <p className="text-[var(--color-text)] font-medium mb-1">{date}</p>
      <p className="text-[var(--color-gold)] text-lg font-medium mb-4">{time}</p>
      <p className="text-[var(--color-text)] font-medium">{location}</p>
      <p className="text-[var(--color-text-light)] text-sm mt-1">{address}</p>
    </motion.div>
  );
}

export default function EventDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="event" className="bg-white py-20">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--color-gold)] tracking-[0.3em] uppercase text-sm mb-4">
            Waktu & Tempat
          </p>
          <h2
            className="text-3xl md:text-4xl text-[var(--color-primary-dark)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Detail Acara
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <EventCard
            title="Akad Nikah"
            date="Minggu, 15 Juni 2025"
            time="08:00 - 10:00 WIB"
            location="Masjid Al-Ikhlas"
            address="Jl. Merdeka No. 123, Jakarta Selatan"
            delay={0.2}
          />
          <EventCard
            title="Resepsi"
            date="Minggu, 15 Juni 2025"
            time="11:00 - 14:00 WIB"
            location="Gedung Serbaguna Mawar"
            address="Jl. Merdeka No. 125, Jakarta Selatan"
            delay={0.4}
          />
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-sm"
          />
          <p className="text-center mt-4">
            <a
              href="https://maps.google.com/?q=-6.25,106.8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[var(--color-gold)] text-[var(--color-primary-dark)] px-6 py-2 text-sm tracking-[0.15em] uppercase hover:bg-[var(--color-gold)] hover:text-white transition-all duration-300"
            >
              Buka di Google Maps
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
