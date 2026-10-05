import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CallLink, WaLink } from "@/components/contact-links";

export const metadata: Metadata = {
  title: "تم استلام طلبك | مكادي هايتس",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <main className="relative isolate grid min-h-[100svh] place-items-center overflow-hidden bg-lagoon-950 px-5 text-center text-white">
      <img src="/images/lv-chalet-b.webp" alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
      <div className="max-w-lg">
        <h1 className="text-4xl font-semibold sm:text-5xl">تم استلام طلبك</h1>
        <p className="mt-4 text-[17px] leading-8 text-white/85">
          سنتواصل معك على رقمك بتفاصيل وأسعار مكادي هايتس. لو تحب تبدأ الآن، راسلنا مباشرة.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <WaLink
            label="كمّل على واتساب"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 font-display font-semibold text-white"
          />
          <CallLink
            label={SITE.phone}
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-display font-semibold text-lagoon-900"
          />
        </div>
        <a href="/" className="mt-8 inline-block text-sm text-white/70 underline underline-offset-4">
          العودة للصفحة الرئيسية
        </a>
      </div>
    </main>
  );
}
