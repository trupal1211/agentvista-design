import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Headphones, UserCheck, TrendingUp, Globe2, Brain, Settings2, Building2, Megaphone, ChevronLeft, ChevronRight,
  Zap, MessageCircle, BarChart3, CheckCircle2, Search, Clipboard, Filter,
} from "lucide-react";

import SalesRevenueVisual from "./usecase-visuals/SalesRevenueVisual";
import MarketingCampaignVisual from "./usecase-visuals/MarketingCampaignVisual";
import CustomerExperienceVisual from "./usecase-visuals/CustomerExperienceVisual";
import EmployeeExperienceVisual from "./usecase-visuals/EmployeeExperienceVisual";
import PartnerVendorVisual from "./usecase-visuals/PartnerVendorVisual";
import KnowledgeInsightsVisual from "./usecase-visuals/KnowledgeInsightsVisual";
import AdminOpsVisual from "./usecase-visuals/AdminOpsVisual";
import CrossIndustryVisual from "./usecase-visuals/CrossIndustryVisual";

const useCases = [
  {
    id: "sales", icon: TrendingUp, label: "Sales & Revenue", visual: SalesRevenueVisual,
    items: [
      { icon: Zap, text: "Auto-generate surveys using meeting summaries from Zoom or call logs" },
      { icon: CheckCircle2, text: "Trigger feedback workflows on closed-lost opportunities" },
      { icon: BarChart3, text: "Summarize seller comments to detect pipeline risk or urgency" },
      { icon: Search, text: "Query: 'Which accounts have the most negative feedback in 60 days?'" },
    ],
  },
  {
    id: "marketing", icon: Megaphone, label: "Marketing & Campaign", visual: MarketingCampaignVisual,
    items: [
      { icon: Zap, text: "Send post-webinar feedback surveys automatically" },
      { icon: BarChart3, text: "Measure campaign effectiveness through targeted response forms" },
      { icon: TrendingUp, text: "Track event satisfaction with lifecycle-triggered surveys" },
      { icon: Brain, text: "Auto-analyze marketing sentiment across channels" },
    ],
  },
  {
    id: "cx", icon: Headphones, label: "Customer Experience", visual: CustomerExperienceVisual,
    items: [
      { icon: Zap, text: "Auto-send CSAT surveys post-case closure" },
      { icon: MessageCircle, text: "AI-driven follow-up based on customer sentiment" },
      { icon: TrendingUp, text: "Real-time feedback loop for support quality improvement" },
      { icon: CheckCircle2, text: "Trigger NPS surveys at key customer lifecycle moments" },
    ],
  },
  {
    id: "employee", icon: UserCheck, label: "Employee Experience", visual: EmployeeExperienceVisual,
    items: [
      { icon: Zap, text: "Automate onboarding & exit surveys at lifecycle stages" },
      { icon: CheckCircle2, text: "Trigger manager effectiveness feedback based on team structure" },
      { icon: Clipboard, text: "Quick pulse surveys from HR cases with sentiment analysis" },
      { icon: BarChart3, text: "Aggregate employee engagement trends across departments" },
    ],
  },
  {
    id: "partner", icon: Globe2, label: "Partner & Vendor", visual: PartnerVendorVisual,
    items: [
      { icon: Zap, text: "Automate feedback during partner enablement journeys" },
      { icon: Search, text: "Query: 'Which partners reported friction in the last quarter?'" },
      { icon: MessageCircle, text: "Analyze support interactions from Experience Cloud" },
      { icon: TrendingUp, text: "Track channel satisfaction across partner programs" },
    ],
  },
  {
    id: "insights", icon: Brain, label: "Knowledge & Insights", visual: KnowledgeInsightsVisual,
    items: [
      { icon: BarChart3, text: "AI-generated summary dashboards for executives" },
      { icon: TrendingUp, text: "Auto-surface top drivers of low satisfaction" },
      { icon: CheckCircle2, text: "Suggest CRM tasks based on negative feedback sentiment" },
      { icon: Brain, text: "Pattern detection across lifecycle stages" },
    ],
  },
  {
    id: "admin", icon: Settings2, label: "Platform Admin & Ops", visual: AdminOpsVisual,
    items: [
      { icon: Zap, text: "'Clone onboarding survey, change theme to green, translate to French'" },
      { icon: Search, text: "Detect duplicate feedback and flag unstructured responses" },
      { icon: Filter, text: "'Show me open records with negative feedback and no follow-up task'" },
      { icon: CheckCircle2, text: "Proactive issue detection across the platform" },
    ],
  },
  {
    id: "industry", icon: Building2, label: "Cross-Industry", visual: CrossIndustryVisual,
    items: [
      { icon: Clipboard, text: "Public sector: feedback on service requests at key checkpoints" },
      { icon: MessageCircle, text: "Healthcare: post-appointment follow-up surveys" },
      { icon: Zap, text: "Education: course feedback on enrollment completion" },
      { icon: TrendingUp, text: "Any industry with Salesforce CRM workflows" },
    ],
  },
];

const UseCasesSection = () => {
  const [active, setActive] = useState("sales");
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const activeCase = useCases.find((u) => u.id === active)!;

  const itemsPerView = 4;
  const itemWidth = 100 / itemsPerView;
  const totalItems = useCases.length;
  const duplicatedItems = totalItems * 2; // Repeated list
  const maxScroll = Math.max(0, (duplicatedItems - itemsPerView) * itemWidth);

  const handlePrev = useCallback(() => {
    setScrollPosition((prev) => {
      const newPos = prev - itemWidth;
      if (newPos < 0) {
        return maxScroll;
      }
      return newPos;
    });

    // Auto advance to previous item
    const currentIndex = useCases.findIndex((u) => u.id === active);
    const prevIndex = currentIndex === 0 ? useCases.length - 1 : currentIndex - 1;
    setActive(useCases[prevIndex].id);
  }, [itemWidth, maxScroll, active]);

  const handleNext = useCallback(() => {
    setScrollPosition((prev) => {
      const newPos = prev + itemWidth;
      if (newPos >= maxScroll + itemWidth) {
        return 0;
      }
      return newPos;
    });

    // Auto advance to next item
    const currentIndex = useCases.findIndex((u) => u.id === active);
    const nextIndex = (currentIndex + 1) % useCases.length;
    setActive(useCases[nextIndex].id);
  }, [itemWidth, maxScroll, active]);

  const handleItemClick = (id: string, index: number) => {
    setActive(id);
    const centerPosition = Math.max(0, Math.min((index - 1) * itemWidth, maxScroll));
    setScrollPosition(centerPosition);
  };

  return (
    <section id="use-cases" className="py-16 md:py-24 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Use Cases</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            AgentVista adapts to your business needs across sales, support, HR, marketing, and more.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="flex items-center justify-center gap-4 mb-8 md:mb-10">
          <button
            onClick={handlePrev}
            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all"
            aria-label="Previous use cases"
          >
            <ChevronLeft size={24} />
          </button>

          <div ref={carouselRef} className="overflow-hidden flex-1 max-w-6xl">
            <div
              className="flex gap-2 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${scrollPosition}%)` }}
            >
              {/* Original items */}
              {useCases.map((u, index) => (
                <button
                  key={`${u.id}-0`}
                  onClick={() => handleItemClick(u.id, index)}
                  className={`flex-shrink-0 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap inline-flex items-center justify-center gap-1.5 ${
                    active === u.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }`}
                  style={{ width: `${itemWidth}%` }}
                >
                  <u.icon size={16} className="flex-shrink-0" />
                  <span className="hidden sm:inline truncate">{u.label}</span>
                  <span className="sm:hidden truncate">{u.label.split(" ")[0]}</span>
                </button>
              ))}
              {/* Repeated items for infinite loop */}
              {useCases.map((u, index) => (
                <button
                  key={`${u.id}-1`}
                  onClick={() => handleItemClick(u.id, index)}
                  className={`flex-shrink-0 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap inline-flex items-center justify-center gap-1.5 ${
                    active === u.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }`}
                  style={{ width: `${itemWidth}%` }}
                >
                  <u.icon size={16} className="flex-shrink-0" />
                  <span className="hidden sm:inline truncate">{u.label}</span>
                  <span className="sm:hidden truncate">{u.label.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all"
            aria-label="Next use cases"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-background to-muted/10 rounded-2xl border border-primary/20 shadow-lg overflow-hidden grid md:grid-cols-[260px,1fr] items-stretch">
              <div className="hidden md:flex flex-col items-center justify-center p-4 bg-muted/20 border-r border-primary/10 rounded-lg overflow-hidden">
                {activeCase.visual && <activeCase.visual />}
              </div>
              <div className="p-6 md:p-7 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-5">{activeCase.label}</h3>
                <ul className="space-y-3">
                  {activeCase.items.map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <ItemIcon className="mt-1 w-5 h-5 text-primary shrink-0 shadow-sm" />
                      <span className="text-muted-foreground text-base leading-relaxed font-medium">{item.text}</span>
                    </motion.li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCasesSection;
