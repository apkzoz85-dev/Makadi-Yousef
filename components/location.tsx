import { LOCATION } from "@/lib/site";
import { PinIcon } from "./icons";

export default function Location() {
  return (
    <section id="location" aria-labelledby="loc-title" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <h2 id="loc-title" className="text-3xl font-semibold leading-snug text-lagoon-900 sm:text-[42px] sm:leading-tight">
            قلب خليج مكادي، جنوب الغردقة
          </h2>
          <p className="mt-4 max-w-[56ch] text-[16px] leading-8 text-mute">
            على أعلى نقطة في خليج مكادي، بإطلالات مفتوحة على البحر الأحمر، وقريبة من سهل حشيش وسوما باي ومراسي ريد سي.
          </p>
          <ul className="mt-8 divide-y divide-lagoon-900/10 border-y border-lagoon-900/10">
            {LOCATION.map((l) => (
              <li key={l.place} className="flex items-center justify-between gap-4 py-4">
                <span className="flex items-center gap-3 text-[16px] text-ink">
                  <PinIcon className="size-5 text-water" />
                  {l.place}
                </span>
                <span className="font-display text-lg font-semibold text-lagoon-900">{l.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-lg ring-1 ring-lagoon-900/10">
          <iframe
            title="موقع مكادي هايتس على الخريطة"
            src="https://www.google.com/maps?q=Makadi+Heights,+Hurghada,+Egypt&z=12&output=embed"
            className="h-[360px] w-full lg:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
