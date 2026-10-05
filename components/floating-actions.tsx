"use client";

import { CallLink, WaLink } from "./contact-links";

export default function FloatingActions() {
  return (
    <>
      {/* ديسكتوب */}
      <div className="fixed bottom-6 left-6 z-40 hidden flex-col gap-3 md:flex">
        <WaLink
          label="واتساب"
          className="group flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 [&>span]:sr-only"
          iconClass="size-7"
        />
        <CallLink
          label="اتصال"
          className="flex size-14 items-center justify-center rounded-full bg-lagoon-900 text-white shadow-lg transition hover:scale-105 [&>span]:sr-only"
          iconClass="size-6"
        />
      </div>

      {/* موبايل */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-lagoon-900/10 bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
        <CallLink
          label="اتصال"
          className="flex flex-col items-center gap-1 py-2.5 text-[12px] font-medium text-lagoon-900"
          iconClass="size-5"
        />
        <WaLink
          label="واتساب"
          className="flex flex-col items-center gap-1 bg-[#25D366] py-2.5 text-[12px] font-semibold text-white"
          iconClass="size-5"
        />
        <a href="#contact" className="flex flex-col items-center justify-center gap-1 py-2.5 text-[12px] font-medium text-lagoon-900">
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M4 5h16v14H4zM4 7l8 6 8-6" strokeLinejoin="round" />
          </svg>
          <span>الأسعار</span>
        </a>
      </div>
    </>
  );
}
