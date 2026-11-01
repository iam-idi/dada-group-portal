import Reveal from "./Reveal";
import { approach } from "@/lib/data";

export default function Approach() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-50" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="heading-xl max-w-[16ch] text-4xl text-text-light sm:text-5xl">
              How the group operates
            </h2>
            <p className="max-w-[38ch] text-text-light-muted">
              One operating rhythm, applied across mining, construction and
              agriculture alike.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((a, i) => (
            <Reveal key={a.step} delay={i * 0.08}>
              <div
                className={`h-full border-b border-white/10 py-10 pr-6 ${
                  i % 2 === 0 ? "sm:border-r" : ""
                } ${i !== approach.length - 1 ? "lg:border-r" : "lg:border-r-0"}`}
              >
                <span className="font-mono text-sm text-gold-400">
                  {a.step}
                </span>
                <h3 className="heading-xl mt-5 text-2xl text-text-light">
                  {a.title}
                </h3>
                <p className="mt-3 max-w-[32ch] text-[15px] leading-relaxed text-text-light-muted">
                  {a.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
