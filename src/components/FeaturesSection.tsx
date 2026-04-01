import { motion } from "framer-motion";
import {
  Sparkles, FileText, MessageSquare, BarChart3, Brain,
  BotMessageSquare, Target, Languages, Palette, Copy,
  TrendingUp, Zap, FileSearch, Lightbulb,
} from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI Survey Generation", desc: "Instantly generate surveys, forms, and assessments using natural language prompts." },
  { icon: FileText, title: "Form Creation from PDFs", desc: "Upload documents to auto-generate structured forms in seconds." },
  { icon: MessageSquare, title: "Natural Language Actions", desc: "Use GenAI-powered commands to create, distribute, and act on survey insights." },
  { icon: Brain, title: "Sentiment Intelligence", desc: "Detect and store sentiment from responses, cases, and chat transcripts." },
  { icon: BarChart3, title: "AI-Generated Insights", desc: "Summarize all responses to uncover trends and action areas instantly." },
  { icon: Lightbulb, title: "AI Summary of Responses", desc: "Instantly distill long survey answers into actionable insights per respondent." },
  { icon: BotMessageSquare, title: "Conversational Follow-Up", desc: "Ask intelligent clarifying questions based on participant responses." },
  { icon: Zap, title: "Automated Lifecycle Feedback", desc: "Trigger surveys based on CRM or Record Lifecycle Map events." },
  { icon: Target, title: "Smart Record Targeting", desc: "Search and assign surveys to contacts, leads, or accounts with precision." },
  { icon: TrendingUp, title: "Conversational Analytics", desc: "Retrieve real-time insights using natural language prompts." },
  { icon: Languages, title: "Survey & Response Translation", desc: "Automatically translate survey content and multi-language responses." },
  { icon: FileSearch, title: "AI-Based Response Mapping", desc: "Determine if a response warrants task creation or record updates." },
  { icon: Palette, title: "Theme & Branding Automation", desc: "Apply styles and colors based on uploaded logos or prompt instructions." },
  { icon: Copy, title: "Prompt-Based Cloning", desc: "Duplicate or update surveys using plain language commands." },
];

// Split into left and right columns for alternating layout
const leftFeatures = features.filter((_, i) => i % 2 === 0);
const rightFeatures = features.filter((_, i) => i % 2 !== 0);

const FeatureRow = ({ feature, index, align }: { feature: typeof features[0]; index: number; align: "left" | "right" }) => (
  <motion.div
    initial={{ opacity: 0, x: align === "left" ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06, duration: 0.4 }}
    className="flex items-start gap-4 p-5 rounded-xl hover:bg-accent/50 transition-colors duration-300 group"
  >
    <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
      <feature.icon size={20} className="text-primary" />
    </div>
    <div>
      <h3 className="font-semibold text-foreground mb-1 text-[15px]">{feature.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
    </div>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What It Can Do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From AI-powered survey creation to real-time sentiment analysis — AgentVista covers the entire feedback lifecycle.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-8 gap-y-1">
          <div className="space-y-1">
            {leftFeatures.map((f, i) => (
              <FeatureRow key={f.title} feature={f} index={i} align="left" />
            ))}
          </div>
          <div className="space-y-1">
            {rightFeatures.map((f, i) => (
              <FeatureRow key={f.title} feature={f} index={i} align="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
