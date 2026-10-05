import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "مكادي هايتس الغردقة | شاليهات وفيلات أوراسكوم — ليدج فالي، عدن باركس، سيال",
  description: `مكادي هايتس من أوراسكوم للتنمية في الغردقة. شاليهات عائمة على لاجون تبدأ من ${SITE.chaletsFrom} مليون، وفيلات تبدأ من ${SITE.villasFrom} مليون. ثلاث مراحل متاحة الآن: ليدج فالي، عدن باركس، سيال.`,
  keywords: [
    "مكادي هايتس",
    "Makadi Heights",
    "أوراسكوم",
    "ليدج فالي",
    "Ledge Valley",
    "عدن باركس",
    "سيال",
    "شاليهات الغردقة",
    "فيلات البحر الأحمر",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    title: "مكادي هايتس — شاليهات وفيلات على البحر الأحمر",
    description: `شاليهات عائمة تبدأ من ${SITE.chaletsFrom} مليون وفيلات من ${SITE.villasFrom} مليون — أوراسكوم للتنمية.`,
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a3d3c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap"
        />
        <link rel="preload" as="image" href="/images/hero.webp" />
      </head>
      <body>
        {children}

        {/* Google Ads — gtag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE.adsId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${SITE.adsId}');`}
        </Script>
      </body>
    </html>
  );
}
