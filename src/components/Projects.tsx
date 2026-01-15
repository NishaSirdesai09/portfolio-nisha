import { Badge } from "@/components/ui/badge";

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
      color: "primary"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-muted/20 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Project Journey
          </h2>
          <p className="text-muted-foreground text-lg">Follow my development roadmap</p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-6"></div>
        </div>

        {/* 3D Roadmap Timeline */}
        <div className="relative">
          {/* Central 3D path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-accent rounded-full blur-md opacity-50" />
          </div>

          {/* Projects */}
          <div className="space-y-16 md:space-y-24">
            {projects.map((project, index) => {
              const isLeft = index % 2 === 0;
              const colorClass = project.color === "primary" 
                ? "from-primary to-primary/50 border-primary/50" 
                : project.color === "secondary"
                ? "from-secondary to-secondary/50 border-secondary/50"
                : "from-accent to-accent/50 border-accent/50";

              return (
                <div
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 z-20 hidden md:block">
                    <div className="relative">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${colorClass} border-2 shadow-glow`} />
                      <div className={`absolute inset-0 w-6 h-6 rounded-full bg-${project.color} animate-ping opacity-30`} />
                      <div className="absolute -top-1 -left-1 w-8 h-8 border border-primary/30 rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Project Card with 3D effect */}
                  <div
                    className={`md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div 
                      className="group relative perspective-1000"
                      style={{ perspective: "1000px" }}
                    >
                      {/* 3D Card */}
                      <div 
                        className="relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 transition-all duration-500 transform-gpu hover:scale-[1.02]"
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        {/* Glowing edge */}
                        <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                        
                        {/* Card content */}
                        <div className="relative z-10 bg-card/95 backdrop-blur-sm rounded-xl p-6">
                          {/* Project number badge */}
                          <div className={`absolute -top-4 ${isLeft ? 'right-4' : 'left-4'} md:${isLeft ? '-right-4' : '-left-4'} w-10 h-10 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-primary-foreground font-bold shadow-lg`}>
                            {String(index + 1).padStart(2, '0')}
                          </div>

                          {/* Floating 3D decoration */}
                          <div 
                            className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity"
                            style={{
                              background: `radial-gradient(circle, hsl(var(--${project.color})) 0%, transparent 70%)`,
                            }}
                          />

                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className={`text-${project.color} text-sm font-semibold mb-4`}>
                            {project.subtitle}
                          </p>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Highlights with animated dots */}
                          <div className="mb-6">
                            <p className="text-sm font-semibold mb-3 text-accent">Key Achievements:</p>
                            <ul className="space-y-2">
                              {project.highlights.map((highlight, idx) => (
                                <li 
                                  key={idx} 
                                  className="flex items-center gap-3 text-sm text-muted-foreground group/item"
                                >
                                  <span className={`w-2 h-2 rounded-full bg-${project.color} group-hover/item:animate-ping`} />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech stack with 3D hover */}
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge 
                                key={idx}
                                variant="outline"
                                className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:-translate-y-1 hover:shadow-md cursor-default"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* 3D shadow */}
                        <div className="absolute -bottom-2 left-4 right-4 h-8 bg-black/10 rounded-2xl blur-xl transform-gpu translate-z-[-20px]" />
                      </div>

                      {/* Connection line to timeline */}
                      <div 
                        className={`hidden md:block absolute top-10 h-[2px] w-12 bg-gradient-to-r ${colorClass} ${
                          isLeft ? "right-0 translate-x-full" : "left-0 -translate-x-full"
                        }`}
                      >
                        <div className={`absolute ${isLeft ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-${project.color}`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* End marker */}
          <div className="flex justify-center mt-16">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-glow animate-pulse-slow">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-ping opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
