import HeroSection from "@/components/sections/HeroSection";
import ServiceOverview from "@/components/sections/ServiceOverview";
import EstimateChecklist from "@/components/sections/EstimateChecklist";
import BeforeAfter from "@/components/sections/BeforeAfter";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ValidationGuide from "@/components/sections/ValidationGuide";
import CeoQuote from "@/components/sections/CeoQuote";
import LandingFAQ from "@/components/sections/LandingFAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EstimateChecklist />
      <ServiceOverview />
      <BeforeAfter />
      <ProcessTimeline />
      <ValidationGuide />
      <CeoQuote />
      <LandingFAQ />
      <FinalCTA />
    </>
  );
}
