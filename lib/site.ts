// ============================================================
//  إعدادات الصفحة — عدّل هنا فقط
// ============================================================

export const SITE = {
  url: "https://www.example.com", // ← دومين الصفحة
  brand: "Grandeur Spaces", // ← اسم المسوّق الظاهر في الإفصاح
  phone: "01001050018",
  phoneIntl: "+201001050018",
  whatsapp: "201001050018",
  whatsappText: "مرحباً، أريد تفاصيل وأسعار مكادي هايتس - أوراسكوم",
  email: "leads@grandeur-spaces.com",

  // Web3Forms
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",

  // Google Ads — استبدل بالقيم الحقيقية
  adsId: "AW-XXXXXXXXXX",
  conversions: {
    form: "AW-XXXXXXXXXX/FORM_LABEL",
    whatsapp: "AW-XXXXXXXXXX/WA_LABEL",
    call: "AW-XXXXXXXXXX/CALL_LABEL",
  },

  // الأسعار الاسترشادية
  chaletsFrom: "11.5",
  villasFrom: "23",

  // نظام السداد — اكتب الخطة المعتمدة حالياً من المطوّر
  paymentHeadline: "أنظمة سداد بالتقسيط على سنوات",
  paymentNote: "تواصل معنا لمعرفة خطة السداد المتاحة لكل مرحلة ووحدة.",
};

export const waLink = (text = SITE.whatsappText) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

// ------------------------------------------------------------
//  المراحل المتاحة
// ------------------------------------------------------------

export type Phase = {
  id: "ledge-valley" | "aden-parks" | "siyal";
  name: string;
  nameEn: string;
  kind: string;
  tagline: string;
  intro: string;
  price: string;
  priceNote: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  units: { name: string; detail: string; area: string }[];
  images: { src: string; alt: string }[];
};

export const PHASES: Phase[] = [
  {
    id: "ledge-valley",
    name: "ليدج فالي",
    nameEn: "Ledge Valley",
    kind: "شاليهات عائمة وشقق",
    tagline: "شاليهات بديك خاص فوق لاجون قابل للسباحة",
    intro:
      "أحدث مراحل مكادي هايتس. وحدات منخفضة الكثافة يطل أغلبها مباشرة على لاجونات وحمامات سباحة، مع ديكات خشبية خاصة تمتد فوق المياه، وحدائق وممشى داخلي يربط المرحلة كلها.",
    price: `تبدأ من ${SITE.chaletsFrom} مليون ج.م`,
    priceNote: "شاليه غرفة نوم",
    stats: [
      { label: "إجمالي الوحدات", value: "274" },
      { label: "مساحة الأرض", value: "91,049 م²" },
      { label: "مساحات الوحدات", value: "61 – 136 م²" },
    ],
    highlights: [
      "ديك خاص على المياه لوحدات الدور الأرضي",
      "إطلالات لاجون أو فالي أو حمام سباحة",
      "غرفة نوم حتى 4 غرف، ودوبلكس وبنتهاوس",
      "شلالات، حمام أطفال، ديك مغمور، منطقة يوجا",
    ],
    units: [
      { name: "بنتهاوس سويت", detail: "غرفة نوم واحدة", area: "61 م²" },
      { name: "شاليه بحديقة", detail: "غرفتا نوم", area: "103 م²" },
      { name: "شاليه لاجون", detail: "3 غرف نوم", area: "114 م²" },
      { name: "لوفت لاجون", detail: "3 غرف نوم", area: "131 – 136 م²" },
      { name: "دوبلكس لاجون", detail: "3 غرف نوم", area: "128 – 130 م²" },
      { name: "شاليه لاجون", detail: "4 غرف نوم", area: "133 م²" },
    ],
    images: [
      { src: "/images/lv-chalet-b.webp", alt: "شاليه عائم من نوع B على اللاجون في ليدج فالي" },
      { src: "/images/lv-deck.webp", alt: "ديك خشبي مظلل يطل على لاجون ليدج فالي" },
      { src: "/images/lv-chalet-c.webp", alt: "شاليه عائم من نوع C بإطلالة مياه" },
    ],
  },
  {
    id: "aden-parks",
    name: "عدن باركس",
    nameEn: "Aden Parks",
    kind: "شاليهات وشقق بحدائق",
    tagline: "خصوصية في الهواء الطلق حول لاجون مركزي",
    intro:
      "مرحلة هادئة مستوحاة من ملاعب الجولف. عدد محدود من الوحدات في كل مبنى، ووحدات الأرضي لها مداخل خاصة وأفنية، ووحدات الأول الجانبية لها حدائقها الخاصة.",
    price: "شاليهات من غرفتين",
    priceNote: "اطلب أحدث قائمة أسعار",
    stats: [
      { label: "إجمالي الوحدات", value: "205" },
      { label: "مساحة الأرض", value: "82,000 م²" },
      { label: "مساحات الوحدات", value: "80 – 134 م²" },
    ],
    highlights: [
      "لاجون مركزي وحمامات إنفينيتي",
      "مداخل خاصة وأفنية لوحدات الأرضي",
      "كاياك ومساحات سباحة واسترخاء",
      "مبانٍ من 3 أدوار بعدد وحدات قليل",
    ],
    units: [
      { name: "Nest — شقة", detail: "غرفتا نوم", area: "80 م²" },
      { name: "Lush — شاليه بحديقة", detail: "غرفتا نوم", area: "87 م²" },
      { name: "Veranda — بتراس", detail: "غرفتا نوم", area: "94 م²" },
      { name: "Bloom — بحديقة وفناء", detail: "غرفتا نوم", area: "95 – 101 م²" },
      { name: "Haven — دوبلكس بحديقة", detail: "3 غرف نوم", area: "134 م²" },
    ],
    images: [
      { src: "/images/ad-lagoon.webp", alt: "اللاجون المركزي في عدن باركس" },
      { src: "/images/ad-type-a.webp", alt: "مبنى Type A في عدن باركس بحديقة وحمام سباحة" },
      { src: "/images/ad-view.webp", alt: "إطلالة تراس على مياه عدن باركس" },
    ],
  },
  {
    id: "siyal",
    name: "سيال",
    nameEn: "Siyal",
    kind: "فيلات مستقلة وتوين وتاون هاوس",
    tagline: "فيلات على مساحة مفتوحة، 12% فقط مبانٍ",
    intro:
      "حي فيلات منخفض الكثافة: 78 وحدة فقط على 82,500 م²، وأغلب الأرض مخصص للمساحات الخضراء والمياه. واجهات بألوان الصحراء الهادئة، ومداخل بارتفاع مزدوج في بعض النماذج.",
    price: `تبدأ من ${SITE.villasFrom} مليون ج.م`,
    priceNote: "تاون هاوس",
    stats: [
      { label: "إجمالي الوحدات", value: "78" },
      { label: "مساحة الأرض", value: "82,500 م²" },
      { label: "مساحات الفيلات", value: "136 – 250 م²" },
    ],
    highlights: [
      "حمام سباحة خاص في الـ Signature والـ Courtyard",
      "روف واسع في كل النماذج",
      "غرفة مربية بحمام في كل فيلا",
      "جيم مفتوح، جيم مائي، ومساحة يوجا",
    ],
    units: [
      { name: "تاون هاوس", detail: "3 غرف نوم", area: "136 – 138 م²" },
      { name: "توين فيلا", detail: "3 غرف نوم", area: "144 – 145 م²" },
      { name: "Boutique Villa", detail: "3 غرف نوم", area: "160 م²" },
      { name: "Deluxe Villa", detail: "4 غرف نوم", area: "175 م²" },
      { name: "Grand Villa", detail: "4 غرف نوم", area: "190 م²" },
      { name: "Courtyard Villa", detail: "4 غرف نوم + فناء بحمام سباحة", area: "210 م²" },
      { name: "Signature Villa", detail: "5 غرف نوم + حمام سباحة", area: "250 م²" },
    ],
    images: [
      { src: "/images/sy-deluxe.webp", alt: "Deluxe Villa في سيال بحمام سباحة" },
      { src: "/images/sy-pool.webp", alt: "حمام السباحة الرئيسي في سيال" },
      { src: "/images/sy-grand.webp", alt: "Grand Villa في سيال" },
    ],
  },
];

// ------------------------------------------------------------
//  ليدج فالي — جدول الوحدات حسب المبنى (من كتيّب المبيعات)
// ------------------------------------------------------------

export type LvRow = { floor: string; type: string; bua: number; terrace: number; deck?: number };
export type LvBuilding = {
  id: string;
  name: string;
  collection: string;
  floors: string;
  image: string;
  rows: LvRow[];
};

export const LV_BUILDINGS: LvBuilding[] = [
  {
    id: "fc-a",
    name: "Floating Chalet A",
    collection: "Island Collection",
    floors: "أرضي + أول",
    image: "/images/lv-chalet-a.webp",
    rows: [
      { floor: "أرضي", type: "3 غرف — لاجون", bua: 114, terrace: 32, deck: 20 },
      { floor: "أرضي", type: "3 غرف لوفت — لاجون", bua: 132, terrace: 21, deck: 16 },
      { floor: "أرضي", type: "3 غرف لوفت — لاجون", bua: 131, terrace: 6, deck: 17 },
      { floor: "أول", type: "غرفتان — شاليه بحديقة", bua: 103, terrace: 22, deck: 14 },
    ],
  },
  {
    id: "fc-b",
    name: "Floating Chalet B",
    collection: "Island Collection",
    floors: "أرضي + 2",
    image: "/images/lv-chalet-b.webp",
    rows: [
      { floor: "أرضي", type: "3 غرف — لاجون", bua: 114, terrace: 32, deck: 20 },
      { floor: "أرضي", type: "3 غرف لوفت — لاجون", bua: 136, terrace: 18, deck: 16 },
      { floor: "أرضي", type: "3 غرف لوفت — لاجون", bua: 132, terrace: 6, deck: 16 },
      { floor: "أول", type: "غرفتان — شاليه بحديقة", bua: 103, terrace: 9, deck: 15 },
      { floor: "ثاني", type: "بنتهاوس سويت غرفة", bua: 61, terrace: 8, deck: 0 },
      { floor: "ثاني", type: "بنتهاوس 3 غرف", bua: 117, terrace: 46, deck: 13 },
    ],
  },
  {
    id: "fc-c",
    name: "Floating Chalet C",
    collection: "Valley Collection",
    floors: "أرضي سفلي + 2",
    image: "/images/lv-chalet-c.webp",
    rows: [
      { floor: "أرضي سفلي", type: "3 غرف — لاجون", bua: 126, terrace: 43, deck: 8 },
      { floor: "أرضي سفلي", type: "4 غرف — لاجون", bua: 133, terrace: 41, deck: 12 },
      { floor: "أرضي + أول", type: "دوبلكس 3 غرف — لاجون", bua: 130, terrace: 14, deck: 12 },
      { floor: "أرضي + أول", type: "دوبلكس 3 غرف — لاجون", bua: 128, terrace: 35, deck: 9 },
    ],
  },
  {
    id: "type-a",
    name: "Type A",
    collection: "Valley Collection",
    floors: "أرضي + 2",
    image: "/images/lv-type-a.webp",
    rows: [
      { floor: "أرضي", type: "دوبلكس 3 غرف بحديقة", bua: 130, terrace: 25 },
      { floor: "أرضي", type: "غرفتان بحديقة", bua: 89, terrace: 0 },
      { floor: "أرضي", type: "غرفتان بحديقة", bua: 102, terrace: 0 },
      { floor: "أول", type: "غرفتان", bua: 83, terrace: 16 },
      { floor: "أول", type: "غرفتان — شاليه بحديقة", bua: 90, terrace: 25 },
      { floor: "ثاني", type: "بنتهاوس غرفتان", bua: 99, terrace: 22 },
      { floor: "ثاني", type: "بنتهاوس غرفتان", bua: 88, terrace: 29 },
    ],
  },
  {
    id: "type-b",
    name: "Type B",
    collection: "Valley Collection",
    floors: "أرضي + 2",
    image: "/images/lv-type-b.webp",
    rows: [
      { floor: "أرضي", type: "غرفة بحديقة", bua: 75, terrace: 0 },
      { floor: "أرضي", type: "غرفتان بحديقة", bua: 92, terrace: 0 },
      { floor: "أرضي", type: "غرفتان بحديقة", bua: 101, terrace: 0 },
      { floor: "أول", type: "غرفة", bua: 61, terrace: 9 },
      { floor: "أول", type: "غرفتان — شاليه بحديقة", bua: 82, terrace: 19 },
      { floor: "أول", type: "غرفتان — شاليه بحديقة", bua: 89, terrace: 17 },
      { floor: "ثاني", type: "بنتهاوس غرفة", bua: 77, terrace: 19 },
      { floor: "ثاني", type: "بنتهاوس 3 غرف", bua: 122, terrace: 31 },
    ],
  },
];

export const LV_PHASE1_MIX = [
  { type: "غرفة نوم", share: 15, avg: 67, count: 30 },
  { type: "غرفتان", share: 46, avg: 93, count: 89 },
  { type: "3 غرف", share: 17, avg: 118, count: 32 },
  { type: "دوبلكس 3 غرف", share: 21, avg: 132, count: 40 },
  { type: "4 غرف", share: 2, avg: 133, count: 3 },
];

// ------------------------------------------------------------
//  الخدمات
// ------------------------------------------------------------

export const AMENITIES = [
  {
    title: "حياة ساحلية",
    text: "سباحة وكايت سيرف وكاياك وسنوركلينج، مع لاونجات شاطئية على البحر الأحمر.",
  },
  {
    title: "ذا هاوس The Haus",
    text: "مسرح متعدد الاستخدامات يتسع لأكثر من 3,400 ضيف للحفلات والأفراح والمؤتمرات، بجانب فنادق بوتيك وفنادق كاملة.",
  },
  {
    title: "نادٍ رياضي",
    text: "ملاعب كرة قدم وبادل وتنس، وجيم مجهز، ومساحات يوجا موزعة في المشروع.",
  },
  {
    title: "خدمات طبية",
    text: "عيادات داخل المشروع للرعاية الأساسية والوصول السريع للدعم الصحي.",
  },
  {
    title: "تعليم",
    text: "حضانة ومرحلة ما قبل المدرسة داخل المجتمع للعائلات الصغيرة.",
  },
  {
    title: "تسوق ومطاعم",
    text: "كافيهات ومطاعم ومنطقة تجارية بممرات مظللة وبنوك وكل الاحتياجات اليومية.",
  },
];

export const LOCATION = [
  { place: "مطار الغردقة الدولي", time: "20 دقيقة" },
  { place: "وسط الغردقة", time: "30 دقيقة" },
  { place: "الجونة", time: "45 دقيقة" },
];

export const FAQ = [
  {
    q: "أين يقع مشروع مكادي هايتس؟",
    a: "في قلب خليج مكادي جنوب الغردقة على ساحل البحر الأحمر، على ارتفاع 78 متراً فوق سطح البحر، وعلى بعد نحو 20 دقيقة من مطار الغردقة الدولي.",
  },
  {
    q: "ما المراحل المتاحة للبيع حالياً؟",
    a: "ثلاث مراحل: ليدج فالي (شاليهات عائمة وشقق)، عدن باركس (شاليهات وشقق بحدائق)، وسيال (فيلات مستقلة وتوين وتاون هاوس).",
  },
  {
    q: "كم يبدأ سعر الشاليه والفيلا؟",
    a: `الشاليهات تبدأ من ${SITE.chaletsFrom} مليون جنيه لوحدة غرفة نوم، والفيلات تبدأ من ${SITE.villasFrom} مليون جنيه للتاون هاوس. الأسعار استرشادية وتتغير حسب الوحدة والإطلالة والدور وقت الحجز.`,
  },
  {
    q: "ما المقصود بالشاليه العائم في ليدج فالي؟",
    a: "وحدات الدور الأرضي مصممة على حافة لاجونات قابلة للسباحة، ولكل وحدة ديك خشبي خاص يمتد فوق المياه، فتنزل من الوحدة إلى المياه مباشرة.",
  },
  {
    q: "من المطوّر؟",
    a: "أوراسكوم للتنمية، مطوّر الجونة وطابا هايتس ومكادي هايتس، بمخطط عام من EDSA، وتصميم ليدج فالي من Die Stadt و Innovation Design Studio.",
  },
  {
    q: "هل يمكن حجز معاينة أو استلام الكتيّب الكامل؟",
    a: "نعم، اترك بياناتك أو راسلنا على واتساب وسنرسل لك الكتيّب وقائمة الوحدات المتاحة وننسق موعد المعاينة.",
  },
];
