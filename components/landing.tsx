import { CONTENT, type Lang } from "@/lib/content";
import Header from "./header";
import Hero from "./hero";
import Facts from "./facts";
import Phases from "./phases";
import LedgeValleyUnits from "./ledge-valley-units";
import Masterplan from "./masterplan";
import Amenities from "./amenities";
import Location from "./location";
import Developer from "./developer";
import Gallery from "./gallery";
import Faq from "./faq";
import Contact from "./contact";
import Footer from "./footer";
import FloatingActions from "./floating-actions";
import LeadPopup from "./lead-popup";
import CookieConsent from "./cookie-consent";
import PrivacyModal from "./privacy-modal";
import LeadForm from "./lead-form";

export default function Landing({ lang }: { lang: Lang }) {
  const t = CONTENT[lang].mobileForm;
  return (
    <>
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <section aria-label={t.title} className="bg-white px-5 py-10 md:hidden">
          <h2 className="text-2xl text-navy-900">{t.title}</h2>
          <p className="mb-5 mt-1.5 text-sm leading-7 text-mute">{t.sub}</p>
          <LeadForm lang={lang} source="hero-mobile" />
        </section>
        <Facts lang={lang} />
        <Phases lang={lang} />
        <LedgeValleyUnits lang={lang} />
        <Masterplan lang={lang} />
        <Amenities lang={lang} />
        <Location lang={lang} />
        <Developer lang={lang} />
        <Gallery lang={lang} />
        <Faq lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingActions lang={lang} />
      <LeadPopup lang={lang} />
      <CookieConsent lang={lang} />
      <PrivacyModal lang={lang} />
    </>
  );
}
