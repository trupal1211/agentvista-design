import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "For small teams getting started with AI surveys",
    price: "Contact Us",
    features: [
      "AI Survey Generation",
      "Up to 500 responses/month",
      "Natural Language Actions",
      "Basic Sentiment Analysis",
      "Email Support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    desc: "For growing organizations that need advanced automation",
    price: "Contact Us",
    features: [
      "Everything in Starter",
      "Unlimited responses",
      "Conversational Follow-Up",
      "Lifecycle Automation",
      "Multi-language Translation",
      "Conversational Analytics",
      "Priority Support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    desc: "For large organizations with governance requirements",
    price: "Contact Us",
    features: [
      "Everything in Professional",
      "Custom Integrations",
      "Governed AI Controls",
      "HIPAA, ISO, SOC, GDPR",
      "Dedicated Success Manager",
      "SLA Guarantee",
      "SSO & Advanced Security",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Plans That <span className="text-gradient">Scale With You</span>
          </h2>
          <p className="text-muted-foreground">
            Flexible pricing designed for teams of any size. All plans include core AI capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary bg-primary/[0.03] shadow-xl scale-[1.02]"
                  : "border-border/60 bg-card hover:shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-secondary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
