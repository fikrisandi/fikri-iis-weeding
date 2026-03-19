"use client";

import { use, useState, Suspense } from "react";
import { useReveal } from "../../components/useReveal";
import Cover from "../../components/Cover";
import Hero from "../../components/Hero";
import Couple from "../../components/Couple";
import Countdown from "../../components/Countdown";
import EventDetails from "../../components/EventDetails";
import Gallery from "../../components/Gallery";
import Gift from "../../components/Gift";
import RSVP from "../../components/RSVP";
import Wishes from "../../components/Wishes";
import MusicPlayer from "../../components/MusicPlayer";
import Footer from "../../components/Footer";

export default function InvitationPage({ params }: { params: Promise<{ to: string }> }) {
  const { to } = use(params);
  const guestName = decodeURIComponent(to.replace(/\+/g, " "));
  const [isOpen, setIsOpen] = useState(false);
  useReveal();

  return (
    <>
      {!isOpen && <Cover onOpen={() => setIsOpen(true)} guestName={guestName} />}
      <main>
        <Hero />
        <Couple guestName={guestName} />
        <Countdown />
        <Suspense>
          <EventDetails />
        </Suspense>
        <Gallery />
        <Gift />
        <RSVP />
        <Wishes />
        <Footer />
      </main>
      {isOpen && <MusicPlayer autoPlay />}
    </>
  );
}
