import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PHASE_IDS } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...PHASE_IDS.map((p) => `/${p}`)];
  return paths.flatMap((p) => [
    { url: `${SITE.url}${p || "/"}`, alternates: { languages: { ar: `${SITE.url}${p || "/"}`, en: `${SITE.url}/en${p}` } } },
    { url: `${SITE.url}/en${p}`, alternates: { languages: { ar: `${SITE.url}${p || "/"}`, en: `${SITE.url}/en${p}` } } },
  ]);
}
