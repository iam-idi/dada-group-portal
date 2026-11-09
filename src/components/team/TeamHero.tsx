import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "../Reveal";

export default function TeamHero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="glow pointer-events-none absolute inset-x-0 top-0 h-[60vh]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <nav className="mb-8 flex items-center gap-2 text-xs text-text-light-muted">
            <Link href="/" className="transition-colors hover:text-text-light">
              Dada Group
            </Link>
            <ChevronRight size={12} />
            <span className="text-text-light">Team</span>
          </nav>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="eyebrow mb-6 text-gold-300">Leadership & people</p>
        </Reveal>

        <Reveal delay={0.14}>
          <h1 className="heading-display max-w-[18ch] text-[12vw] text-text-light sm:text-[9vw] lg:text-[5.5vw]">
            The people building Dada Group.
          </h1>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mt-8 max-w-[56ch] border-t border-white/10 pt-8 text-base leading-relaxed text-text-light-muted sm:text-lg">
            Engineers, geoscientists and surveyors across Nigeria, Russia and
            China — the specialists running mining, construction and
            agriculture under one group standard.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
