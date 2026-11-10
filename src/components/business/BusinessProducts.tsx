import Image from "next/image";
import Reveal from "../Reveal";
import type { Product } from "@/lib/data";

export default function BusinessProducts({ products }: { products: Product[] }) {
  return (
    <section className="relative bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow mb-4 text-gold-600">What we source</p>
          <h2 className="heading-xl mb-14 max-w-[22ch] text-3xl text-text-dark sm:text-4xl">
            Minerals moving through the supply chain.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-px bg-paper-line sm:grid-cols-3 lg:grid-cols-5">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.06}>
              <div className="group flex h-full flex-col bg-paper">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="heading-xl text-base text-text-dark">
                    {product.name}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-text-dark-muted">
                    {product.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
