import { CONTENT, type Lang } from "@/lib/content";

export default function Facts({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  return (
    <section aria-label={t.factsLabel} className="bg-ice">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-navy-900/10 lg:grid-cols-4">
        {t.facts.map((f) => (
          <div key={f.v} className="bg-ice px-5 py-7 lg:px-8 lg:py-9">
            <p className="whitespace-nowrap text-[24px] text-navy-900 sm:text-[32px]" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>{f.v}</p>
            <p className="mt-1.5 text-[13px] leading-6 text-mute sm:text-sm">{f.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
