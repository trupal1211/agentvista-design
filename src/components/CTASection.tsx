import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DemoRequestForm from "./DemoRequestForm";

const CTASection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Transform Your Feedback Strategy?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            See how AgentVista can automate your entire survey lifecycle with the power of AI — natively within Salesforce.
          </p>
          <button
            onClick={() => setDemoOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Request a Demo
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
      <DemoRequestForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
};

export default CTASection;
