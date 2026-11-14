import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Reveal from "../Reveal";
import type { TeamMember } from "@/lib/data";

function MetaList({
  title,
  items,
  dark,
}: {
  title: string;
  items: string[];
  dark: boolean;
}) {
  return (
    <div>
      <p
        className={`eyebrow mb-3 ${
          dark ? "text-text-light-muted" : "text-text-dark-muted"
        }`}
      >
        {title}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className={`text-sm leading-relaxed ${
              dark ? "text-text-light-muted" : "text-text-dark-muted"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TeamMemberProfile({
  member,
  theme,
  index,
}: {
  member: TeamMember;
  theme: "dark" | "light";
  index: number;
}) {
  const dark = theme === "dark";

  return (
    <section
      id={member.id}
      className={`relative overflow-hidden border-b scroll-mt-24 ${
        dark ? "bg-ink hairline-dark" : "bg-paper hairline-light"
      }`}
    >
      {dark && (
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-50" />
      )}

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-10 lg:py-28">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            {member.photo ? (
              <span
                className={`relative mb-6 flex h-20 w-20 overflow-hidden rounded-full border ${
                  dark ? "border-gold-400/30" : "border-gold-500/30"
                }`}
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </span>
            ) : (
              <span
                className={`text-gradient-gold mb-6 flex h-16 w-16 items-center justify-center rounded-full border text-base font-semibold ${
                  dark
                    ? "border-gold-400/30 bg-white/[0.03]"
                    : "border-gold-500/30 bg-paper-dim"
                }`}
              >
                {member.initials}
              </span>
            )}
            <p
              className={`eyebrow mb-3 ${
                dark ? "text-gold-300" : "text-gold-600"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2
              className={`heading-xl mb-2 text-3xl sm:text-4xl ${
                dark ? "text-text-light" : "text-text-dark"
              }`}
            >
              {member.name}
            </h2>
            <p
              className={`text-sm font-semibold ${
                dark ? "text-gold-300" : "text-gold-600"
              }`}
            >
              {member.role}
            </p>
            <p
              className={`mt-2 text-sm leading-relaxed ${
                dark ? "text-text-light-muted" : "text-text-dark-muted"
              }`}
            >
              {member.tagline}
            </p>

            {member.contact && (
              <div
                className={`mt-6 space-y-2 border-t border-dashed pt-6 text-sm ${
                  dark ? "hairline-dark" : "hairline-light"
                }`}
              >
                {member.contact.email && (
                  <a
                    href={`mailto:${member.contact.email}`}
                    className={`flex items-center gap-2 transition-colors ${
                      dark
                        ? "text-text-light-muted hover:text-gold-300"
                        : "text-text-dark-muted hover:text-gold-600"
                    }`}
                  >
                    <Mail size={14} />
                    {member.contact.email}
                  </a>
                )}
                {member.contact.phone && (
                  <a
                    href={`tel:${member.contact.phone.replace(/\s+/g, "")}`}
                    className={`flex items-center gap-2 transition-colors ${
                      dark
                        ? "text-text-light-muted hover:text-gold-300"
                        : "text-text-dark-muted hover:text-gold-600"
                    }`}
                  >
                    <Phone size={14} />
                    {member.contact.phone}
                  </a>
                )}
              </div>
            )}
          </div>
        </Reveal>

        <div className="space-y-14">
          <Reveal>
            <div className="space-y-5">
              {member.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className={`max-w-[68ch] text-base leading-relaxed sm:text-lg ${
                    dark ? "text-text-light-muted" : "text-text-dark-muted"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          {member.highlights && (
            <Reveal delay={0.06}>
              <div>
                <p
                  className={`eyebrow mb-4 ${
                    dark ? "text-text-light-muted" : "text-text-dark-muted"
                  }`}
                >
                  Focus areas
                </p>
                <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {member.highlights.map((h) => (
                    <div
                      key={h}
                      className={`flex items-start gap-2.5 text-sm ${
                        dark ? "text-text-light-muted" : "text-text-dark-muted"
                      }`}
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {(member.education || member.memberships) && (
            <Reveal delay={0.1}>
              <div
                className={`grid grid-cols-1 gap-10 border-t pt-10 sm:grid-cols-2 ${
                  dark ? "hairline-dark" : "hairline-light"
                }`}
              >
                {member.education && (
                  <MetaList title="Education" items={member.education} dark={dark} />
                )}
                {member.memberships && (
                  <MetaList
                    title="Membership & leadership"
                    items={member.memberships}
                    dark={dark}
                  />
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
