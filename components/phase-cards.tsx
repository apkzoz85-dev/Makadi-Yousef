import { CONTENT, phaseHref, type Lang } from "@/lib/content";
import { WaLink } from "./contact-links";
import { CheckIcon } from "./icons";

export default function PhaseCards({ lang }: { lang: Lang }) {
  const C = CONTENT[lang];
  const t = C.phasesSection;
  return (
    <section id="phases" aria-labelledby="phases-title" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 id="phases-title" className="max-w-3xl text-[34px] leading-snug text-navy-900 sm:text-[48px] sm:leading-tight">{t.title}</h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-8 text-mute">{t.lead}</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {C.phases.map((p) => {
            const href = phaseHref(lang, p.id);
            return (
              <article key={p.id} id={p.id} className="flex scroll-mt-24 flex-col">
                <a href={href} className="arch group block aspect-[4/5] bg-ice">
                  <img src={p.card.src} alt={p.card.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                </a>
                <div className="flex flex-1 flex-col pt-6">
                  <p className="text-sm font-medium text-aqua-deep">{p.kind}</p>
                  <h3 className="mt-1 text-[36px] leading-tight text-navy-900" lang="en">
                    <a href={href} className="hover:underline hover:decoration-aqua hover:underline-offset-8">{p.name}</a>
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-mute">{p.tagline}</p>

                  <dl className="mt-5 grid grid-cols-3 border-y border-navy-900/12">
                    {p.stats.map((s, i) => (
                      <div key={s.label} className={`py-3 ${i > 0 ? "border-s border-navy-900/12 ps-3" : ""}`}>
                        <dt className="text-[12px] text-mute">{s.label}</dt>
                        <dd className="mt-0.5 whitespace-nowrap text-[14px] font-semibold text-navy-900">{s.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-5 space-y-2">
                    {p.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex gap-2.5 text-[14px] leading-6 text-ink">
                        <CheckIcon className="mt-1 size-4 shrink-0 text-aqua-deep" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <p className="text-[22px] font-semibold text-navy-900">{p.price}</p>
                    <p className="text-[12px] text-mute">{p.priceNote} — {t.indicative}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2.5">
                      <a href={href} className="inline-flex items-center justify-center rounded-md bg-navy-900 px-4 py-3 text-[14px] font-semibold text-white transition hover:bg-navy-700">
                        {t.explore} <span className="ms-1" lang="en">{p.name}</span>
                      </a>
                      <WaLink label={C.contact.wa} text={p.waText} className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-900/25 px-4 py-3 text-[14px] font-medium text-navy-900 transition hover:bg-ice" iconClass="size-4 text-[#25D366]" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
