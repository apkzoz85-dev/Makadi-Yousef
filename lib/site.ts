// ============================================================
//  إعدادات الصفحة — عدّل هنا فقط (النصوص في lib/content.ts)
// ============================================================

export const SITE = {
  url: "https://www.example.com", // ← دومين الصفحة
  brand: "Grandeur Spaces", // ← اسم المسوّق الظاهر في الإفصاح
  phone: "01001050018",
  phoneIntl: "+201001050018",
  whatsapp: "201001050018",
  email: "leads@grandeur-spaces.com",

  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",

  adsId: "AW-XXXXXXXXXX",
  conversions: {
    form: "AW-XXXXXXXXXX/FORM_LABEL",
    whatsapp: "AW-XXXXXXXXXX/WA_LABEL",
    call: "AW-XXXXXXXXXX/CALL_LABEL",
  },

  chaletsFrom: "11.5",
  villasFrom: "23",

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
