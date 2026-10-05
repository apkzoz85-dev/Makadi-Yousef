"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { CloseIcon } from "./icons";

export function openPrivacy() {
  window.dispatchEvent(new Event("open-privacy"));
}

export default function PrivacyModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setOpen(true);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("open-privacy", on);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("open-privacy", on);
      window.removeEventListener("keydown", esc);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-lagoon-950/60 p-0 sm:items-center sm:p-6" onClick={() => setOpen(false)}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white p-6 sm:rounded-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <h2 id="privacy-title" className="text-xl font-semibold text-lagoon-900">سياسة الخصوصية وإخلاء المسؤولية</h2>
          <button onClick={() => setOpen(false)} aria-label="إغلاق" className="rounded-full p-1.5 hover:bg-sand">
            <CloseIcon />
          </button>
        </div>
        <div className="space-y-4 text-[15px] leading-8 text-mute">
          <p>
            هذه الصفحة يديرها <strong className="text-ink">{SITE.brand}</strong>، مسوّق عقاري مستقل. الصفحة ليست الموقع الرسمي
            لشركة أوراسكوم للتنمية، وجميع العلامات التجارية وأسماء المشروعات مملوكة لأصحابها.
          </p>
          <h3 className="font-display text-base font-semibold text-ink">البيانات التي نجمعها</h3>
          <p>
            نجمع الاسم ورقم الهاتف والمرحلة التي تهتم بها عند إرسال النموذج، ونستخدمها فقط للتواصل معك بخصوص الوحدات والأسعار
            والمعاينات. لا نبيع بياناتك لأي طرف ثالث، وقد نشاركها مع المطوّر لغرض إتمام الحجز فقط بموافقتك.
          </p>
          <h3 className="font-display text-base font-semibold text-ink">ملفات تعريف الارتباط والإعلانات</h3>
          <p>
            نستخدم ملفات تعريف الارتباط وأدوات Google Ads لقياس أداء الإعلانات وعدد الطلبات. يمكنك تعطيلها من إعدادات المتصفح.
          </p>
          <h3 className="font-display text-base font-semibold text-ink">الأسعار والمواصفات</h3>
          <p>
            الأسعار المعروضة أسعار استرشادية وقد تتغير دون إشعار مسبق حسب الوحدة والدور والإطلالة وسياسة المطوّر وقت الحجز. الصور
            والمساقط للتوضيح فقط، والمساحات تقريبية وقابلة للتعديل وفق العقد النهائي.
          </p>
          <h3 className="font-display text-base font-semibold text-ink">حذف البيانات</h3>
          <p>
            لطلب حذف بياناتك راسلنا على <span dir="ltr">{SITE.email}</span> أو على رقم <span dir="ltr">{SITE.phone}</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
