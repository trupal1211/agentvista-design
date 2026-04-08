import { useState, useRef, useCallback, useEffect } from "react";
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
  // Virtual index approach for infinite carousel
  const [virtualIndex, setVirtualIndex] = useState(useCases.length); // Start at middle copy
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefsMap = useRef<Map<number, HTMLButtonElement>>(new Map());
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Derive active case from virtual index
  const activeIndex = virtualIndex % useCases.length;
  const activeCase = useCases[activeIndex];

  // Create tripled items for infinite loop
  const tripleItems = [...useCases, ...useCases, ...useCases];

  // Get the button for the middle copy
  const getMiddleCopyIndex = (realIndex: number) => useCases.length + realIndex;

  // Update scroll position and handle wrapping smoothly
  useEffect(() => {
    const container = containerRef.current;
    const carousel = carouselRef.current;
    
    if (!container || !carousel) return;

    // Determine if we need to wrap
    let targetIndex = virtualIndex;
    let shouldWrap = false;

    if (virtualIndex < useCases.length) {
      targetIndex = useCases.length * 2 + (virtualIndex % useCases.length);
      shouldWrap = true;
    } else if (virtualIndex >= useCases.length * 2) {
      targetIndex = useCases.length + (virtualIndex % useCases.length);
      shouldWrap = true;
    }

    // Calculate target scroll position
    const currentActiveIndex = targetIndex % useCases.length;
    const middleCopyIndex = getMiddleCopyIndex(currentActiveIndex);
    const activeButton = buttonRefsMap.current.get(middleCopyIndex);

    if (!activeButton) return;

    const containerWidth = container.offsetWidth;
    const buttonLeft = activeButton.offsetLeft;
    const buttonWidth = activeButton.offsetWidth;
    const targetScroll = Math.max(0, buttonLeft + buttonWidth / 2 - containerWidth / 2);

    if (shouldWrap && !isAnimating) {
      // Start animation to target scroll
      setScrollPosition(targetScroll);
      setIsAnimating(true);

      // Clear any pending timeout
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }

      // After animation completes, silently reposition to middle copy
      transitionTimeoutRef.current = setTimeout(() => {
        if (carousel) {
          // Disable transitions temporarily
          carousel.style.transition = 'none';
          
          // Update to middle copy index
          setVirtualIndex(targetIndex);
          
          // Recalculate position in middle copy
          const newButton = buttonRefsMap.current.get(middleCopyIndex);
          if (newButton) {
            const newButtonLeft = newButton.offsetLeft;
            const newTargetScroll = Math.max(0, newButtonLeft + buttonWidth / 2 - containerWidth / 2);
            carousel.style.transform = `translateX(-${newTargetScroll}px)`;
          }

          // Force reflow
          void carousel.offsetWidth;

          // Re-enable smooth transitions
          carousel.style.transition = '';
          
          setIsAnimating(false);
        }
      }, 500); // Match the transition duration
    } else {
      // Normal smooth scroll without wrapping
      setScrollPosition(targetScroll);
    }

    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [virtualIndex, isAnimating]);

  const handlePrev = useCallback(() => {
    setVirtualIndex((prev) => prev - 1);
  }, []);

  const handleNext = useCallback(() => {
    setVirtualIndex((prev) => prev + 1);
  }, []);

  const handleItemClick = (index: number) => {
    // Find the equivalent index in the middle copy
    const offset = index % useCases.length;
    setVirtualIndex(useCases.length + offset);
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-xs font-semibold mb-4 tracking-widest uppercase">
            Use Cases
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Built for Every Team</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            AgentVista adapts to every feedback program across industries</p>
        </motion.div>

        {/* Mobile Single Tab */}
        <div className="lg:hidden flex items-center justify-center gap-4 mb-8">
          <button
            onClick={handlePrev}
            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all"
            aria-label="Previous use cases"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex-1 max-w-sm">
            <div className="flex gap-2 justify-center">
              {useCases.map((u, idx) => (
                <button
                  key={u.id}
                  onClick={() => handleItemClick(idx)}
                  className={`flex-shrink-0 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 inline-flex items-center justify-center gap-1.5 ${
                    activeIndex === idx
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "hidden"
                  }`}
                >
                  <u.icon size={16} className="flex-shrink-0" />
                  <span className="truncate">{u.label}</span>
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

        {/* Desktop Carousel Container */}
        <div className="hidden lg:flex items-center justify-center gap-4 mb-8 md:mb-10">
          <button
            onClick={handlePrev}
            className="p-2 rounded-lg bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 transition-all"
            aria-label="Previous use cases"
          >
            <ChevronLeft size={24} />
          </button>

          <div ref={containerRef} className="overflow-hidden flex-1 max-w-4xl">
            <div
              className="flex gap-2 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
              ref={carouselRef}
            >
              {tripleItems.map((u, index) => (
                <button
                  key={`${u.id}-${index}`}
                  ref={(el) => {
                    if (el) buttonRefsMap.current.set(index, el);
                    else buttonRefsMap.current.delete(index);
                  }}
                  onClick={() => handleItemClick(index)}
                  className={`flex-shrink-0 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap inline-flex items-center justify-center gap-1.5 ${
                    activeIndex === index % useCases.length
                      ? "bg-brand-blue text-white shadow-lg"
                      : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-brand-blue/30"
                  }`}
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
            className="p-2 rounded-lg bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 transition-all"
            aria-label="Next use cases"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile Visual Container */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:hidden max-w-md mx-auto mb-8 overflow-hidden rounded-2xl border border-border/50 bg-background shadow-lg h-[240px] sm:h-[280px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="w-full h-full bg-background"
            >
              {activeCase.visual && <activeCase.visual />}
            </motion.div>
          </AnimatePresence>

          {/* Subtle glow effect on visual change */}
          <motion.div
            key={`glow-${activeIndex}`}
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none rounded-xl border border-primary/40"
          />
        </motion.div>

        {/* Desktop Content */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-br from-background to-muted/10 rounded-2xl border border-primary/20 shadow-lg overflow-hidden grid grid-cols-[260px,1fr] items-stretch">
                <div className="flex flex-col items-center justify-center p-4 bg-muted/20 border-r border-primary/10 rounded-lg overflow-hidden">
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

        {/* Mobile Content */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-gradient-to-br from-background to-muted/10 rounded-2xl border border-primary/20 shadow-lg overflow-hidden p-6">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4">{activeCase.label}</h3>
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
                      <span className="text-muted-foreground text-sm leading-relaxed font-medium">{item.text}</span>
                    </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
