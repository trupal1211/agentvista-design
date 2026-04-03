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

// Split into two rows for a clean alternating layout
const row1 = features.slice(0, 7);
const row2 = features.slice(7);

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Core Capabilities</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From AI-powered survey creation to real-time sentiment analysis — AgentVista covers the entire feedback lifecycle.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-3">
          {/* Row 1 - 7 items */}
          <div className="flex flex-wrap justify-center gap-3">
            {row1.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="group flex items-center gap-3 px-5 py-3.5 rounded-full border border-border/60 bg-background hover:border-primary/40 hover:shadow-md hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <f.icon size={16} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-[13px] leading-tight">{f.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-snug max-w-[220px]">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Row 2 - 7 items */}
          <div className="flex flex-wrap justify-center gap-3">
            {row2.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="group flex items-center gap-3 px-5 py-3.5 rounded-full border border-border/60 bg-background hover:border-primary/40 hover:shadow-md hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <f.icon size={16} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-[13px] leading-tight">{f.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-snug max-w-[220px]">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
