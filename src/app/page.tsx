import HeroSection from "@/components/sections/HeroSection";
import ServiceOverview from "@/components/sections/ServiceOverview";
import BeforeAfter from "@/components/sections/BeforeAfter";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import CeoQuote from "@/components/sections/CeoQuote";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceOverview />
      <BeforeAfter />
      <ProcessTimeline />
      <CeoQuote />
      <FinalCTA />
    </>
  );
}
