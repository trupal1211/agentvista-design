import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Headphones, UserCheck, TrendingUp, Globe2, Brain, Settings2, Building2,
} from "lucide-react";

const useCases = [
  {
    id: "sales",
    icon: TrendingUp,
    label: "Sales & Revenue",
    items: [
      "Auto-generate surveys using meeting summaries from Zoom or call logs",
      "Trigger feedback workflows on closed-lost opportunities",
      "Summarize seller comments to detect pipeline risk or urgency",
      "Query: 'Which accounts have the most negative feedback in 60 days?'",
    ],
  },
  {
    id: "cx",
    icon: Headphones,
    label: "Customer Experience",
    items: [
      "Auto-send CSAT surveys post-case closure",
      "AI-driven follow-up based on customer sentiment",
      "Real-time feedback loop for support quality improvement",
      "Trigger NPS surveys at key customer lifecycle moments",
    ],
  },
  {
    id: "employee",
    icon: UserCheck,
    label: "Employee Experience",
    items: [
      "Automate onboarding & exit surveys at lifecycle stages",
      "Trigger manager effectiveness feedback based on team structure",
      "Quick pulse surveys from HR cases with sentiment analysis",
      "Aggregate employee engagement trends across departments",
    ],
  },
  {
    id: "partner",
    icon: Globe2,
    label: "Partner & Vendor",
    items: [
      "Automate feedback during partner enablement journeys",
      "Query: 'Which partners reported friction in the last quarter?'",
      "Analyze support interactions from Experience Cloud",
      "Track channel satisfaction across partner programs",
    ],
  },
  {
    id: "insights",
    icon: Brain,
    label: "Knowledge & Insights",
    items: [
      "AI-generated summary dashboards for executives",
      "Auto-surface top drivers of low satisfaction",
      "Suggest CRM tasks based on negative feedback sentiment",
      "Pattern detection across lifecycle stages",
    ],
  },
  {
    id: "admin",
    icon: Settings2,
    label: "Platform Admin & Ops",
    items: [
      "'Clone onboarding survey, change theme to green, translate to French'",
      "Detect duplicate feedback and flag unstructured responses",
      "'Show me open records with negative feedback and no follow-up task'",
      "Proactive issue detection across the platform",
    ],
  },
  {
    id: "industry",
    icon: Building2,
    label: "Cross-Industry",
    items: [
      "Public sector: feedback on service requests at key checkpoints",
      "Healthcare: post-appointment follow-up surveys",
      "Education: course feedback on enrollment completion",
      "Any industry with Salesforce CRM workflows",
    ],
  },
];

const UseCasesSection = () => {
  const [active, setActive] = useState("sales");
  const activeCase = useCases.find((u) => u.id === active)!;

  return (
    <section id="use-cases" className="py-24 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Use Cases
          </h2>
          <p className="text-muted-foreground text-lg">
            AgentVista adapts to your business needs across sales, support, HR, marketing, and more.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {useCases.map((u) => (
            <button
              key={u.id}
              onClick={() => setActive(u.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === u.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              <u.icon size={16} />
              {u.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-background rounded-2xl border border-border/60 p-8 shadow-sm grid md:grid-cols-[1fr,auto] gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <activeCase.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{activeCase.label}</h3>
                </div>
                <ul className="space-y-4">
                  {activeCase.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              {/* Illustration */}
              <div className="hidden md:flex w-40 h-40 rounded-2xl bg-accent/50 items-center justify-center">
                <activeCase.icon size={64} className="text-primary/30" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCasesSection;
