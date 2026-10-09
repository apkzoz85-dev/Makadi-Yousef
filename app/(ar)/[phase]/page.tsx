import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PhasePage from "@/components/phase-page";
import { PHASE_IDS, getPhase, type PhaseId } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return PHASE_IDS.map((phase) => ({ phase }));
}

type Params = { params: Promise<{ phase: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { phase } = await params;
  if (!PHASE_IDS.includes(phase as PhaseId)) return {};
  const p = getPhase("ar", phase as PhaseId);
  return {
    title: p.page.metaTitle,
    description: p.page.metaDesc,
    alternates: { canonical: "/" + phase, languages: { ar: "/" + phase, en: "/en/" + phase } },
    openGraph: { title: p.page.metaTitle, description: p.page.metaDesc, images: [{ url: p.page.hero.src }] },
  };
}

export default async function Page({ params }: Params) {
  const { phase } = await params;
  if (!PHASE_IDS.includes(phase as PhaseId)) notFound();
  return <PhasePage lang="ar" id={phase as PhaseId} />;
}
