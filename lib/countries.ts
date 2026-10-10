// قائمة أكواد الدول — مصر والخليج أولاً، ثم باقي الأسواق
export type Country = { iso: string; dial: string; flag: string; ar: string; en: string };

export const COUNTRIES: Country[] = [
  { iso: "EG", dial: "20", flag: "🇪🇬", ar: "مصر", en: "Egypt" },
  { iso: "SA", dial: "966", flag: "🇸🇦", ar: "السعودية", en: "Saudi Arabia" },
  { iso: "AE", dial: "971", flag: "🇦🇪", ar: "الإمارات", en: "UAE" },
  { iso: "KW", dial: "965", flag: "🇰🇼", ar: "الكويت", en: "Kuwait" },
  { iso: "QA", dial: "974", flag: "🇶🇦", ar: "قطر", en: "Qatar" },
  { iso: "BH", dial: "973", flag: "🇧🇭", ar: "البحرين", en: "Bahrain" },
  { iso: "OM", dial: "968", flag: "🇴🇲", ar: "عُمان", en: "Oman" },
  { iso: "JO", dial: "962", flag: "🇯🇴", ar: "الأردن", en: "Jordan" },
  { iso: "LB", dial: "961", flag: "🇱🇧", ar: "لبنان", en: "Lebanon" },
  { iso: "IQ", dial: "964", flag: "🇮🇶", ar: "العراق", en: "Iraq" },
  { iso: "LY", dial: "218", flag: "🇱🇾", ar: "ليبيا", en: "Libya" },
  { iso: "MA", dial: "212", flag: "🇲🇦", ar: "المغرب", en: "Morocco" },
  { iso: "DZ", dial: "213", flag: "🇩🇿", ar: "الجزائر", en: "Algeria" },
  { iso: "TN", dial: "216", flag: "🇹🇳", ar: "تونس", en: "Tunisia" },
  { iso: "SD", dial: "249", flag: "🇸🇩", ar: "السودان", en: "Sudan" },
  { iso: "GB", dial: "44", flag: "🇬🇧", ar: "المملكة المتحدة", en: "United Kingdom" },
  { iso: "DE", dial: "49", flag: "🇩🇪", ar: "ألمانيا", en: "Germany" },
  { iso: "FR", dial: "33", flag: "🇫🇷", ar: "فرنسا", en: "France" },
  { iso: "IT", dial: "39", flag: "🇮🇹", ar: "إيطاليا", en: "Italy" },
  { iso: "NL", dial: "31", flag: "🇳🇱", ar: "هولندا", en: "Netherlands" },
  { iso: "BE", dial: "32", flag: "🇧🇪", ar: "بلجيكا", en: "Belgium" },
  { iso: "CH", dial: "41", flag: "🇨🇭", ar: "سويسرا", en: "Switzerland" },
  { iso: "AT", dial: "43", flag: "🇦🇹", ar: "النمسا", en: "Austria" },
  { iso: "ES", dial: "34", flag: "🇪🇸", ar: "إسبانيا", en: "Spain" },
  { iso: "SE", dial: "46", flag: "🇸🇪", ar: "السويد", en: "Sweden" },
  { iso: "NO", dial: "47", flag: "🇳🇴", ar: "النرويج", en: "Norway" },
  { iso: "DK", dial: "45", flag: "🇩🇰", ar: "الدنمارك", en: "Denmark" },
  { iso: "IE", dial: "353", flag: "🇮🇪", ar: "أيرلندا", en: "Ireland" },
  { iso: "PL", dial: "48", flag: "🇵🇱", ar: "بولندا", en: "Poland" },
  { iso: "CZ", dial: "420", flag: "🇨🇿", ar: "التشيك", en: "Czechia" },
  { iso: "RU", dial: "7", flag: "🇷🇺", ar: "روسيا", en: "Russia" },
  { iso: "UA", dial: "380", flag: "🇺🇦", ar: "أوكرانيا", en: "Ukraine" },
  { iso: "TR", dial: "90", flag: "🇹🇷", ar: "تركيا", en: "Türkiye" },
  { iso: "GR", dial: "30", flag: "🇬🇷", ar: "اليونان", en: "Greece" },
  { iso: "CY", dial: "357", flag: "🇨🇾", ar: "قبرص", en: "Cyprus" },
  { iso: "US", dial: "1", flag: "🇺🇸", ar: "الولايات المتحدة", en: "United States" },
  { iso: "CA", dial: "1", flag: "🇨🇦", ar: "كندا", en: "Canada" },
  { iso: "AU", dial: "61", flag: "🇦🇺", ar: "أستراليا", en: "Australia" },
  { iso: "NZ", dial: "64", flag: "🇳🇿", ar: "نيوزيلندا", en: "New Zealand" },
  { iso: "ZA", dial: "27", flag: "🇿🇦", ar: "جنوب أفريقيا", en: "South Africa" },
  { iso: "NG", dial: "234", flag: "🇳🇬", ar: "نيجيريا", en: "Nigeria" },
  { iso: "KE", dial: "254", flag: "🇰🇪", ar: "كينيا", en: "Kenya" },
  { iso: "IN", dial: "91", flag: "🇮🇳", ar: "الهند", en: "India" },
  { iso: "PK", dial: "92", flag: "🇵🇰", ar: "باكستان", en: "Pakistan" },
  { iso: "CN", dial: "86", flag: "🇨🇳", ar: "الصين", en: "China" },
  { iso: "JP", dial: "81", flag: "🇯🇵", ar: "اليابان", en: "Japan" },
  { iso: "KR", dial: "82", flag: "🇰🇷", ar: "كوريا الجنوبية", en: "South Korea" },
  { iso: "MY", dial: "60", flag: "🇲🇾", ar: "ماليزيا", en: "Malaysia" },
  { iso: "SG", dial: "65", flag: "🇸🇬", ar: "سنغافورة", en: "Singapore" },
];

// أقرب دولة حسب المنطقة الزمنية للزائر — اختيار مبدئي فقط والزائر يقدر يغيره
const TZ: Record<string, string> = {
  "Africa/Cairo": "EG", "Asia/Riyadh": "SA", "Asia/Dubai": "AE", "Asia/Kuwait": "KW", "Asia/Qatar": "QA",
  "Asia/Bahrain": "BH", "Asia/Muscat": "OM", "Asia/Amman": "JO", "Asia/Beirut": "LB", "Asia/Baghdad": "IQ",
  "Africa/Tripoli": "LY", "Africa/Casablanca": "MA", "Africa/Algiers": "DZ", "Africa/Tunis": "TN", "Africa/Khartoum": "SD",
  "Europe/London": "GB", "Europe/Berlin": "DE", "Europe/Paris": "FR", "Europe/Rome": "IT", "Europe/Amsterdam": "NL",
  "Europe/Brussels": "BE", "Europe/Zurich": "CH", "Europe/Vienna": "AT", "Europe/Madrid": "ES", "Europe/Stockholm": "SE",
  "Europe/Oslo": "NO", "Europe/Copenhagen": "DK", "Europe/Dublin": "IE", "Europe/Warsaw": "PL", "Europe/Prague": "CZ",
  "Europe/Moscow": "RU", "Europe/Kyiv": "UA", "Europe/Kiev": "UA", "Europe/Istanbul": "TR", "Europe/Athens": "GR",
  "Asia/Nicosia": "CY", "Asia/Kolkata": "IN", "Asia/Karachi": "PK", "Asia/Shanghai": "CN", "Asia/Tokyo": "JP",
  "Asia/Seoul": "KR", "Asia/Kuala_Lumpur": "MY", "Asia/Singapore": "SG", "Africa/Johannesburg": "ZA",
  "Africa/Lagos": "NG", "Africa/Nairobi": "KE", "Pacific/Auckland": "NZ",
};

export function guessCountry(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (TZ[tz]) return TZ[tz];
    if (tz.startsWith("America/Toronto") || tz.startsWith("America/Vancouver") || tz.startsWith("America/Montreal")) return "CA";
    if (tz.startsWith("America/")) return "US";
    if (tz.startsWith("Australia/")) return "AU";
  } catch {}
  return "EG";
}

// يرجّع الرقم بصيغة دولية +XXXXXXXX أو null لو غير صالح
export function toInternational(dial: string, raw: string): string | null {
  let n = raw.replace(/[^\d+]/g, "");
  if (n.startsWith("00")) n = "+" + n.slice(2);
  if (n.startsWith("+")) {
    const d = n.slice(1);
    return /^\d{8,15}$/.test(d) ? "+" + d : null;
  }
  // لو كتب الكود من غير + (مثل 9665xxxxxxxx)
  if (n.startsWith(dial) && n.length - dial.length >= 8) n = n.slice(dial.length);
  n = n.replace(/^0+/, "");
  if (dial === "20" && !/^1\d{9}$/.test(n)) return null; // موبايل مصري: 01xxxxxxxxx
  if (n.length < 6 || n.length > 13) return null;
  const full = dial + n;
  return full.length >= 8 && full.length <= 15 ? "+" + full : null;
}
