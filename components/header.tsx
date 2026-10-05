"use client";

import { useEffect, useState } from "react";
import { CallLink } from "./contact-links";
import { CloseIcon, MenuIcon } from "./icons";

const NAV = [
  { href: "#phases", label: "المراحل المتاحة" },
  { href: "#ledge-valley-units", label: "وحدات ليدج فالي" },
  { href: "#masterplan", label: "المخطط العام" },
  { href: "#amenities", label: "الخدمات" },
  { href: "#location", label: "الموقع" },
  { href: "#faq", label: "أسئلة شائعة" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || open ? "bg-lagoon-900 shadow-[0_1px_0_rgb(255_255_255/0.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <a href="#top" className="flex flex-col leading-none text-white" aria-label="مكادي هايتس — أعلى الصفحة">
          <span className="font-display text-[19px] font-semibold tracking-tight">مكادي هايتس</span>
          <span className="mt-1 text-[11px] text-white/70" dir="ltr">Makadi Heights · Orascom</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="أقسام الصفحة">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[14px] text-white/85 transition hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CallLink
            label="اتصل الآن"
            className="hidden items-center gap-2 rounded-md bg-white px-4 py-2 font-display text-sm font-semibold text-lagoon-900 transition hover:bg-sand sm:inline-flex"
            iconClass="size-4"
          />
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-white lg:hidden"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-lagoon-900 px-5 pb-6 pt-2 lg:hidden" aria-label="أقسام الصفحة">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3.5 text-[15px] text-white/90"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
