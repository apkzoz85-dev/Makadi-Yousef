"use client";

import { useEffect, useState } from "react";
import { openPrivacy } from "./privacy-modal";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("mh-cookies")) setShow(true);
    } catch {}
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("mh-cookies", "1");
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-3 bottom-[76px] z-[60] mx-auto max-w-xl rounded-lg bg-lagoon-950 p-4 text-[13px] leading-6 text-white/85 shadow-2xl md:bottom-6 md:right-6 md:left-auto">
      <p>
        نستخدم ملفات تعريف الارتباط لقياس أداء الإعلانات وتحسين الصفحة.{" "}
        <button onClick={openPrivacy} className="underline underline-offset-2">
          التفاصيل
        </button>
      </p>
      <div className="mt-3 flex gap-2">
        <button onClick={accept} className="rounded-md bg-white px-4 py-1.5 font-semibold text-lagoon-900">
          موافق
        </button>
        <button onClick={accept} className="rounded-md px-3 py-1.5 text-white/70 hover:text-white">
          إغلاق
        </button>
      </div>
    </div>
  );
}
