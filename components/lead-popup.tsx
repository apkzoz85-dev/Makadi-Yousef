"use client";

import { useEffect, useState } from "react";
import LeadForm from "./lead-form";
import { CloseIcon } from "./icons";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let shown = false;
    try {
      if (sessionStorage.getItem("mh-popup")) return;
    } catch {}

    const show = () => {
      if (shown) return;
      shown = true;
      setOpen(true);
      try {
        sessionStorage.setItem("mh-popup", "1");
      } catch {}
      cleanup();
    };
    const onScroll = () => {
      const h = document.documentElement;
      if ((h.scrollTop + window.innerHeight) / h.scrollHeight >= 0.58) show();
    };
    const timer = window.setTimeout(show, 16000);
    window.addEventListener("scroll", onScroll, { passive: true });
    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    }
    return cleanup;
  }, []);

  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-lagoon-950/60 sm:items-center sm:p-6" onClick={() => setOpen(false)}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        className="relative grid w-full max-w-3xl overflow-hidden rounded-t-2xl bg-white sm:grid-cols-2 sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative hidden sm:block">
          <img src="/images/lv-chalet-a.webp" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="p-6 sm:p-8">
          <button
            onClick={() => setOpen(false)}
            aria-label="إغلاق"
            className="absolute left-3 top-3 rounded-full bg-white/90 p-1.5 text-ink hover:bg-sand"
          >
            <CloseIcon />
          </button>
          <h2 id="popup-title" className="text-2xl font-semibold text-lagoon-900">قائمة أسعار مكادي هايتس</h2>
          <p className="mb-5 mt-2 text-sm leading-7 text-mute">
            أسعار ووحدات ليدج فالي وعدن باركس وسيال المتاحة الآن، على واتساب.
          </p>
          <LeadForm source="popup" compact />
        </div>
      </div>
    </div>
  );
}
