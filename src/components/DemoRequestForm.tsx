import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DemoRequestFormProps {
  open: boolean;
  onClose: () => void;
}

const DemoRequestForm = ({ open, onClose }: DemoRequestFormProps) => {
  const scriptLoadedRef = useRef(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (open && !scriptLoadedRef.current) {
      // Only load Calendly script when modal opens (lazy loading for SEO)
      scriptLoadedRef.current = true;

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      scriptRef.current = script;

      script.onload = () => {
        // Initialize Calendly widget after script loads
        const Calendly = (window as any).Calendly;
        if (Calendly && Calendly.initInlineWidget) {
          // Add slight delay to ensure DOM is ready on mobile
          setTimeout(() => {
            Calendly.initInlineWidget({
              url: "https://calendly.com/d/zzy-699-f8v/book-a-demo?embed_domain=agentvista.com&embed_type=Inline",
              parentElement: document.getElementById("calendly-container"),
            });
          }, 100);
        }
      };

      document.body.appendChild(script);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 backdrop-blur-sm px-2 sm:px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-full sm:max-w-2xl md:max-w-5xl lg:max-w-6xl h-[85vh] sm:h-[80vh] md:h-[90vh] max-h-[900px] rounded-lg sm:rounded-2xl border border-border shadow-2xl overflow-hidden bg-white flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-600 hover:text-gray-900 transition-colors z-10 p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg"
              aria-label="Close modal"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
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
