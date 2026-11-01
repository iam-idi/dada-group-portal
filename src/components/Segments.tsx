import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Gem, HardHat, Sprout, Network } from "lucide-react";
import Reveal from "./Reveal";
import { subsidiaries } from "@/lib/data";

const icons = {
  mining: Gem,
  civil: HardHat,
  agriculture: Sprout,
};

export default function Segments() {
  return (
    <section id="businesses" className="relative bg-paper py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-6 border-b hairline-light pb-10 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div>
              <p className="eyebrow mb-4 text-gold-600">What we do</p>
              <h2 className="heading-xl max-w-[18ch] text-4xl text-text-dark sm:text-5xl lg:text-6xl">
                Four companies. One group discipline.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[40ch] text-text-dark-muted">
              Each subsidiary is independently registered and run by
              specialists in its field — unified by shared standards of
              compliance, safety and execution.
            </p>
          </Reveal>
        </div>

        <div className="mt-px grid grid-cols-1 gap-px bg-paper-line sm:grid-cols-2">
          {subsidiaries.map((s, i) => {
            const Icon = icons[s.id as keyof typeof icons];
            return (
              <Reveal key={s.id} delay={i * 0.08}>
                <Link
                  href={`/businesses/${s.id}`}
                  className="group relative flex h-[420px] flex-col justify-between overflow-hidden bg-ink p-8 lg:p-12"
                >
                  <Image
                    src={s.heroImage}
                    alt={s.heroImageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover opacity-70 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                  <div className="relative flex items-start justify-between">
                    <Icon size={30} strokeWidth={1.4} className="text-gold-300" />
                    <ArrowUpRight
                      size={20}
                      className="text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300"
                    />
                  </div>
                  <div className="relative">
                    <p className="eyebrow mb-3 text-gold-300">{s.sector}</p>
                    <h3 className="heading-xl text-2xl text-white sm:text-3xl">
                      {s.shortName}
                    </h3>
                    <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-white/75">
                      {s.tagline}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}

          <Reveal delay={0.32}>
            <Link
              href="/#about"
              className="group relative flex h-[420px] flex-col justify-between overflow-hidden bg-ink p-8 lg:p-12"
            >
              <div className="glow pointer-events-none absolute inset-0 opacity-80" />
              <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />

              <div className="relative flex items-start justify-between">
                <Network size={30} strokeWidth={1.4} className="text-gold-300" />
                <ArrowUpRight
                  size={20}
                  className="text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300"
                />
              </div>
              <div className="relative">
                <p className="eyebrow mb-3 text-gold-300">
                  The holding company
                </p>
                <h3 className="heading-xl text-2xl text-white sm:text-3xl">
                  Dada Group
                </h3>
                <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-white/75">
                  The governance, compliance and capital structure that holds
                  every subsidiary to one standard.
                </p>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
