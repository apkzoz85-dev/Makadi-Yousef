import { SITE } from "./site";

export type Lang = "ar" | "en";
export type PhaseId = "ledge-valley" | "aden-parks" | "siyal";
export const PHASE_IDS: PhaseId[] = ["ledge-valley", "aden-parks", "siyal"];

export type Img = { src: string; alt: string };

export type UnitSpec = {
  name: string;
  type: string;
  beds: number;
  baths?: number;
  bua: string;
  terrace?: string;
  roof?: string;
  extra?: string;
  image?: string;
};

export type Phase = {
  id: PhaseId;
  name: string; // English name — used in both languages
  kind: string;
  tagline: string;
  intro: string;
  price: string;
  priceNote: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  card: Img;
  waText: string;
  page: {
    metaTitle: string;
    metaDesc: string;
    hero: Img;
    heroLead: string;
    overviewTitle: string;
    overview: string[];
    facts: { label: string; value: string }[];
    story: { title: string; text: string; image: Img };
    facilities: { title: string; lead: string; items: string[]; image: Img };
    siteplan: { title: string; text: string; image: Img; extra?: Img & { caption: string } };
    unitsTitle: string;
    unitsLead: string;
    buildings?: { name: string; text: string; image: Img }[];
    units?: UnitSpec[];
    gallery: Img[];
  };
};

export type LvRow = { floor: string; type: string; bua: number; terrace: number; deck?: number };
export type LvBuilding = { id: string; name: string; collection: string; floors: string; image: string; rows: LvRow[] };

// ------------------------------------------------------------------
//  Ledge Valley — building data (from the sales kit)
// ------------------------------------------------------------------
type RawRow = [floorKey: string, typeKey: string, bua: number, terrace: number, deck?: number];
const FLOOR: Record<string, { ar: string; en: string }> = {
  G: { ar: "أرضي", en: "Ground" },
  F1: { ar: "أول", en: "First" },
  F2: { ar: "ثاني", en: "Second" },
  LG: { ar: "أرضي سفلي", en: "Lower ground" },
  GF: { ar: "أرضي + أول", en: "Ground + first" },
};
const TYPE: Record<string, { ar: string; en: string }> = {
  "3L": { ar: "شاليه 3 غرف على اللاجون", en: "3 bed — lagoon" },
  "3LL": { ar: "Loft بـ 3 غرف على اللاجون", en: "3 bed loft — lagoon" },
  "2CG": { ar: "شاليه غرفتين بحديقة", en: "2 bed chalet — garden" },
  "1PS": { ar: "Penthouse Suite غرفة واحدة", en: "1 bed penthouse suite" },
  "3P": { ar: "Penthouse بـ 3 غرف", en: "3 bed penthouse" },
  "4L": { ar: "شاليه 4 غرف على اللاجون", en: "4 bed — lagoon" },
  "3DL": { ar: "دوبلكس 3 غرف على اللاجون", en: "3 bed duplex — lagoon" },
  "3DG": { ar: "دوبلكس 3 غرف بحديقة", en: "3 bed duplex — garden" },
  "2G": { ar: "شقة غرفتين بحديقة", en: "2 bed — garden" },
  "1G": { ar: "شقة غرفة بحديقة", en: "1 bed — garden" },
  "2": { ar: "شقة غرفتين", en: "2 bed" },
  "1": { ar: "شقة غرفة واحدة", en: "1 bed" },
  "2P": { ar: "Penthouse بغرفتين", en: "2 bed penthouse" },
  "1P": { ar: "Penthouse بغرفة واحدة", en: "1 bed penthouse" },
};
const BUILDINGS: { id: string; name: string; collection: string; floors: { ar: string; en: string }; image: string; rows: RawRow[] }[] = [
  {
    id: "fc-a", name: "Floating Chalet A", collection: "Island Collection",
    floors: { ar: "أرضي + أول", en: "G+1" }, image: "/images/lv-chalet-a.webp",
    rows: [["G", "3L", 114, 32, 20], ["G", "3LL", 132, 21, 16], ["G", "3LL", 131, 6, 17], ["F1", "2CG", 103, 22, 14]],
  },
  {
    id: "fc-b", name: "Floating Chalet B", collection: "Island Collection",
    floors: { ar: "أرضي + 2", en: "G+2" }, image: "/images/lv-chalet-b.webp",
    rows: [["G", "3L", 114, 32, 20], ["G", "3LL", 136, 18, 16], ["G", "3LL", 132, 6, 16], ["F1", "2CG", 103, 9, 15], ["F2", "1PS", 61, 8, 0], ["F2", "3P", 117, 46, 13]],
  },
  {
    id: "fc-c", name: "Floating Chalet C", collection: "Valley Collection",
    floors: { ar: "أرضي سفلي + 2", en: "LG+2" }, image: "/images/lv-chalet-c.webp",
    rows: [["LG", "3L", 126, 43, 8], ["LG", "4L", 133, 41, 12], ["GF", "3DL", 130, 14, 12], ["GF", "3DL", 128, 35, 9]],
  },
  {
    id: "type-a", name: "Type A", collection: "Valley Collection",
    floors: { ar: "أرضي + 2", en: "G+2" }, image: "/images/lv-type-a.webp",
    rows: [["G", "3DG", 130, 25], ["G", "2G", 89, 0], ["G", "2G", 102, 0], ["F1", "2", 83, 16], ["F1", "2CG", 90, 25], ["F2", "2P", 99, 22], ["F2", "2P", 88, 29]],
  },
  {
    id: "type-b", name: "Type B", collection: "Valley Collection",
    floors: { ar: "أرضي + 2", en: "G+2" }, image: "/images/lv-type-b.webp",
    rows: [["G", "1G", 75, 0], ["G", "2G", 92, 0], ["G", "2G", 101, 0], ["F1", "1", 61, 9], ["F1", "2CG", 82, 19], ["F1", "2CG", 89, 17], ["F2", "1P", 77, 19], ["F2", "3P", 122, 31]],
  },
];
const lvBuildings = (l: Lang): LvBuilding[] =>
  BUILDINGS.map((b) => ({
    id: b.id, name: b.name, collection: b.collection, floors: b.floors[l], image: b.image,
    rows: b.rows.map(([f, t, bua, terrace, deck]) => ({ floor: FLOOR[f][l], type: TYPE[t][l], bua, terrace, deck })),
  }));

const MIX = [
  { key: { ar: "غرفة واحدة", en: "1 bed" }, share: 15, avg: 67 },
  { key: { ar: "غرفتين", en: "2 bed" }, share: 46, avg: 93 },
  { key: { ar: "3 غرف", en: "3 bed" }, share: 17, avg: 118 },
  { key: { ar: "دوبلكس 3 غرف", en: "3 bed duplex" }, share: 21, avg: 132 },
  { key: { ar: "4 غرف", en: "4 bed" }, share: 2, avg: 133 },
];

// ==================================================================
//  ARABIC
// ==================================================================
const ar = {
  lang: "ar" as Lang,
  dir: "rtl" as "rtl" | "ltr",
  home: "/",
  prefix: "",
  thanks: "/thank-you",
  switchLabel: "English",
  switchPrefix: "/en",
  meta: {
    title: "مكادي هايتس الغردقة | Makadi Heights أوراسكوم — Ledge Valley و Aden Parks و Siyal",
    description: `مكادي هايتس من أوراسكوم للتنمية في الغردقة. شاليهات على اللاجون تبدأ من ${SITE.chaletsFrom} مليون جنيه، وفيلات تبدأ من ${SITE.villasFrom} مليون جنيه. ثلاث مراحل متاحة الآن.`,
  },
  logoAlt: "Makadi Heights by Orascom Development",
  nav: [
    { href: "/ledge-valley", label: "Ledge Valley", page: true },
    { href: "/aden-parks", label: "Aden Parks", page: true },
    { href: "/siyal", label: "Siyal", page: true },
    { href: "/#masterplan", label: "المخطط العام" },
    { href: "/#amenities", label: "الخدمات" },
    { href: "/#location", label: "الموقع" },
  ],
  callNow: "اتصل الآن",
  menuOpen: "فتح القائمة",
  menuClose: "إغلاق القائمة",
  hero: {
    eyebrow: "أوراسكوم للتنمية — خليج مكادي، الغردقة",
    script: "Across the heights",
    title: "مكادي هايتس",
    lead: "شاليهات على لاجونات قابلة للسباحة بتراس خشبي خاص فوق المياه، وفيلات على ارتفاع 78 متراً فوق سطح البحر الأحمر.",
    chalets: "شاليهات تبدأ من",
    villas: "فيلات تبدأ من",
    million: "مليون جنيه",
    wa: "اسأل على واتساب",
    seePhases: "شاهد المراحل المتاحة",
    available: "متاح الآن:",
    imgAlt: "شاليهات Ledge Valley على لاجون مكادي هايتس",
    formTitle: "احصل على قائمة الأسعار",
    formSub: "نرسل لك البروشور والوحدات المتاحة في المراحل الثلاث على واتساب.",
  },
  factsLabel: "أرقام المشروع",
  facts: [
    { v: "4.75 مليون م²", l: "مساحة مدينة مكادي هايتس" },
    { v: "78 متراً", l: "فوق سطح البحر، أعلى نقطة في خليج مكادي" },
    { v: "20 دقيقة", l: "من مطار الغردقة الدولي" },
    { v: "3 مراحل", l: "متاحة للبيع الآن" },
  ],
  phasesSection: {
    title: "ثلاث مراحل متاحة للبيع الآن",
    lead: "شاليهات على المياه في Ledge Valley و Aden Parks، وفيلات منخفضة الكثافة في Siyal. لكل مرحلة صفحة فيها كل التفاصيل والمساحات.",
    explore: "تفاصيل",
    indicative: "سعر استرشادي",
    priceOf: "أسعار",
  },
  phases: [
    {
      id: "ledge-valley",
      name: "Ledge Valley",
      kind: "شاليهات وشقق على اللاجون",
      tagline: "Floating Chalets على لاجونات قابلة للسباحة",
      intro: "أحدث مراحل مكادي هايتس، منخفضة الكثافة ويطل أغلب وحداتها مباشرة على لاجون أو حمام سباحة. وحدات الدور الأرضي لها تراس خشبي خاص (Deck) ممتد فوق المياه.",
      price: `تبدأ من ${SITE.chaletsFrom} مليون جنيه`,
      priceNote: "شاليه غرفة واحدة",
      stats: [
        { label: "عدد الوحدات", value: "274" },
        { label: "مساحة الأرض", value: "91,049 م²" },
        { label: "المساحات", value: "61 – 136 م²" },
      ],
      highlights: [
        "تراس خشبي خاص فوق المياه لوحدات الأرضي",
        "إطلالة لاجون أو Valley أو حمام سباحة",
        "من غرفة واحدة حتى 4 غرف، دوبلكس و Penthouse",
        "شلالات، حمام أطفال، Submerged Deck، يوجا",
      ],
      card: { src: "/images/lv-chalet-b.webp", alt: "Floating Chalet B في Ledge Valley" },
      waText: "مرحباً، أريد أسعار ووحدات Ledge Valley في مكادي هايتس",
      page: {
        metaTitle: "Ledge Valley مكادي هايتس | شاليهات على اللاجون من 11.5 مليون — أوراسكوم",
        metaDesc: `Ledge Valley أحدث مراحل مكادي هايتس الغردقة: 274 وحدة، Floating Chalets بتراس خاص فوق اللاجون، من غرفة حتى 4 غرف. تبدأ من ${SITE.chaletsFrom} مليون جنيه.`,
        hero: { src: "/images/lv-pool.webp", alt: "لاجون وحمام سباحة Ledge Valley في مكادي هايتس" },
        heroLead: "شاليهات Floating تنزل منها مباشرة إلى لاجون قابل للسباحة، في أحدث وأهدأ مراحل مكادي هايتس.",
        overviewTitle: "حي سكني هادئ حول المياه",
        overview: [
          "Ledge Valley مرحلة Multi-family منخفضة الكثافة، مصممة حول لاجونين قابلين للسباحة يمتدان في قلب المرحلة. المباني موزعة في صفوف منحنية حول المياه، والمسافة بين كل صف والآخر عبر اللاجون من 34 إلى 55 متراً، فتفضل الإطلالات مفتوحة والخصوصية محفوظة.",
          "الوحدات من غرفة واحدة حتى 4 غرف، بين شاليهات على اللاجون، Lofts، دوبلكس، و Penthouses بتراسات واسعة. وحدات الصف الأول لها تراس خشبي خاص (Deck) ممتد فوق المياه.",
        ],
        facts: [
          { label: "مساحة الأرض", value: "91,049 م²" },
          { label: "إجمالي المسطحات", value: "28,000 م²" },
          { label: "المسطح المبني", value: "13,000 م²" },
          { label: "عدد الوحدات", value: "274" },
        ],
        story: {
          title: "مستويات وإطلالات مختلفة",
          text: "الأرض مقسمة على مستويات من ‎-3.5 إلى ‎+0.5 متر، فكل صف يشوف فوق اللي قدامه. الواجهات بدرجات الوردي والرملي والأخضر الهادي، مع أقواس وسلالم خارجية وسور أخضر، وكل وحدة لها إطلالة واحدة على الأقل من أربعة: لاجون، لاجون و Valley، Valley، أو حمام سباحة.",
          image: { src: "/images/lv-close-1.webp", alt: "سلم خارجي لـ Floating Chalet على المياه" },
        },
        facilities: {
          title: "الخدمات داخل Ledge Valley",
          lead: "كل ده جوه المرحلة نفسها، بخلاف خدمات مدينة مكادي هايتس كلها.",
          items: [
            "لاجونان قابلان للسباحة",
            "شلالان",
            "حمام سباحة رئيسي",
            "حمام سباحة للأطفال",
            "Submerged Deck",
            "Sun Deck",
            "منطقتا ألعاب أطفال",
            "منطقة يوجا",
            "جلسات خارجية",
            "مطعم وكافيه",
          ],
          image: { src: "/images/lv-deck.webp", alt: "Deck مظلل يطل على لاجون Ledge Valley" },
        },
        siteplan: {
          title: "المخطط العام لـ Ledge Valley",
          text: "لاجونان في المنتصف، و Island Collection على الجزيرة الوسطى بينهما، و Valley Collection حولهما، والشقق في الصف الخارجي بإطلالة Valley أو حمام سباحة.",
          image: { src: "/images/lv-siteplan.webp", alt: "المخطط العام لمرحلة Ledge Valley" },
          extra: { src: "/images/lv-usps.webp", alt: "أماكن الخدمات على مخطط Ledge Valley", caption: "أماكن اللاجونات والشلالات وحمامات السباحة ومناطق الأطفال والجلسات على المخطط." },
        },
        unitsTitle: "كل نموذج ومساحاته بالتفصيل",
        unitsLead: "خمسة نماذج مبانٍ في مجموعتين. المساحات بالمتر المربع من كتيّب المبيعات وقابلة للتعديل.",
        gallery: [
          { src: "/images/lv-chalet-a.webp", alt: "Floating Chalet A" },
          { src: "/images/lv-court.webp", alt: "مستويات وإطلالات بين المباني" },
          { src: "/images/lv-close-2.webp", alt: "تراس خاص فوق المياه" },
          { src: "/images/lv-park.webp", alt: "الحدائق والممشى الداخلي" },
          { src: "/images/lv-interior-1.webp", alt: "معيشة بإطلالة على اللاجون" },
          { src: "/images/lv-roof.webp", alt: "روف Penthouse" },
          { src: "/images/lv-close-3.webp", alt: "تراس بأقواس وسور أخضر" },
          { src: "/images/lv-interior-2.webp", alt: "غرفة نوم تطل على المياه" },
        ],
      },
    },
    {
      id: "aden-parks",
      name: "Aden Parks",
      kind: "شاليهات وشقق بحدائق",
      tagline: "خصوصية في الهواء الطلق حول لاجون مركزي",
      intro: "مرحلة هادئة مستوحاة من ملاعب الجولف. عدد قليل من الوحدات في كل مبنى، ووحدات الأرضي لها مدخل خاص وفناء، ووحدات الدور الأول الجانبية لها حديقة خاصة.",
      price: "شاليهات من غرفتين",
      priceNote: "اطلب أحدث قائمة أسعار",
      stats: [
        { label: "عدد الوحدات", value: "205" },
        { label: "مساحة الأرض", value: "82,000 م²" },
        { label: "المساحات", value: "80 – 134 م²" },
      ],
      highlights: [
        "لاجون مركزي وحمامات Infinity",
        "مدخل خاص وفناء لوحدات الأرضي",
        "كاياك ومناطق سباحة واسترخاء",
        "مبانٍ من 3 أدوار بعدد وحدات قليل",
      ],
      card: { src: "/images/ad-lagoon.webp", alt: "اللاجون المركزي في Aden Parks" },
      waText: "مرحباً، أريد أسعار ووحدات Aden Parks في مكادي هايتس",
      page: {
        metaTitle: "Aden Parks مكادي هايتس | شاليهات وشقق بحدائق على اللاجون — أوراسكوم",
        metaDesc: "Aden Parks في مكادي هايتس الغردقة: 205 وحدة حول لاجون مركزي وحمامات Infinity، شقق وشاليهات بحدائق وأفنية خاصة ودوبلكس من 80 إلى 134 م².",
        hero: { src: "/images/ad-lagoon.webp", alt: "اللاجون المركزي في Aden Parks" },
        heroLead: "بيوت بحدائق وأفنية خاصة حول لاجون مركزي، بإيقاع هادئ وطابع مستوحى من ملاعب الجولف.",
        overviewTitle: "مصممة للخصوصية والهدوء",
        overview: [
          "Aden Parks مصممة عشان تدي إحساس أعلى بالخصوصية في المساحات المفتوحة. وحدات الدور الأرضي لها مدخل خاص بيفتح على فناء، ووحدات الدور الأول الجانبية لها حديقتها الخاصة، وعدد الوحدات في كل مبنى قليل.",
          "اليوم هنا بيبدأ بنور الصبح على اللاجون وبيخلص بقعدة هادية برّه، والسكان بيتنقلوا بين الأفنية الخاصة وممرات الحدائق والممشى على المياه.",
        ],
        facts: [
          { label: "مساحة الأرض", value: "82,000 م²" },
          { label: "إجمالي المسطحات", value: "18,593 م²" },
          { label: "المسطح المبني", value: "8,360 م²" },
          { label: "عدد الوحدات", value: "205" },
        ],
        story: {
          title: "خطوط منحنية وألوان هادئة",
          text: "التصميم مستوحى من لاندسكيب ملاعب الجولف، والعمارة نازلة بهدوء في الطبيعة اللي حواليها. خطوط منحنية بتشبه أشكال الطبيعة، ألوان محايدة هادئة، وشبابيك واسعة بتدخل نور كتير وبتأطر الإطلالة.",
          image: { src: "/images/ad-courtyard.webp", alt: "فناء خاص لوحدة دور أرضي في Aden Parks" },
        },
        facilities: {
          title: "حياة حول المياه",
          lead: "لاجون مركزي وحمامات Infinity بتشكل خلفية هادية لليوم كله.",
          items: [
            "لاجون مركزي",
            "حمامات سباحة Infinity",
            "مناطق سباحة",
            "كاياك",
            "مناطق استرخاء",
            "ممرات حدائق وممشى على المياه",
            "جيم مفتوح وأماكن مشي",
            "أفنية وحدائق خاصة",
          ],
          image: { src: "/images/ad-waterfall.webp", alt: "شلال ولاجون Aden Parks" },
        },
        siteplan: {
          title: "المخطط العام لـ Aden Parks",
          text: "المباني موزعة حول لاجون مركزي على شكل منحنى، وأغلب الوحدات بتطل على المياه أو الحدائق.",
          image: { src: "/images/ad-siteplan.webp", alt: "المخطط العام لمرحلة Aden Parks" },
        },
        unitsTitle: "أنواع الوحدات",
        unitsLead: "مبانٍ من 3 أدوار: وحدات بحدائق في الأرضي، شقق بتراسات، دوبلكس، وشقق Typical.",
        buildings: [
          { name: "Type A", text: "مبنى من 3 أدوار بدوبلكس Haven بحديقة وفناء ووحدات Bloom في الأرضي.", image: { src: "/images/ad-type-a.webp", alt: "مبنى Type A في Aden Parks" } },
          { name: "Type B", text: "مبنى من 3 أدوار بوحدات Bloom و Lush و Nest و Veranda.", image: { src: "/images/ad-type-b.webp", alt: "مبنى Type B في Aden Parks" } },
        ],
        units: [
          { name: "Haven", type: "دوبلكس بحديقة وفناء", beds: 3, baths: 4, bua: "134", terrace: "22" },
          { name: "Bloom", type: "شقة بحديقة وفناء", beds: 2, baths: 2, bua: "95 – 101", terrace: "7" },
          { name: "Veranda", type: "شقة بتراس — دور ثاني", beds: 2, baths: 2, bua: "94", terrace: "24" },
          { name: "Lush", type: "شاليه بحديقة — دور أول", beds: 2, baths: 2, bua: "87", terrace: "17" },
          { name: "Nest", type: "شقة Typical — دور أول", beds: 2, baths: 2, bua: "80", terrace: "15" },
        ],
        gallery: [
          { src: "/images/ad-walk.webp", alt: "الممشى على اللاجون" },
          { src: "/images/ad-view.webp", alt: "إطلالة تراس على المياه" },
          { src: "/images/ad-street.webp", alt: "واجهة مباني Aden Parks من الشارع" },
          { src: "/images/ad-interior.webp", alt: "تشطيب داخلي" },
          { src: "/images/ad-type-b.webp", alt: "Type B بحديقة وحمام سباحة" },
          { src: "/images/ad-courtyard.webp", alt: "فناء خاص" },
        ],
      },
    },
    {
      id: "siyal",
      name: "Siyal",
      kind: "فيلات Standalone و Twin و Townhouse",
      tagline: "فيلات على أرض مفتوحة، 12% فقط مبانٍ",
      intro: "حي فيلات منخفض الكثافة: 78 وحدة فقط على 82,500 م²، وأغلب الأرض مساحات خضراء ومياه. واجهات بألوان الصحراء الهادئة، ومداخل بارتفاع مزدوج في بعض النماذج.",
      price: `تبدأ من ${SITE.villasFrom} مليون جنيه`,
      priceNote: "Townhouse",
      stats: [
        { label: "عدد الوحدات", value: "78" },
        { label: "مساحة الأرض", value: "82,500 م²" },
        { label: "المساحات", value: "136 – 250 م²" },
      ],
      highlights: [
        "حمام سباحة خاص في Signature و Courtyard",
        "روف واسع في كل النماذج",
        "غرفة مربية بحمام في كل فيلا",
        "جيم مفتوح، Water Gym، ويوجا",
      ],
      card: { src: "/images/sy-deluxe.webp", alt: "Deluxe Villa في Siyal" },
      waText: "مرحباً، أريد أسعار فيلات Siyal في مكادي هايتس",
      page: {
        metaTitle: "Siyal مكادي هايتس | فيلات من 23 مليون جنيه — أوراسكوم الغردقة",
        metaDesc: `Siyal في مكادي هايتس الغردقة: 78 فيلا فقط على 82,500 م²، Standalone و Twin و Townhouse من 136 إلى 250 م²، تبدأ من ${SITE.villasFrom} مليون جنيه.`,
        hero: { src: "/images/sy-pool.webp", alt: "حمام السباحة الرئيسي في Siyal" },
        heroLead: "78 فيلا فقط على أرض مفتوحة، بإطلالات على المساحات الخضراء واللاجونات.",
        overviewTitle: "حي فيلات مخطط بعناية",
        overview: [
          "Siyal مصممة بمسطح مبني صغير يمثل حوالي 12% من الأرض، والباقي كله لاندسكيب مفتوح ومياه ومساحات مشتركة برّه.",
          "كل فيلا متوجهة على إطلالة مفتوحة، سواء خضرة أو لاجون أو مياه، فالإطلالة بتبقى جزء من اليوم وبتحافظ على الخصوصية والإحساس بالمساحة.",
        ],
        facts: [
          { label: "مساحة الأرض", value: "82,500 م²" },
          { label: "إجمالي المسطحات", value: "12,910 م²" },
          { label: "المسطح المبني", value: "9,240 م²" },
          { label: "عدد الوحدات", value: "78" },
        ],
        story: {
          title: "مفتوحة على النور",
          text: "عمارة بدرجات الصحراء الهادئة وأشكال نحتية بيحركها النور والظل طول اليوم. بعض النماذج فيها مداخل بارتفاع مزدوج وأسقف عالية بتدي إحساس بالاتساع.",
          image: { src: "/images/sy-signature.webp", alt: "Signature Villa في Siyal" },
        },
        facilities: {
          title: "Wellness ومساحات مشتركة",
          lead: "خدمات داخل Siyal للحركة والراحة واللقاء.",
          items: [
            "جيم مفتوح وسط الطبيعة",
            "Water Gym",
            "منطقة يوجا خارجية",
            "ساحة تجمع مركزية",
            "مسطحات خضراء",
            "جلسات و Chaise Lounges",
            "مساحة عمل خارجية",
            "ممرات مشي",
          ],
          image: { src: "/images/sy-lagoon.webp", alt: "اللاجون والممشى في Siyal" },
        },
        siteplan: {
          title: "المخطط العام لـ Siyal",
          text: "الفيلات موزعة على الأطراف حول حمامات سباحة ومياه في المنتصف، مع ممرات مشي تربط الحي كله.",
          image: { src: "/images/sy-siteplan.webp", alt: "المخطط العام لمرحلة Siyal" },
        },
        unitsTitle: "نماذج الفيلات",
        unitsLead: "سبعة نماذج، كلها فيها غرفة مربية بحمام وروف خاص.",
        units: [
          { name: "Signature Villa", type: "Standalone", beds: 5, baths: 5, bua: "250", terrace: "35", roof: "86", extra: "حمام سباحة خاص", image: "/images/sy-signature.webp" },
          { name: "Courtyard Villa", type: "Standalone", beds: 4, baths: 5, bua: "210", roof: "89", extra: "فناء بحمام سباحة", image: "/images/sy-courtyard.webp" },
          { name: "Grand Villa", type: "Standalone", beds: 4, baths: 4, bua: "190", terrace: "38", roof: "55", extra: "سلم خارجي للروف", image: "/images/sy-grand.webp" },
          { name: "Deluxe Villa", type: "Standalone", beds: 4, baths: 4, bua: "175", terrace: "80", roof: "32", image: "/images/sy-deluxe.webp" },
          { name: "Boutique Villa", type: "Standalone", beds: 3, baths: 4, bua: "160", terrace: "31", roof: "56", extra: "أسقف عالية", image: "/images/sy-boutique.webp" },
          { name: "Twin Villa", type: "Twin", beds: 3, baths: 3, bua: "144 – 145", roof: "31 – 71", image: "/images/sy-twin.webp" },
          { name: "Townhouse", type: "Townhouse", beds: 3, baths: 3, bua: "136 – 138", roof: "50 – 51", extra: `من ${SITE.villasFrom} مليون جنيه`, image: "/images/sy-townhouse.webp" },
        ],
        gallery: [
          { src: "/images/sy-deluxe.webp", alt: "Deluxe Villa" },
          { src: "/images/sy-courtyard.webp", alt: "Courtyard Villa" },
          { src: "/images/sy-grand.webp", alt: "Grand Villa" },
          { src: "/images/sy-boutique.webp", alt: "Boutique Villa" },
          { src: "/images/sy-twin.webp", alt: "Twin Villa" },
          { src: "/images/sy-townhouse.webp", alt: "Townhouse" },
        ],
      },
    },
  ] as Phase[],
  pp: {
    overview: "نظرة عامة",
    units: "الوحدات",
    facilities: "الخدمات",
    siteplan: "المخطط",
    gallery: "الصور",
    video: "الفيديو",
    beds: "غرف",
    baths: "حمامات",
    bua: "المساحة",
    terrace: "تراس",
    roof: "روف",
    sqm: "م²",
    otherPhases: "مراحل أخرى في مكادي هايتس",
    backHome: "مكادي هايتس",
    requestPlans: "اطلب المساقط",
    unitWa: (phase: string, unit: string) => `مرحباً، أريد سعر ${unit} في ${phase} - مكادي هايتس`,
    priceOfUnit: "اسأل عن السعر",
  },
  lv: {
    mixTitle: "توزيع وحدات المرحلة الأولى (194 وحدة)",
    avg: "متوسط",
    tabs: "نماذج المباني",
    floor: "الدور",
    type: "نوع الوحدة",
    area: "المساحة",
    terrace: "تراس مكشوف",
    deck: "Deck",
    mirror: "كل Floating Chalet له نموذج معكوس (Mirror) بنفس المساحات. المساحات تقريبية.",
    available: "المتاح من",
    plans: "اطلب المساقط الكاملة",
    facade: "واجهة",
    waText: (b: string) => `مرحباً، أريد الوحدات المتاحة وأسعار ${b} في Ledge Valley - مكادي هايتس`,
  },
  mp: {
    title: "مكان كل مرحلة داخل المدينة",
    lead: "المخطط العام من تصميم EDSA. Siyal و Aden Parks في الجزء الشمالي الغربي قرب Aden و Townwalk، و Ledge Valley في الشرق بجوار Ledge Flare، وكلها على بعد دقائق من الشاطئ ومن M Town.",
    alt: "المخطط العام لمكادي هايتس وموقع Siyal و Aden Parks و Ledge Valley",
    note: "المخطط للتوضيح فقط. اسحب أفقياً على الموبايل لرؤية الخريطة كاملة.",
  },
  amenities: {
    title: "مدينة متكاملة طول السنة، مش مصيف",
    lead: "مكادي هايتس فيها سكن وشقق فندقية وفنادق ومنطقة تجارية في مكان واحد، فالحياة فيها مستمرة شتاء وصيف.",
    imgAlt: "تراس خاص لـ Floating Chalet فوق المياه",
    items: [
      { title: "حياة ساحلية", text: "سباحة وكايت سيرف وكاياك وسنوركلينج، مع Beach Lounges على البحر الأحمر." },
      { title: "The Haus", text: "مسرح متعدد الاستخدامات لأكثر من 3,400 ضيف للحفلات والأفراح والمؤتمرات، بجانب فنادق بوتيك وفنادق كاملة." },
      { title: "نادي رياضي", text: "ملاعب كرة قدم وبادل وتنس، وجيم مجهز، ومساحات يوجا موزعة في المشروع." },
      { title: "خدمات طبية", text: "عيادات داخل المشروع للرعاية اليومية والوصول السريع للدعم الطبي." },
      { title: "تعليم", text: "حضانة داخل المجتمع للعائلات الصغيرة." },
      { title: "تسوق ومطاعم", text: "كافيهات ومطاعم ومنطقة تجارية بممرات مظللة وبنوك وكل الاحتياجات اليومية." },
    ],
  },
  location: {
    title: "قلب خليج مكادي، جنوب الغردقة",
    lead: "على أعلى نقطة في خليج مكادي بإطلالة مفتوحة على البحر الأحمر، وقريبة من سهل حشيش وسوما باي ومراسي ريد سي.",
    items: [
      { place: "مطار الغردقة الدولي", time: "20 دقيقة" },
      { place: "وسط الغردقة", time: "30 دقيقة" },
      { place: "الجونة", time: "45 دقيقة" },
    ],
    mapTitle: "موقع مكادي هايتس على الخريطة",
  },
  dev: {
    eyebrow: "المطوّر",
    title: "أوراسكوم للتنمية",
    lead: "المطوّر اللي بنى الجونة وحوّلها لمدينة بتعيش طول السنة. نفس الفكرة في مكادي هايتس: مدينة متكاملة بخدماتها، مش قرية موسمية.",
    portfolio: ["El Gouna", "Taba Heights", "Makadi Heights", "O West", "Andermatt — Switzerland", "Luštica Bay — Montenegro"],
    partnersTitle: "شركاء التصميم",
    partners: [
      { name: "EDSA", role: "المخطط العام لمكادي هايتس" },
      { name: "Die Stadt", role: "مخطط Ledge Valley" },
      { name: "Innovation Design Studio", role: "عمارة Ledge Valley" },
    ],
  },
  gallery: {
    title: "من الداخل والخارج",
    note: "الصور تصورات معمارية للتوضيح وقد تختلف عن الواقع.",
    alts: ["سلم خارجي لـ Floating Chalet", "معيشة بإطلالة على اللاجون", "Courtyard Villa في Siyal", "تراس بأقواس وسور أخضر", "تشطيب داخلي في Aden Parks", "غرفة نوم تطل على المياه"],
  },
  videoTitle: "شاهد مكادي هايتس",
  playVideo: "تشغيل الفيديو",
  faqTitle: "أسئلة شائعة",
  faq: [
    { q: "أين يقع مشروع مكادي هايتس؟", a: "في قلب خليج مكادي جنوب الغردقة على ساحل البحر الأحمر، على ارتفاع 78 متراً فوق سطح البحر، وحوالي 20 دقيقة من مطار الغردقة الدولي." },
    { q: "ما المراحل المتاحة للبيع حالياً؟", a: "ثلاث مراحل: Ledge Valley (شاليهات وشقق على اللاجون)، Aden Parks (شاليهات وشقق بحدائق)، و Siyal (فيلات Standalone و Twin و Townhouse)." },
    { q: "كم يبدأ سعر الشاليه والفيلا؟", a: `الشاليهات تبدأ من ${SITE.chaletsFrom} مليون جنيه لوحدة غرفة واحدة في Ledge Valley، والفيلات تبدأ من ${SITE.villasFrom} مليون جنيه للـ Townhouse في Siyal. الأسعار استرشادية وبتختلف حسب الوحدة والإطلالة والدور وقت الحجز.` },
    { q: "يعني إيه Floating Chalet في Ledge Valley؟", a: "وحدات الدور الأرضي مبنية على حافة لاجون قابل للسباحة، ولكل وحدة تراس خشبي خاص ممتد فوق المياه، فتنزل من البيت للمياه مباشرة." },
    { q: "مين المطوّر؟", a: "أوراسكوم للتنمية، مطوّر الجونة وطابا هايتس ومكادي هايتس، بمخطط عام من EDSA، وتصميم Ledge Valley من Die Stadt و Innovation Design Studio." },
    { q: "أقدر أحجز معاينة أو أستلم البروشور الكامل؟", a: "أيوه، سيب بياناتك أو كلمنا واتساب وهنبعتلك البروشور والوحدات المتاحة ونرتب ميعاد المعاينة." },
  ],
  contact: {
    title: "احجز قبل ما تخلص وحدات الصف الأول",
    lead: "وحدات الصف الأول على اللاجون عددها محدود في كل مرحلة. سيب رقمك ونبعتلك المتاح دلوقتي بالأسعار والمساقط.",
    payment: "أنظمة سداد بالتقسيط على سنين",
    paymentNote: "تواصل معانا لمعرفة خطة السداد المتاحة لكل مرحلة ووحدة.",
    formTitle: "اطلب الأسعار والبروشور",
    formSub: "هنتواصل معاك على الرقم اللي هتكتبه.",
    wa: "واتساب",
  },
  form: {
    name: "الاسم",
    phone: "رقم الموبايل / واتساب",
    phase: "المرحلة المهتم بها",
    undecided: "لم أحدد بعد",
    submit: "ابعتلي الأسعار والبروشور",
    sending: "جارٍ الإرسال…",
    errName: "اكتب اسمك من حرفين على الأقل.",
    errPhone: "اكتب رقم موبايل صحيح من 10 إلى 15 رقم، مثل 01xxxxxxxxx أو ‎+9665xxxxxxxx.",
    errNet: "الطلب ما اتبعتش بسبب مشكلة في الاتصال. جرّب تاني أو كلمنا على واتساب.",
    consent: "بإرسال بياناتك بتوافق إننا نتواصل معاك بخصوص المشروع وفق",
    privacy: "سياسة الخصوصية",
  },
  popup: { title: "قائمة أسعار مكادي هايتس", sub: "أسعار ووحدات Ledge Valley و Aden Parks و Siyal المتاحة دلوقتي، على واتساب.", close: "إغلاق" },
  mobileForm: { title: "احصل على قائمة الأسعار", sub: "البروشور والوحدات المتاحة في المراحل الثلاث على واتساب." },
  bar: { call: "اتصال", wa: "واتساب", prices: "الأسعار" },
  cookie: { text: "بنستخدم ملفات تعريف الارتباط لقياس أداء الإعلانات وتحسين الصفحة.", details: "التفاصيل", ok: "موافق", close: "إغلاق" },
  footer: {
    sub: "Ledge Valley — Aden Parks — Siyal",
    phone: "تليفون وواتساب:",
    email: "بريد:",
    disclosureLabel: "إفصاح:",
    disclosure: `هذه الصفحة يديرها ${SITE.brand}، مسوّق عقاري مستقل، وليست الموقع الرسمي لشركة أوراسكوم للتنمية. شعارات Makadi Heights و Orascom Development مستخدمة بموافقة أوراسكوم، وأسماء المشروعات والصور مملوكة لأصحابها.`,
    pricesLabel: "أسعار استرشادية:",
    prices: "كل الأسعار والمساحات المعروضة استرشادية وقابلة للتغيير دون إشعار، والسعر النهائي يحدده المطوّر وقت الحجز حسب الوحدة والدور والإطلالة. الصور تصورات معمارية للتوضيح.",
    privacy: "سياسة الخصوصية وإخلاء المسؤولية",
  },
  privacy: {
    title: "سياسة الخصوصية وإخلاء المسؤولية",
    blocks: [
      { h: "", p: `هذه الصفحة يديرها ${SITE.brand}، مسوّق عقاري مستقل، وليست الموقع الرسمي لشركة أوراسكوم للتنمية. شعارات المشروع والمطوّر مستخدمة بموافقة أوراسكوم.` },
      { h: "البيانات التي نجمعها", p: "نجمع الاسم ورقم الهاتف والمرحلة اللي تهمك عند إرسال النموذج، ونستخدمها فقط للتواصل معاك بخصوص الوحدات والأسعار والمعاينات. لا نبيع بياناتك لأي طرف، وممكن نشاركها مع المطوّر لإتمام الحجز فقط بموافقتك." },
      { h: "ملفات تعريف الارتباط والإعلانات", p: "نستخدم ملفات تعريف الارتباط وأدوات Google Ads لقياس أداء الإعلانات وعدد الطلبات. تقدر تعطلها من إعدادات المتصفح." },
      { h: "الأسعار والمواصفات", p: "الأسعار المعروضة استرشادية وممكن تتغير دون إشعار حسب الوحدة والدور والإطلالة وسياسة المطوّر وقت الحجز. الصور والمساقط للتوضيح فقط، والمساحات تقريبية." },
      { h: "حذف البيانات", p: `لطلب حذف بياناتك راسلنا على ${SITE.email} أو على رقم ${SITE.phone}.` },
    ],
    close: "إغلاق",
  },
  thankYou: {
    metaTitle: "تم استلام طلبك | مكادي هايتس",
    title: "تم استلام طلبك",
    text: "هنتواصل معاك على رقمك بتفاصيل وأسعار مكادي هايتس. لو حابب تبدأ دلوقتي، كلمنا مباشرة.",
    wa: "كمّل على واتساب",
    back: "الرجوع للصفحة الرئيسية",
  },
  waDefault: "مرحباً، أريد تفاصيل وأسعار مكادي هايتس - أوراسكوم",
  sqm: "م²",
  lvBuildings: lvBuildings("ar"),
  mix: MIX.map((m) => ({ type: m.key.ar, share: m.share, avg: m.avg })),
};

export type Content = typeof ar;

// ==================================================================
//  ENGLISH
// ==================================================================
const en: Content = {
  lang: "en",
  dir: "ltr",
  home: "/en",
  prefix: "/en",
  thanks: "/en/thank-you",
  switchLabel: "العربية",
  switchPrefix: "",
  meta: {
    title: "Makadi Heights Hurghada | Orascom — Ledge Valley, Aden Parks & Siyal",
    description: `Makadi Heights by Orascom Development, Hurghada. Lagoon chalets from EGP ${SITE.chaletsFrom}M and villas from EGP ${SITE.villasFrom}M. Three phases now selling.`,
  },
  logoAlt: "Makadi Heights by Orascom Development",
  nav: [
    { href: "/en/ledge-valley", label: "Ledge Valley", page: true },
    { href: "/en/aden-parks", label: "Aden Parks", page: true },
    { href: "/en/siyal", label: "Siyal", page: true },
    { href: "/en#masterplan", label: "Masterplan" },
    { href: "/en#amenities", label: "Amenities" },
    { href: "/en#location", label: "Location" },
  ],
  callNow: "Call now",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  hero: {
    eyebrow: "Orascom Development — Makadi Bay, Hurghada",
    script: "Across the heights",
    title: "Makadi Heights",
    lead: "Lagoon chalets with private timber decks over the water, and villas 78 metres above the Red Sea.",
    chalets: "Chalets from",
    villas: "Villas from",
    million: "M EGP",
    wa: "Ask on WhatsApp",
    seePhases: "View available phases",
    available: "Now selling:",
    imgAlt: "Ledge Valley chalets on the Makadi Heights lagoon",
    formTitle: "Get the price list",
    formSub: "We'll send the brochure and available units across all three phases on WhatsApp.",
  },
  factsLabel: "Project facts",
  facts: [
    { v: "4.75M m²", l: "Total area of Makadi Heights" },
    { v: "78 m", l: "Above sea level, the highest point of Makadi Bay" },
    { v: "20 min", l: "From Hurghada International Airport" },
    { v: "3 phases", l: "Now selling" },
  ],
  phasesSection: {
    title: "Three phases now selling",
    lead: "Waterfront chalets in Ledge Valley and Aden Parks, and low-density villas in Siyal. Each phase has its own page with full details and areas.",
    explore: "Explore",
    indicative: "indicative price",
    priceOf: "Prices for",
  },
  phases: [
    {
      id: "ledge-valley",
      name: "Ledge Valley",
      kind: "Lagoon chalets & apartments",
      tagline: "Floating chalets on swimmable lagoons",
      intro: "The newest phase of Makadi Heights. Low-density homes, most facing a lagoon or pool directly, with private timber decks that extend over the water on the ground floor.",
      price: `From EGP ${SITE.chaletsFrom}M`,
      priceNote: "1-bedroom chalet",
      stats: [
        { label: "Units", value: "274" },
        { label: "Land area", value: "91,049 m²" },
        { label: "Sizes", value: "61 – 136 m²" },
      ],
      highlights: [
        "Private water deck for ground-floor units",
        "Lagoon, valley or pool views",
        "1 to 4 bedrooms, duplexes and penthouses",
        "Waterfalls, kids' pool, submerged deck, yoga",
      ],
      card: { src: "/images/lv-chalet-b.webp", alt: "Floating Chalet B in Ledge Valley" },
      waText: "Hello, I'd like prices and available units in Ledge Valley, Makadi Heights",
      page: {
        metaTitle: "Ledge Valley Makadi Heights | Lagoon Chalets from EGP 11.5M — Orascom",
        metaDesc: `Ledge Valley, the newest phase of Makadi Heights Hurghada: 274 homes, floating chalets with private decks over the lagoon, 1 to 4 bedrooms. From EGP ${SITE.chaletsFrom}M.`,
        hero: { src: "/images/lv-pool.webp", alt: "Ledge Valley lagoon and pool at Makadi Heights" },
        heroLead: "Floating chalets you step out of straight into a swimmable lagoon, in the newest and calmest phase of Makadi Heights.",
        overviewTitle: "A quiet neighbourhood around the water",
        overview: [
          "Ledge Valley is a low-density multi-family phase built around two swimmable lagoons running through its centre. Buildings sit in curved rows around the water, 34 to 55 metres apart across the lagoon, so views stay open and privacy is kept.",
          "Homes range from 1 to 4 bedrooms across lagoon chalets, lofts, duplexes and penthouses with generous terraces. Front-row units have a private timber deck that extends over the water.",
        ],
        facts: [
          { label: "Land area", value: "91,049 m²" },
          { label: "Total BUA", value: "28,000 m²" },
          { label: "Footprint", value: "13,000 m²" },
          { label: "Units", value: "274" },
        ],
        story: {
          title: "Levels and views",
          text: "The land steps between -3.5 and +0.5 metres, so each row looks over the one in front. Façades in soft pink, sand and sage, with arches, exterior stairs and green screens. Every home has at least one of four views: lagoon, lagoon and valley, valley, or pool.",
          image: { src: "/images/lv-close-1.webp", alt: "Exterior stair of a floating chalet on the water" },
        },
        facilities: {
          title: "Inside Ledge Valley",
          lead: "All within the phase itself, on top of everything Makadi Heights offers.",
          items: ["Two swimmable lagoons", "Two waterfalls", "Main pool", "Kids' pool", "Submerged deck", "Sun deck", "Two kids' play areas", "Yoga area", "Outdoor seating", "Café & restaurant"],
          image: { src: "/images/lv-deck.webp", alt: "Shaded deck overlooking the Ledge Valley lagoon" },
        },
        siteplan: {
          title: "Ledge Valley site plan",
          text: "Two lagoons in the middle, the Island Collection on the central island between them, the Valley Collection around them, and apartments on the outer ring with valley or pool views.",
          image: { src: "/images/lv-siteplan.webp", alt: "Ledge Valley site plan" },
          extra: { src: "/images/lv-usps.webp", alt: "Facilities marked on the Ledge Valley plan", caption: "Where the lagoons, waterfalls, pools, kids' areas and seating sit on the plan." },
        },
        unitsTitle: "Every model, every area",
        unitsLead: "Five building types in two collections. Areas in m² from the sales kit, subject to change.",
        gallery: [
          { src: "/images/lv-chalet-a.webp", alt: "Floating Chalet A" },
          { src: "/images/lv-court.webp", alt: "Levels and views between buildings" },
          { src: "/images/lv-close-2.webp", alt: "Private deck over the water" },
          { src: "/images/lv-park.webp", alt: "Gardens and inner promenade" },
          { src: "/images/lv-interior-1.webp", alt: "Living room with lagoon view" },
          { src: "/images/lv-roof.webp", alt: "Penthouse roof terrace" },
          { src: "/images/lv-close-3.webp", alt: "Arched terrace with green screen" },
          { src: "/images/lv-interior-2.webp", alt: "Bedroom facing the water" },
        ],
      },
    },
    {
      id: "aden-parks",
      name: "Aden Parks",
      kind: "Chalets & garden apartments",
      tagline: "Open-air privacy around a central lagoon",
      intro: "A calm, golf-inspired neighbourhood. Few units per building; ground-floor homes have private entrances and courtyards, and first-floor side units have their own gardens.",
      price: "2-bedroom chalets",
      priceNote: "Ask for the latest price list",
      stats: [
        { label: "Units", value: "205" },
        { label: "Land area", value: "82,000 m²" },
        { label: "Sizes", value: "80 – 134 m²" },
      ],
      highlights: [
        "Central lagoon and infinity pools",
        "Private entrances and courtyards on the ground floor",
        "Kayaking, swimming and lounge areas",
        "Three-storey buildings with few units each",
      ],
      card: { src: "/images/ad-lagoon.webp", alt: "The central lagoon at Aden Parks" },
      waText: "Hello, I'd like prices and available units in Aden Parks, Makadi Heights",
      page: {
        metaTitle: "Aden Parks Makadi Heights | Garden Chalets on the Lagoon — Orascom",
        metaDesc: "Aden Parks at Makadi Heights Hurghada: 205 homes around a central lagoon and infinity pools — garden apartments, courtyard units and duplexes from 80 to 134 m².",
        hero: { src: "/images/ad-lagoon.webp", alt: "The central lagoon at Aden Parks" },
        heroLead: "Homes with private gardens and courtyards around a central lagoon, with a calm, golf-inspired rhythm.",
        overviewTitle: "Designed for privacy and calm",
        overview: [
          "Aden Parks is designed for a heightened sense of outdoor privacy. Ground-floor units have private entrances opening onto courtyards, first-floor side units have their own gardens, and each building holds only a few homes.",
          "Mornings begin with light over the lagoon and evenings settle into quiet time outdoors, as residents move between private courtyards, garden paths and waterside promenades.",
        ],
        facts: [
          { label: "Land area", value: "82,000 m²" },
          { label: "Total BUA", value: "18,593 m²" },
          { label: "Footprint", value: "8,360 m²" },
          { label: "Units", value: "205" },
        ],
        story: {
          title: "Curved lines, calm tones",
          text: "The design draws from a golf-themed landscape where architecture settles gently into its surroundings. Curved lines echo natural forms, a neutral palette keeps things calm, and wide windows bring in daylight and frame the views.",
          image: { src: "/images/ad-courtyard.webp", alt: "Private courtyard of a ground-floor home at Aden Parks" },
        },
        facilities: {
          title: "Life around the water",
          lead: "A central lagoon and infinity pools set a calm backdrop for the whole day.",
          items: ["Central lagoon", "Infinity pools", "Swimming areas", "Kayaking", "Relaxation zones", "Garden paths and waterside promenade", "Open-air fitness and walking routes", "Private courtyards and gardens"],
          image: { src: "/images/ad-waterfall.webp", alt: "Waterfall and lagoon at Aden Parks" },
        },
        siteplan: {
          title: "Aden Parks site plan",
          text: "Buildings curve around a central lagoon, with most homes facing the water or gardens.",
          image: { src: "/images/ad-siteplan.webp", alt: "Aden Parks site plan" },
        },
        unitsTitle: "Unit types",
        unitsLead: "Three-storey buildings with garden units on the ground floor, terrace residences, duplexes and typical apartments.",
        buildings: [
          { name: "Type A", text: "Three storeys, with the Haven garden duplex and Bloom courtyard units on the ground floor.", image: { src: "/images/ad-type-a.webp", alt: "Aden Parks Type A building" } },
          { name: "Type B", text: "Three storeys with Bloom, Lush, Nest and Veranda units.", image: { src: "/images/ad-type-b.webp", alt: "Aden Parks Type B building" } },
        ],
        units: [
          { name: "Haven", type: "Duplex with garden & courtyard", beds: 3, baths: 4, bua: "134", terrace: "22" },
          { name: "Bloom", type: "Apartment with garden & courtyard", beds: 2, baths: 2, bua: "95 – 101", terrace: "7" },
          { name: "Veranda", type: "Terrace apartment — 2nd floor", beds: 2, baths: 2, bua: "94", terrace: "24" },
          { name: "Lush", type: "Garden chalet — 1st floor", beds: 2, baths: 2, bua: "87", terrace: "17" },
          { name: "Nest", type: "Typical apartment — 1st floor", beds: 2, baths: 2, bua: "80", terrace: "15" },
        ],
        gallery: [
          { src: "/images/ad-walk.webp", alt: "Lagoon promenade" },
          { src: "/images/ad-view.webp", alt: "Terrace view over the water" },
          { src: "/images/ad-street.webp", alt: "Aden Parks street façade" },
          { src: "/images/ad-interior.webp", alt: "Interior finish" },
          { src: "/images/ad-type-b.webp", alt: "Type B with garden and pool" },
          { src: "/images/ad-courtyard.webp", alt: "Private courtyard" },
        ],
      },
    },
    {
      id: "siyal",
      name: "Siyal",
      kind: "Standalone, twin & townhouse villas",
      tagline: "Villas on open land — only 12% built",
      intro: "A low-density villa neighbourhood: just 78 homes on 82,500 m², with most of the land given to greenery and water. Soft desert-toned façades, and double-height entrances in selected models.",
      price: `From EGP ${SITE.villasFrom}M`,
      priceNote: "Townhouse",
      stats: [
        { label: "Units", value: "78" },
        { label: "Land area", value: "82,500 m²" },
        { label: "Sizes", value: "136 – 250 m²" },
      ],
      highlights: [
        "Private pool in the Signature and Courtyard villas",
        "Generous roof in every model",
        "Nanny's room with bathroom in every villa",
        "Open-air gym, water gym and yoga",
      ],
      card: { src: "/images/sy-deluxe.webp", alt: "Siyal Deluxe Villa" },
      waText: "Hello, I'd like prices for Siyal villas, Makadi Heights",
      page: {
        metaTitle: "Siyal Makadi Heights | Villas from EGP 23M — Orascom Hurghada",
        metaDesc: `Siyal at Makadi Heights Hurghada: only 78 villas on 82,500 m² — standalone, twin and townhouse from 136 to 250 m², from EGP ${SITE.villasFrom}M.`,
        hero: { src: "/images/sy-pool.webp", alt: "The main pool at Siyal" },
        heroLead: "Only 78 villas on open land, with views over greenery and lagoons.",
        overviewTitle: "A thoughtfully planned villa neighbourhood",
        overview: [
          "Siyal has a deliberately small footprint, about 12% of the site, leaving the rest to open landscape, water features and shared outdoor spaces.",
          "Every home is positioned for an open view, over greenery, a lagoon or water, so the view becomes part of daily life while privacy and a sense of space are kept.",
        ],
        facts: [
          { label: "Land area", value: "82,500 m²" },
          { label: "Total BUA", value: "12,910 m²" },
          { label: "Footprint", value: "9,240 m²" },
          { label: "Units", value: "78" },
        ],
        story: {
          title: "Open outward to light",
          text: "Soft desert tones and sculptural forms, animated by light and shadow through the day. Selected homes have double-height entrances and raised ceilings for a greater sense of openness.",
          image: { src: "/images/sy-signature.webp", alt: "Siyal Signature Villa" },
        },
        facilities: {
          title: "Wellness & shared spaces",
          lead: "Amenities within Siyal for movement, rest and meeting neighbours.",
          items: ["Open-air gym in nature", "Water gym", "Outdoor yoga space", "Central gathering area", "Lawns", "Seating and chaise lounges", "Outdoor workspace", "Walking paths"],
          image: { src: "/images/sy-lagoon.webp", alt: "Lagoon and promenade at Siyal" },
        },
        siteplan: {
          title: "Siyal site plan",
          text: "Villas line the edges around central pools and water, with walking paths linking the whole neighbourhood.",
          image: { src: "/images/sy-siteplan.webp", alt: "Siyal site plan" },
        },
        unitsTitle: "Villa models",
        unitsLead: "Seven models, each with a nanny's room with bathroom and a private roof.",
        units: [
          { name: "Signature Villa", type: "Standalone", beds: 5, baths: 5, bua: "250", terrace: "35", roof: "86", extra: "Private pool", image: "/images/sy-signature.webp" },
          { name: "Courtyard Villa", type: "Standalone", beds: 4, baths: 5, bua: "210", roof: "89", extra: "Pool courtyard", image: "/images/sy-courtyard.webp" },
          { name: "Grand Villa", type: "Standalone", beds: 4, baths: 4, bua: "190", terrace: "38", roof: "55", extra: "External roof stair", image: "/images/sy-grand.webp" },
          { name: "Deluxe Villa", type: "Standalone", beds: 4, baths: 4, bua: "175", terrace: "80", roof: "32", image: "/images/sy-deluxe.webp" },
          { name: "Boutique Villa", type: "Standalone", beds: 3, baths: 4, bua: "160", terrace: "31", roof: "56", extra: "High ceilings", image: "/images/sy-boutique.webp" },
          { name: "Twin Villa", type: "Twin", beds: 3, baths: 3, bua: "144 – 145", roof: "31 – 71", image: "/images/sy-twin.webp" },
          { name: "Townhouse", type: "Townhouse", beds: 3, baths: 3, bua: "136 – 138", roof: "50 – 51", extra: `From EGP ${SITE.villasFrom}M`, image: "/images/sy-townhouse.webp" },
        ],
        gallery: [
          { src: "/images/sy-deluxe.webp", alt: "Deluxe Villa" },
          { src: "/images/sy-courtyard.webp", alt: "Courtyard Villa" },
          { src: "/images/sy-grand.webp", alt: "Grand Villa" },
          { src: "/images/sy-boutique.webp", alt: "Boutique Villa" },
          { src: "/images/sy-twin.webp", alt: "Twin Villa" },
          { src: "/images/sy-townhouse.webp", alt: "Townhouse" },
        ],
      },
    },
  ],
  pp: {
    overview: "Overview",
    units: "Units",
    facilities: "Facilities",
    siteplan: "Site plan",
    gallery: "Gallery",
    video: "Video",
    beds: "Beds",
    baths: "Baths",
    bua: "BUA",
    terrace: "Terrace",
    roof: "Roof",
    sqm: "m²",
    otherPhases: "Other phases at Makadi Heights",
    backHome: "Makadi Heights",
    requestPlans: "Request floor plans",
    unitWa: (phase: string, unit: string) => `Hello, I'd like the price of the ${unit} in ${phase}, Makadi Heights`,
    priceOfUnit: "Ask for price",
  },
  lv: {
    mixTitle: "Phase 1 unit mix (194 units)",
    avg: "avg.",
    tabs: "Building types",
    floor: "Floor",
    type: "Unit type",
    area: "Area",
    terrace: "Open terrace",
    deck: "Deck",
    mirror: "Each floating chalet also comes in a mirrored layout with the same areas. Areas are approximate.",
    available: "Available in",
    plans: "Request full floor plans",
    facade: "Façade of",
    waText: (b: string) => `Hello, I'd like available units and prices for ${b} in Ledge Valley, Makadi Heights`,
  },
  mp: {
    title: "Where each phase sits",
    lead: "Masterplan by EDSA. Siyal and Aden Parks are in the north-west near Aden and Townwalk; Ledge Valley is in the east next to Ledge Flare — all minutes from the beach and M Town.",
    alt: "Makadi Heights masterplan showing Siyal, Aden Parks and Ledge Valley",
    note: "For illustration only. Swipe sideways on mobile to see the full map.",
  },
  amenities: {
    title: "A year-round town, not a summer resort",
    lead: "Makadi Heights combines homes, serviced apartments, hotels and a commercial district in one place, so life continues in winter as well as summer.",
    imgAlt: "Private deck of a floating chalet over the water",
    items: [
      { title: "Coastal living", text: "Swimming, kitesurfing, kayaking and snorkelling, with beach lounges on the Red Sea." },
      { title: "The Haus", text: "A multipurpose venue for over 3,400 guests — concerts, weddings and summits — alongside boutique and full-scale hotels." },
      { title: "Sports club", text: "Football, padel and tennis courts, a fully equipped gym and yoga spaces across the town." },
      { title: "Medical", text: "On-site clinics for everyday care and quick access to health support." },
      { title: "Education", text: "A preschool within the community for young families." },
      { title: "Retail & dining", text: "Cafés, restaurants and shaded retail courts with banks and daily essentials." },
    ],
  },
  location: {
    title: "The heart of Makadi Bay, south of Hurghada",
    lead: "On the highest point of Makadi Bay with open Red Sea views, close to Sahl Hasheesh, Soma Bay and Marassi Red Sea.",
    items: [
      { place: "Hurghada International Airport", time: "20 min" },
      { place: "Downtown Hurghada", time: "30 min" },
      { place: "El Gouna", time: "45 min" },
    ],
    mapTitle: "Makadi Heights on the map",
  },
  dev: {
    eyebrow: "Developer",
    title: "Orascom Development",
    lead: "The developer that built El Gouna into a year-round town. Makadi Heights follows the same idea: a complete, fully serviced town rather than a seasonal village.",
    portfolio: ["El Gouna", "Taba Heights", "Makadi Heights", "O West", "Andermatt — Switzerland", "Luštica Bay — Montenegro"],
    partnersTitle: "Design partners",
    partners: [
      { name: "EDSA", role: "Makadi Heights masterplan" },
      { name: "Die Stadt", role: "Ledge Valley masterplan" },
      { name: "Innovation Design Studio", role: "Ledge Valley architecture" },
    ],
  },
  gallery: {
    title: "Inside and out",
    note: "Images are architectural renders for illustration and may differ from the final product.",
    alts: ["Exterior stair of a floating chalet", "Living room with lagoon view", "Siyal Courtyard Villa", "Arched terrace with green screen", "Aden Parks interior finish", "Bedroom facing the water"],
  },
  videoTitle: "Watch Makadi Heights",
  playVideo: "Play video",
  faqTitle: "Frequently asked questions",
  faq: [
    { q: "Where is Makadi Heights?", a: "In the heart of Makadi Bay, south of Hurghada on the Red Sea, 78 metres above sea level and about 20 minutes from Hurghada International Airport." },
    { q: "Which phases are selling now?", a: "Three: Ledge Valley (lagoon chalets and apartments), Aden Parks (chalets and garden apartments) and Siyal (standalone, twin and townhouse villas)." },
    { q: "What are the starting prices?", a: `Chalets start from EGP ${SITE.chaletsFrom} million for a one-bedroom unit in Ledge Valley, and villas from EGP ${SITE.villasFrom} million for a townhouse in Siyal. Prices are indicative and vary by unit, view and floor at the time of booking.` },
    { q: "What is a floating chalet in Ledge Valley?", a: "Ground-floor units sit on the edge of a swimmable lagoon, each with a private timber deck that extends over the water, so you step straight from your home into the lagoon." },
    { q: "Who is the developer?", a: "Orascom Development — developer of El Gouna, Taba Heights and Makadi Heights — with a masterplan by EDSA and Ledge Valley designed by Die Stadt and Innovation Design Studio." },
    { q: "Can I book a site visit or get the full brochure?", a: "Yes. Leave your details or message us on WhatsApp and we'll send the brochure and available units and arrange a visit." },
  ],
  contact: {
    title: "Book before the front lagoon rows sell out",
    lead: "Front-row lagoon units are limited in every phase. Leave your number and we'll send what's available now, with prices and floor plans.",
    payment: "Instalment plans over several years",
    paymentNote: "Contact us for the payment plan available for each phase and unit.",
    formTitle: "Request prices & brochure",
    formSub: "We'll contact you on the number you provide.",
    wa: "WhatsApp",
  },
  form: {
    name: "Full name",
    phone: "Mobile / WhatsApp number",
    phase: "Phase of interest",
    undecided: "Not decided yet",
    submit: "Send me prices & brochure",
    sending: "Sending…",
    errName: "Enter your name (at least 2 characters).",
    errPhone: "Enter a valid mobile number of 10–15 digits, e.g. 01xxxxxxxxx or +9665xxxxxxxx.",
    errNet: "Your request wasn't sent because of a connection problem. Try again or message us on WhatsApp.",
    consent: "By submitting, you agree to be contacted about this project under our",
    privacy: "privacy policy",
  },
  popup: { title: "Makadi Heights price list", sub: "Prices and available units in Ledge Valley, Aden Parks and Siyal — on WhatsApp.", close: "Close" },
  mobileForm: { title: "Get the price list", sub: "Brochure and available units across all three phases, on WhatsApp." },
  bar: { call: "Call", wa: "WhatsApp", prices: "Prices" },
  cookie: { text: "We use cookies to measure ad performance and improve this page.", details: "Details", ok: "Accept", close: "Close" },
  footer: {
    sub: "Ledge Valley — Aden Parks — Siyal",
    phone: "Phone & WhatsApp:",
    email: "Email:",
    disclosureLabel: "Disclosure:",
    disclosure: `This page is operated by ${SITE.brand}, an independent real estate consultant, and is not the official website of Orascom Development. The Makadi Heights and Orascom Development logos are used with Orascom's approval; project names and images belong to their owners.`,
    pricesLabel: "Indicative prices:",
    prices: "All prices and areas shown are indicative and subject to change without notice; the final price is set by the developer at booking based on unit, floor and view. Images are architectural renders for illustration.",
    privacy: "Privacy policy & disclaimer",
  },
  privacy: {
    title: "Privacy policy & disclaimer",
    blocks: [
      { h: "", p: `This page is operated by ${SITE.brand}, an independent real estate consultant, and is not the official website of Orascom Development. Project and developer logos are used with Orascom's approval.` },
      { h: "Data we collect", p: "We collect your name, phone number and phase of interest when you submit the form, and use them only to contact you about units, prices and visits. We do not sell your data; we may share it with the developer only to complete a booking, with your consent." },
      { h: "Cookies & advertising", p: "We use cookies and Google Ads tools to measure ad performance and enquiries. You can disable them in your browser settings." },
      { h: "Prices & specifications", p: "Prices shown are indicative and may change without notice depending on unit, floor, view and developer policy at booking. Images and plans are for illustration; areas are approximate." },
      { h: "Data deletion", p: `To request deletion of your data, email ${SITE.email} or call ${SITE.phone}.` },
    ],
    close: "Close",
  },
  thankYou: {
    metaTitle: "Request received | Makadi Heights",
    title: "Request received",
    text: "We'll contact you with Makadi Heights details and prices. If you'd like to start now, message us directly.",
    wa: "Continue on WhatsApp",
    back: "Back to home",
  },
  waDefault: "Hello, I'd like details and prices for Makadi Heights by Orascom",
  sqm: "m²",
  lvBuildings: lvBuildings("en"),
  mix: MIX.map((m) => ({ type: m.key.en, share: m.share, avg: m.avg })),
};

export const CONTENT: Record<Lang, Content> = { ar, en };
export const getPhase = (lang: Lang, id: PhaseId) => CONTENT[lang].phases.find((p) => p.id === id)!;
export const phaseHref = (lang: Lang, id: PhaseId) => `${CONTENT[lang].prefix}/${id}`;
