import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { teamMembers } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="relative bg-paper py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-6 border-b hairline-light pb-10 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div>
              <p className="eyebrow mb-4 text-gold-600">Who we are</p>
              <h2 className="heading-xl max-w-[18ch] text-4xl text-text-dark sm:text-5xl lg:text-6xl">
                The people behind the group.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-dark transition-colors hover:text-gold-600"
            >
              Meet the full team
              <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px border-b hairline-light bg-paper-line sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.08}>
              <Link
                href={`/team#${member.id}`}
                className="group flex h-full flex-col justify-between gap-10 bg-paper p-8 transition-colors hover:bg-paper-dim"
              >
                <div className="flex items-start justify-between">
                  <span className="text-gradient-gold flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/30 bg-ink text-sm font-semibold">
                    {member.initials}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-text-dark-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600"
                  />
                </div>
                <div>
                  <h3 className="heading-xl text-lg text-text-dark">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-dark-muted">
                    {member.role}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
