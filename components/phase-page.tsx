import { SITE } from "@/lib/site";
import { CONTENT, getPhase, phaseHref, type Lang, type PhaseId, type UnitSpec } from "@/lib/content";
import Header from "./header";
import Footer from "./footer";
import FloatingActions from "./floating-actions";
import LeadPopup from "./lead-popup";
import CookieConsent from "./cookie-consent";
import PrivacyModal from "./privacy-modal";
import LeadForm from "./lead-form";
import Contact from "./contact";
import LedgeValleyUnits from "./ledge-valley-units";
import VideoSection from "./video-section";
import { WaLink } from "./contact-links";
import { CheckIcon } from "./icons";

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-t border-current/10 py-2 text-[14px]">
      <dt className="opacity-70">{label}</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  );
}

function UnitCard({ u, lang, phase, dark }: { u: UnitSpec; lang: Lang; phase: string; dark: boolean }) {
  const t = CONTENT[lang].pp;
  return (
    <article className={`flex flex-col overflow-hidden rounded-xl ${dark ? "bg-white/[0.06] text-white ring-1 ring-white/12" : "bg-white text-ink ring-1 ring-navy-900/10"}`}>
      {u.image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img src={u.image} alt={u.name} loading="lazy" className="h-full w-full object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className={`text-[13px] ${dark ? "text-aqua" : "text-aqua-deep"}`}>{u.type}</p>
        <h3 className="mt-1 text-[28px] leading-tight" lang="en">{u.name}</h3>
        {u.extra && <p className={`mt-1 text-[14px] ${dark ? "text-white/75" : "text-mute"}`}>{u.extra}</p>}
        <dl className="mt-4">
          <Spec label={t.bua} value={`${u.bua} ${t.sqm}`} />
          <Spec label={t.beds} value={String(u.beds)} />
          {u.baths && <Spec label={t.baths} value={String(u.baths)} />}
          {u.terrace && <Spec label={t.terrace} value={`${u.terrace} ${t.sqm}`} />}
          {u.roof && <Spec label={t.roof} value={`${u.roof} ${t.sqm}`} />}
        </dl>
        <div className="mt-auto pt-5">
          <WaLink
            label={t.priceOfUnit}
            text={t.unitWa(phase, u.name)}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-[14px] font-semibold transition ${dark ? "bg-white text-navy-900 hover:bg-ice" : "bg-navy-900 text-white hover:bg-navy-700"}`}
            iconClass="size-4"
          />
        </div>
      </div>
    </article>
  );
}

export default function PhasePage({ lang, id }: { lang: Lang; id: PhaseId }) {
  const C = CONTENT[lang];
  const p = getPhase(lang, id);
  const pg = p.page;
  const t = C.pp;
  const altHref = `${C.switchPrefix}/${id}`;
  const video = SITE.videos[id];
  const others = C.phases.filter((x) => x.id !== id);

  const sub = [
    { href: "#overview", label: t.overview },
    { href: "#units", label: t.units },
    { href: "#facilities", label: t.facilities },
    { href: "#siteplan", label: t.siteplan },
    ...(video ? [{ href: "#video", label: t.video }] : []),
    { href: "#gallery", label: t.gallery },
  ];

  return (
    <>
      <Header lang={lang} altHref={altHref} active={id} />
      <main>
        {/* HERO */}
        <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-navy-950 md:items-center">
          <img src={pg.hero.src} alt={pg.hero.alt} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="hero-shade absolute inset-0 -z-10" />
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-24 pt-28 md:grid-cols-[1.25fr_0.9fr] md:items-center md:pb-20 lg:px-8">
            <div className="text-white">
              <nav aria-label="Breadcrumb" className="rise text-[13px] text-white/75">
                <a href={C.home} className="hover:text-white">{t.backHome}</a>
                <span className="mx-2" aria-hidden="true">/</span>
                <span aria-current="page" lang="en">{p.name}</span>
              </nav>
              <p className="rise rise-2 mt-5 text-[15px] text-aqua">{p.kind}</p>
              <h1 className="rise rise-2 text-[56px] leading-[1.02] sm:text-7xl lg:text-[92px]" lang="en" style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}>
                {p.name}
              </h1>
              <p className="rise rise-2 mt-5 max-w-xl text-[17px] leading-8 text-white/90 sm:text-lg">{pg.heroLead}</p>
              <div className="rise rise-3 mt-7">
                <p className="text-3xl font-semibold">{p.price}</p>
                <p className="mt-1 text-[13px] text-white/70">{p.priceNote} — {C.phasesSection.indicative}</p>
              </div>
              <div className="rise rise-3 mt-7 flex flex-wrap gap-3">
                <WaLink label={`${C.phasesSection.priceOf} ${p.name}`} text={p.waText} className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#1fb257]" />
                <a href="#units" className="inline-flex items-center rounded-md border border-white/50 px-5 py-3 text-[15px] font-medium text-white transition hover:bg-white/10">{pg.unitsTitle}</a>
              </div>
            </div>
            <div className="hidden rounded-xl bg-navy-950/65 p-7 ring-1 ring-white/15 backdrop-blur-md md:block">
              <h2 className="text-2xl text-white">{C.hero.formTitle} <span lang="en">— {p.name}</span></h2>
              <p className="mb-5 mt-1.5 text-sm leading-7 text-white/75">{C.hero.formSub}</p>
              <LeadForm lang={lang} source={`${id}-hero`} defaultPhase={id} dark />
            </div>
          </div>
        </section>

        {/* SUB-NAV */}
        <nav aria-label={p.name} className="sticky top-[68px] z-30 border-b border-navy-900/10 bg-white/95 backdrop-blur">
          <div className="no-scrollbar mx-auto flex max-w-7xl gap-1 overflow-x-auto px-3 lg:px-6">
            {sub.map((s) => (
              <a key={s.href} href={s.href} className="shrink-0 px-3 py-3.5 text-[14px] text-navy-900/80 transition hover:text-navy-900">{s.label}</a>
            ))}
          </div>
        </nav>

        {/* MOBILE FORM */}
        <section aria-label={C.mobileForm.title} className="bg-ice-soft px-5 py-10 md:hidden">
          <h2 className="text-2xl text-navy-900">{C.mobileForm.title}</h2>
          <p className="mb-5 mt-1.5 text-sm leading-7 text-mute">{C.mobileForm.sub}</p>
          <LeadForm lang={lang} source={`${id}-hero-mobile`} defaultPhase={id} />
        </section>

        {/* OVERVIEW */}
        <section id="overview" aria-labelledby="ov-title" className="scroll-mt-32 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-7">
              <h2 id="ov-title" className="text-[34px] leading-snug text-navy-900 sm:text-[48px] sm:leading-tight">{pg.overviewTitle}</h2>
              {pg.overview.map((para) => (
                <p key={para.slice(0, 20)} className="mt-5 max-w-[62ch] text-[16px] leading-8 text-mute">{para}</p>
              ))}
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-[15px] leading-7 text-ink">
                    <CheckIcon className="mt-1.5 size-4 shrink-0 text-aqua-deep" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-navy-900/10">
                {pg.facts.map((f) => (
                  <div key={f.label} className="bg-ice px-5 py-6">
                    <dt className="text-[13px] text-mute">{f.label}</dt>
                    <dd className="mt-1 whitespace-nowrap text-[26px] text-navy-900" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section aria-labelledby="story-title" className="bg-stone-soft">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
            <div className="arch aspect-[4/5] max-h-[640px] bg-white">
              <img src={pg.story.image.src} alt={pg.story.image.alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 id="story-title" className="text-[34px] leading-snug text-navy-900 sm:text-[44px]">{pg.story.title}</h2>
              <p className="mt-5 max-w-[56ch] text-[17px] leading-9 text-mute">{pg.story.text}</p>
            </div>
          </div>
        </section>

        {/* UNITS */}
        <section id="units" aria-labelledby="units-title" className="scroll-mt-32 bg-navy-900 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 id="units-title" className="text-[34px] leading-snug sm:text-[48px] sm:leading-tight">{pg.unitsTitle}</h2>
            <p className="mt-4 max-w-[60ch] text-[16px] leading-8 text-white/75">{pg.unitsLead}</p>
            <div className="mt-12">
              {id === "ledge-valley" && <LedgeValleyUnits lang={lang} />}

              {pg.buildings && (
                <div className="mb-12 grid gap-6 md:grid-cols-2">
                  {pg.buildings.map((b) => (
                    <figure key={b.name}>
                      <div className="aspect-[16/10] overflow-hidden rounded-xl bg-navy-700">
                        <img src={b.image.src} alt={b.image.alt} loading="lazy" className="h-full w-full object-cover" />
                      </div>
                      <figcaption className="mt-4">
                        <span className="text-[24px]" lang="en" style={{ fontFamily: "var(--font-serif)" }}>{b.name}</span>
                        <span className="mt-1 block text-[14px] text-white/70">{b.text}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {pg.units && (
                <div className={`grid gap-5 sm:grid-cols-2 ${pg.units.some((u) => u.image) ? "lg:grid-cols-3" : "lg:grid-cols-3 xl:grid-cols-5"}`}>
                  {pg.units.map((u) => (
                    <UnitCard key={u.name} u={u} lang={lang} phase={p.name} dark />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FACILITIES */}
        <section id="facilities" aria-labelledby="fac-title" className="scroll-mt-32 bg-ice py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:items-center lg:px-8">
            <div className="lg:col-span-6">
              <h2 id="fac-title" className="text-[34px] leading-snug text-navy-900 sm:text-[48px] sm:leading-tight">{pg.facilities.title}</h2>
              <p className="mt-4 text-[16px] leading-8 text-mute">{pg.facilities.lead}</p>
              <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-navy-900/10">
                {pg.facilities.items.map((it) => (
                  <li key={it} className="bg-white px-4 py-4 text-[15px] text-ink">{it}</li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img src={pg.facilities.image.src} alt={pg.facilities.image.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* SITE PLAN */}
        <section id="siteplan" aria-labelledby="sp-title" className="scroll-mt-32 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <h2 id="sp-title" className="text-[34px] leading-snug text-navy-900 sm:text-[48px] sm:leading-tight lg:col-span-6">{pg.siteplan.title}</h2>
              <p className="text-[16px] leading-8 text-mute lg:col-span-6">{pg.siteplan.text}</p>
            </div>
            <div className={`mt-10 grid gap-6 ${pg.siteplan.extra ? "lg:grid-cols-2" : ""}`}>
              <figure className="rounded-xl bg-white p-4 ring-1 ring-navy-900/10">
                <img src={pg.siteplan.image.src} alt={pg.siteplan.image.alt} loading="lazy" className={`mx-auto w-full ${pg.siteplan.extra ? "" : "max-w-3xl"}`} />
              </figure>
              {pg.siteplan.extra && (
                <figure className="rounded-xl bg-white p-4 ring-1 ring-navy-900/10">
                  <img src={pg.siteplan.extra.src} alt={pg.siteplan.extra.alt} loading="lazy" className="w-full" />
                  <figcaption className="mt-3 text-[14px] text-mute">{pg.siteplan.extra.caption}</figcaption>
                </figure>
              )}
            </div>
          </div>
        </section>

        <VideoSection lang={lang} src={video} poster={pg.hero.src} title={p.name} />

        {/* GALLERY */}
        <section id="gallery" aria-labelledby="gal-title" className="scroll-mt-32 bg-stone-soft py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 id="gal-title" className="text-[34px] text-navy-900 sm:text-[48px]">{t.gallery}</h2>
            <div className={`mt-10 grid grid-cols-2 gap-3 sm:gap-4 ${pg.gallery.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {pg.gallery.map((g, i) => (
                <figure key={g.src + i}>
                  <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] h-full w-full rounded-md object-cover" />
                </figure>
              ))}
            </div>
            <p className="mt-3 text-xs text-mute">{C.gallery.note}</p>
          </div>
        </section>

        {/* OTHER PHASES */}
        <section aria-labelledby="other-title" className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 id="other-title" className="text-[30px] text-navy-900 sm:text-[40px]">{t.otherPhases}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {others.map((o) => (
                <a key={o.id} href={phaseHref(lang, o.id)} className="group grid grid-cols-[120px_1fr] items-center gap-5 rounded-xl p-3 ring-1 ring-navy-900/10 transition hover:bg-ice sm:grid-cols-[180px_1fr]">
                  <div className="arch-sm aspect-[3/4] bg-ice">
                    <img src={o.card.src} alt={o.card.alt} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[13px] text-aqua-deep">{o.kind}</p>
                    <p className="mt-1 text-[30px] leading-tight text-navy-900" lang="en" style={{ fontFamily: "var(--font-serif)" }}>{o.name}</p>
                    <p className="mt-2 text-[15px] font-semibold text-navy-900">{o.price}</p>
                    <span className="mt-3 inline-block text-[14px] text-navy-900 underline decoration-aqua underline-offset-4">{C.phasesSection.explore} <span lang="en">{o.name}</span></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Contact lang={lang} defaultPhase={id} waText={p.waText} />
      </main>
      <Footer lang={lang} altHref={altHref} />
      <FloatingActions lang={lang} waText={p.waText} />
      <LeadPopup lang={lang} defaultPhase={id} />
      <CookieConsent lang={lang} />
      <PrivacyModal lang={lang} />
    </>
  );
}
