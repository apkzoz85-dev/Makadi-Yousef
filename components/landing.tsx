import { SITE } from "@/lib/site";
import { CONTENT, type Lang } from "@/lib/content";
import Header from "./header";
import Hero from "./hero";
import Facts from "./facts";
import PhaseCards from "./phase-cards";
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
import VideoSection from "./video-section";

export default function Landing({ lang }: { lang: Lang }) {
  const C = CONTENT[lang];
  const t = C.mobileForm;
  const altHref = C.switchPrefix || "/";
  return (
    <>
      <Header lang={lang} altHref={altHref} />
      <main>
        <Hero lang={lang} />
        <section aria-label={t.title} className="bg-ice-soft px-5 py-10 md:hidden">
          <h2 className="text-2xl text-navy-900">{t.title}</h2>
          <p className="mb-5 mt-1.5 text-sm leading-7 text-mute">{t.sub}</p>
          <LeadForm lang={lang} source="hero-mobile" />
        </section>
        <Facts lang={lang} />
        <PhaseCards lang={lang} />
        <VideoSection lang={lang} src={SITE.videos.home} poster="/images/hero.webp" />
        <Masterplan lang={lang} />
        <Amenities lang={lang} />
        <Location lang={lang} />
        <Developer lang={lang} />
        <Gallery lang={lang} />
        <Faq lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} altHref={altHref} />
      <FloatingActions lang={lang} />
      <LeadPopup lang={lang} />
      <CookieConsent lang={lang} />
      <PrivacyModal lang={lang} />
    </>
  );
}
