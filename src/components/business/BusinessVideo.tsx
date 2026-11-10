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
          <figure className="flex flex-col items-center">
            <video
              className="max-h-[70vh] w-auto max-w-full rounded-2xl"
              src={video.src}
              poster={video.poster}
              controls
              playsInline
              preload="metadata"
            />
            <figcaption className="mt-4 text-center text-sm text-text-light-muted">
              {video.caption}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
