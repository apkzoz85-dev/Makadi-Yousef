"use client";

import { useEffect, useState } from "react";
import { CONTENT, type Lang } from "@/lib/content";
import { CloseIcon } from "./icons";

export function openPrivacy() {
  window.dispatchEvent(new Event("open-privacy"));
}

export default function PrivacyModal({ lang }: { lang: Lang }) {
  const t = CONTENT[lang].privacy;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setOpen(true);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("open-privacy", on);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("open-privacy", on);
      window.removeEventListener("keydown", esc);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-navy-950/60 sm:items-center sm:p-6" onClick={() => setOpen(false)}>
      <div role="dialog" aria-modal="true" aria-labelledby="privacy-title" className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white p-6 sm:rounded-2xl sm:p-8" onClick={(e) => e.stopPropagation()}>
        <div className="mb-5 flex items-start justify-between gap-4">
          <h2 id="privacy-title" className="text-2xl text-navy-900">{t.title}</h2>
          <button onClick={() => setOpen(false)} aria-label={t.close} className="rounded-full p-1.5 hover:bg-ice">
            <CloseIcon />
          </button>
        </div>
        <div className="space-y-3 text-[15px] leading-8 text-mute">
          {t.blocks.map((b, i) => (
            <div key={i}>
              {b.h && <h3 className="mt-2 text-base font-semibold text-ink" style={{ fontFamily: "var(--font-body)" }}>{b.h}</h3>}
              <p>{b.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
