import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import UseCasesSection from "@/components/UseCasesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <FeaturesSection />
      <BenefitsSection />
      <UseCasesSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
