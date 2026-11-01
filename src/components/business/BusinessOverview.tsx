import Reveal from "../Reveal";
import type { Subsidiary } from "@/lib/data";

export default function BusinessOverview({ data }: { data: Subsidiary }) {
  return (
    <section className="relative bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow mb-4 text-gold-600">Overview</p>
              <h2 className="heading-xl max-w-[14ch] text-3xl text-text-dark sm:text-4xl">
                What {data.shortName} does
              </h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            {data.overview.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="max-w-[68ch] text-base leading-relaxed text-text-dark-muted sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
