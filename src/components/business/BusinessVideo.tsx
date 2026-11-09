import Reveal from "../Reveal";
import type { Subsidiary } from "@/lib/data";

export default function BusinessVideo({
  video,
}: {
  video: NonNullable<Subsidiary["video"]>;
}) {
  return (
    <section className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow mb-4 text-gold-300">In motion</p>
          <h2 className="heading-xl mb-10 max-w-[20ch] text-3xl text-text-light sm:text-4xl">
            Operations, on site
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <figure>
            <div className="overflow-hidden rounded-2xl">
              <video
                className="h-full w-full object-cover"
                src={video.src}
                poster={video.poster}
                controls
                playsInline
                preload="metadata"
              />
            </div>
            <figcaption className="mt-4 text-sm text-text-light-muted">
              {video.caption}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
