import { PHASES, type Phase } from "@/lib/site";
import { WaLink } from "./contact-links";
import { CheckIcon } from "./icons";

function PhaseBlock({ p, index }: { p: Phase; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article id={p.id} className="scroll-mt-20 py-16 lg:py-24">
      <div className={`mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:gap-14 lg:px-8`}>
        {/* الصور */}
        <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
          <div className="grid grid-cols-5 gap-3 sm:gap-4">
            <div className="arch col-span-3 aspect-[3/4] bg-sand">
              <img src={p.images[0].src} alt={p.images[0].alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-2 flex flex-col gap-3 pt-10 sm:gap-4 sm:pt-16">
              <div className="arch-sm aspect-[3/4] bg-sand">
                <img src={p.images[1].src} alt={p.images[1].alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-md bg-sand">
                <img src={p.images[2].src} alt={p.images[2].alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* المحتوى */}
        <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
          <p className="text-sm text-sage">{p.kind}</p>
          <h3 className="mt-2 flex flex-wrap items-baseline gap-x-3 text-4xl font-semibold text-lagoon-900 sm:text-5xl">
            {p.name}
            <span className="text-lg font-normal text-mute" dir="ltr">{p.nameEn}</span>
          </h3>
          <p className="mt-3 font-display text-lg text-clay">{p.tagline}</p>
          <p className="mt-5 max-w-[60ch] text-[16px] leading-8 text-mute">{p.intro}</p>

          <dl className="mt-7 grid grid-cols-3 border-y border-lagoon-900/12">
            {p.stats.map((s, i) => (
              <div key={s.label} className={`py-4 ${i > 0 ? "border-r border-lagoon-900/12 pr-4" : ""}`}>
                <dt className="text-[12px] text-mute sm:text-[13px]">{s.label}</dt>
                <dd className="mt-1 whitespace-nowrap font-display text-[15px] font-semibold text-lagoon-900 sm:text-xl" dir="auto">{s.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-[15px] leading-7 text-ink">
                <CheckIcon className="mt-1.5 size-4 shrink-0 text-water" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-7 overflow-hidden rounded-lg border border-lagoon-900/12">
            <table className="w-full text-[14px]">
              <caption className="sr-only">نماذج الوحدات في {p.name}</caption>
              <thead className="bg-sand-soft text-right text-[12px] text-mute">
                <tr>
                  <th scope="col" className="px-4 py-2.5 font-medium">النموذج</th>
                  <th scope="col" className="px-4 py-2.5 font-medium">الغرف</th>
                  <th scope="col" className="px-4 py-2.5 font-medium">المساحة</th>
                </tr>
              </thead>
              <tbody>
                {p.units.map((u) => (
                  <tr key={u.name + u.area} className="border-t border-lagoon-900/8">
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
              <p className="font-display text-2xl font-semibold text-lagoon-900">{p.price}</p>
              <p className="text-[13px] text-mute">{p.priceNote} — سعر استرشادي</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <WaLink
                label={`أسعار ${p.name}`}
                text={`مرحباً، أريد أسعار ووحدات ${p.name} (${p.nameEn}) في مكادي هايتس`}
                className="inline-flex items-center gap-2 rounded-md bg-lagoon-900 px-5 py-3 font-display text-[15px] font-semibold text-white transition hover:bg-lagoon-700"
              />
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border border-lagoon-900/30 px-5 py-3 font-display text-[15px] font-medium text-lagoon-900 transition hover:bg-sand-soft"
              >
                اطلب مكالمة
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Phases() {
  return (
    <section id="phases" aria-labelledby="phases-title" className="scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 pt-20 lg:px-8 lg:pt-28">
        <h2 id="phases-title" className="max-w-3xl text-3xl font-semibold leading-snug text-lagoon-900 sm:text-[42px] sm:leading-tight">
          ثلاث مراحل متاحة للبيع الآن
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-8 text-mute">
          شاليهات على المياه في ليدج فالي وعدن باركس، وفيلات منخفضة الكثافة في سيال. كل مرحلة بشخصية مختلفة داخل نفس المدينة.
        </p>
        <nav aria-label="المراحل" className="no-scrollbar mt-8 flex gap-2 overflow-x-auto">
          {PHASES.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="shrink-0 rounded-full border border-lagoon-900/20 px-4 py-2 text-[14px] text-lagoon-900 transition hover:border-lagoon-900 hover:bg-lagoon-900 hover:text-white"
            >
              {p.name} — {p.kind}
            </a>
          ))}
        </nav>
      </div>
      <div className="divide-y divide-lagoon-900/10">
        {PHASES.map((p, i) => (
          <div key={p.id} className={i === 1 ? "bg-sand-soft" : ""}>
            <PhaseBlock p={p} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
