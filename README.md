# Makadi Heights — Landing Pages (AR / EN)

Next.js 16.4.0 · React 19.3 · Tailwind 4 · TypeScript · Web3Forms — كله Static

## الروابط (للإعلانات)
| الصفحة | عربي | English |
|---|---|---|
| الرئيسية | `/` | `/en` |
| Ledge Valley | `/ledge-valley` | `/en/ledge-valley` |
| Aden Parks | `/aden-parks` | `/en/aden-parks` |
| Siyal | `/siyal` | `/en/siyal` |
| Thank you | `/thank-you` | `/en/thank-you` |

- كل صفحة مرحلة: الفورم والبوب أب مختار عليها المرحلة تلقائياً، ورسائل الواتساب باسم المرحلة.
- الليد بيوصل فيه `source` (مثلاً `ledge-valley-hero`) و `page` (اللينك كامل بالـ UTMs) و `language`.

## قبل الرفع — `lib/site.ts`
- `web3formsKey`
- `adsId` و `conversions` (form / whatsapp / call)
- `url` (الدومين)
- `phone` / `whatsapp`
- `videos`: لينك يوتيوب أو `/videos/xxx.mp4` لكل صفحة (فاضي = السكشن مش بيظهر)
- `heroLoop`: فيديو MP4 خلفية للهيرو في الرئيسية (اختياري)

ملفات MP4 تتحط في `public/videos/`.

## النصوص — `lib/content.ts`
العربي والإنجليزي، ومنها خطة السداد والأسعار.

## اللوجوهات — `public/brand/`
- `lockup-white.png` / `lockup-navy.png` — Makadi Heights × Orascom Development
- `mh-white.png` / `mh-navy.png` — Makadi Heights لوحده
- `od-white.png` / `od-navy.png` — Orascom Development لوحده

## تشغيل
npm install
npm run dev
npm run build
