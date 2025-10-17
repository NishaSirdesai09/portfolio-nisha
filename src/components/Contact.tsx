import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
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

        <div className="grid md:grid-cols-2 gap-8 items-center">
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
                I'm currently seeking full-time Software Engineering opportunities starting May 2025.
              </p>
            </div>

            <Button 
              size="lg"
              className="group bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 shadow-glow"
              asChild
            >
              <a href="mailto:nishasirdesai09@gmail.com" className="flex items-center gap-2">
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
                  href="/NishaSirdesai_Resume_FT_Oct_fsd.pdf"
                  download="Nisha_Sirdesai_Resume.pdf"
                  className="flex items-center gap-2"
                  aria-label="Download Resume"
                >
                  Download Resume
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="animate-slide-in-right space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl" />
              <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-6 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-glow">
                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 rounded-lg bg-gradient-primary shrink-0 group-hover/item:scale-110 transition-transform">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a 
                      href="mailto:nishasirdesai09@gmail.com"
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      nishasirdesai09@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 rounded-lg bg-gradient-primary shrink-0 group-hover/item:scale-110 transition-transform">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <a 
                      href="tel:+18573904697"
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      (857) 390-4697
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 rounded-lg bg-gradient-primary shrink-0 group-hover/item:scale-110 transition-transform">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-base font-medium">
                      Boston, MA, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
