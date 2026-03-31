import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import UseCasesSection from "@/components/UseCasesSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <UseCasesSection />
      <PricingSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
