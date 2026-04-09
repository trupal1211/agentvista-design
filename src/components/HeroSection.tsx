import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DemoRequestForm from "./DemoRequestForm";
import AppExchangeForm from "./AppExchangeForm";
import heroImg from "@/assets/agentvista-ai-survey-hero-mascot.webp";

const HeroSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [appExOpen, setAppExOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-16">
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-sm font-semibold mb-8 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              Powered by Salesforce Agentforce
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-foreground">
              AgentVista - SurveyVista Copilot
              <br />
              <span className="text-gradient">for Intelligent Surveys,</span>
              <br />
              <span className="text-gradient">Forms & Assessments</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 mt-6">
              AI-Powered Automation for Feedback Management & Data Collection.
            </h2>

            <p className="text-sm md:text-base text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Use natural language and AI to create, distribute, understand, and act on feedback — all within Salesforce. No code required.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => setDemoOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-brand-blue text-white font-semibold text-base sm:text-lg hover:opacity-85 active:opacity-75 transition-opacity cursor-pointer"
              >
                Book a Demo
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setAppExOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-border text-foreground font-semibold text-base sm:text-lg hover:bg-muted active:bg-muted transition-colors cursor-pointer"
              >
                View on AppExchange
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <img
              src={heroImg}
              alt="AI-powered survey assistant mascot - AgentVista SurveyVista Copilot for intelligent feedback automation"
              className="w-full max-w-md lg:max-w-lg"
            />

            {/* Floating card - AI Survey */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-0 lg:-right-4 bg-background/90 backdrop-blur-sm border border-border rounded-xl px-4 py-2.5 shadow-lg"
            >
              <p className="text-xs font-bold text-foreground">AI Survey Generated</p>
              <p className="text-[11px] text-muted-foreground">12 questions • 3 sec</p>
            </motion.div>

            {/* Floating card - Sentiment */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-12 left-0 lg:-left-4 bg-background/90 backdrop-blur-sm border border-border rounded-xl px-4 py-2.5 shadow-lg"
            >
              <p className="text-xs font-bold text-secondary">Sentiment: Positive 92%</p>
              <p className="text-[11px] text-muted-foreground">Real-time analysis</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <DemoRequestForm open={demoOpen} onClose={() => setDemoOpen(false)} />
      <AppExchangeForm open={appExOpen} onClose={() => setAppExOpen(false)} />
    </section>
  );
};

export default HeroSection;
