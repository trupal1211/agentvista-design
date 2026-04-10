import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, FileText, MessageSquare, BarChart3, Brain,
  BotMessageSquare, Target, Languages, Palette, Copy,
  TrendingUp, Zap, FileSearch, Lightbulb,
} from "lucide-react";

import AiSurveyVisual from "./features/AiSurveyVisual";
import PdfFormVisual from "./features/PdfFormVisual";
import AiInsightsVisual from "./features/AiInsightsVisual";
import PromptCloningVisual from "./features/PromptCloningVisual";
import BrandingVisual from "./features/BrandingVisual";
import SentimentIntelligenceVisual from "./features/SentimentIntelligenceVisual";
import ConversationalAnalyticsVisual from "./features/ConversationalAnalyticsVisual";
import NaturalLanguageActionsVisual from "./features/NaturalLanguageActionsVisual";
import ConversationalFollowUpVisual from "./features/ConversationalFollowUpVisual";
import AutomatedLifecycleFeedbackVisual from "./features/AutomatedLifecycleFeedbackVisual";
import SmartRecordTargetingVisual from "./features/SmartRecordTargetingVisual";
import AiSummaryOfResponsesVisual from "./features/AiSummaryOfResponsesVisual";
import SurveyResponseTranslationVisual from "./features/SurveyResponseTranslationVisual";

const visuals = [
  <AiSurveyVisual key="survey" />,
  <PdfFormVisual key="pdf" />,
  <AiInsightsVisual key="insights" />,
  <PromptCloningVisual key="cloning" />,
  <BrandingVisual key="branding" />,
  <SentimentIntelligenceVisual key="sentiment" />,
  <ConversationalAnalyticsVisual key="conv-analytics" />,
  <NaturalLanguageActionsVisual key="natural-language-actions" />,
  <ConversationalFollowUpVisual key="conversational-follow-up" />,
  <AutomatedLifecycleFeedbackVisual key="automated-lifecycle-feedback" />,
  <SmartRecordTargetingVisual key="smart-record-targeting" />,
  <SurveyResponseTranslationVisual key="translation" />,
  <AiSummaryOfResponsesVisual key="ai-summary-of-responses" />,
];

const features = [
  { icon: Sparkles, title: "AI Survey Generation", desc: "Instantly generate surveys, forms, and assessments using natural language prompts.", visualIndex: 0 },
  { icon: FileText, title: "Form Creation from PDFs & Images", desc: "Upload documents to auto-generate structured forms.", visualIndex: 1 },
  { icon: MessageSquare, title: "Natural Language Actions", desc: "Use GenAI-powered commands to create, distribute, understand, and act on insights from surveys and forms", visualIndex: 7 },
  { icon: Brain, title: "Sentiment Intelligence", desc: "Detect and store sentiment from responses, cases, and chat transcripts.", visualIndex: 5 },
  { icon: BarChart3, title: "AI-Generated Survey Insights", desc: "Summarize all survey responses to uncover trends, sentiment, and action areas in seconds.", visualIndex: 2 },
  { icon: Lightbulb, title: "AI Summary of Individual Responses", desc: "Instantly distill long survey answers into actionable insights per respondent.", visualIndex: 12 },
  { icon: BotMessageSquare, title: "AI-Driven Conversational Follow-Up", desc: "Ask intelligent clarifying questions based on participant responses or meeting summaries.", visualIndex: 8 },
  { icon: Languages, title: "Survey & Response Translation", desc: "Automatically translate survey content and multi-language responses.", visualIndex: 11 },
  { icon: Palette, title: "Theme & Branding Automation", desc: "Apply styles and colors based on uploaded logos or prompt instructions.", visualIndex: 4 },
  { icon: Copy, title: "Prompt-Based Cloning & Editing", desc: "Duplicate or update surveys using plain language commands.", visualIndex: 3 },
  { icon: BotMessageSquare, title: "SurveyVista Intelligence", desc: "An embedded AI assistant that designs, configures, automates, and analyzes across every stage of your survey lifecycle.", visualIndex: 8 },
];

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileNavbarHeight, setMobileNavbarHeight] = useState(0);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileStickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const updateNavbarHeight = () => {
      const navbar = document.querySelector("nav");
      if (!navbar) return;

      const nextHeight = Math.round(navbar.getBoundingClientRect().height);
      setMobileNavbarHeight((current) => (current === nextHeight ? current : nextHeight));
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, [isMobile]);

  useEffect(() => {
    const getNavbarHeight = () => {
      const navbar = document.querySelector("nav");
      return navbar ? Math.round(navbar.getBoundingClientRect().height) : 72;
    };

    const handleScroll = () => {
      const navbarHeight = getNavbarHeight();
      const stickyHeight = isMobile ? mobileStickyRef.current?.getBoundingClientRect().height ?? 0 : 0;
      const activationPoint = isMobile
        ? navbarHeight + stickyHeight + Math.max(window.innerHeight - navbarHeight - stickyHeight, 0) / 2
        : window.innerHeight / 2;
      const activeCardRefs = isMobile ? mobileCardRefs.current : desktopCardRefs.current;

      let closestIndex = 0;
      let closestDistance = Infinity;

      activeCardRefs.forEach((card, i) => {
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        const distance = Math.abs(cardCenter - activationPoint);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMobile]);

  const activeVisualIndex = features[activeIndex]?.visualIndex ?? 0;

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    if (isMobile) return;

    const card = desktopCardRefs.current[index];
    if (card) {
      const cardRect = card.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const cardCenter = cardRect.top + cardRect.height / 2;
      const scrollOffset = cardCenter - viewportCenter;
      
      window.scrollBy({
        top: scrollOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="features" className="py-8 md:py-16 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-xs font-semibold mb-4 tracking-widest uppercase">
            Core Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">From First Prompt to Final Action</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From AI-powered survey creation to real-time sentiment analysis — AgentVista covers the entire feedback lifecycle.
          </p>
        </motion.div>

        {/* Mobile layout */}
        <div className="lg:hidden max-w-md mx-auto pb-14">
          {/* Mobile Visual Container - shows only active card visual */}
          <motion.div 
            ref={mobileStickyRef}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sticky z-20 mb-5 overflow-hidden rounded-2xl border border-border/50 bg-background shadow-lg h-[240px] sm:h-[260px]"
            style={{ top: `${(mobileNavbarHeight || 72) + 12}px` }}
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
                {visuals[features[activeIndex]?.visualIndex ?? 0]}
              </motion.div>
            </AnimatePresence>

            {/* Subtle glow effect on image change */}
            <motion.div
              key={`glow-${activeIndex}`}
              initial={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 pointer-events-none rounded-xl border border-brand-blue/40"
            />
          </motion.div>

          {/* Mobile Feature Cards */}
          <div ref={containerRef} className="space-y-3">
            {features.map((f, i) => {
              const isActive = i === activeIndex;
              return (
                <motion.div
                  key={f.title}
                  ref={(el) => { mobileCardRefs.current[i] = el; }}
                  className="flex items-start gap-3.5 p-4 rounded-2xl border transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    opacity: isActive ? 1 : 0.5,
                    borderColor: isActive ? "hsl(199 76% 52% / 0.4)" : "hsl(var(--border) / 0.3)",
                    backgroundColor: isActive ? "hsl(199 76% 52% / 0.08)" : "hsl(var(--background))",
                    boxShadow: isActive ? "0 4px 16px hsl(199 76% 52% / 0.1)" : "none",
                    transform: isActive ? "scale(1)" : "scale(0.98)",
                  }}
                  onClick={() => setActiveIndex(i)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500"
                    style={{
                      backgroundColor: isActive ? "hsl(199 76% 52%)" : "hsl(199 76% 52% / 0.1)",
                    }}
                  >
                    <f.icon
                      size={17}
                      style={{ color: isActive ? "white" : "hsl(199 76% 52%)" }}
                      className="transition-colors duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-[15px] leading-snug mb-1">{f.title}</h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop sticky scroll layout */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="flex gap-12">
            {/* Sticky left – image only */}
            <div className="w-[580px] shrink-0">
              <div className="sticky top-[calc(50vh-175px)]">
                <div className="relative w-full h-[420px] rounded-xl overflow-hidden border border-border/50 shadow-lg bg-muted/30">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeVisualIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="w-full h-full"
                    >
                      {visuals[activeVisualIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Scrolling right cards */}
            <div className="flex-1 space-y-4 py-[20vh]" ref={containerRef}>
              {features.map((f, i) => {
                const distance = Math.abs(i - activeIndex);
                let opacity = 0.25;
                let borderColor = "hsl(var(--border) / 0.2)";
                let bg = "hsl(var(--background))";
                let shadow = "none";
                let iconBg = "hsl(199 76% 52% / 0.06)";
                let iconColor = "hsl(199 76% 52% / 0.35)";
                let scale = "0.95";

                if (distance === 0) {
                  opacity = 1;
                  borderColor = "hsl(199 76% 52% / 0.5)";
                  bg = "hsl(199 76% 52% / 0.08)";
                  shadow = "0 8px 32px hsl(199 76% 52% / 0.15)";
                  iconBg = "hsl(199 76% 52%)";
                  iconColor = "white";
                  scale = "1";
                } else if (distance === 1) {
                  opacity = 0.65;
                  borderColor = "hsl(199 76% 52% / 0.25)";
                  bg = "hsl(199 76% 52% / 0.03)";
                  iconBg = "hsl(199 76% 52% / 0.15)";
                  iconColor = "hsl(199 76% 52% / 0.7)";
                  scale = "0.97";
                }

                return (
                  <div
                    key={f.title}
                    ref={(el) => { desktopCardRefs.current[i] = el; }}
                    className="flex items-start gap-5 p-5 rounded-xl border transition-all duration-700 ease-out cursor-pointer"
                    style={{
                      opacity,
                      borderColor,
                      backgroundColor: bg,
                      boxShadow: shadow,
                      transform: `scale(${scale})`,
                    }}
                    onClick={() => handleCardClick(i)}
                  >
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-all duration-700"
                      style={{ backgroundColor: iconBg }}
                    >
                      <f.icon size={18} style={{ color: iconColor }} className="transition-colors duration-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-base leading-tight mb-1">{f.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
