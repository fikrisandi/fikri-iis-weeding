"use client";

import { GoldDivider, GeometricFrame } from "./FloralOrnament";

function EventCard({ title, date, time, location, address, icon, delay }: {
  title: string; date: string; time: string; location: string; address: string; icon: React.ReactNode; delay: string;
}) {
  return (
    <GeometricFrame className={`glass p-9 md:p-11 text-center reveal-up ${delay}`}>
      <div className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))" }}>{icon}</div>
      <h3 className="text-[var(--color-cream)] mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 500 }}>{title}</h3>
      <p className="text-[var(--color-text-muted)] text-[13px]" style={{ fontFamily: "var(--font-display)" }}>{date}</p>
      <p className="text-[var(--color-gold-light)] text-[18px] my-3" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>{time}</p>
      <div className="w-10 h-[1px] bg-[var(--color-gold-dark)] mx-auto my-5 opacity-30" />
      <p className="text-[var(--color-text-light)] text-[13px] font-medium">{location}</p>
      <p className="text-[var(--color-text-dim)] text-[11px] mt-1">{address}</p>
    </GeometricFrame>
  );
}

export default function EventDetails() {
  return (
    <section id="event" className="grad-main relative overflow-hidden geo-pattern">
      <div className="section-inner">
        <div className="text-center mb-14 reveal-up">
          <p className="text-[var(--color-gold-dark)] tracking-[0.5em] uppercase text-[9px] mb-3 font-medium">When &amp; Where</p>
          <h2 className="text-[var(--color-gold-light)] mb-2" style={{ fontFamily: "var(--font-script)", fontSize: "clamp(2.2rem, 7vw, 3rem)" }}>Jadwal Acara</h2>
          <GoldDivider />
        </div>

        <div className="space-y-6 mb-10">
          <EventCard title="Akad Nikah" date="Sabtu, 06 Juni 2026" time="Waktu Menyusul"
            location="Rumah Mempelai Wanita" address="Detail lokasi akan diinformasikan kemudian"
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-emerald-deep)" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>}
            delay="delay-2" />
          <EventCard title="Resepsi" date="Sabtu, 06 Juni 2026" time="Waktu Menyusul"
            location="Rumah Mempelai Wanita" address="Detail lokasi akan diinformasikan kemudian"
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-emerald-deep)" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>}
            delay="delay-4" />
        </div>

        <div className="reveal-up delay-5">
          <div className="glass p-2 overflow-hidden mb-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%" height="220" style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="text-center">
            <a href="https://maps.google.com/?q=-6.25,106.8" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Petunjuk Arah
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
