import Image from "next/image";
import Reveal from "../Reveal";
import type { Subsidiary } from "@/lib/data";

export default function BusinessGallery({ data }: { data: Subsidiary }) {
  return (
    <section className="relative bg-paper-dim py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow mb-4 text-gold-600">On the ground</p>
          <h2 className="heading-xl mb-14 max-w-[16ch] text-3xl text-text-dark sm:text-4xl">
            {data.shortName} in practice
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {data.gallery.map((image, i) => (
            <Reveal key={image.src} delay={i * 0.1}>
              <figure>
                <div className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[380px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 text-sm text-text-dark-muted">
                  {image.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
