import logo from "@/assets/agent-vista-logo.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "/home" },
  { label: "Features", href: "/features" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Benefits", href: "/benefits" },
  { label: "Contact Us", href: "/contact" },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-6xl px-4 lg:px-8 py-10 md:py-14">
        {/* Main Footer Content - Flexbox with specific column widths and space-between */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 md:gap-12 lg:gap-0">
          {/* Brand Column - 35% width on lg */}
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <button
              onClick={(e) => handleNavClick(e, "/home")}
              className="cursor-pointer hover:opacity-80 transition-opacity mb-4 flex items-center"
              aria-label="Go to home"
            >
              <img src={logo} alt="AgentVista" className="h-9" />
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering Agent Operations on Salesforce with Smart Automation, Better Insights, and Seamless Management.
            </p>
          </div>

          {/* Quick Links Column - 15% width on lg */}
          <div className="w-full lg:w-[15%] flex-shrink-0">
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className="text-sm text-muted-foreground hover:text-brand-blue transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column - 18% width on lg */}
          <div className="w-full lg:w-[18%] flex-shrink-0">
            <h4 className="font-bold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span>🌐</span>
                <a href="https://www.agentsvista.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">
                  www.agentsvista.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@ardira.com" className="hover:text-brand-blue transition-colors">
                  info@ardira.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:16697776838" className="hover:text-brand-blue transition-colors">
                  1.669.777.6838
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ardira Corporation. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/terms-of-use" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">Terms of Use</Link>
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
