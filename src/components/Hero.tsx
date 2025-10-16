import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full-Stack Software Engineer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero animate-gradient-shift bg-200%" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            NISHA SIRDESAI
          </h1>
          <div className="h-12 mb-8">
            <p className="text-2xl md:text-3xl text-foreground/90 font-mono">
              {displayText}
              <span className="animate-glow">|</span>
            </p>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Building scalable applications with modern technologies, AI/ML integration, 
            and cloud infrastructure. Passionate about creating exceptional user experiences.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-12">
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/50 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/nishasirdesai" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-secondary/50 hover:border-secondary hover:bg-secondary/10"
              asChild
            >
              <a href="https://linkedin.com/in/nisha-sirdesai-a89883189/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5 group-hover:text-secondary transition-colors" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-accent/50 hover:border-accent hover:bg-accent/10"
              asChild
            >
              <a href="mailto:nishasirdesai09@gmail.com">
                <Mail className="mr-2 h-5 w-5 group-hover:text-accent transition-colors" />
                Contact
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
