import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

interface DemoRequestFormProps {
  open: boolean;
  onClose: () => void;
}

const DemoRequestForm = ({ open, onClose }: DemoRequestFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", company: "", datetime: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", company: "", datetime: "" });
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md bg-background rounded-2xl border border-border shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold text-foreground mb-1">Request a Demo</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in your details and we'll schedule a personalized demo.
            </p>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-secondary" />
                </div>
                <p className="font-semibold text-foreground">Thank you!</p>
                <p className="text-sm text-muted-foreground">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Work Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company Name</label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Date & Time</label>
                  <input
                    type="datetime-local"
                    required
                    value={form.datetime}
                    onChange={(e) => setForm({ ...form, datetime: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity mt-2"
                >
                  Schedule Demo
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoRequestForm;
