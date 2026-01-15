import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Bot, Mic, Server } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CineGenie",
      subtitle: "AI-Based Ticket Booking App",
      description: "AI-powered movie ticketing application with personalized recommendations, achieving 2x user engagement.",
      technologies: ["Node.js", "React", "MongoDB", "AWS S3", "AWS EC2"],
      highlights: [
        "Personalized AI recommendations",
        "50% reduction in media load times",
        "Secure media transfer protocols"
      ],
      icon: Rocket,
      color: "primary"
    },
    {
      title: "ChatGPT Clone",
      subtitle: "Multi-LLM Integration",
      description: "Responsive chat interface integrating 5 different LLMs for enhanced query flexibility.",
      technologies: ["React", "Material UI", "Node.js", "Express", "MongoDB"],
      highlights: [
        "5 LLM integrations",
        "40% latency reduction",
        "High-performance backend"
      ],
      icon: Bot,
      color: "secondary"
    },
    {
      title: "Voice Coach AI",
      subtitle: "Presentation Skills Platform",
      description: "SaaS platform with speech recognition for improving presentation skills and public speaking.",
      technologies: ["React.js", "Node.js", "Whisper ASR", "Docker"],
      highlights: [
        "Real-time speech analysis",
        "45% engagement boost",
        "Automated deployment"
      ],
      icon: Mic,
      color: "accent"
    },
    {
      title: "GPU Infrastructure",
      subtitle: "LLM Application Platform",
      description: "GPU-based infrastructure for deploying and scaling LLM-powered applications efficiently.",
      technologies: ["React.js", "Node.js", "Docker", "Hugging Face", "Llama"],
      highlights: [
        "40% faster deployment",
        "25% cost reduction",
        "Scalable architecture"
      ],
      icon: Server,
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "from-primary to-primary/50 border-primary/50 shadow-primary/20",
      secondary: "from-secondary to-secondary/50 border-secondary/50 shadow-secondary/20",
      accent: "from-accent to-accent/50 border-accent/50 shadow-accent/20"
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="projects" className="py-24 px-6 bg-muted/20 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Project Journey
          </h2>
          <p className="text-muted-foreground text-lg">My development roadmap & featured builds</p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-6"></div>
        </div>

        {/* 3D Roadmap Container */}
        <div className="relative" style={{ perspective: "1000px" }}>
          {/* Central timeline line with glow */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-accent blur-md opacity-50" />
          </div>

          {/* Projects */}
          <div className="relative space-y-16 md:space-y-24">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              const Icon = project.icon;
              const colorClasses = getColorClasses(project.color);
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col animate-slide-up`}
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:block">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClasses} flex items-center justify-center shadow-lg border-4 border-background animate-pulse-slow`}>
                      <Icon className="w-7 h-7 text-foreground" />
                    </div>
                    {/* Connecting dots */}
                    <div className={`absolute ${isEven ? '-left-8' : '-right-8'} top-1/2 -translate-y-1/2 flex gap-1 ${isEven ? 'flex-row-reverse' : ''}`}>
                      <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: '0.3s' }} />
                    </div>
                  </div>

                  {/* Mobile timeline node */}
                  <div className="md:hidden mb-6 flex justify-center">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${colorClasses} flex items-center justify-center shadow-lg border-4 border-background`}>
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>

                  {/* Card container */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <Card 
                      className={`group relative p-6 md:p-8 bg-card/80 backdrop-blur-md border-2 ${colorClasses.split(' ')[1]} hover:border-opacity-100 transition-all duration-500 hover:shadow-2xl overflow-hidden`}
                      style={{
                        transform: `rotateY(${isEven ? '2' : '-2'}deg) rotateX(1deg)`,
                        transformStyle: "preserve-3d"
                      }}
                    >
                      {/* 3D depth layers */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      
                      {/* Floating 3D accent */}
                      <div 
                        className={`absolute -top-4 ${isEven ? '-right-4' : '-left-4'} w-20 h-20 bg-gradient-to-br ${colorClasses} rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity`}
                        style={{ transform: "translateZ(20px)" }}
                      />

                      <div className="relative z-10">
                        {/* Project number badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${colorClasses} text-xs font-bold text-foreground mb-4`}>
                          <span>0{index + 1}</span>
                          <span className="w-1 h-1 rounded-full bg-foreground/50" />
                          <span>{project.subtitle}</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Highlights with animated checkmarks */}
                        <div className="mb-6 space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-center gap-3 text-sm"
                              style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                              <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${colorClasses} flex items-center justify-center`}>
                                <span className="text-[10px] text-foreground">✓</span>
                              </span>
                              <span className="text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech stack with 3D hover */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx}
                              variant="outline"
                              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:-translate-y-1 hover:shadow-lg cursor-default"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              );
            })}
          </div>

          {/* End node */}
          <div className="flex justify-center mt-16">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-xl animate-pulse-slow">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-xl opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
