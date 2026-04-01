import { motion } from "framer-motion";
import {
  Rocket, Users, LineChart, RefreshCw, Globe, Paintbrush, ShieldCheck, Settings, MessageCircle,
} from "lucide-react";

const benefits = [
  { icon: Rocket, title: "Accelerate Survey Deployment", desc: "Go from idea to live survey in minutes using AI prompts or uploaded content." },
  { icon: Users, title: "Empower Every Team", desc: "Enable non-technical users to build, assign, and analyze surveys using natural language." },
  { icon: LineChart, title: "Drive Deeper Insights", desc: "Uncover trends and sentiment across responses with built-in AI analytics." },
  { icon: RefreshCw, title: "Close Feedback Loops Faster", desc: "Detect urgency and trigger follow-ups or CRM actions in real time." },
  { icon: Globe, title: "Scale Across Lifecycles", desc: "Automate feedback across customer, employee, partner, or record lifecycle." },
  { icon: Paintbrush, title: "Personalize Effortlessly", desc: "Automatically apply brand themes and tailor experiences across languages." },
  { icon: MessageCircle, title: "Boost Response Quality", desc: "Dynamically follow up with AI-generated clarifying questions." },
  { icon: ShieldCheck, title: "Stay Secure & Compliant", desc: "100% native to Salesforce — HIPAA, ISO, SOC, and GDPR ready." },
  { icon: Settings, title: "Governed AI at Scale", desc: "Admin-defined guardrails, approvals, and permissions for safe enterprise adoption." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-gradient">AgentVista</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            AgentVista isn't just a tool — it's a paradigm shift in how enterprises handle feedback.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="relative p-6 rounded-xl border border-border/60 bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <b.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
