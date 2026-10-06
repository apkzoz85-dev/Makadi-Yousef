"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE } from "@/lib/site";
import { CONTENT, type Lang } from "@/lib/content";
import { trackConversion } from "@/lib/track";
import { openPrivacy } from "./privacy-modal";

type Props = { lang: Lang; source: string; dark?: boolean; compact?: boolean };

export default function LeadForm({ lang, source, dark = false, compact = false }: Props) {
  const C = CONTENT[lang];
  const t = C.form;
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
    if (name.length < 2) return setError(t.errName);
    if (!/^\+?\d{10,15}$/.test(phone)) return setError(t.errPhone);

    setError("");
    setStatus("sending");
    data.set("access_key", SITE.web3formsKey);
    data.set("subject", `Lead — Makadi Heights — ${data.get("phase") || "N/A"} [${lang.toUpperCase()}]`);
    data.set("from_name", "Makadi Heights Landing");
    data.set("source", source);
    data.set("language", lang);
    data.set("page", window.location.href);

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
      router.push(C.thanks);
    } catch {
      setStatus("error");
      setError(t.errNet);
    }
  }

  const field = dark
    ? "w-full rounded-md border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/65 focus:border-white focus:outline-none"
    : "w-full rounded-md border border-navy-900/20 bg-white px-4 py-3 text-ink placeholder:text-mute/75 focus:border-navy-900 focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className={compact ? "space-y-3" : "space-y-3.5"}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <label className="block">
        <span className="sr-only">{t.name}</span>
        <input name="name" type="text" required autoComplete="name" placeholder={t.name} className={field} />
      </label>
      <label className="block">
        <span className="sr-only">{t.phone}</span>
        <input name="phone" type="tel" inputMode="tel" required autoComplete="tel" placeholder={t.phone} dir="ltr" className={`${field} ${lang === "ar" ? "text-right" : ""}`} />
      </label>
      <label className="block">
        <span className="sr-only">{t.phase}</span>
        <select name="phase" defaultValue="" className={`${field} ${dark ? "[&>option]:text-ink" : ""}`}>
          <option value="">{t.phase}</option>
          {C.phases.map((p) => (
            <option key={p.id} value={`${p.name} — ${p.kind}`}>
              {p.name} — {p.kind}
            </option>
          ))}
          <option value="Undecided">{t.undecided}</option>
        </select>
      </label>
      {error && (
        <p role="alert" className={`text-sm ${dark ? "text-[#ffd9cf]" : "text-[#b3473a]"}`}>{error}</p>
      )}
      <button type="submit" disabled={status === "sending"} className={`w-full rounded-md px-5 py-3.5 text-[15px] font-semibold transition disabled:opacity-60 ${dark ? "bg-aqua text-navy-950 hover:bg-[#a6cccb]" : "bg-navy-900 text-white hover:bg-navy-700"}`}>
        {status === "sending" ? t.sending : t.submit}
      </button>
      <p className={`text-xs leading-relaxed ${dark ? "text-white/65" : "text-mute"}`}>
        {t.consent}{" "}
        <button type="button" onClick={openPrivacy} className="underline underline-offset-2">{t.privacy}</button>.
      </p>
    </form>
  );
}
