import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useRecaptcha } from "@/hooks/use-recaptcha";

interface AppExchangeFormProps {
  open: boolean;
  onClose: () => void;
}

const APPEXCHANGE_URL = "https://appexchange.salesforce.com/appxListingDetail?listingId=c088b22e-a28b-4d93-bdf7-b950546b6e80&channel=recommended";

const AppExchangeForm = ({ open, onClose }: AppExchangeFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const { getToken } = useRecaptcha();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}/.test(form.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!form.company.trim()) {
      newErrors.company = "Company is required";
    } else if (form.company.trim().length < 2) {
      newErrors.company = "Company must be at least 2 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Get reCAPTCHA token
      const token = await getToken("appexchange_form");
      
      if (!token) {
        console.error("Failed to get reCAPTCHA token");
        setIsLoading(false);
        return;
      }

      // Log successful token generation
      console.log("AppExchange form submitted with reCAPTCHA token:", token);

      // Clear form and close modal
      setForm({ name: "", email: "", phone: "", company: "" });
      setErrors({});
      setIsLoading(false);
      onClose();
      
      // Open AppExchange URL
      window.open(APPEXCHANGE_URL, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Form submission error:", error);
      setIsLoading(false);
    }
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

            <h3 className="text-xl font-bold text-foreground mb-1">Get AgentVista on AppExchange</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in your details to proceed to Salesforce AppExchange.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                <input
                  type="text"
                  disabled={isLoading}
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  className={`w-full px-4 py-2.5 rounded-md border transition-colors text-sm focus:outline-none focus:ring-2 disabled:opacity-50 ${
                    errors.name
                      ? "border-red-500 bg-red-50 focus:ring-red-500/30 focus:border-red-500"
                      : "border-border bg-background focus:ring-brand-blue/30 focus:border-brand-blue"
                  } text-foreground`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  disabled={isLoading}
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  className={`w-full px-4 py-2.5 rounded-md border transition-colors text-sm focus:outline-none focus:ring-2 disabled:opacity-50 ${
                    errors.email
                      ? "border-red-500 bg-red-50 focus:ring-red-500/30 focus:border-red-500"
                      : "border-border bg-background focus:ring-brand-blue/30 focus:border-brand-blue"
                  } text-foreground`}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Contact Number</label>
                <input
                  type="tel"
                  disabled={isLoading}
                  value={form.phone}
                  onChange={(e) => {
                    setForm({ ...form, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: "" });
                  }}
                  className={`w-full px-4 py-2.5 rounded-md border transition-colors text-sm focus:outline-none focus:ring-2 disabled:opacity-50 ${
                    errors.phone
                      ? "border-red-500 bg-red-50 focus:ring-red-500/30 focus:border-red-500"
                      : "border-border bg-background focus:ring-brand-blue/30 focus:border-brand-blue"
                  } text-foreground`}
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Company / Organization</label>
                <input
                  type="text"
                  disabled={isLoading}
                  value={form.company}
                  onChange={(e) => {
                    setForm({ ...form, company: e.target.value });
                    if (errors.company) setErrors({ ...errors, company: "" });
                  }}
                  className={`w-full px-4 py-2.5 rounded-md border transition-colors text-sm focus:outline-none focus:ring-2 disabled:opacity-50 ${
                    errors.company
                      ? "border-red-500 bg-red-50 focus:ring-red-500/30 focus:border-red-500"
                      : "border-border bg-background focus:ring-brand-blue/30 focus:border-brand-blue"
                  } text-foreground`}
                  placeholder="Acme Inc."
                />
                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-md bg-brand-blue text-white font-semibold text-sm hover:opacity-85 transition-opacity mt-2 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Processing..." : "Go to AppExchange"}
                <ExternalLink size={16} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppExchangeForm;
