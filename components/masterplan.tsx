import { CONTENT, type Lang, type PhaseId } from "@/lib/content";

const PINS: { id: PhaseId; left: number; top: number }[] = [
  { id: "siyal", left: 28.5, top: 49 },
  { id: "aden-parks", left: 39, top: 47 },
  { id: "ledge-valley", left: 49.7, top: 60 },
];

export default function Masterplan({ lang }: { lang: Lang }) {
  const C = CONTENT[lang];
  const t = C.mp;
  return (
    <section id="masterplan" aria-labelledby="mp-title" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="mp-title" className="text-[34px] leading-snug text-navy-900 sm:text-[48px] sm:leading-tight lg:col-span-6">{t.title}</h2>
          <p className="text-[16px] leading-8 text-mute lg:col-span-6">{t.lead}</p>
        </div>
        <div className="mt-10 overflow-x-auto rounded-lg" dir="ltr">
          <div className="relative min-w-[720px]">
            <img src="/images/masterplan.webp" alt={t.alt} loading="lazy" className="w-full rounded-lg" />
            {PINS.map((p) => (
              <a key={p.id} href={`#${p.id}`} style={{ left: `${p.left}%`, top: `${p.top}%` }} className="group absolute -translate-x-1/2 -translate-y-full">
                <span className="block whitespace-nowrap rounded-md bg-navy-900 px-3 py-1.5 text-[13px] font-semibold text-white shadow-lg transition group-hover:bg-aqua-deep">{C.pins[p.id]}</span>
                <span className="mx-auto block h-3 w-px bg-navy-900" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-mute">{t.note}</p>
      </div>
    </section>
  );
}
