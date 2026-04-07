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

const visuals = [
  <AiSurveyVisual key="survey" />,
  <PdfFormVisual key="pdf" />,
  <AiInsightsVisual key="insights" />,
];

const features = [
  { icon: Sparkles, title: "AI Survey Generation", desc: "Instantly generate surveys, forms, and assessments using natural language prompts.", visualIndex: 0 },
  { icon: FileText, title: "Form Creation from PDFs", desc: "Upload documents to auto-generate structured forms in seconds.", visualIndex: 1 },
  { icon: Copy, title: "Prompt-Based Cloning", desc: "Duplicate or update surveys using plain language commands.", visualIndex: 0 },
  { icon: Palette, title: "Theme & Branding Automation", desc: "Apply styles and colors based on uploaded logos or prompt instructions.", visualIndex: 1 },
  { icon: Brain, title: "Sentiment Intelligence", desc: "Detect and store sentiment from responses, cases, and chat transcripts.", visualIndex: 2 },
  { icon: BarChart3, title: "AI-Generated Insights", desc: "Summarize all responses to uncover trends and action areas instantly.", visualIndex: 2 },
  { icon: Lightbulb, title: "AI Summary of Responses", desc: "Instantly distill long survey answers into actionable insights per respondent.", visualIndex: 2 },
  { icon: TrendingUp, title: "Conversational Analytics", desc: "Retrieve real-time insights using natural language prompts.", visualIndex: 0 },
  { icon: MessageSquare, title: "Natural Language Actions", desc: "Use GenAI-powered commands to create, distribute, and act on survey insights.", visualIndex: 0 },
  { icon: BotMessageSquare, title: "Conversational Follow-Up", desc: "Ask intelligent clarifying questions based on participant responses.", visualIndex: 1 },
  { icon: Zap, title: "Automated Lifecycle Feedback", desc: "Trigger surveys based on CRM or Record Lifecycle Map events.", visualIndex: 1 },
  { icon: Target, title: "Smart Record Targeting", desc: "Search and assign surveys to contacts, leads, or accounts with precision.", visualIndex: 2 },
  { icon: Languages, title: "Survey & Response Translation", desc: "Automatically translate survey content and multi-language responses.", visualIndex: 0 },
  { icon: FileSearch, title: "AI-Based Response Mapping", desc: "Determine if a response warrants task creation or record updates.", visualIndex: 1 },
];

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Mobile scroll detection - adjust for sticky image height
      const handleScroll = () => {
        let closestIndex = 0;
        let closestDistance = Infinity;

        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.top + cardRect.height / 2;
          // Use image + gap height (250px + 32px margin = 282px) as offset
          const viewportCenter = 282 + (window.innerHeight - 282) / 2;
          const distance = Math.abs(cardCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        });

        setActiveIndex(closestIndex);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Desktop scroll detection
      const container = containerRef.current;
      if (!container) return;

      const handleScroll = () => {
        let closestIndex = 0;
        let closestDistance = Infinity;

        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.top + cardRect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          const distance = Math.abs(cardCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        });

        setActiveIndex(closestIndex);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]);

  // Auto-scroll visual into view on mobile when active index changes
  useEffect(() => {
    if (isMobile && mobileVisualRef.current) {
      setTimeout(() => {
        mobileVisualRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    }
  }, [activeIndex, isMobile]);

  const activeVisualIndex = features[activeIndex]?.visualIndex ?? 0;

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    const card = cardRefs.current[index];
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Core Capabilities</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From AI-powered survey creation to real-time sentiment analysis — AgentVista covers the entire feedback lifecycle.
          </p>
        </motion.div>

        {/* Mobile layout */}
        <div className="lg:hidden max-w-md mx-auto space-y-4 pb-12">
          {/* Mobile Visual Container - shows only active card visual */}
          <motion.div 
            ref={mobileVisualRef}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sticky top-20 z-20 rounded-xl overflow-hidden border border-border/50 shadow-lg bg-muted/30 h-[250px] mb-8 relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full"
              >
                {visuals[features[activeIndex]?.visualIndex ?? 0]}
              </motion.div>
            </AnimatePresence>

            {/* Subtle glow effect on image change */}
            <motion.div
              key={`glow-${activeIndex}`}
              initial={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 pointer-events-none rounded-xl border border-primary/40"
            />
          </motion.div>

          {/* Mobile Feature Cards */}
          <div ref={containerRef} className="space-y-3">
            {features.map((f, i) => {
              const isActive = i === activeIndex;
              return (
                <motion.div
                  key={f.title}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className="flex items-start gap-3 p-4 rounded-xl border transition-all duration-500 ease-out cursor-pointer"
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
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500"
                    style={{
                      backgroundColor: isActive ? "hsl(199 76% 52%)" : "hsl(199 76% 52% / 0.1)",
                    }}
                  >
                    <f.icon
                      size={16}
                      style={{ color: isActive ? "white" : "hsl(199 76% 52%)" }}
                      className="transition-colors duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm leading-tight mb-0.5">{f.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
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
              <div className="sticky top-28">
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
                    ref={(el) => { cardRefs.current[i] = el; }}
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
