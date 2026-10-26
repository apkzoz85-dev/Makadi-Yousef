// ============================================================
//  إعدادات الصفحة — عدّل هنا فقط (النصوص في lib/content.ts)
// ============================================================

export const SITE = {
  url: "https://www.makadiheights.info", // ← دومين الصفحة
  brand: "The Real Deal", // ← اسم المسوّق الظاهر في الإفصاح
  phone: "01000411014",
  phoneIntl: "+201000411014",
  whatsapp: "201287470001",
  email: "leads@makadiheights.info",

  web3formsKey: "f78e6862-ce6c-439c-8908-056194b95b68",

  adsId: "AW-11305040793",
  conversions: {
    form: "AW-11305040793/p2HDCOyS1pwdEJn31I4q",
    whatsapp: "AW-11305040793/i0W5CN3s15wdEJn31I4q'",
    call: "AW-11305040793/CT3MCMn_zJwdEJn31I4q",
  },

  chaletsFrom: "11.5",
  villasFrom: "23",
  adenFrom: "15", // Aden Parks — شاليه غرفتين
  installmentYears: "8",

  // ----------------------------------------------------------
  //  الفيديوهات — حط لينك يوتيوب أو مسار ملف MP4 داخل public/videos
  //  مثال يوتيوب: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  //  مثال MP4:    "/videos/ledge-valley.mp4"
  //  أي قيمة فاضية "" = السكشن مش هيظهر
  // ----------------------------------------------------------
  videos: {
    home: "",
    "ledge-valley": "",
    "aden-parks": "",
    siyal: "",
  },
  // فيديو خلفية للهيرو في الصفحة الرئيسية (MP4 فقط، صامت ومتكرر). فاضي = صورة
  heroLoop: "",
};

export const waLink = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
