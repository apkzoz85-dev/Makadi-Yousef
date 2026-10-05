const FACTS = [
  { v: "4.75 مليون م²", l: "مساحة مدينة مكادي هايتس" },
  { v: "78 متراً", l: "فوق سطح البحر — أعلى نقطة في خليج مكادي" },
  { v: "20 دقيقة", l: "من مطار الغردقة الدولي" },
  { v: "3 مراحل", l: "متاحة للبيع الآن داخل المشروع" },
];

export default function Facts() {
  return (
    <section aria-label="أرقام المشروع" className="bg-lagoon-900 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
        {FACTS.map((f) => (
          <div key={f.v} className="bg-lagoon-900 px-5 py-7 lg:px-8 lg:py-9">
            <p className="whitespace-nowrap font-display text-[22px] font-semibold sm:text-[28px]">{f.v}</p>
            <p className="mt-1.5 text-[13px] leading-6 text-white/70 sm:text-sm">{f.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
