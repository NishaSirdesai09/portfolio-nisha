import { useState, useEffect } from "react";
import aiCharacter from "@/assets/ai-character.jpg";

const AiCharacter = () => {
  const [isWaving, setIsWaving] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Appear after a short delay
    const appearTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Start waving animation cycle
    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 2000);
    }, 5000);

    return () => {
      clearTimeout(appearTimer);
      clearInterval(waveInterval);
    };
  }, []);

  return (
    <div
      className={`fixed right-0 bottom-20 z-50 transition-transform duration-700 ease-out ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="relative group cursor-pointer" onClick={() => setIsWaving(true)}>
        {/* Speech bubble */}
        <div
          className={`absolute -top-16 -left-32 bg-card/95 backdrop-blur-sm border border-primary/30 rounded-2xl px-4 py-2 shadow-lg transition-all duration-300 ${
            isWaving ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <p className="text-sm font-medium text-foreground whitespace-nowrap">
            👋 Hi there! Welcome!
          </p>
          <div className="absolute bottom-0 right-8 translate-y-1/2 rotate-45 w-3 h-3 bg-card/95 border-r border-b border-primary/30" />
        </div>

        {/* AI Character with waving animation */}
        <div
          className={`relative transition-transform duration-300 ${
            isWaving ? "animate-wave" : "hover:scale-105"
          }`}
        >
          {/* Glow effect behind character */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-xl scale-110 animate-pulse-slow" />
          
          {/* Character image */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/50 shadow-glow">
            <img
              src={aiCharacter}
              alt="AI Assistant"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Sparkle effects */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-ping" />
          <div className="absolute top-2 -left-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default AiCharacter;
