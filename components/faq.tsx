import { FAQ } from "@/lib/site";

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-16 bg-sand-soft py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <h2 id="faq-title" className="text-3xl font-semibold text-lagoon-900 sm:text-[42px]">أسئلة شائعة</h2>
        <div className="mt-8 divide-y divide-lagoon-900/12 border-y border-lagoon-900/12">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-[17px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-lagoon-900/25 text-lagoon-900 transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="pb-5 text-[15px] leading-8 text-mute">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
