// ============================================================
//  إعدادات الصفحة — عدّل هنا فقط (النصوص في lib/content.ts)
// ============================================================

export const SITE = {
  url: "https://www.example.com", // ← دومين الصفحة
  brand: "Grandeur Spaces", // ← اسم المسوّق الظاهر في الإفصاح
  phone: "01001050018",
  phoneIntl: "+201001050018",
  whatsapp: "201001050018",
  whatsappText: "مرحباً، أريد تفاصيل وأسعار مكادي هايتس - أوراسكوم",
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
};

export const waLink = (text = SITE.whatsappText) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
