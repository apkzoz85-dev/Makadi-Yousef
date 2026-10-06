import type { Metadata, Viewport } from "next";
import "../globals.css";
import RootHtml from "@/components/root-html";
import { SITE } from "@/lib/site";
import { CONTENT } from "@/lib/content";

const t = CONTENT.en;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: t.meta.title,
  description: t.meta.description,
  alternates: { canonical: t.home, languages: { ar: "/", en: "/en" } },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: t.meta.title,
    description: t.meta.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#283868" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="en">{children}</RootHtml>;
}
