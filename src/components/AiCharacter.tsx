import { useState } from "react";
import aiCharacter from "@/assets/ai-character.jpg";

const AiCharacter = () => {
  const [isWaving, setIsWaving] = useState(false);

  return (
    <div 
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer"
      onMouseEnter={() => setIsWaving(true)}
      onMouseLeave={() => setIsWaving(false)}
    >
      {/* Speech bubble */}
      <div 
        className={`absolute right-24 top-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-sm border border-primary/30 rounded-2xl px-4 py-3 shadow-lg transition-all duration-500 ${
          isWaving ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
      >
        <p className="text-sm font-medium text-foreground whitespace-nowrap">
          👋 Hi! I'm Nisha's AI buddy!
        </p>
        {/* Speech bubble arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2">
          <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-primary/30"></div>
        </div>
      </div>

      {/* Character container with peek animation */}
      <div 
        className={`relative transition-transform duration-500 ease-out ${
          isWaving ? 'translate-x-0' : 'translate-x-12'
        }`}
      >
        {/* Glow effect behind character */}
        <div className="absolute inset-0 bg-gradient-to-l from-primary/30 to-transparent blur-xl animate-pulse-slow" />
        
        {/* Character image with wave animation */}
        <div 
          className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg transition-all duration-300 ${
            isWaving ? 'animate-wave border-primary' : ''
          }`}
        >
          <img 
            src={aiCharacter} 
            alt="AI Assistant Character"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating particles around character */}
        <div className="absolute -top-2 -left-2 w-3 h-3 bg-primary/60 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute -bottom-1 -left-3 w-2 h-2 bg-secondary/60 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 -left-4 w-2 h-2 bg-accent/60 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default AiCharacter;
