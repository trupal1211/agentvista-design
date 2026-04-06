import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is AgentVista 100% native to Salesforce?",
    answer: "Yes, AgentVista is built entirely on the Salesforce platform using Agentforce. It requires no external integrations, APIs, or third-party tools — your data stays within Salesforce at all times, ensuring full compliance with your org's security and governance policies.",
  },
  {
    question: "Do I need coding skills to use AgentVista?",
    answer: "Not at all. AgentVista is designed for business users. You can create surveys, trigger feedback workflows, analyze sentiment, and generate insights using simple natural language prompts — no code, formulas, or technical expertise required.",
  },
  {
    question: "How does AgentVista use AI to analyze feedback?",
    answer: "AgentVista leverages Salesforce's built-in AI capabilities to perform real-time sentiment analysis, summarize open-ended responses, detect trends across large datasets, and recommend follow-up actions — all automatically and within your Salesforce environment.",
  },
  {
    question: "Can AgentVista integrate with my existing Salesforce workflows?",
    answer: "Absolutely. AgentVista works seamlessly with Salesforce Flows, Process Builder, and Record Lifecycle Maps. You can trigger surveys based on case closures, opportunity stages, onboarding milestones, or any CRM event — and route responses back into your workflows automatically.",
  },
  {
    question: "What types of organizations benefit most from AgentVista?",
    answer: "AgentVista is ideal for any organization using Salesforce that needs to collect and act on feedback — from customer experience and sales teams to HR departments and partner management. It's used across industries including healthcare, education, public sector, financial services, and technology.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Everything you need to know about AgentVista.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border/60 rounded-xl px-5 md:px-6 bg-background data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-sm md:text-[15px] font-semibold text-foreground text-left hover:no-underline py-4 md:py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
