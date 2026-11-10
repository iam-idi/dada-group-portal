import Reveal from "../Reveal";
import type { VideoClip } from "@/lib/data";

export default function BusinessVideo({ videos }: { videos: VideoClip[] }) {
  return (
    <section className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow mb-4 text-gold-300">In motion</p>
          <h2 className="heading-xl mb-10 max-w-[20ch] text-3xl text-text-light sm:text-4xl">
            Operations, on site
          </h2>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-8">
          {videos.map((video, i) => (
            <Reveal key={video.src} delay={i * 0.08}>
              <figure className="w-[300px] sm:w-[360px] lg:w-[440px]">
                <div className="h-[380px] overflow-hidden rounded-2xl sm:h-[460px] lg:h-[560px]">
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
          ))}
        </div>
      </div>
    </section>
  );
}
