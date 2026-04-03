import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, FileText, MessageSquare, BarChart3, Brain,
  BotMessageSquare, Target, Languages, Palette, Copy,
  TrendingUp, Zap, FileSearch, Lightbulb, ChevronDown,
} from "lucide-react";

const categories = [
  {
    name: "AI Creation & Automation",
    features: [
      { icon: Sparkles, title: "AI Survey Generation", desc: "Instantly generate surveys, forms, and assessments using natural language prompts." },
      { icon: FileText, title: "Form Creation from PDFs", desc: "Upload documents to auto-generate structured forms in seconds." },
      { icon: Copy, title: "Prompt-Based Cloning", desc: "Duplicate or update surveys using plain language commands." },
      { icon: Palette, title: "Theme & Branding Automation", desc: "Apply styles and colors based on uploaded logos or prompt instructions." },
    ],
  },
  {
    name: "Intelligence & Analytics",
    features: [
      { icon: Brain, title: "Sentiment Intelligence", desc: "Detect and store sentiment from responses, cases, and chat transcripts." },
      { icon: BarChart3, title: "AI-Generated Insights", desc: "Summarize all responses to uncover trends and action areas instantly." },
      { icon: Lightbulb, title: "AI Summary of Responses", desc: "Instantly distill long survey answers into actionable insights per respondent." },
      { icon: TrendingUp, title: "Conversational Analytics", desc: "Retrieve real-time insights using natural language prompts." },
    ],
  },
  {
    name: "Distribution & Engagement",
    features: [
      { icon: MessageSquare, title: "Natural Language Actions", desc: "Use GenAI-powered commands to create, distribute, and act on survey insights." },
      { icon: BotMessageSquare, title: "Conversational Follow-Up", desc: "Ask intelligent clarifying questions based on participant responses." },
      { icon: Zap, title: "Automated Lifecycle Feedback", desc: "Trigger surveys based on CRM or Record Lifecycle Map events." },
      { icon: Target, title: "Smart Record Targeting", desc: "Search and assign surveys to contacts, leads, or accounts with precision." },
    ],
  },
  {
    name: "Localization & Mapping",
    features: [
      { icon: Languages, title: "Survey & Response Translation", desc: "Automatically translate survey content and multi-language responses." },
      { icon: FileSearch, title: "AI-Based Response Mapping", desc: "Determine if a response warrants task creation or record updates." },
    ],
  },
];

const FeaturesSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

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

        <div className="max-w-4xl mx-auto space-y-4">
          {categories.map((cat, catIdx) => {
            const isOpen = openIndex === catIdx;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.08 }}
                className="rounded-2xl border border-border/60 bg-background overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : catIdx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="font-semibold text-foreground text-base">{cat.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{cat.features.length} features</span>
                    <ChevronDown
                      size={18}
                      className={`text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid sm:grid-cols-2 gap-4 px-6 pb-6">
                        {cat.features.map((f, i) => (
                          <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06 }}
                            className="group flex items-start gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors"
                          >
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                              <f.icon size={16} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">{f.title}</h3>
                              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
