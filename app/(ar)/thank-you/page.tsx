import type { Metadata } from "next";
import ThankYou from "@/components/thank-you";
import { CONTENT } from "@/lib/content";

export const metadata: Metadata = { title: CONTENT.ar.thankYou.metaTitle, robots: { index: false, follow: false } };

export default function Page() {
  return <ThankYou lang="ar" />;
}
