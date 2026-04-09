import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RecaptchaProvider } from "@/components/recaptcha/RecaptchaProvider";
import SEOSchema from "@/components/SEOSchema";
import CanonicalURL from "@/components/CanonicalURL";
import Index from "./pages/Index.tsx";
import TermsOfUse from "./pages/TermsOfUse.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RecaptchaProvider>
      <TooltipProvider>
        <SEOSchema />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CanonicalURL />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index section="home" />} />
          <Route path="/features" element={<Index section="features" />} />
          <Route path="/benefits" element={<Index section="benefits" />} />
          <Route path="/use-cases" element={<Index section="use-cases" />} />
          <Route path="/contact" element={<Index section="contact" />} />
          <Route path="/faq" element={<Index section="faq" />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </RecaptchaProvider>
  </QueryClientProvider>
);

export default App;
