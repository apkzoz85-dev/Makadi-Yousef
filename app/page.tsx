import Header from "@/components/header";
import Hero from "@/components/hero";
import Facts from "@/components/facts";
import Phases from "@/components/phases";
import LedgeValleyUnits from "@/components/ledge-valley-units";
import Masterplan from "@/components/masterplan";
import Amenities from "@/components/amenities";
import Location from "@/components/location";
import Developer from "@/components/developer";
import Gallery from "@/components/gallery";
import Faq from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import LeadPopup from "@/components/lead-popup";
import CookieConsent from "@/components/cookie-consent";
import PrivacyModal from "@/components/privacy-modal";
import LeadForm from "@/components/lead-form";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* فورم الموبايل تحت الهيرو مباشرة */}
        <section aria-label="طلب الأسعار" className="bg-white px-5 py-10 md:hidden">
          <h2 className="font-display text-xl font-semibold text-lagoon-900">احصل على قائمة الأسعار</h2>
          <p className="mb-5 mt-1.5 text-sm leading-7 text-mute">الكتيّب والوحدات المتاحة في المراحل الثلاث على واتساب.</p>
          <LeadForm source="hero-mobile" />
        </section>
        <Facts />
        <Phases />
        <LedgeValleyUnits />
        <Masterplan />
        <Amenities />
        <Location />
        <Developer />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <LeadPopup />
      <CookieConsent />
      <PrivacyModal />
    </>
  );
}
