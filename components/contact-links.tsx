"use client";

import { SITE, waLink } from "@/lib/site";
import { trackConversion } from "@/lib/track";
import { PhoneIcon, WhatsAppIcon } from "./icons";

type Props = { className?: string; label: string; text?: string; iconClass?: string };

export function CallLink({ className, label, iconClass }: Props) {
  return (
    <a href={`tel:${SITE.phoneIntl}`} className={className} onClick={() => trackConversion("call")}>
      <PhoneIcon className={iconClass} />
      <span>{label}</span>
    </a>
  );
}

export function WaLink({ className, label, text, iconClass }: Props) {
  return (
    <a href={waLink(text)} target="_blank" rel="noopener noreferrer" className={className} onClick={() => trackConversion("whatsapp")}>
      <WhatsAppIcon className={iconClass} />
      <span>{label}</span>
    </a>
  );
}
