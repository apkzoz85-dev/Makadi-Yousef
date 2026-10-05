import { SITE, PHASES } from "@/lib/site";
import LeadForm from "./lead-form";
import { WaLink } from "./contact-links";

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-lagoon-950 md:items-center">
      <picture className="absolute inset-0 -z-10">
        <source media="(max-width: 767px)" srcSet="/images/hero-m.webp" />
        <img
          src="/images/hero.webp"
          alt="شاليهات ليدج فالي العائمة على لاجون مكادي هايتس"
          className="h-full w-full object-cover object-[30%_center] md:object-center"
          fetchPriority="high"
        />
      </picture>
      <div className="hero-shade absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-28 pt-28 md:grid-cols-[1.25fr_0.9fr] md:items-center md:pb-20 lg:px-8">
        <div className="text-white">
          <p className="rise text-[14px] text-white/80">أوراسكوم للتنمية — خليج مكادي، الغردقة</p>
          <h1 className="rise rise-2 mt-3 text-[46px] font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-[76px]">
            مكادي هايتس
          </h1>
          <p className="rise rise-2 mt-5 max-w-xl text-[17px] leading-8 text-white/90 sm:text-lg">
            شاليهات تنزل من ديكها الخاص إلى لاجون قابل للسباحة، وفيلات على ارتفاع 78 متراً فوق البحر الأحمر.
          </p>

          <dl className="rise rise-3 mt-8 flex flex-wrap gap-x-10 gap-y-5">
            <div>
              <dt className="text-sm text-white/70">شاليهات تبدأ من</dt>
              <dd className="mt-1 font-display text-3xl font-semibold">
                {SITE.chaletsFrom} <span className="text-lg font-medium text-white/80">مليون ج.م</span>
              </dd>
            </div>
            <div className="border-white/25 sm:border-r sm:pr-10">
              <dt className="text-sm text-white/70">فيلات تبدأ من</dt>
              <dd className="mt-1 font-display text-3xl font-semibold">
                {SITE.villasFrom} <span className="text-lg font-medium text-white/80">مليون ج.م</span>
              </dd>
            </div>
          </dl>

          <div className="rise rise-3 mt-8 flex flex-wrap items-center gap-3">
            <WaLink
              label="اسأل على واتساب"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 font-display text-[15px] font-semibold text-white transition hover:bg-[#1fb257]"
            />
            <a
              href="#phases"
              className="inline-flex items-center rounded-md border border-white/50 px-5 py-3 font-display text-[15px] font-medium text-white transition hover:bg-white/10"
            >
              شاهد المراحل المتاحة
            </a>
          </div>

          <p className="mt-8 text-sm text-white/75">
            متاح الآن:{" "}
            {PHASES.map((p, i) => (
              <span key={p.id}>
                <a href={`#${p.id}`} className="underline decoration-white/40 underline-offset-4 hover:decoration-white">
                  {p.name}
                </a>
                {i < PHASES.length - 1 ? "، " : ""}
              </span>
            ))}
          </p>
        </div>

        <div className="hidden rounded-xl bg-lagoon-950/70 p-7 ring-1 ring-white/15 backdrop-blur-md md:block">
          <h2 className="font-display text-xl font-semibold text-white">احصل على قائمة الأسعار</h2>
          <p className="mb-5 mt-1.5 text-sm leading-7 text-white/75">
            نرسل لك الكتيّب والوحدات المتاحة في المراحل الثلاث على واتساب.
          </p>
          <LeadForm source="hero" dark />
        </div>
      </div>
    </section>
  );
}
