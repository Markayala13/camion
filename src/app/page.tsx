import { LanguageProvider } from "@/lib/i18n";
import { Preloader } from "@/components/site/preloader";
import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { ValueSection } from "@/components/site/value-section";
import { ProcessSection } from "@/components/site/process-section";
import { FeaturesChess } from "@/components/site/features-chess";
import { PhotoGallery } from "@/components/site/photo-gallery";
import { FeaturesGrid } from "@/components/site/features-grid";
import { ProofSection } from "@/components/site/proof-section";
import { HonestySection } from "@/components/site/honesty-section";
import { FaqSection } from "@/components/site/faq-section";
import { Testimonials } from "@/components/site/testimonials";
import { CtaFooter } from "@/components/site/cta-footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: "MR. CAT Truck Repairs",
  description:
    "Taller de carrocería, pintura, soldadura y fabricación para camiones comerciales medianos en Los Ángeles.",
  telephone: "+1-562-361-3469",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9511 Laurel St.",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90002",
    addressCountry: "US",
  },
  areaServed: "Los Angeles County, CA",
  availableLanguage: ["Spanish", "English"],
  knowsLanguage: ["es", "en"],
  makesOffer: [
    "Cab truck paint & mods",
    "Box truck repair",
    "Roll-up door repair",
    "Welding & fabrication",
    "Bed fabrication and mounting",
  ],
};

export default function Home() {
  return (
    <LanguageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preloader />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ValueSection />
        <ProcessSection />
        <FeaturesChess />
        <PhotoGallery />
        <FeaturesGrid />
        <ProofSection />
        <HonestySection />
        <FaqSection />
        <Testimonials />
        <CtaFooter />
      </main>
    </LanguageProvider>
  );
}
