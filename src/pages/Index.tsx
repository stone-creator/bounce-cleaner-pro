// canonical: ../../docs/service-offering.md (저장소 기준 docs/service-offering.md)
// 가격·패키지·USP·FAQ 변경은 docs를 먼저 수정 후 본 페이지 및 components/*Section.tsx에 반영
import HeroSection from "@/components/HeroSection";
import BounceSection from "@/components/BounceSection";
import ProblemSection from "@/components/ProblemSection";
import ServiceSection from "@/components/ServiceSection";
import WarmupSection from "@/components/WarmupSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BounceSection />
      <ProblemSection />
      <ServiceSection />
      <WarmupSection />
      <PricingSection />
      <FAQSection />
      <DisclaimerSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
