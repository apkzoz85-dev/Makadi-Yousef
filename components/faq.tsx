import { CONTENT, type Lang } from "@/lib/content";

export default function Faq({ lang }: { lang: Lang }) {
  const C = CONTENT[lang];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: C.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-16 bg-stone-soft py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <h2 id="faq-title" className="text-[34px] text-navy-900 sm:text-[48px]">{C.faqTitle}</h2>
        <div className="mt-8 divide-y divide-navy-900/12 border-y border-navy-900/12">
          {C.faq.map((f) => (
            <details key={f.q} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[17px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-navy-900/25 text-navy-900 transition group-open:rotate-45" aria-hidden="true">+</span>
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
