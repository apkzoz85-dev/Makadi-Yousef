const PINS = [
  { id: "siyal", name: "سيال", left: 28.5, top: 49 },
  { id: "aden-parks", name: "عدن باركس", left: 39, top: 47 },
  { id: "ledge-valley", name: "ليدج فالي", left: 49.7, top: 60 },
];

export default function Masterplan() {
  return (
    <section id="masterplan" aria-labelledby="mp-title" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="mp-title" className="text-3xl font-semibold leading-snug text-lagoon-900 sm:text-[42px] sm:leading-tight lg:col-span-6">
            مكان كل مرحلة داخل المدينة
          </h2>
          <p className="text-[16px] leading-8 text-mute lg:col-span-6">
            المخطط العام من تصميم EDSA. سيال وعدن باركس في الجزء الشمالي الغربي قرب عدن وتاون ووك، وليدج فالي في الشرق بجوار ليدج
            فلير، وكلها على مسافة دقائق من الشاطئ ومنطقة وسط المدينة M Town.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-lg">
          <div className="relative min-w-[720px]">
            <img
              src="/images/masterplan.webp"
              alt="المخطط العام لمكادي هايتس وموقع مراحل سيال وعدن باركس وليدج فالي"
              loading="lazy"
              className="w-full rounded-lg"
            />
            {PINS.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                style={{ left: `${p.left}%`, top: `${p.top}%` }}
                className="group absolute -translate-x-1/2 -translate-y-full"
              >
                <span className="block whitespace-nowrap rounded-md bg-lagoon-900 px-3 py-1.5 font-display text-[13px] font-semibold text-white shadow-lg transition group-hover:bg-water">
                  {p.name}
                </span>
                <span className="mx-auto block h-3 w-px bg-lagoon-900" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-mute">المخطط للتوضيح فقط. اسحب أفقياً على الموبايل لرؤية الخريطة كاملة.</p>
      </div>
    </section>
  );
}
