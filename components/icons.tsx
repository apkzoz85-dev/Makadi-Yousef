type P = { className?: string };

export const PhoneIcon = ({ className = "size-5" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" strokeLinejoin="round" />
  </svg>
);

export const WhatsAppIcon = ({ className = "size-5" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2a9.93 9.93 0 0 0-8.5 15.06L2 22l5.06-1.5A9.94 9.94 0 1 0 12.04 2Zm0 18.1a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3 .89.9-2.92-.2-.3a8.16 8.16 0 1 1 6.75 3.65Zm4.47-6.1c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.77.96-.14.16-.28.18-.53.06a6.68 6.68 0 0 1-1.96-1.21 7.35 7.35 0 0 1-1.36-1.69c-.14-.25 0-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04 4.76 4.76 0 0 0 1 2.53 10.9 10.9 0 0 0 4.17 3.69c.58.25 1.04.4 1.4.51.58.19 1.12.16 1.54.1.47-.07 1.45-.6 1.66-1.17.2-.57.2-1.06.14-1.17-.06-.1-.22-.16-.47-.28Z" />
  </svg>
);

export const CloseIcon = ({ className = "size-5" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
  </svg>
);

export const MenuIcon = ({ className = "size-6" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
  </svg>
);

export const PinIcon = ({ className = "size-5" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const CheckIcon = ({ className = "size-4" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
