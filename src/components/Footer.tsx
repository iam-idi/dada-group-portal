import Image from "next/image";
import Link from "next/link";
import { subsidiaries, holding } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink pt-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-paper">
                <Image
                  src="/images/dada-logo.jpg"
                  alt="Dada Group"
                  width={64}
                  height={64}
                  className="h-12 w-12 scale-150 object-cover"
                />
              </span>
              <span className="text-base font-semibold text-text-light">
                Dada Group
              </span>
            </Link>
            <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-text-light-muted">
              A diversified Nigerian holding company operating across
              mining &amp; energies, civil infrastructure and agriculture.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5 text-text-light-muted">Businesses</p>
            <ul className="space-y-3">
              {subsidiaries.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/businesses/${s.id}`}
                    className="text-sm text-text-light-muted transition-colors hover:text-gold-300"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-text-light-muted">Company</p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-text-light-muted transition-colors hover:text-gold-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-sm text-text-light-muted transition-colors hover:text-gold-300"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-text-light-muted transition-colors hover:text-gold-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-text-light-muted">Registration</p>
            <ul className="space-y-3 font-mono text-xs text-text-light-muted">
              <li>{holding.name} &middot; {holding.regNumber}</li>
              {subsidiaries.map((s) => (
                <li key={s.id}>
                  {s.shortName} &middot; {s.regNumber}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 text-xs text-text-light-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; 2026 Dada Group Ltd. Incorporated
            under the Companies and Allied Matters Act 2020, Nigeria.
          </p>
          <p>Abuja, Federal Republic of Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
