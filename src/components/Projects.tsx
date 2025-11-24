import { Card } from "@/components/ui/card";
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Card 
                className="h-full p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 group relative overflow-hidden"
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                
                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary text-sm font-semibold mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 mb-6">
                  <p className="text-sm font-semibold mb-3 text-accent">Key Highlights:</p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-primary">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge 
                      key={idx}
                      variant="outline"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
