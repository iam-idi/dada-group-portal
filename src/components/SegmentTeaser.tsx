import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import type { Subsidiary } from "@/lib/data";

export default function SegmentTeaser({
  data,
  icon: Icon,
  theme,
  index,
}: {
  data: Subsidiary;
  icon: LucideIcon;
  theme: "dark" | "light";
  index: number;
}) {
  const dark = theme === "dark";
  const reverse = index % 2 === 1;

  return (
    <section
      id={data.id}
      className={`relative overflow-hidden border-b ${
        dark ? "bg-ink hairline-dark" : "bg-paper-dim hairline-light"
      }`}
    >
      <div
        className={`mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 py-20 lg:gap-16 lg:px-10 lg:py-28 ${
          reverse ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]"
        }`}
      >
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Icon
                size={24}
                strokeWidth={1.4}
                className={dark ? "text-gold-300" : "text-gold-600"}
              />
              <p
                className={`eyebrow ${
                  dark ? "text-gold-300" : "text-gold-600"
                }`}
              >
                {String(index + 1).padStart(2, "0")} &middot; {data.sector}
              </p>
            </div>
            <h3
              className={`heading-xl mb-6 max-w-[14ch] text-4xl sm:text-5xl ${
                dark ? "text-text-light" : "text-text-dark"
              }`}
            >
              {data.tagline}
            </h3>
            <p
              className={`max-w-[50ch] text-base leading-relaxed ${
                dark ? "text-text-light-muted" : "text-text-dark-muted"
              }`}
            >
              {data.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href={`/businesses/${data.id}`}
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                  dark
                    ? "text-text-light hover:text-gold-300"
                    : "text-text-dark hover:text-gold-600"
                }`}
              >
                Explore {data.shortName}
                <ArrowUpRight size={15} />
              </Link>
              <span
                className={`font-mono text-xs ${
                  dark ? "text-text-light-muted" : "text-text-dark-muted"
                }`}
              >
                {data.regNumber}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className={reverse ? "lg:order-1" : ""}>
          <Link
            href={`/businesses/${data.id}`}
            className="group relative block h-[320px] overflow-hidden rounded-3xl sm:h-[420px]"
          >
            <Image
              src={data.heroImage}
              alt={data.heroImageAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
