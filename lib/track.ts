import { SITE } from "./site";

type Gtag = (...args: unknown[]) => void;

export function trackConversion(kind: keyof typeof SITE.conversions) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (!gtag) return;
  gtag("event", "conversion", { send_to: SITE.conversions[kind] });
}
