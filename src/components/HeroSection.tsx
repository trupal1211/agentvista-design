import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DemoRequestForm from "./DemoRequestForm";

const HeroSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-8 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Powered by Salesforce Agentforce
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground">
              AgentVista – SurveyVista Copilot
              <br />
              <span className="text-gradient">for Intelligent Surveys,</span>
              <br />
              <span className="text-gradient">Forms & Assessments</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Use natural language and AI to create, distribute, understand, and act on feedback — all within Salesforce. No code required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Request a Demo
                <ArrowRight size={20} />
              </button>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-lg hover:bg-muted transition-colors"
              >
                Explore Features
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <DemoRequestForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
};

export default HeroSection;
