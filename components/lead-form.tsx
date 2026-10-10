"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SITE } from "@/lib/site";
import { CONTENT, type Lang } from "@/lib/content";
import { trackConversion } from "@/lib/track";
import { openPrivacy } from "./privacy-modal";
import { COUNTRIES, guessCountry, toInternational } from "@/lib/countries";

type Props = { lang: Lang; source: string; dark?: boolean; compact?: boolean; defaultPhase?: string };

export default function LeadForm({ lang, source, dark = false, compact = false, defaultPhase }: Props) {
  const C = CONTENT[lang];
  const t = C.form;
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [iso, setIso] = useState("EG");
  useEffect(() => setIso(guessCountry()), []);
  const country = COUNTRIES.find((c) => c.iso === iso) ?? COUNTRIES[0];
  const dp = C.phases.find((p) => p.id === defaultPhase);
  const defaultPhaseValue = dp ? `${dp.name} — ${dp.kind}` : "";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return;

    const name = String(data.get("name") || "").trim();
    const local = String(data.get("phone_local") || "");
    if (name.length < 2) return setError(t.errName);
    const phone = toInternational(country.dial, local);
    if (!phone) return setError(t.errPhone);

    setError("");
    setStatus("sending");
    data.set("access_key", SITE.web3formsKey);
    data.set("subject", `Lead — Makadi Heights — ${data.get("phase") || "N/A"} [${lang.toUpperCase()}]`);
    data.set("from_name", "Makadi Heights Landing");
    data.set("source", source);
    data.set("language", lang);
    data.set("page", window.location.href);
    data.set("phone", phone);
    data.set("country", `${country.en} (+${country.dial})`);
    data.delete("country_iso");

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
      <div className="flex gap-2" dir="ltr">
        <label className="relative shrink-0">
          <span className="sr-only">{t.country}</span>
          <span aria-hidden="true" className={`${field} pointer-events-none flex h-full items-center gap-1.5 whitespace-nowrap !px-3 text-[15px]`}>
            <span className="text-lg leading-none">{country.flag}</span>
            <span>+{country.dial}</span>
            <svg viewBox="0 0 20 20" className="size-3.5 opacity-60" fill="currentColor"><path d="M5.5 7.5 10 12l4.5-4.5z" /></svg>
          </span>
          <select
            name="country_iso"
            value={iso}
            onChange={(e) => setIso(e.target.value)}
            aria-label={t.country}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          >
            {COUNTRIES.map((c) => (
              <option key={c.iso} value={c.iso}>
                {c.flag} {c[lang]} (+{c.dial})
              </option>
            ))}
          </select>
        </label>
        <label className="block min-w-0 flex-1">
          <span className="sr-only">{t.phone}</span>
          <input
            name="phone_local"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel-national"
            placeholder={iso === "EG" ? "01X XXXX XXXX" : t.phone}
            className={`${field} ${lang === "ar" ? "placeholder:text-right" : ""}`}
          />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">{t.phase}</span>
        <select name="phase" defaultValue={defaultPhaseValue} className={`${field} ${dark ? "[&>option]:text-ink" : ""}`}>
          <option value="">{t.phase}</option>
          {C.phases.map((p) => (
            <option key={p.id} value={`${p.name} — ${p.kind}`}>
              {p.name}
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
