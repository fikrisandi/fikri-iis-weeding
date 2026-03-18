"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface EventCardProps {
  title: string;
  time: string;
  date: string;
  location: string;
  address: string;
  icon: React.ReactNode;
  delay: number;
}

function EventCard({ title, time, date, location, address, icon, delay }: EventCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white p-8 md:p-10 text-center shadow-md border border-[var(--color-cream-dark)] group hover:shadow-lg transition-shadow duration-500"
    >
      {/* Top gold accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[var(--color-gold)]" />

      <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[var(--color-primary-dark)] flex items-center justify-center text-[var(--color-gold-light)]">
        {icon}
      </div>

      <h3
        className="text-2xl text-[var(--color-primary)] mb-4"
        style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
      >
        {title}
      </h3>

      <p
        className="text-[var(--color-text)] mb-1"
        style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem" }}
      >
        {date}
      </p>
      <p className="text-[var(--color-gold)] text-xl font-medium mb-5"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {time}
      </p>

      <div className="w-8 h-[1px] bg-[var(--color-gold-light)] mx-auto mb-5" />

      <p className="text-[var(--color-text)] font-medium text-sm">{location}</p>
      <p className="text-[var(--color-text-light)] text-xs mt-1 leading-relaxed">{address}</p>
    </motion.div>
  );
}

export default function EventDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="event" className="relative bg-[var(--color-primary-dark)] py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 border border-[var(--color-gold)] rounded-full" />
        <div className="absolute bottom-10 left-10 w-48 h-48 border border-[var(--color-gold)] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--color-gold)] tracking-[0.4em] uppercase text-xs mb-3">
            When &amp; Where
          </p>
          <h2
            className="text-4xl md:text-5xl text-[var(--color-cream)] mb-4"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Detail Acara
          </h2>
          <div className="ornament">
            <span className="text-[var(--color-gold)] text-xs">&#10022;</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <EventCard
            title="Akad Nikah"
            date="Sabtu, 06 Juni 2026"
            time="Menyusul"
            location="Rumah Mempelai Wanita"
            address="Detail lokasi akan diinformasikan kemudian"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            }
            delay={0.2}
          />
          <EventCard
            title="Resepsi"
            date="Sabtu, 06 Juni 2026"
            time="Menyusul"
            location="Rumah Mempelai Wanita"
            address="Detail lokasi akan diinformasikan kemudian"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            }
            delay={0.4}
          />
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-2 shadow-md"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1234567890"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-6"
        >
          <a
            href="https://maps.google.com/?q=-6.25,106.8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--color-gold)] text-[var(--color-gold)] px-6 py-3 text-xs tracking-[0.15em] uppercase hover:bg-[var(--color-gold)] hover:text-[var(--color-primary-dark)] transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Petunjuk Arah
          </a>
        </motion.div>
      </div>
    </section>
  );
}
