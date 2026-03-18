"use client";

import { useState, Suspense } from "react";
import { useReveal } from "../components/useReveal";
import Cover from "../components/Cover";
import Hero from "../components/Hero";
import Couple from "../components/Couple";
import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";
import Gallery from "../components/Gallery";
import Gift from "../components/Gift";
import RSVP from "../components/RSVP";
import Wishes from "../components/Wishes";
import MusicPlayer from "../components/MusicPlayer";
import Footer from "../components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  useReveal();

  return (
    <>
      {!isOpen && <Cover onOpen={() => setIsOpen(true)} />}
      <main>
        <Hero />
        <Couple />
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
