import { AMENITIES } from "@/lib/site";

export default function Amenities() {
  return (
    <section id="amenities" aria-labelledby="am-title" className="scroll-mt-16 bg-sand-soft py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <h2 id="am-title" className="text-3xl font-semibold leading-snug text-lagoon-900 sm:text-[42px] sm:leading-tight">
            مدينة متكاملة طوال السنة، مش مصيف
          </h2>
          <p className="mt-4 text-[16px] leading-8 text-mute">
            مكادي هايتس تجمع السكن والشقق الفندقية والفنادق والمنطقة التجارية في مكان واحد، فالحياة فيها مستمرة في الشتاء والصيف.
          </p>
          <div className="arch mt-10 hidden aspect-[3/4] max-w-sm bg-sand lg:block">
            <img src="/images/lv-close-2.webp" alt="ديك خاص لشاليه عائم يطل على المياه" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <ul className="grid gap-px overflow-hidden rounded-lg bg-lagoon-900/10 sm:grid-cols-2">
            {AMENITIES.map((a) => (
              <li key={a.title} className="bg-white p-6 lg:p-7">
                <h3 className="text-lg font-semibold text-lagoon-900">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-mute">{a.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-lg border border-lagoon-900/12 bg-white p-6 lg:p-7">
            <h3 className="text-lg font-semibold text-lagoon-900">داخل ليدج فالي تحديداً</h3>
            <p className="mt-2 text-[15px] leading-8 text-mute">
              لاجونان قابلان للسباحة، شلالان، حمام سباحة رئيسي وحمام أطفال، ديك مغمور وصن ديك، منطقتا ألعاب أطفال، مساحة يوجا،
              جلسات خارجية، ومطعم وكافيه.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
