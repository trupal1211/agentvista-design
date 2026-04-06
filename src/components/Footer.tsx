import logo from "@/assets/agent-vista-logo.svg";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Benefits", href: "#benefits" },
  { label: "Contact Us", href: "#contact" },
];

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  const id = href.replace("#", "");
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-10 md:py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="AgentVista" className="h-9 mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering Agent Operations on Salesforce with Smart Automation, Better Insights, and Seamless Management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span>🌐</span>
                <a href="https://www.agentvista.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.agentvista.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@agentvista.com" className="hover:text-primary transition-colors">
                  info@agentvista.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:16697776838" className="hover:text-primary transition-colors">
                  1.669.777.6838
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AgentVista. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/terms-of-use" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link>
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
