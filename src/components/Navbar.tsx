import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/agent-vista-logo.svg";
import DemoRequestForm from "./DemoRequestForm";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Benefits", href: "#benefits" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50"
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="AgentVista" className="h-9" />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setDemoOpen(true)}
              className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Request a Demo
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 left-0 bottom-0 z-[70] w-72 bg-background border-r border-border shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <img src={logo} alt="AgentVista" className="h-8" />
                <button onClick={() => setMobileOpen(false)} className="text-foreground">
                  <X size={22} />
                </button>
              </div>
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-lg px-4 py-3 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setDemoOpen(true);
                  }}
                  className="mt-3 px-4 py-3 text-sm font-semibold rounded-lg bg-primary text-primary-foreground text-center"
                >
                  Request a Demo
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <DemoRequestForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

export default Navbar;
