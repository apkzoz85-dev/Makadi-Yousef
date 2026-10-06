import { CONTENT, type Lang } from "@/lib/content";
import { PinIcon } from "./icons";

export default function Location({ lang }: { lang: Lang }) {
  const t = CONTENT[lang].location;
  return (
    <section id="location" aria-labelledby="loc-title" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <h2 id="loc-title" className="text-[34px] leading-snug text-navy-900 sm:text-[48px] sm:leading-tight">{t.title}</h2>
          <p className="mt-4 max-w-[56ch] text-[16px] leading-8 text-mute">{t.lead}</p>
          <ul className="mt-8 divide-y divide-navy-900/10 border-y border-navy-900/10">
            {t.items.map((l) => (
              <li key={l.place} className="flex items-center justify-between gap-4 py-4">
                <span className="flex items-center gap-3 text-[16px] text-ink"><PinIcon className="size-5 text-aqua-deep" />{l.place}</span>
                <span className="text-lg font-semibold text-navy-900">{l.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-lg ring-1 ring-navy-900/10">
          <iframe title={t.mapTitle} src={`https://www.google.com/maps?q=Makadi+Heights,+Hurghada,+Egypt&z=12&hl=${lang}&output=embed`} className="h-[360px] w-full lg:h-[440px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}
