import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full-Stack Software Engineer";
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
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

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-gradient-hero"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary/20 rotate-45 animate-spin-slow" style={{ animationDuration: '30s' }} />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-secondary/20 rotate-12 animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-accent/20 animate-pulse-slow" />
      </div>

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
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent drop-shadow-lg">
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
              className="group border-primary/50 hover:border-primary hover:bg-primary/10 backdrop-blur-sm"
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
              className="group border-secondary/50 hover:border-secondary hover:bg-secondary/10 backdrop-blur-sm"
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
              className="group border-accent/50 hover:border-accent hover:bg-accent/10 backdrop-blur-sm"
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
