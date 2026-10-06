import { CONTENT, type Lang } from "@/lib/content";

export default function Amenities({ lang }: { lang: Lang }) {
  const t = CONTENT[lang].amenities;
  return (
    <section id="amenities" aria-labelledby="am-title" className="scroll-mt-16 bg-ice py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <h2 id="am-title" className="text-[34px] leading-snug text-navy-900 sm:text-[48px] sm:leading-tight">{t.title}</h2>
          <p className="mt-4 text-[16px] leading-8 text-mute">{t.lead}</p>
          <div className="arch mt-10 hidden aspect-[3/4] max-w-sm bg-white lg:block">
            <img src="/images/lv-close-2.webp" alt={t.imgAlt} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <ul className="grid gap-px overflow-hidden rounded-lg bg-navy-900/10 sm:grid-cols-2">
            {t.items.map((a) => (
              <li key={a.title} className="bg-white p-6 lg:p-7">
                <h3 className="text-xl text-navy-900">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-mute">{a.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-lg border border-aqua bg-white p-6 lg:p-7">
            <h3 className="text-xl text-navy-900">{t.lvTitle}</h3>
            <p className="mt-2 text-[15px] leading-8 text-mute">{t.lvText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
