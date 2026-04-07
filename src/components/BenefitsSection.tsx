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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Why AgentVista?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            AgentVista isn't just a tool — it's a paradigm shift in how enterprises handle feedback.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group relative rounded-2xl bg-background border border-border/50 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                <b.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-[15px]">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
