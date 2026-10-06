"use client";

import { SITE } from "@/lib/site";
import { CONTENT, type Lang } from "@/lib/content";
import { openPrivacy } from "./privacy-modal";

export default function Footer({ lang }: { lang: Lang }) {
  const C = CONTENT[lang];
  const t = C.footer;
  return (
    <footer className="bg-navy-950 pb-28 pt-12 text-white/70 md:pb-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <p className="text-xl text-white" style={{ fontFamily: "var(--font-display)" }}>{t.title}</p>
            <p className="mt-1 text-sm">{t.sub}</p>
          </div>
          <div className="text-sm leading-7">
            <p>{t.phone} <a href={`tel:${SITE.phoneIntl}`} dir="ltr" className="text-white">{SITE.phone}</a></p>
            <p>{t.email} <a href={`mailto:${SITE.email}`} dir="ltr" className="text-white">{SITE.email}</a></p>
            <p><a href={C.switchHref} className="text-aqua underline underline-offset-4">{C.switchLabel}</a></p>
          </div>
        </div>
        <div className="mt-8 space-y-3 text-[13px] leading-7">
          <p><strong className="text-white/90">{t.disclosureLabel}</strong> {t.disclosure}</p>
          <p><strong className="text-white/90">{t.pricesLabel}</strong> {t.prices}</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[13px]">
          <p>© {new Date().getFullYear()} {SITE.brand}</p>
          <button onClick={openPrivacy} className="underline underline-offset-4 hover:text-white">{t.privacy}</button>
        </div>
      </div>
    </footer>
  );
}
