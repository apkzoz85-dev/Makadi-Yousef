"use client";

import { SITE } from "@/lib/site";
import { openPrivacy } from "./privacy-modal";

export default function Footer() {
  return (
    <footer className="bg-lagoon-950 pb-28 pt-12 text-white/70 md:pb-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <p className="font-display text-lg font-semibold text-white">مكادي هايتس — الغردقة</p>
            <p className="mt-1 text-sm">ليدج فالي، عدن باركس، سيال</p>
          </div>
          <div className="text-sm leading-7">
            <p>
              هاتف وواتساب: <a href={`tel:${SITE.phoneIntl}`} dir="ltr" className="text-white">{SITE.phone}</a>
            </p>
            <p>
              بريد: <a href={`mailto:${SITE.email}`} dir="ltr" className="text-white">{SITE.email}</a>
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-3 text-[13px] leading-7">
          <p>
            <strong className="text-white/90">إفصاح:</strong> هذه الصفحة يديرها {SITE.brand}، مسوّق عقاري مستقل، وليست الموقع
            الرسمي لشركة أوراسكوم للتنمية. أسماء المشروعات والعلامات التجارية والصور مملوكة لأصحابها وتُستخدم لأغراض التعريف فقط.
          </p>
          <p>
            <strong className="text-white/90">أسعار استرشادية:</strong> جميع الأسعار والمساحات المعروضة استرشادية وقابلة للتغيير
            دون إشعار، والسعر النهائي يحدده المطوّر وقت الحجز حسب الوحدة والدور والإطلالة. الصور تصورات معمارية للتوضيح.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[13px]">
          <p>© {new Date().getFullYear()} {SITE.brand}</p>
          <button onClick={openPrivacy} className="underline underline-offset-4 hover:text-white">
            سياسة الخصوصية وإخلاء المسؤولية
          </button>
        </div>
      </div>
    </footer>
  );
}
