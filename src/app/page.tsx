import { Gem, HardHat, Sprout } from "lucide-react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Segments from "@/components/Segments";
import SegmentTeaser from "@/components/SegmentTeaser";
import Pillars from "@/components/Pillars";
import Approach from "@/components/Approach";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { subsidiaries } from "@/lib/data";

const icons = {
  mining: Gem,
  civil: HardHat,
  agriculture: Sprout,
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Segments />
        {subsidiaries.map((s, i) => (
          <SegmentTeaser
            key={s.id}
            data={s}
            icon={icons[s.id as keyof typeof icons]}
            theme={i % 2 === 0 ? "dark" : "light"}
            index={i}
          />
        ))}
        <Pillars />
        <Approach />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
