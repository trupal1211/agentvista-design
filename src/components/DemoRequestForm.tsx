import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DemoRequestFormProps {
  open: boolean;
  onClose: () => void;
}

const DemoRequestForm = ({ open, onClose }: DemoRequestFormProps) => {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (open && !scriptLoadedRef.current) {
      // Only load Calendly script when modal opens (lazy loading for SEO)
      scriptLoadedRef.current = true;

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        // Initialize Calendly widget after script loads
        const Calendly = (window as any).Calendly;
        if (Calendly && Calendly.initInlineWidget) {
          Calendly.initInlineWidget({
            url: "https://calendly.com/d/zzy-699-f8v/book-a-demo?embed_domain=agentvista.com&embed_type=Inline",
            parentElement: document.getElementById("calendly-container"),
          });
        }
      };
      document.body.appendChild(script);

      return () => {
        // Clean up - remove script only if modal is being fully closed
        // Note: We keep scriptLoadedRef true to avoid reloading
        if (!open) {
          document.body.removeChild(script);
        }
      };
    }
  }, [open]);

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
            className="relative w-screen max-w-[95vw] sm:max-w-5xl lg:max-w-6xl h-[90vh] max-h-[900px] rounded-2xl border border-border shadow-2xl overflow-hidden bg-white flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors z-10 p-2 hover:bg-gray-100 rounded-lg"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Calendly container - only renders when modal is open */}
            <div
              id="calendly-container"
              className="w-full flex-1 overflow-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoRequestForm;
