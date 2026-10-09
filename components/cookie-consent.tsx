"use client";

import { useEffect, useState } from "react";
import { CONTENT, type Lang } from "@/lib/content";
import { openPrivacy } from "./privacy-modal";

export default function CookieConsent({ lang }: { lang: Lang }) {
  const t = CONTENT[lang].cookie;
  const [show, setShow] = useState(false);
  useEffect(() => {
    try { if (!localStorage.getItem("mh-cookies")) setShow(true); } catch {}
  }, []);
  const accept = () => {
    try { localStorage.setItem("mh-cookies", "1"); } catch {}
    setShow(false);
  };
  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-[76px] z-[60] mx-auto max-w-xl rounded-lg bg-navy-950 p-4 text-[13px] leading-6 text-white/85 shadow-2xl md:bottom-6 md:start-6 md:end-auto md:mx-0">
      <p>{t.text} <button onClick={openPrivacy} className="underline underline-offset-2">{t.details}</button></p>
      <div className="mt-3 flex gap-2">
        <button onClick={accept} className="rounded-md bg-white px-4 py-1.5 font-semibold text-navy-900">{t.ok}</button>
        <button onClick={accept} className="rounded-md px-3 py-1.5 text-white/70 hover:text-white">{t.close}</button>
      </div>
    </div>
  );
}
