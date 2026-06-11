import HeroSection from "@/components/sections/HeroSection";
import ServiceOverview from "@/components/sections/ServiceOverview";
import AirflowSection from "@/components/sections/AirflowSection";
import EstimateChecklist from "@/components/sections/EstimateChecklist";
import BeforeAfter from "@/components/sections/BeforeAfter";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ValidationGuide from "@/components/sections/ValidationGuide";
import CeoQuote from "@/components/sections/CeoQuote";
import LandingFAQ, { landingFaqs } from "@/components/sections/LandingFAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import PageJsonLd from "@/components/PageJsonLd";
import { faqSchema } from "@/lib/structuredData";

const jsonLdSchemas = [faqSchema("", landingFaqs)];

export default function Home() {
  return (
    <>
      <PageJsonLd schemas={jsonLdSchemas} />
      <HeroSection />
      <EstimateChecklist />
      <ServiceOverview />
      <AirflowSection />
      <BeforeAfter />
      <ProcessTimeline />
      <ValidationGuide />
      <CeoQuote />
      <LandingFAQ />
      <FinalCTA />
    </>
  );
}
