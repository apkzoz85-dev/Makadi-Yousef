"use client";

import { useEffect, useState } from "react";
import { CONTENT, type Lang } from "@/lib/content";
import { CallLink } from "./contact-links";
import { CloseIcon, MenuIcon } from "./icons";
import Logo from "./logo";

type Props = { lang: Lang; altHref: string; active?: string };

export default function Header({ lang, altHref, active }: Props) {
  const t = CONTENT[lang];
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const other = lang === "ar" ? "en" : "ar";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid || open ? "bg-navy-900 shadow-[0_1px_0_rgb(255_255_255/0.08)]" : "bg-gradient-to-b from-navy-950/60 to-transparent"}`}>
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-5 px-4 sm:px-5 lg:px-8">
        <a href={t.home} className="shrink-0" aria-label={t.logoAlt}>
          <Logo alt={t.logoAlt} className="h-8 w-auto sm:h-10" />
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
          {t.nav.map((n) => {
            const isActive = active && n.href.endsWith(`/${active}`);
            return (
              <a
                key={n.href}
                href={n.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-[14px] transition hover:text-white ${isActive ? "text-white underline decoration-aqua decoration-2 underline-offset-8" : "text-white/85"}`}
                lang={"page" in n && n.page ? "en" : undefined}
              >
                {n.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={altHref} lang={other} hrefLang={other} className="rounded-md border border-white/40 px-2.5 py-1.5 text-[13px] font-medium text-white transition hover:bg-white/10">
            {t.switchLabel}
          </a>
          <CallLink label={t.callNow} className="hidden items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-navy-900 transition hover:bg-ice sm:inline-flex" iconClass="size-4" />
          <button onClick={() => setOpen((v) => !v)} className="rounded-md p-2 text-white xl:hidden" aria-label={open ? t.menuClose : t.menuOpen} aria-expanded={open}>
            {open ? <CloseIcon className="size-6" /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy-900 px-5 pb-6 pt-2 xl:hidden" aria-label="Main">
          {t.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3.5 text-[15px] text-white/90">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
