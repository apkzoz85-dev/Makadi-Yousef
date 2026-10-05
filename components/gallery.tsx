const IMAGES = [
  { src: "/images/lv-close-1.webp", alt: "سلم خارجي لشاليه عائم على المياه", tall: true },
  { src: "/images/lv-interior-1.webp", alt: "معيشة بإطلالة على اللاجون" },
  { src: "/images/sy-courtyard.webp", alt: "Courtyard Villa في سيال" },
  { src: "/images/lv-close-3.webp", alt: "تراس بأقواس وسور أخضر", tall: true },
  { src: "/images/ad-interior.webp", alt: "تشطيب داخلي في عدن باركس" },
  { src: "/images/lv-interior-2.webp", alt: "غرفة نوم تطل على المياه" },
];

export default function Gallery() {
  return (
    <section aria-labelledby="gal-title" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 id="gal-title" className="text-3xl font-semibold text-lagoon-900 sm:text-[42px]">من الداخل والخارج</h2>
        <div className="mt-10 columns-2 gap-3 sm:gap-4 lg:columns-3">
          {IMAGES.map((g) => (
            <figure key={g.src} className="mb-3 break-inside-avoid sm:mb-4">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className={`w-full rounded-md object-cover ${g.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
              />
            </figure>
          ))}
        </div>
        <p className="mt-2 text-xs text-mute">الصور تصورات معمارية للتوضيح وقد تختلف عن الواقع.</p>
      </div>
    </section>
  );
}
