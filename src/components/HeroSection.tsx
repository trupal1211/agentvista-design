import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import owlImg from "@/assets/owl-mascot.png";
import DemoRequestForm from "./DemoRequestForm";

const HeroSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Powered by Salesforce Agentforce
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-tight mb-6 text-foreground">
              AgentVista – SurveyVista Copilot
              <br />
              <span className="text-primary">for Intelligent Surveys,</span>
              <br />
              <span className="text-primary">Forms & Assessments</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Use natural language and AI to create, distribute, understand, and act on feedback — all within Salesforce. No code required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Request a Demo
                <ArrowRight size={18} />
              </button>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Explore Features
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <img
              src={owlImg}
              alt="AgentVista AI Owl Mascot"
              className="w-full max-w-md h-auto drop-shadow-2xl"
              loading="eager"
            />
            {/* Floating cards */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-0 lg:-right-4 glass-card rounded-xl px-4 py-3 shadow-lg"
            >
              <p className="text-xs font-semibold text-foreground">AI Survey Generated</p>
              <p className="text-xs text-muted-foreground">12 questions • 3 sec</p>
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 left-0 lg:-left-4 glass-card rounded-xl px-4 py-3 shadow-lg"
            >
              <p className="text-xs font-semibold text-secondary">Sentiment: Positive 92%</p>
              <p className="text-xs text-muted-foreground">Real-time analysis</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <DemoRequestForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
};

export default HeroSection;
