import Reveal from "../Reveal";
import type { Subsidiary } from "@/lib/data";

export default function BusinessHighlights({ data }: { data: Subsidiary }) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-50" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="heading-xl max-w-[18ch] text-3xl text-text-light sm:text-4xl">
              How {data.shortName} operates
            </h2>
            <p className="max-w-[38ch] text-text-light-muted">
              The core capabilities behind every site, shipment and contract.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-2">
          {data.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div
                className={`h-full border-b border-white/10 py-10 pr-6 ${
                  i % 2 === 1 ? "sm:border-l sm:pl-10" : ""
                }`}
              >
                <span className="font-mono text-sm text-gold-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="heading-xl mt-5 text-xl text-text-light sm:text-2xl">
                  {h.title}
                </h3>
                <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-text-light-muted">
                  {h.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
