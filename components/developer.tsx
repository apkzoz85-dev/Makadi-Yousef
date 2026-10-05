const PORTFOLIO = ["الجونة", "طابا هايتس", "مكادي هايتس", "أو ويست", "أندرمات — سويسرا", "لستيكا باي — الجبل الأسود"];
const PARTNERS = [
  { name: "EDSA", role: "المخطط العام لمكادي هايتس" },
  { name: "Die Stadt", role: "مخطط ليدج فالي" },
  { name: "Innovation Design Studio", role: "عمارة ليدج فالي" },
];

export default function Developer() {
  return (
    <section aria-labelledby="dev-title" className="bg-lagoon-950 py-20 text-white lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <p className="text-sm text-white/60">المطوّر</p>
          <h2 id="dev-title" className="mt-2 text-3xl font-semibold sm:text-[40px]">أوراسكوم للتنمية</h2>
          <p className="mt-4 max-w-[56ch] text-[16px] leading-8 text-white/75">
            المطوّر الذي بنى الجونة وحوّلها لمدينة تعيش طوال السنة. نفس الفكرة تتكرر في مكادي هايتس: مدينة متكاملة بخدماتها، لا قرية
            موسمية.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {PORTFOLIO.map((p) => (
              <li key={p} className="rounded-full border border-white/20 px-3.5 py-1.5 text-[13px] text-white/85">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <h3 className="text-lg font-semibold">شركاء التصميم</h3>
          <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
            {PARTNERS.map((p) => (
              <li key={p.name} className="flex items-center justify-between gap-4 py-4">
                <span className="font-display text-[17px] font-semibold" dir="ltr">{p.name}</span>
                <span className="text-sm text-white/65">{p.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
