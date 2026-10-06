"use client";

import { CONTENT, type Lang } from "@/lib/content";
import { CallLink, WaLink } from "./contact-links";

export default function FloatingActions({ lang }: { lang: Lang }) {
  const C = CONTENT[lang];
  const t = C.bar;
  return (
    <>
      <div className="fixed bottom-6 end-6 z-40 hidden flex-col gap-3 md:flex">
        <WaLink label={t.wa} text={C.waDefault} className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 [&>span]:sr-only" iconClass="size-7" />
        <CallLink label={t.call} className="flex size-14 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg transition hover:scale-105 [&>span]:sr-only" iconClass="size-6" />
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-navy-900/10 bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
        <CallLink label={t.call} className="flex flex-col items-center gap-1 py-2.5 text-[12px] font-medium text-navy-900" iconClass="size-5" />
        <WaLink label={t.wa} text={C.waDefault} className="flex flex-col items-center gap-1 bg-[#25D366] py-2.5 text-[12px] font-semibold text-white" iconClass="size-5" />
        <a href="#contact" className="flex flex-col items-center justify-center gap-1 py-2.5 text-[12px] font-medium text-navy-900">
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 5h16v14H4zM4 7l8 6 8-6" strokeLinejoin="round" /></svg>
          <span>{t.prices}</span>
        </a>
      </div>
    </>
  );
}
