"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-ink pt-32 pb-0"
    >
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="glow pointer-events-none absolute inset-x-0 top-0 h-[60vh]" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--gold-500) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow mb-6 text-gold-300">
            A Nigerian diversified holding company
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="heading-display max-w-[16ch] text-[13vw] text-text-light sm:text-[10vw] lg:text-[6.4vw]">
            We build what
            <br />
            Nigeria runs on.
          </h1>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[46ch] text-base leading-relaxed text-text-light-muted sm:text-lg">
              Mining &amp; energies, civil infrastructure and agriculture —
              three essential industries, operated as specialised companies
              under a single disciplined group.
            </p>

            <div className="flex flex-col gap-3 sm:shrink-0 sm:flex-row sm:items-center">
              <a href="#businesses" className="btn-primary justify-center whitespace-nowrap">
                Our businesses
                <ArrowUpRight size={15} />
              </a>
              <a href="#about" className="btn-ghost-dark justify-center whitespace-nowrap">
                About the group
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex items-center justify-between border-t border-white/10 py-5 text-text-light-muted">
          <span className="eyebrow hidden sm:inline">
            CAC Registered &middot; RC 9438599 &middot; Abuja, Nigeria
          </span>
          <span className="eyebrow sm:hidden">RC 9438599 &middot; Abuja</span>
          <a
            href="#businesses"
            className="flex items-center gap-2 text-xs font-medium text-text-light-muted transition-colors hover:text-gold-300"
          >
            Scroll
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
