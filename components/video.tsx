"use client";

import { useState } from "react";

function youtubeId(src: string) {
  const m = src.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
  return m ? m[1] : null;
}

type Props = { src: string; poster?: string; title: string; playLabel: string };

export default function Video({ src, poster, title, playLabel }: Props) {
  const [playing, setPlaying] = useState(false);
  const yt = youtubeId(src);
  const vertical = /shorts\//.test(src);
  const frame = `relative overflow-hidden rounded-xl bg-navy-950 ${vertical ? "mx-auto aspect-[9/16] max-w-sm" : "aspect-video"}`;

  if (yt) {
    const thumb = poster || `https://i.ytimg.com/vi/${yt}/hqdefault.jpg`;
    return (
      <div className={frame}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button onClick={() => setPlaying(true)} className="group absolute inset-0 h-full w-full" aria-label={`${playLabel}: ${title}`}>
            <img src={thumb} alt="" loading="lazy" className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid size-20 place-items-center rounded-full bg-white/95 text-navy-900 shadow-xl transition group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="ms-1 size-8" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={frame}>
      <video src={src} poster={poster} controls playsInline preload="none" className="absolute inset-0 h-full w-full object-cover" aria-label={title} />
    </div>
  );
}
