import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Headphones, UserCheck, TrendingUp, Globe2, Brain, Settings2, Building2, Megaphone,
} from "lucide-react";

import salesImg from "@/assets/AV-sales.png";
import marketingImg from "@/assets/usecase-marketing.jpg";
import cxImg from "@/assets/AV-customer.png";
import employeeImg from "@/assets/AV-employee.png";
import partnerImg from "@/assets/usecase-partner.jpg";
import insightsImg from "@/assets/AV-knowledge_insight.png";
import adminImg from "@/assets/usecase-admin.jpg";
import industryImg from "@/assets/usecase-industry.jpg";

const useCases = [
  {
    id: "sales", icon: TrendingUp, label: "Sales & Revenue", image: salesImg,
    items: [
      "Auto-generate surveys using meeting summaries from Zoom or call logs",
      "Trigger feedback workflows on closed-lost opportunities",
      "Summarize seller comments to detect pipeline risk or urgency",
      "Query: 'Which accounts have the most negative feedback in 60 days?'",
    ],
  },
  {
    id: "marketing", icon: Megaphone, label: "Marketing & Campaign", image: marketingImg,
    items: [
      "Send post-webinar feedback surveys automatically",
      "Measure campaign effectiveness through targeted response forms",
      "Track event satisfaction with lifecycle-triggered surveys",
      "Auto-analyze marketing sentiment across channels",
    ],
  },
  {
    id: "cx", icon: Headphones, label: "Customer Experience", image: cxImg,
    items: [
      "Auto-send CSAT surveys post-case closure",
      "AI-driven follow-up based on customer sentiment",
      "Real-time feedback loop for support quality improvement",
      "Trigger NPS surveys at key customer lifecycle moments",
    ],
  },
  {
    id: "employee", icon: UserCheck, label: "Employee Experience", image: employeeImg,
    items: [
      "Automate onboarding & exit surveys at lifecycle stages",
      "Trigger manager effectiveness feedback based on team structure",
      "Quick pulse surveys from HR cases with sentiment analysis",
      "Aggregate employee engagement trends across departments",
    ],
  },
  {
    id: "partner", icon: Globe2, label: "Partner & Vendor", image: partnerImg,
    items: [
      "Automate feedback during partner enablement journeys",
      "Query: 'Which partners reported friction in the last quarter?'",
      "Analyze support interactions from Experience Cloud",
      "Track channel satisfaction across partner programs",
    ],
  },
  {
    id: "insights", icon: Brain, label: "Knowledge & Insights", image: insightsImg,
    items: [
      "AI-generated summary dashboards for executives",
      "Auto-surface top drivers of low satisfaction",
      "Suggest CRM tasks based on negative feedback sentiment",
      "Pattern detection across lifecycle stages",
    ],
  },
  {
    id: "admin", icon: Settings2, label: "Platform Admin & Ops", image: adminImg,
    items: [
      "'Clone onboarding survey, change theme to green, translate to French'",
      "Detect duplicate feedback and flag unstructured responses",
      "'Show me open records with negative feedback and no follow-up task'",
      "Proactive issue detection across the platform",
    ],
  },
  {
    id: "industry", icon: Building2, label: "Cross-Industry", image: industryImg,
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

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
          {useCases.map((u) => (
            <button
              key={u.id}
              onClick={() => setActive(u.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 md:px-4 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
                active === u.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              <u.icon size={14} />
              <span className="hidden sm:inline">{u.label}</span>
              <span className="sm:hidden">{u.label.split(" ")[0]}</span>
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
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-background to-muted/10 rounded-2xl border border-primary/20 shadow-lg overflow-hidden grid md:grid-cols-[260px,1fr] items-stretch">
              <div className="hidden md:flex flex-col items-center justify-center p-4 bg-muted/20 border-r border-primary/10">
                <img
                  src={activeCase.image}
                  alt={activeCase.label}
                  className="w-full h-full max-h-[200px] object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-7 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-5">{activeCase.label}</h3>
                <ul className="space-y-3">
                  {activeCase.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 w-2.5 h-2.5 rounded-full bg-primary shrink-0 shadow-sm" />
                      <span className="text-muted-foreground text-base leading-relaxed font-medium">{item}</span>
                    </motion.li>
                  ))}
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
