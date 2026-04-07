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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    features.forEach((_, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i);
          }
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0.1,
        }
      );

      const el = cardRefs.current[i];
      if (el) observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const activeVisualIndex = features[activeIndex]?.visualIndex ?? 0;

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
        <div className="lg:hidden max-w-md mx-auto space-y-4">
          {features.map((f, i) => (
            <MobileFeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>

        {/* Desktop sticky scroll layout */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div className="flex gap-8">
            {/* Sticky left – image only */}
            <div className="w-[440px] shrink-0">
              <div className="sticky top-28">
                <div className="relative w-full rounded-xl overflow-hidden border border-border/50 shadow-lg bg-muted/30">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeVisualIndex}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {visuals[activeVisualIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Scrolling right cards */}
            <div className="flex-1 space-y-3 py-[25vh]">
              {features.map((f, i) => {
                const distance = Math.abs(i - activeIndex);
                let opacity = 0.3;
                let borderColor = "hsl(var(--border) / 0.3)";
                let bg = "hsl(var(--background))";
                let shadow = "none";
                let iconBg = "hsl(199 76% 52% / 0.08)";
                let iconColor = "hsl(199 76% 52% / 0.4)";

                if (distance === 0) {
                  opacity = 1;
                  borderColor = "hsl(199 76% 52% / 0.4)";
                  bg = "hsl(199 76% 52% / 0.04)";
                  shadow = "0 4px 24px hsl(199 76% 52% / 0.1)";
                  iconBg = "hsl(199 76% 52%)";
                  iconColor = "white";
                } else if (distance === 1) {
                  opacity = 0.55;
                  borderColor = "hsl(199 76% 52% / 0.15)";
                  iconBg = "hsl(199 76% 52% / 0.12)";
                  iconColor = "hsl(199 76% 52% / 0.6)";
                }

                return (
                  <div
                    key={f.title}
                    ref={(el) => { cardRefs.current[i] = el; }}
                    className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-500 ease-out cursor-pointer"
                    style={{
                      opacity,
                      borderColor,
                      backgroundColor: bg,
                      boxShadow: shadow,
                      transform: distance === 0 ? "scale(1)" : "scale(0.98)",
                    }}
                    onClick={() => setActiveIndex(i)}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500"
                      style={{ backgroundColor: iconBg }}
                    >
                      <f.icon size={16} style={{ color: iconColor }} className="transition-colors duration-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-sm leading-tight mb-0.5">{f.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
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

/** Mobile card with visual that reveals on scroll */
const MobileFeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.04, 0.2) }}
      className="rounded-xl border overflow-hidden transition-all duration-400"
      style={{
        borderColor: isActive ? "hsl(199 76% 52% / 0.3)" : "hsl(var(--border) / 0.5)",
        backgroundColor: isActive ? "hsl(199 76% 52% / 0.03)" : "hsl(var(--background))",
        boxShadow: isActive ? "0 4px 20px hsl(199 76% 52% / 0.08)" : "none",
        opacity: isActive ? 1 : 0.75,
      }}
    >
      {/* Visual that shows when active */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {visuals[feature.visualIndex]}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-start gap-3 p-4">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            backgroundColor: isActive ? "hsl(199 76% 52%)" : "hsl(199 76% 52% / 0.1)",
          }}
        >
          <feature.icon
            size={16}
            className="transition-colors duration-300"
            style={{ color: isActive ? "white" : "hsl(199 76% 52%)" }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm leading-tight mb-0.5">{feature.title}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
