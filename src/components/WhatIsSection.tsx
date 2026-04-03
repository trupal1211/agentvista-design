import { motion } from "framer-motion";
import heroImg from "@/assets/what-is-agentvista.jpg";

const WhatIsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <img
              src={heroImg}
              alt="AgentVista AI Platform"
              className="w-full max-w-md h-auto rounded-2xl shadow-xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="text-gradient">AgentVista</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              <strong className="text-foreground">AgentVista</strong> is the intelligent, AI-powered assistant built into SurveyVista, designed to transform how organizations collect, understand, and act on feedback. Powered by Salesforce's Agentforce, it brings natural language automation to the entire customer feedback lifecycle — making it faster and easier to create surveys, engage participants, analyze sentiment, and drive follow-up actions. AgentVista seamlessly integrates with your Salesforce data and workflows to enable dynamic, real-time feedback operations across customer, employee, and partner experiences — all without writing a single line of code.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
