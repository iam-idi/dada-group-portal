import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Gem, HardHat, Sprout } from "lucide-react";
import Reveal from "../Reveal";
import { subsidiaries } from "@/lib/data";

const icons = {
  mining: Gem,
  civil: HardHat,
  agriculture: Sprout,
};

export default function BusinessCrossLinks({
  currentId,
}: {
  currentId: string;
}) {
  const others = subsidiaries.filter((s) => s.id !== currentId);

  return (
    <section className="relative bg-paper-dim py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow mb-4 text-gold-600">Elsewhere in the group</p>
          <h2 className="heading-xl mb-14 max-w-[20ch] text-3xl text-text-dark sm:text-4xl">
            Our other businesses
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-paper-line sm:grid-cols-2">
          {others.map((s, i) => {
            const Icon = icons[s.id as keyof typeof icons];
            return (
              <Reveal key={s.id} delay={i * 0.1}>
                <Link
                  href={`/businesses/${s.id}`}
                  className="group relative flex h-[280px] flex-col justify-between overflow-hidden bg-ink p-8"
                >
                  <Image
                    src={s.heroImage}
                    alt={s.heroImageAlt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                  <div className="relative flex items-start justify-between">
                    <Icon size={26} strokeWidth={1.4} className="text-gold-300" />
                    <ArrowUpRight
                      size={18}
                      className="text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300"
                    />
                  </div>
                  <div className="relative">
                    <p className="eyebrow mb-2 text-gold-300">{s.sector}</p>
                    <h3 className="heading-xl text-xl text-white sm:text-2xl">
                      {s.shortName}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
