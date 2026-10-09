import { SITE } from "@/lib/site";
import { CONTENT, phaseHref, type Lang } from "@/lib/content";
import LeadForm from "./lead-form";
import { WaLink } from "./contact-links";

export default function Hero({ lang }: { lang: Lang }) {
  const C = CONTENT[lang];
  const t = C.hero;
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy-950 md:items-center">
      {SITE.heroLoop ? (
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src={SITE.heroLoop}
          poster="/images/hero.webp"
          autoPlay
          muted
          loop
          playsInline
          aria-label={t.imgAlt}
        />
      ) : (
        <picture className="absolute inset-0 -z-10">
          <source media="(max-width: 767px)" srcSet="/images/hero-m.webp" />
          <img src="/images/hero.webp" alt={t.imgAlt} className="h-full w-full object-cover object-[30%_center] md:object-center" fetchPriority="high" />
        </picture>
      )}
      <div className="hero-shade absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-28 pt-28 md:grid-cols-[1.25fr_0.9fr] md:items-center md:pb-20 lg:px-8">
        <div className="text-white">
          <p className="rise text-[14px] text-white/80">{t.eyebrow}</p>
          <p className="script rise rise-2 mt-4 text-[26px] text-aqua sm:text-[32px]" lang="en">{t.script}</p>
          <h1 className="rise rise-2 text-[48px] leading-[1.05] sm:text-6xl lg:text-[80px]">{t.title}</h1>
          <p className="rise rise-2 mt-5 max-w-xl text-[17px] leading-8 text-white/90 sm:text-lg">{t.lead}</p>

          <dl className="rise rise-3 mt-8 flex flex-wrap gap-x-10 gap-y-5">
            <div>
              <dt className="text-sm text-white/70">{t.chalets}</dt>
              <dd className="mt-1 text-3xl font-semibold">
                {SITE.chaletsFrom} <span className="text-lg font-medium text-white/80">{t.million}</span>
              </dd>
            </div>
            <div className="border-white/30 sm:border-s sm:ps-10">
              <dt className="text-sm text-white/70">{t.villas}</dt>
              <dd className="mt-1 text-3xl font-semibold">
                {SITE.villasFrom} <span className="text-lg font-medium text-white/80">{t.million}</span>
              </dd>
            </div>
          </dl>

          <div className="rise rise-3 mt-8 flex flex-wrap items-center gap-3">
            <WaLink label={t.wa} text={C.waDefault} className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#1fb257]" />
            <a href="#phases" className="inline-flex items-center rounded-md border border-white/50 px-5 py-3 text-[15px] font-medium text-white transition hover:bg-white/10">{t.seePhases}</a>
          </div>

          <p className="mt-8 text-sm text-white/75">
            {t.available}{" "}
            {C.phases.map((p, i) => (
              <span key={p.id}>
                <a href={phaseHref(lang, p.id)} lang="en" className="underline decoration-white/40 underline-offset-4 hover:decoration-white">{p.name}</a>
                {i < C.phases.length - 1 ? (lang === "ar" ? "، " : ", ") : ""}
              </span>
            ))}
          </p>
        </div>

        <div className="hidden rounded-xl bg-navy-950/65 p-7 ring-1 ring-white/15 backdrop-blur-md md:block">
          <h2 className="text-2xl text-white">{t.formTitle}</h2>
          <p className="mb-5 mt-1.5 text-sm leading-7 text-white/75">{t.formSub}</p>
          <LeadForm lang={lang} source="hero" dark />
        </div>
      </div>
    </section>
  );
}
