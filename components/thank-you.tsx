import { SITE } from "@/lib/site";
import { CONTENT, type Lang } from "@/lib/content";
import { CallLink, WaLink } from "./contact-links";
import Logo from "./logo";

export default function ThankYou({ lang }: { lang: Lang }) {
  const C = CONTENT[lang];
  const t = C.thankYou;
  return (
    <main className="relative isolate grid min-h-[100svh] place-items-center overflow-hidden bg-navy-950 px-5 text-center text-white">
      <img src="/images/lv-chalet-b.webp" alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
      <div className="max-w-lg">
        <Logo alt={C.logoAlt} className="mx-auto mb-10 h-12 w-auto" />
        <h1 className="text-5xl sm:text-6xl">{t.title}</h1>
        <p className="mt-4 text-[17px] leading-8 text-white/85">{t.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <WaLink label={t.wa} text={C.waDefault} className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 font-semibold text-white" />
          <CallLink label={SITE.phone} className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-navy-900" />
        </div>
        <a href={C.home} className="mt-8 inline-block text-sm text-white/70 underline underline-offset-4">{t.back}</a>
      </div>
    </main>
  );
}
