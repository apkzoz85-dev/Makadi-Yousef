"use client";

import { useState } from "react";
import { LV_BUILDINGS, LV_PHASE1_MIX } from "@/lib/site";
import { WaLink } from "./contact-links";

export default function LedgeValleyUnits() {
  const [active, setActive] = useState(LV_BUILDINGS[0].id);
  const b = LV_BUILDINGS.find((x) => x.id === active)!;
  const hasDeck = b.rows.some((r) => r.deck !== undefined);

  return (
    <section id="ledge-valley-units" aria-labelledby="lv-units-title" className="scroll-mt-16 bg-lagoon-900 py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm text-water-soft/80">ليدج فالي — المرحلة الأولى</p>
            <h2 id="lv-units-title" className="mt-2 text-3xl font-semibold leading-snug sm:text-[42px] sm:leading-tight">
              كل نموذج ومساحاته بالتفصيل
            </h2>
            <p className="mt-4 max-w-[58ch] text-[16px] leading-8 text-white/75">
              خمسة نماذج مبانٍ في مجموعتين: Island Collection على الجزيرة الوسطى بين اللاجونين، و Valley Collection حولها. المساحات
              بالمتر المربع من كتيّب المبيعات وقابلة للتعديل.
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="mb-3 text-sm text-white/70">توزيع وحدات المرحلة الأولى (194 وحدة)</p>
            <div className="flex h-3 overflow-hidden rounded-full" aria-hidden="true">
              {LV_PHASE1_MIX.map((m, i) => (
                <span
                  key={m.type}
                  style={{ width: `${m.share}%`, opacity: 1 - i * 0.16 }}
                  className="h-full bg-water"
                />
              ))}
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[13px] text-white/80 sm:grid-cols-3">
              {LV_PHASE1_MIX.map((m) => (
                <li key={m.type}>
                  <span className="font-semibold text-white">{m.share}%</span> {m.type}
                  <span className="block text-white/55">متوسط {m.avg} م²</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div role="tablist" aria-label="نماذج المباني" className="no-scrollbar mt-12 flex gap-2 overflow-x-auto border-b border-white/15">
          {LV_BUILDINGS.map((x) => (
            <button
              key={x.id}
              role="tab"
              id={`tab-${x.id}`}
              aria-selected={x.id === active}
              aria-controls={`panel-${x.id}`}
              onClick={() => setActive(x.id)}
              className={`-mb-px shrink-0 border-b-2 px-4 pb-3 pt-1 text-[15px] transition ${
                x.id === active ? "border-water text-white" : "border-transparent text-white/60 hover:text-white"
              }`}
              dir="ltr"
            >
              {x.name}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${b.id}`}
          aria-labelledby={`tab-${b.id}`}
          className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
        >
          <div className="lg:col-span-5">
            <div className="arch aspect-[4/5] bg-lagoon-700">
              <img key={b.image} src={b.image} alt={`واجهة ${b.name} في ليدج فالي`} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-2xl font-semibold" dir="ltr">{b.name}</h3>
              <p className="text-sm text-white/65">
                <span dir="ltr">{b.collection}</span> — {b.floors}
              </p>
            </div>
            <div className="mt-5 overflow-x-auto rounded-lg ring-1 ring-white/15">
              <table className="w-full min-w-[460px] text-[14px]">
                <caption className="sr-only">وحدات {b.name}</caption>
                <thead className="bg-white/[0.06] text-right text-[12px] text-white/65">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium">الدور</th>
                    <th scope="col" className="px-4 py-3 font-medium">نوع الوحدة</th>
                    <th scope="col" className="px-4 py-3 font-medium">المساحة</th>
                    <th scope="col" className="px-4 py-3 font-medium">تراس مكشوف</th>
                    {hasDeck && <th scope="col" className="px-4 py-3 font-medium">ديك</th>}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.map((r, i) => (
                    <tr key={i} className="border-t border-white/10">
                      <td className="px-4 py-3 text-white/70">{r.floor}</td>
                      <td className="px-4 py-3 font-medium">{r.type}</td>
                      <td className="px-4 py-3 font-display font-semibold">{r.bua} م²</td>
                      <td className="px-4 py-3 text-white/80">{r.terrace ? `${r.terrace} م²` : "—"}</td>
                      {hasDeck && <td className="px-4 py-3 text-white/80">{r.deck ? `${r.deck} م²` : "—"}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-white/50">
              يوجد نموذج معكوس (Mirror) لكل شاليه عائم بنفس المساحات. المساحات تقريبية.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <WaLink
                label={`المتاح من ${b.name}`}
                text={`مرحباً، أريد الوحدات المتاحة وأسعار ${b.name} في ليدج فالي - مكادي هايتس`}
                className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 font-display text-[15px] font-semibold text-white transition hover:bg-[#1fb257]"
              />
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border border-white/40 px-5 py-3 font-display text-[15px] font-medium text-white transition hover:bg-white/10"
              >
                اطلب المساقط الكاملة
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { src: "/images/lv-pool.webp", t: "لاجونات وحمامات سباحة حولها أنشطة" },
            { src: "/images/lv-court.webp", t: "مستويات وإطلالات بين المباني" },
            { src: "/images/lv-park.webp", t: "حدائق وممشى داخلي" },
            { src: "/images/lv-roof.webp", t: "روف وتراسات للبنتهاوس" },
          ].map((g) => (
            <figure key={g.src}>
              <div className="aspect-[4/3] overflow-hidden rounded-md bg-lagoon-700">
                <img src={g.src} alt={g.t} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-2.5 text-[14px] text-white/75">{g.t}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
