import logo from "@/assets/agent-vista-logo.svg";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="AgentVista" className="h-8" />
          </div>

          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">Use Cases</a>
            <a href="#benefits" className="text-sm text-muted-foreground hover:text-primary transition-colors">Benefits</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AgentVista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
