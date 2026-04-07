import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DemoRequestForm from "./DemoRequestForm";

const CTASection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden"
          style={{
            background: '#005C90',
            padding: '48px 32px',
          }}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span>Ready to Transform Your Feedback Strategy?</span>
            </h2>
            <p className="text-white mb-8 text-lg">
              See how AgentVista can automate your entire survey lifecycle with the power of AI — natively within Salesforce.
            </p>
            <button
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-primary font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Book a Demo
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
      <DemoRequestForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
};

export default CTASection;
