import { CONTENT, type Lang } from "@/lib/content";
import Video from "./video";

type Props = { lang: Lang; src: string; poster?: string; title?: string; id?: string };

export default function VideoSection({ lang, src, poster, title, id = "video" }: Props) {
  if (!src) return null;
  const t = CONTENT[lang];
  const heading = title || t.videoTitle;
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 bg-navy-950 py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <h2 id={`${id}-title`} className="mb-8 text-[32px] text-white sm:text-[44px]">{heading}</h2>
        <Video src={src} poster={poster} title={heading} playLabel={t.playVideo} />
      </div>
    </section>
  );
}
