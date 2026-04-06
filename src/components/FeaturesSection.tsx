import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles, FileText, MessageSquare, BarChart3, Brain,
  BotMessageSquare, Target, Languages, Palette, Copy,
  TrendingUp, Zap, FileSearch, Lightbulb,
} from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI Survey Generation", desc: "Instantly generate surveys, forms, and assessments using natural language prompts.", category: "Creation" },
  { icon: FileText, title: "Form Creation from PDFs", desc: "Upload documents to auto-generate structured forms in seconds.", category: "Creation" },
  { icon: Copy, title: "Prompt-Based Cloning", desc: "Duplicate or update surveys using plain language commands.", category: "Creation" },
  { icon: Palette, title: "Theme & Branding Automation", desc: "Apply styles and colors based on uploaded logos or prompt instructions.", category: "Creation" },
  { icon: Brain, title: "Sentiment Intelligence", desc: "Detect and store sentiment from responses, cases, and chat transcripts.", category: "Intelligence" },
  { icon: BarChart3, title: "AI-Generated Insights", desc: "Summarize all responses to uncover trends and action areas instantly.", category: "Intelligence" },
  { icon: Lightbulb, title: "AI Summary of Responses", desc: "Instantly distill long survey answers into actionable insights per respondent.", category: "Intelligence" },
  { icon: TrendingUp, title: "Conversational Analytics", desc: "Retrieve real-time insights using natural language prompts.", category: "Intelligence" },
  { icon: MessageSquare, title: "Natural Language Actions", desc: "Use GenAI-powered commands to create, distribute, and act on survey insights.", category: "Distribution" },
  { icon: BotMessageSquare, title: "Conversational Follow-Up", desc: "Ask intelligent clarifying questions based on participant responses.", category: "Distribution" },
  { icon: Zap, title: "Automated Lifecycle Feedback", desc: "Trigger surveys based on CRM or Record Lifecycle Map events.", category: "Distribution" },
  { icon: Target, title: "Smart Record Targeting", desc: "Search and assign surveys to contacts, leads, or accounts with precision.", category: "Distribution" },
  { icon: Languages, title: "Survey & Response Translation", desc: "Automatically translate survey content and multi-language responses.", category: "Localization" },
  { icon: FileSearch, title: "AI-Based Response Mapping", desc: "Determine if a response warrants task creation or record updates.", category: "Localization" },
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="features" className="py-16 md:py-24 section-gradient">
      <div className="container mx-auto px-4 lg:px-8" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Core Capabilities</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From AI-powered survey creation to real-time sentiment analysis — AgentVista covers the entire feedback lifecycle.
          </p>
        </motion.div>

        {/* Sticky scroll layout: left sticky title, right scrolling cards */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sticky left panel */}
            <div className="lg:w-[340px] shrink-0">
              <div className="lg:sticky lg:top-28">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  The Answer to the Whole <span className="text-gradient">Data Cycle</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Benefits at every step from collection to action. AgentVista powers your entire feedback lifecycle natively within Salesforce.
                </p>
                <div className="hidden lg:flex flex-col gap-2">
                  {["Creation", "Intelligence", "Distribution", "Localization"].map((cat) => (
                    <div key={cat} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {cat}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scrolling right cards */}
            <div className="flex-1 space-y-4">
              {features.map((f, i) => (
                <FeatureCard key={f.title} feature={f} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.03, 0.2) }}
      className="group flex items-start gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300"
      style={{
        borderColor: isInView ? 'hsl(199 76% 52% / 0.3)' : 'hsl(214 20% 90% / 0.6)',
        backgroundColor: isInView ? 'hsl(199 76% 52% / 0.03)' : 'hsl(0 0% 100%)',
        boxShadow: isInView ? '0 4px 20px hsl(199 76% 52% / 0.08)' : 'none',
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
        style={{
          backgroundColor: isInView ? 'hsl(199 76% 52%)' : 'hsl(199 76% 52% / 0.1)',
        }}
      >
        <feature.icon
          size={18}
          className="transition-colors duration-300"
          style={{ color: isInView ? 'white' : 'hsl(199 76% 52%)' }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-foreground text-sm leading-tight">{feature.title}</h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium hidden sm:inline">
            {feature.category}
          </span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
