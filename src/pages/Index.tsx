import HeroSection from "@/components/HeroSection";
import BounceSection from "@/components/BounceSection";
import ProblemSection from "@/components/ProblemSection";
import ServiceSection from "@/components/ServiceSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BounceSection />
      <ProblemSection />
      <ServiceSection />
      <PricingSection />
      <FAQSection />
      <DisclaimerSection />
      <CTASection />
    </main>
  );
};

export default Index;
