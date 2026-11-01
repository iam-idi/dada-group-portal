import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, type LucideIcon } from "lucide-react";
import Reveal from "../Reveal";
import type { Subsidiary } from "@/lib/data";

export default function BusinessHero({
  data,
  icon: Icon,
}: {
  data: Subsidiary;
  icon: LucideIcon;
}) {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-ink pt-32">
      <Image
        src={data.heroImage}
        alt={data.heroImageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-transparent" />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-6 pb-0 lg:px-10">
        <Reveal>
          <nav className="mb-8 flex items-center gap-2 text-xs text-text-light-muted">
            <Link href="/" className="transition-colors hover:text-text-light">
              Dada Group
            </Link>
            <ChevronRight size={12} />
            <Link
              href="/#businesses"
              className="transition-colors hover:text-text-light"
            >
              Businesses
            </Link>
            <ChevronRight size={12} />
            <span className="text-text-light">{data.shortName}</span>
          </nav>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mb-6 flex items-center gap-3">
            <Icon size={28} strokeWidth={1.4} className="text-gold-300" />
            <p className="eyebrow text-gold-300">{data.sector}</p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <h1 className="heading-display max-w-[18ch] text-[11vw] text-text-light sm:text-[8vw] lg:text-[5vw]">
            {data.tagline}
          </h1>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-8 flex flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[50ch] text-base leading-relaxed text-text-light-muted sm:text-lg">
              {data.description}
            </p>
            <a href="#contact-cta" className="btn-primary w-fit shrink-0 whitespace-nowrap">
              Partner with {data.shortName}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 py-8 sm:grid-cols-4">
            <div>
              <dt className="eyebrow mb-1 text-text-light-muted">
                Registered name
              </dt>
              <dd className="text-sm text-text-light">{data.name}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1 text-text-light-muted">
                CAC Reg. No.
              </dt>
              <dd className="font-mono text-sm text-text-light">
                {data.regNumber}
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-1 text-text-light-muted">
                Incorporated
              </dt>
              <dd className="font-mono text-sm text-text-light">
                {data.incorporated}
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-1 text-text-light-muted">Tax ID</dt>
              <dd className="font-mono text-sm text-text-light">
                {data.tin}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
