import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
// import WhatIsSection from "@/components/WhatIsSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import UseCasesSection from "@/components/UseCasesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

interface IndexProps {
  section?: string;
}

const Index = ({ section }: IndexProps) => {
  useEffect(() => {
    if (section && section !== "home") {
      // Map section names to their corresponding IDs
      const sectionMap: { [key: string]: string } = {
        features: "features",
        benefits: "benefits",
        "use-cases": "use-cases",
        contact: "contact",
        faq: "faq",
      };

      const elementId = sectionMap[section];
      if (elementId) {
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [section]);

  return (
    <div id="home" className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      {/* <WhatIsSection /> */}
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
