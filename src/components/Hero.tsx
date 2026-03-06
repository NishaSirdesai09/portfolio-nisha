import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Mail, ChevronDown, Lightbulb, Brain, Palette, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const typewriterTexts = ["FullStack Software", "AI", "Frontend"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const fixedText = "Engineer";
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  
  const animatedWords = [
    { text: "Ideas", icon: Lightbulb },
    { text: "Concepts", icon: Brain },
    { text: "Designs", icon: Palette },
    { text: "Code", icon: Code },
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 3D animated background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    // 3D Grid particles
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
    }> = [];
    
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: Math.random() * 2 + 1,
      });
    }
    
    const focalLength = 300;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    let animationId: number;
    
    const animate = () => {
      // Use dark background for dark mode, lighter for light mode
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? "rgba(13, 13, 13, 0.05)" : "rgba(255, 218, 185, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.z -= p.vz;
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.z < 1) {
          p.z = 1000;
          p.x = Math.random() * canvas.width - canvas.width / 2;
          p.y = Math.random() * canvas.height - canvas.height / 2;
        }
        
        const scale = focalLength / p.z;
        const screenX = p.x * scale + centerX;
        const screenY = p.y * scale + centerY;
        const size = Math.max(0.5, 3 * scale);
        
        // Color based on depth
        const hue = 263 + (p.z / 1000) * 60;
        const alpha = Math.min(1, (1000 - p.z) / 500);
        
        ctx.beginPath();
        ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 70%, 60%, ${alpha})`;
        ctx.fill();
        
        // Connect nearby particles
        particles.forEach((p2) => {
          const scale2 = focalLength / p2.z;
          const screenX2 = p2.x * scale2 + centerX;
          const screenY2 = p2.y * scale2 + centerY;
          
          const dist = Math.hypot(screenX - screenX2, screenY - screenY2);
          if (dist < 80 && dist > 0) {
            ctx.beginPath();
            ctx.moveTo(screenX, screenY);
            ctx.lineTo(screenX2, screenY2);
            ctx.strokeStyle = `hsla(200, 70%, 50%, ${(1 - dist / 80) * 0.3 * alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  useEffect(() => {
    const currentText = typewriterTexts[currentTextIndex];
    
    if (charIndex < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Wait before starting next text
      const timer = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [charIndex, currentTextIndex, typewriterTexts]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [animatedWords.length]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-[#FFDAB9] dark:bg-[#0d0d0d]"
      />
      
      {/* Gradient Overlay - Peach in light mode, dark in dark mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFDAB9]/30 to-[#FFDAB9] dark:via-[#0d0d0d]/30 dark:to-[#0d0d0d]" />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl animate-float"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + i * 2}s`,
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
            <p className="text-2xl md:text-3xl text-foreground/90 dark:text-white/90 font-mono">
              {displayText} {fixedText}
              <span className="animate-glow">|</span>
            </p>
          </div>
          <div className="text-xl md:text-2xl text-foreground dark:text-white max-w-3xl mx-auto mb-12">
            <p className="text-center leading-relaxed">
              Shaping
              <span className="inline-block relative align-middle mx-1 min-w-[150px] h-[1.6em]">
                {animatedWords.map((word, index) => {
                  const Icon = word.icon;
                  const isActive = index === currentWordIndex;
                  return (
                    <span
                      key={word.text}
                      className={`absolute inset-0 flex items-center justify-center gap-1.5 transition-all duration-500 ease-in-out ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : index < currentWordIndex
                          ? "opacity-0 -translate-y-full"
                          : "opacity-0 translate-y-full"
                      }`}
                    >
                      <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="font-semibold whitespace-nowrap">{word.text}</span>
                    </span>
                  );
                })}
              </span>
              into Real Projects that Deliver Results
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-12">
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/50 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/NishaSirdesai09" target="_blank" rel="noopener noreferrer">
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
              onClick={() => setIsEmailModalOpen(true)}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:text-accent transition-colors" />
              Contact
            </Button>
          </div>
        </div>

        {/* Email pop-up from Hero contact button */}
        {isEmailModalOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-background dark:bg-card rounded-2xl shadow-glow border border-border/60 px-6 py-5 max-w-sm w-[90%] text-left">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-accent/15">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">Contact Email</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                You can reach me at:
              </p>
              <a
                href="mailto:nishasirdesai06@gmail.com"
                className="block text-sm font-medium text-accent break-all mb-5"
              >
                nishasirdesai06@gmail.com
              </a>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border/60"
                  onClick={() => setIsEmailModalOpen(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20"
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
