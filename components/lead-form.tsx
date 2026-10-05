"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE, PHASES } from "@/lib/site";
import { trackConversion } from "@/lib/track";
import { openPrivacy } from "./privacy-modal";

type Props = {
  source: string;
  dark?: boolean;
  defaultPhase?: string;
  compact?: boolean;
};

export default function LeadForm({ source, dark = false, defaultPhase = "", compact = false }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("botcheck")) return;

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").replace(/[\s-]/g, "");
    if (name.length < 2) {
      setError("اكتب اسمك من حرفين على الأقل.");
      return;
    }
    if (!/^\+?\d{10,15}$/.test(phone)) {
      setError("اكتب رقم موبايل صحيح من 10 إلى 15 رقماً، مثل 01xxxxxxxxx أو ‎+9665xxxxxxxx.");
      return;
    }

    setError("");
    setStatus("sending");

    data.set("access_key", SITE.web3formsKey);
    data.set("subject", `Lead — Makadi Heights — ${data.get("phase") || "غير محدد"}`);
    data.set("from_name", "Makadi Heights Landing");
    data.set("source", source);
    data.set("page", typeof window !== "undefined" ? window.location.href : "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "failed");
      trackConversion("form");
      form.reset();
      router.push("/thank-you");
    } catch {
      setStatus("error");
      setError("لم يتم إرسال الطلب بسبب مشكلة في الاتصال. حاول مرة أخرى أو راسلنا على واتساب.");
      return;
    }
  }

  const field = dark
    ? "w-full rounded-md border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
    : "w-full rounded-md border border-lagoon-900/20 bg-white px-4 py-3 text-ink placeholder:text-mute/70 focus:border-lagoon-900 focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className={compact ? "space-y-3" : "space-y-3.5"}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <label className="block">
        <span className="sr-only">الاسم</span>
        <input name="name" type="text" required autoComplete="name" placeholder="الاسم" className={field} />
      </label>

      <label className="block">
        <span className="sr-only">رقم الموبايل</span>
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          required
          autoComplete="tel"
          placeholder="رقم الموبايل / واتساب"
          dir="ltr"
          className={`${field} text-right`}
        />
      </label>

      <label className="block">
        <span className="sr-only">المرحلة المهتم بها</span>
        <select name="phase" defaultValue={defaultPhase} className={`${field} ${dark ? "[&>option]:text-ink" : ""}`}>
          <option value="">المرحلة المهتم بها</option>
          {PHASES.map((p) => (
            <option key={p.id} value={`${p.name} — ${p.kind}`}>
              {p.name} — {p.kind}
            </option>
          ))}
          <option value="غير محدد — أريد ترشيحاً">لم أحدد بعد</option>
        </select>
      </label>

      {error && (
        <p role="alert" className={`text-sm ${dark ? "text-[#ffd9cf]" : "text-clay"}`}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-water px-5 py-3.5 font-display text-[15px] font-semibold text-white transition hover:bg-[#278793] disabled:opacity-60"
      >
        {status === "sending" ? "جارٍ الإرسال…" : "أرسل لي الأسعار والكتيّب"}
      </button>

      <p className={`text-xs leading-relaxed ${dark ? "text-white/65" : "text-mute"}`}>
        بإرسال بياناتك توافق على أن نتواصل معك بخصوص المشروع وفق{" "}
        <button type="button" onClick={openPrivacy} className="underline underline-offset-2">
          سياسة الخصوصية
        </button>
        .
      </p>
    </form>
  );
}
