import { SITE } from "@/lib/site";
import { CONTENT, type Lang } from "@/lib/content";
import LeadForm from "./lead-form";
import { CallLink, WaLink } from "./contact-links";

export default function Contact({ lang, defaultPhase, waText }: { lang: Lang; defaultPhase?: string; waText?: string }) {
  const C = CONTENT[lang];
  const t = C.contact;
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate scroll-mt-16 overflow-hidden bg-navy-900 py-20 text-white lg:py-28">
      <img src="/images/ad-lagoon.webp" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <h2 id="contact-title" className="text-[34px] leading-snug sm:text-[48px] sm:leading-tight">{t.title}</h2>
          <p className="mt-4 max-w-[52ch] text-[16px] leading-8 text-white/80">{t.lead}</p>
          <div className="mt-6 rounded-lg bg-white/10 p-5 ring-1 ring-white/15">
            <p className="text-lg font-semibold">{t.payment}</p>
            <p className="mt-1 text-sm leading-7 text-white/75">{t.paymentNote}</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <CallLink label={SITE.phone} className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-[15px] font-semibold text-navy-900 transition hover:bg-ice" />
            <WaLink label={t.wa} text={waText ?? C.waDefault} className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#1fb257]" />
          </div>
        </div>
        <div className="rounded-xl bg-white p-6 text-ink shadow-2xl sm:p-8">
          <h3 className="text-2xl text-navy-900">{t.formTitle}</h3>
          <p className="mb-5 mt-1.5 text-sm text-mute">{t.formSub}</p>
          <LeadForm lang={lang} source={defaultPhase ? `${defaultPhase}-contact` : "contact"} defaultPhase={defaultPhase} />
        </div>
      </div>
    </section>
  );
}
