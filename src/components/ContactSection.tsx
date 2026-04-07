import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Contact Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions or want to learn more? Reach out and we'll get back to you promptly.
          </p>
        </motion.div>

        {/* Main Contact Grid */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[40%_60%] gap-8 mb-8">
          {/* Left: Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-6">Quick Contact</h3>
              <p className="text-muted-foreground text-sm mb-6">Get in touch with a SurveyVista representative to see a demo or simply learn more about our products.</p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {/* Address */}
              <a href="https://www.google.com/maps?cid=1981104171238256651" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm">Address</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">2040 Marlin Ave, Santa Clara, CA 95050<br/>United States</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:16697776838" className="flex items-start gap-4 p-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm">Phone</p>
                  <p className="text-xs text-muted-foreground">1 669 777.6838</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@agentvista.com" className="flex items-start gap-4 p-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm">Email</p>
                  <p className="text-xs text-muted-foreground">info@agentvista.com</p>
                </div>
              </a>
            </div>

            {/* Support Note */}
            <div className="flex items-start gap-3 p-4 rounded-xl border border-secondary/20 bg-secondary/5">
              <div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 text-sm font-bold flex-shrink-0">✓</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">For customer support,</span> email us directly at <a href="mailto:support@agentvista.com" className="text-primary hover:underline">support@agentvista.com</a></p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 bg-card rounded-2xl border border-border">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Send size={28} className="text-secondary" />
                </div>
                <p className="font-bold text-foreground text-lg">Message Sent!</p>
                <p className="text-muted-foreground text-sm mt-1">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Fill out the form and we'll be in touch shortly!</h3>
                  <p className="text-xs text-muted-foreground">Note: fields marked with <span className="text-red-500">(*)</span> are mandatory</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name<span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required 
                    value={form.name} 
                    onChange={(e) => setForm({ ...form, name: e.target.value })} 
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" 
                    placeholder="Enter your name" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email<span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    required 
                    value={form.email} 
                    onChange={(e) => setForm({ ...form, email: e.target.value })} 
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" 
                    placeholder="Enter your email" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone<span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    required 
                    value={form.phone} 
                    onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" 
                    placeholder="Enter your phone number" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea 
                    rows={5} 
                    value={form.message} 
                    onChange={(e) => setForm({ ...form, message: e.target.value })} 
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none" 
                    placeholder="Lets talk! Tell us about yourself." 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  We're committed to your privacy. SurveyVista uses the information you provide us to contact you about relevant content, products and services. You may unsubscribe from these communications at any time. For information, check out our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>

                {/* Map at bottom of form */}
                <div className="mt-6 rounded-xl overflow-hidden h-[250px] border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.0408705886853!2d-121.96206399999998!3d37.3652098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fca3b29bd16bd%3A0x1b7e4bbf55b3700b!2s2040%20Martin%20Ave%2C%20Santa%20Clara%2C%20CA%2095050%2C%20USA!5e0!3m2!1sen!2sin!4v1775555880200!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
