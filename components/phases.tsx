import { CONTENT, type Lang, type Phase } from "@/lib/content";
import { WaLink } from "./contact-links";
import { CheckIcon } from "./icons";

function PhaseBlock({ p, index, lang }: { p: Phase; index: number; lang: Lang }) {
  const t = CONTENT[lang].phasesSection;
  const flip = index % 2 === 1;
  return (
    <article id={p.id} className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-12 lg:gap-14 lg:px-8">
        <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
          <div className="grid grid-cols-5 gap-3 sm:gap-4">
            <div className="arch col-span-3 aspect-[3/4] bg-ice">
              <img src={p.images[0].src} alt={p.images[0].alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-2 flex flex-col gap-3 pt-10 sm:gap-4 sm:pt-16">
              <div className="arch-sm aspect-[3/4] bg-ice">
                <img src={p.images[1].src} alt={p.images[1].alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-md bg-ice">
                <img src={p.images[2].src} alt={p.images[2].alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
          <p className="text-sm font-medium text-aqua-deep">{p.kind}</p>
          <h3 className="mt-2 flex flex-wrap items-baseline gap-x-3 text-[40px] leading-tight text-navy-900 sm:text-[52px]">
            {p.name}
            <span className="text-lg text-mute" lang={lang === "ar" ? "en" : "ar"} style={{ fontFamily: "var(--font-body)" }}>{p.nameAlt}</span>
          </h3>
          <p className="script mt-2 text-[22px] text-aqua-deep">{p.tagline}</p>
          <p className="mt-5 max-w-[60ch] text-[16px] leading-8 text-mute">{p.intro}</p>

          <dl className="mt-7 grid grid-cols-3 border-y border-navy-900/12">
            {p.stats.map((s, i) => (
              <div key={s.label} className={`py-4 ${i > 0 ? "border-s border-navy-900/12 ps-4" : ""}`}>
                <dt className="text-[12px] text-mute sm:text-[13px]">{s.label}</dt>
                <dd className="mt-1 whitespace-nowrap text-[15px] font-semibold text-navy-900 sm:text-xl">{s.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-[15px] leading-7 text-ink">
                <CheckIcon className="mt-1.5 size-4 shrink-0 text-aqua-deep" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-7 overflow-hidden rounded-lg border border-navy-900/12">
            <table className="w-full text-[14px]">
              <caption className="sr-only">{t.unitsCaption} {p.name}</caption>
              <thead className="bg-ice text-start text-[12px] text-mute">
                <tr>
                  <th scope="col" className="px-4 py-2.5 text-start font-medium">{t.model}</th>
                  <th scope="col" className="px-4 py-2.5 text-start font-medium">{t.rooms}</th>
                  <th scope="col" className="px-4 py-2.5 text-start font-medium">{t.area}</th>
                </tr>
              </thead>
              <tbody>
                {p.units.map((u) => (
                  <tr key={u.name + u.area} className="border-t border-navy-900/8">
                    <td className="px-4 py-2.5 font-medium text-ink">{u.name}</td>
                    <td className="px-4 py-2.5 text-mute">{u.detail}</td>
                    <td className="whitespace-nowrap px-4 py-2.5 text-ink">{u.area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div>
              <p className="text-[26px] font-semibold text-navy-900">{p.price}</p>
              <p className="text-[13px] text-mute">{p.priceNote} — {t.indicative}</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <WaLink label={`${t.priceOf} ${p.name}`} text={p.waText} className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-navy-700" />
              <a href="#contact" className="inline-flex items-center rounded-md border border-navy-900/30 px-5 py-3 text-[15px] font-medium text-navy-900 transition hover:bg-ice">{t.callback}</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Phases({ lang }: { lang: Lang }) {
  const C = CONTENT[lang];
  const t = C.phasesSection;
  return (
    <section id="phases" aria-labelledby="phases-title" className="scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 pt-20 lg:px-8 lg:pt-28">
        <h2 id="phases-title" className="max-w-3xl text-[34px] leading-snug text-navy-900 sm:text-[48px] sm:leading-tight">{t.title}</h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-8 text-mute">{t.lead}</p>
        <nav aria-label={t.title} className="no-scrollbar mt-8 flex gap-2 overflow-x-auto">
          {C.phases.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="shrink-0 rounded-full border border-navy-900/20 px-4 py-2 text-[14px] text-navy-900 transition hover:border-navy-900 hover:bg-navy-900 hover:text-white">
              {p.name} — {p.kind}
            </a>
          ))}
        </nav>
      </div>
      <div className="divide-y divide-navy-900/10">
        {C.phases.map((p, i) => (
          <div key={p.id} className={i === 1 ? "bg-stone-soft" : ""}>
            <PhaseBlock p={p} index={i} lang={lang} />
          </div>
        ))}
      </div>
    </section>
  );
}
