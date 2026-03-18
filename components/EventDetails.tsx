"use client";

import { useSearchParams } from "next/navigation";
import { GoldDivider } from "./FloralOrnament";

function EventCard({ title, date, time, location, address, icon, delay }: {
  title: string; date: string; time: string; location: string; address: string; icon: React.ReactNode; delay: string;
}) {
  return (
    <div className={`relative glass rounded-3xl p-10 md:p-12 text-center reveal-up ${delay}`}>
      <div className="absolute -top-6 -right-3 md:right-4 w-14 h-14 rounded-full flex items-center justify-center z-10"
        style={{ background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))", boxShadow: "0 4px 16px rgba(212,168,83,0.35)" }}>
        {icon}
      </div>
      <h3 className="text-[var(--color-cream)] mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 500 }}>{title}</h3>
      <p className="text-[var(--color-text-muted)] text-[13px] mb-2" style={{ fontFamily: "var(--font-display)" }}>{date}</p>
      <p className="text-[var(--color-gold-light)] text-[18px] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>{time}</p>
      <div className="w-12 h-[1px] bg-[var(--color-gold-dark)] mx-auto mb-6 opacity-30" />
      <p className="text-[var(--color-text-light)] text-[13px] font-medium mb-1">{location}</p>
      <p className="text-[var(--color-text-dim)] text-[11px]">{address}</p>
    </div>
  );
}

const IconAkad = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-emerald-deep)" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>;
const IconLove = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-emerald-deep)" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>;
const IconHome = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-emerald-deep)" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const IconSun = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-emerald-deep)" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>;
const IconMoon = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-emerald-deep)" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>;

export default function EventDetails() {
  const params = useSearchParams();
  const acara = params.get("acara"); // wanita | pria | pria-siang | pria-malam | null (semua)

  const showWanita = !acara || acara === "wanita";
  const showPriaSiang = !acara || acara === "pria" || acara === "pria-siang";
  const showPriaMalam = !acara || acara === "pria" || acara === "pria-malam";
  const showPriaSection = showPriaSiang || showPriaMalam;

  return (
    <section id="event" className="grad-main relative overflow-hidden geo-pattern">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <p className="text-[var(--color-gold-dark)] tracking-[0.5em] uppercase text-[9px] mb-6 font-medium">When &amp; Where</p>
          <h2 className="text-[var(--color-gold-light)] mb-4" style={{ fontFamily: "var(--font-script)", fontSize: "clamp(2.2rem, 7vw, 3rem)" }}>
            Jadwal Acara
          </h2>
          <GoldDivider />
        </div>

        {/* ===== Rumah Wanita - 06 Juni 2026 ===== */}
        {showWanita && (
          <>
            <div className="mb-10 reveal-up delay-1">
              <p className="text-center text-[var(--color-gold)] text-[11px] tracking-[0.3em] uppercase font-medium">
                Sabtu, 06 Juni 2026
              </p>
              <p className="text-center text-[var(--color-text-dim)] text-[10px] mt-1">Rumah Mempelai Wanita</p>
            </div>

            <div className="space-y-10 mb-16">
              <EventCard title="Akad Nikah" date="Sabtu, 06 Juni 2026" time="07.00 — 08.00 WIB"
                location="Rumah Mempelai Wanita" address="Detail lokasi akan diinformasikan kemudian"
                icon={IconAkad} delay="delay-2" />
              <EventCard title="Resepsi" date="Sabtu, 06 Juni 2026" time="10.00 — 14.00 WIB"
                location="Rumah Mempelai Wanita" address="Detail lokasi akan diinformasikan kemudian"
                icon={IconLove} delay="delay-3" />
            </div>
          </>
        )}

        {/* ===== Separator (kalau tampil dua-duanya) ===== */}
        {showWanita && showPriaSection && (
          <div className="mb-16 reveal-up delay-4">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold-dark)] to-transparent opacity-20" />
          </div>
        )}

        {/* ===== Rumah Pria - 07 Juni 2026 ===== */}
        {showPriaSection && (
          <>
            <div className="mb-10 reveal-up delay-4">
              <p className="text-center text-[var(--color-gold)] text-[11px] tracking-[0.3em] uppercase font-medium">
                Minggu, 07 Juni 2026
              </p>
              <p className="text-center text-[var(--color-text-dim)] text-[10px] mt-1">Ngunduh Mantu — Rumah Mempelai Pria</p>
            </div>

            <div className="space-y-10 mb-16">
              <EventCard title="Ngunduh Mantu" date="Minggu, 07 Juni 2026" time="07.00 — 10.00 WIB"
                location="Rumah Mempelai Pria" address="Detail lokasi akan diinformasikan kemudian"
                icon={IconHome} delay="delay-5" />

              {showPriaSiang && (
                <EventCard title="Resepsi Siang" date="Minggu, 07 Juni 2026" time="11.00 — 14.00 WIB"
                  location="Rumah Mempelai Pria" address="Detail lokasi akan diinformasikan kemudian"
                  icon={IconSun} delay="delay-6" />
              )}

              {showPriaMalam && (
                <EventCard title="Resepsi Malam" date="Minggu, 07 Juni 2026" time="19.00 — 21.00 WIB"
                  location="Rumah Mempelai Pria" address="Detail lokasi akan diinformasikan kemudian"
                  icon={IconMoon} delay="delay-7" />
              )}
            </div>
          </>
        )}

        {/* Maps */}
        <div className="reveal-up delay-8">
          <div className="glass rounded-3xl p-3 overflow-hidden mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%" height="240" style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-center">
            <a href="https://maps.google.com/?q=-6.25,106.8" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Petunjuk Arah
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
