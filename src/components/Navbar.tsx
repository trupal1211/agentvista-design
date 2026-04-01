import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/agent-vista-logo.svg";
import DemoRequestForm from "./DemoRequestForm";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Benefits", href: "#benefits" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[820px]"
      >
        <div
          className={`flex items-center justify-between rounded-full px-5 py-2.5 border transition-all duration-300 ${
            scrolled
              ? "bg-foreground/70 backdrop-blur-xl border-white/15 shadow-2xl"
              : "bg-foreground/50 backdrop-blur-xl border-white/10 shadow-lg"
          }`}
        >
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="AgentVista" className="h-7" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13px] font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => setDemoOpen(true)}
              className="px-5 py-2 text-[13px] font-semibold rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Request a Demo
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/80"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
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
                    onClick={(e) => handleNavClick(e, link.href)}
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
