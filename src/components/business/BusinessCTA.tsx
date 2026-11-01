import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Reveal from "../Reveal";
import type { Subsidiary } from "@/lib/data";

export default function BusinessCTA({ data }: { data: Subsidiary }) {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden bg-paper py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 rounded-[2rem] border hairline-light bg-ink p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-20">
          <Reveal>
            <div>
              <p className="eyebrow mb-5 text-gold-300">
                Work with {data.shortName}
              </p>
              <h2 className="heading-display max-w-[16ch] text-4xl text-text-light sm:text-5xl">
                Partner with {data.shortName}
              </h2>
              <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-text-light-muted">
                Reach out with your requirements — volumes, specifications or
                project scope — and we&apos;ll respond with what {data.shortName}{" "}
                can deliver and the paperwork that backs it up.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col justify-between gap-10 border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div className="space-y-6">
                <a
                  href="mailto:info@dadagroupltd.com"
                  className="group flex items-center justify-between border-b border-white/10 pb-5"
                >
                  <span className="flex items-center gap-3 text-text-light">
                    <Mail size={18} className="text-gold-400" />
                    info@dadagroupltd.com
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-text-light-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300"
                  />
                </a>
                <div className="flex items-start gap-3 text-text-light-muted">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-gold-400" />
                  <span>Abuja, Federal Republic of Nigeria</span>
                </div>
              </div>

              <a
                href="mailto:info@dadagroupltd.com"
                className="btn-primary w-fit"
              >
                Start a conversation
                <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
