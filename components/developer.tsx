import { CONTENT, type Lang } from "@/lib/content";

export default function Developer({ lang }: { lang: Lang }) {
  const t = CONTENT[lang].dev;
  return (
    <section aria-labelledby="dev-title" className="bg-navy-950 py-20 text-white lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <p className="text-sm text-aqua">{t.eyebrow}</p>
          <h2 id="dev-title" className="mt-2 text-[34px] sm:text-[44px]">{t.title}</h2>
          <p className="mt-4 max-w-[56ch] text-[16px] leading-8 text-white/75">{t.lead}</p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {t.portfolio.map((p) => (
              <li key={p} className="rounded-full border border-white/20 px-3.5 py-1.5 text-[13px] text-white/85">{p}</li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <h3 className="text-xl">{t.partnersTitle}</h3>
          <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
            {t.partners.map((p) => (
              <li key={p.name} className="flex items-center justify-between gap-4 py-4">
                <span className="text-[16px] font-semibold" dir="ltr">{p.name}</span>
                <span className="text-sm text-white/65">{p.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
