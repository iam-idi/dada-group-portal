import Reveal from "./Reveal";
import { pillars, holding } from "@/lib/data";

export default function Pillars() {
  return (
    <section id="about" className="relative bg-paper py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow mb-4 text-gold-600">About the group</p>
              <h2 className="heading-xl max-w-[14ch] text-4xl text-text-dark sm:text-5xl">
                Built on paper, run on principle.
              </h2>
              <p className="mt-6 max-w-[42ch] text-[15px] leading-relaxed text-text-dark-muted">
                {holding.name} is the holding company incorporated under the
                Companies and Allied Matters Act 2020, headquartered in{" "}
                {holding.hq}. Each operating subsidiary is independently
                registered, independently led, and held to the same group
                standard of compliance and execution.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t hairline-light pt-6">
                <div>
                  <p className="eyebrow mb-1 text-text-dark-muted">
                    CAC Reg. No.
                  </p>
                  <p className="font-mono text-sm text-text-dark">
                    {holding.regNumber}
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-1 text-text-dark-muted">Tax ID</p>
                  <p className="font-mono text-sm text-text-dark">
                    {holding.tin}
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-1 text-text-dark-muted">
                    Headquarters
                  </p>
                  <p className="font-mono text-sm text-text-dark">
                    Abuja, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div
                  className={`h-full border-t hairline-light py-8 pr-6 ${
                    i % 2 === 0 ? "sm:border-r sm:pr-6" : ""
                  }`}
                >
                  <span className="eyebrow text-gold-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="heading-xl mt-4 text-xl text-text-dark">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-dark-muted">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
