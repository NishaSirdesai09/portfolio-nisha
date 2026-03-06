import { useState } from "react";
import { Mail, Send, ArrowRight, Copy, Check, Linkedin, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/*
  Suggestions for what to add instead of Location / Phone:
  - Copy-email button with success feedback (implemented)
  - "Available for work" status pill with pulse (implemented)
  - LinkedIn + GitHub links (implemented)
  - Optional later: Calendly link, "I typically respond within 24h", timezone (e.g. EST)
*/

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "nishasirdesai06@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-background dark:bg-transparent">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - CTA */}
          <div className="animate-slide-in-left space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Ready to build something
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  amazing together?
                </span>
              </h3>
              <p className="text-lg text-muted-foreground">
                I'm currently seeking full-time Software Engineering opportunities starting Dec 2025.
              </p>
            </div>

            <Button 
              size="lg"
              className="group bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 shadow-glow"
              asChild
            >
              <a href="mailto:nishasirdesai06@gmail.com" className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Send a Message
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">Or download my resume</p>
              <Button
                variant="outline"
                className="border-primary/50 hover:border-primary hover:bg-primary/10"
                asChild
              >
                {/* Place your resume file at `public/resume.pdf` so this link downloads it */}
                <a
                  href="/Nisha_Software_Engineer_Jan2026.pdf"
                  download="NishaSirdesai_Resume.pdf"
                  className="flex items-center gap-2"
                  aria-label="Download Resume"
                >
                  Download Resume
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Contact Info (Location & Phone commented out) */}
          <div className="animate-slide-in-right space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl" />
              <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-6 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-glow dark:bg-card/60 animate-border-glow">
                {/* Status pill – top portfolios use this */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-foreground">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    Open to work · From Dec 2025
                  </span>
                  <Sparkles className="h-4 w-4 text-primary/70" aria-hidden />
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 rounded-lg bg-gradient-primary shrink-0 group-hover/item:scale-110 transition-transform">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={`mailto:${email}`}
                        className="text-base font-medium hover:text-primary transition-colors"
                      >
                        {email}
                      </a>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 shrink-0 text-muted-foreground hover:text-primary transition-colors"
                        onClick={copyEmail}
                        aria-label="Copy email"
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* LinkedIn & GitHub – standard for top candidates */}
                <div className="pt-2 border-t border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Connect
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/nisha-sirdesai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 group/link"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-[#0A66C2] group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/NishaSirdesai09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 group/link"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5 text-foreground group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Commented out: Location & Phone
                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 rounded-lg bg-gradient-primary shrink-0">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+18573904697" className="text-base font-medium hover:text-primary">(857) 390-4697</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 rounded-lg bg-gradient-primary shrink-0">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                    <p className="text-base font-medium">Boston, MA, USA</p>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
