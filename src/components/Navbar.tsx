import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/agent-vista-logo.svg";
import DemoRequestForm from "./DemoRequestForm";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isHome) {
        const sections = navLinks.map((l) => l.href.replace("#", ""));
        let current = "home";
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120) current = id;
          }
        }
        setActiveSection(current);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    if (!isHome) {
      window.location.href = "/" + href;
      return;
    }
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-6 lg:px-8"
        style={{ 
          paddingTop: scrolled ? '10px' : '0px',
          paddingBottom: scrolled ? '10px' : '0px',
          transition: 'padding 0.4s ease' 
        }}
      >
        <div
          className="flex items-center justify-between w-full transition-all duration-500 ease-out"
          style={{
            maxWidth: '80rem',
            padding: scrolled ? '14px 24px' : '20px 4px',
            borderRadius: scrolled ? '16px' : '0',
            background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
            border: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
            boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : 'none',
          }}
        >
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="AgentVista" className="h-7" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = isHome && activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[15px] font-medium transition-colors whitespace-nowrap"
                  style={{
                    color: isActive ? 'hsl(199 76% 52%)' : 'hsl(215 25% 35%)',
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => setDemoOpen(true)}
              className="px-6 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground/80"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-sm md:hidden"
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
                {navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = isHome && activeSection === sectionId;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`text-sm font-medium rounded-lg px-4 py-3 transition-colors ${
                        isActive
                          ? "text-primary bg-primary/5"
                          : "text-muted-foreground hover:text-primary hover:bg-accent"
                      }`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setDemoOpen(true);
                  }}
                  className="mt-3 px-4 py-3 text-sm font-semibold rounded-lg bg-primary text-primary-foreground text-center"
                >
                  Book a Demo
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
