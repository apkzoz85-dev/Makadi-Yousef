import { SITE } from "@/lib/site";
import LeadForm from "./lead-form";
import { CallLink, WaLink } from "./contact-links";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 relative isolate overflow-hidden bg-lagoon-900 py-20 text-white lg:py-28">
      <img src="/images/ad-lagoon.webp" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <h2 id="contact-title" className="text-3xl font-semibold leading-snug sm:text-[42px] sm:leading-tight">
            احجز وحدتك قبل نفاد الإطلالات الأولى
          </h2>
          <p className="mt-4 max-w-[52ch] text-[16px] leading-8 text-white/80">
            وحدات الصف الأول على اللاجون عددها محدود في كل مرحلة. اترك رقمك ونرسل لك المتاح الآن بالأسعار والمساقط.
          </p>
          <div className="mt-6 rounded-lg bg-white/10 p-5 ring-1 ring-white/15">
            <p className="font-display text-lg font-semibold">{SITE.paymentHeadline}</p>
            <p className="mt-1 text-sm leading-7 text-white/75">{SITE.paymentNote}</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <CallLink
              label={SITE.phone}
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-display text-[15px] font-semibold text-lagoon-900 transition hover:bg-sand"
            />
            <WaLink
              label="واتساب"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 font-display text-[15px] font-semibold text-white transition hover:bg-[#1fb257]"
            />
          </div>
        </div>
        <div className="rounded-xl bg-white p-6 text-ink shadow-2xl sm:p-8">
          <h3 className="text-xl font-semibold text-lagoon-900">اطلب الأسعار والكتيّب</h3>
          <p className="mb-5 mt-1.5 text-sm text-mute">سنتواصل معك على الرقم الذي تكتبه.</p>
          <LeadForm source="contact" />
        </div>
      </div>
    </section>
  );
}
