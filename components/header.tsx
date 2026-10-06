"use client";

import { useEffect, useState } from "react";
import { CONTENT, type Lang } from "@/lib/content";
import { CallLink } from "./contact-links";
import { CloseIcon, MenuIcon } from "./icons";

export default function Header({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const langLink = (
    <a href={t.switchHref} lang={lang === "ar" ? "en" : "ar"} hrefLang={lang === "ar" ? "en" : "ar"} className="rounded-md border border-white/40 px-3 py-1.5 text-[13px] font-medium text-white transition hover:bg-white/10">
      {t.switchLabel}
    </a>
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid || open ? "bg-navy-900 shadow-[0_1px_0_rgb(255_255_255/0.08)]" : "bg-transparent"}`}>
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-white" aria-label={t.brandLine}>
          <span className="flex flex-col leading-none">
            <span className="text-[13px] font-semibold tracking-[0.22em]" style={{ fontFamily: "Manrope, sans-serif" }}>MAKADI</span>
            <span className="mt-0.5 text-[13px] font-semibold tracking-[0.22em]" style={{ fontFamily: "Manrope, sans-serif" }}>HEIGHTS</span>
          </span>
          <span className="h-7 w-px bg-white/40" aria-hidden="true" />
          <span className="text-[12px] leading-tight text-white/80">{t.brandSub}</span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Sections">
          {t.nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[14px] text-white/85 transition hover:text-white">{n.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {langLink}
          <CallLink label={t.callNow} className="hidden items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-navy-900 transition hover:bg-ice sm:inline-flex" iconClass="size-4" />
          <button onClick={() => setOpen((v) => !v)} className="rounded-md p-2 text-white xl:hidden" aria-label={open ? t.menuClose : t.menuOpen} aria-expanded={open}>
            {open ? <CloseIcon className="size-6" /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy-900 px-5 pb-6 pt-2 xl:hidden" aria-label="Sections">
          {t.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3.5 text-[15px] text-white/90">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
