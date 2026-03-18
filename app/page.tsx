import Hero from "../components/Hero";
import Couple from "../components/Couple";
import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";
import Gallery from "../components/Gallery";
import RSVP from "../components/RSVP";
import Wishes from "../components/Wishes";
import MusicPlayer from "../components/MusicPlayer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Couple />
      <Countdown />
      <EventDetails />
      <Gallery />
      <RSVP />
      <Wishes />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
