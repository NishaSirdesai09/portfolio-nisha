import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ChevronRight, Users, Lightbulb, Code, Zap } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  technologies: string[];
  highlights: string[];
  process: string;
  collaboration: string;
  designThinking: string;
  impact: string;
};

function ProjectCardContent({
  project,
  index,
  isExpanded,
  onToggleExpand,
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
}) {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent"></div>
      </div>
      <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-accent font-semibold mb-6 text-lg">{project.subtitle}</p>
      <p className="text-muted-foreground mb-6 leading-relaxed text-base">
        {project.description}
      </p>
      <div className="mb-6">
        <p className="text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
          <Zap className="h-4 w-4 text-primary" />
          Key Highlights
        </p>
        <ul className="space-y-2">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-1">▹</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
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
      <button
        onClick={onToggleExpand}
        className="w-full lg:w-auto px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
      >
        <span>{isExpanded ? "Show Less" : "Learn More"}</span>
        <ChevronRight
          className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : "group-hover/btn:translate-x-1"}`}
        />
      </button>
      {isExpanded && (
        <div className="mt-8 pt-8 border-t border-border/50 animate-slide-down space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Code className="h-5 w-5 text-primary" />
              <span>Process & Approach</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-7">
              {project.process}
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Users className="h-5 w-5 text-primary" />
              <span>Collaboration</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-7">
              {project.collaboration}
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Lightbulb className="h-5 w-5 text-primary" />
              <span>Design Thinking</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-7">
              {project.designThinking}
            </p>
          </div>
          <div className="bg-primary/10 dark:bg-primary/5 rounded-lg p-4 border border-primary/20">
            <p className="text-sm font-semibold text-foreground mb-2">
              Impact & Results
            </p>
            <p className="text-sm text-muted-foreground">{project.impact}</p>
          </div>
        </div>
      )}
    </>
  );
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "CineGenie",
      subtitle: "AI-Based Ticket Booking App",
      image: "/project-cinegenie.png",
      description: "AI-powered movie ticketing application with personalized recommendations, achieving 2x user engagement.",
      technologies: ["Node.js", "React", "MongoDB", "AWS S3", "AWS EC2"],
      highlights: [
        "Personalized AI recommendations",
        "50% reduction in media load times",
        "Secure media transfer protocols"
      ],
      process: "Started with user research to understand movie-goer pain points. Created wireframes and prototypes in Figma, then iterated based on feedback. Built MVP focusing on core booking flow before adding AI features.",
      collaboration: "Worked closely with UX designer on user flows, collaborated with backend team on API design, and coordinated with DevOps for AWS deployment. Used daily standups and weekly demos to align with stakeholders.",
      designThinking: "Prioritized user experience by implementing lazy loading for media, reducing perceived wait time. Used A/B testing to validate AI recommendation algorithms. Balanced technical constraints with user needs.",
      impact: "2x user engagement increase, 50% faster load times, positive user feedback on recommendation accuracy"
    },
    {
      title: "ChatGPT Clone",
      subtitle: "Multi-LLM Integration",
      image: "/project-chatgpt-clone.png",
      description: "Responsive chat interface integrating 5 different LLMs for enhanced query flexibility.",
      technologies: ["React", "Material UI", "Node.js", "Express", "MongoDB"],
      highlights: [
        "5 LLM integrations",
        "40% latency reduction",
        "High-performance backend"
      ],
      process: "Analyzed requirements for multi-LLM support, designed unified API interface, implemented streaming responses for better UX. Used React Query for efficient state management and caching.",
      collaboration: "Coordinated with AI/ML team to understand LLM capabilities, worked with backend engineers on API architecture, and gathered feedback from beta users. Used GitHub PR reviews for code quality.",
      designThinking: "Designed intuitive UI for switching between LLMs, implemented real-time streaming for better perceived performance. Created fallback mechanisms for API failures. Focused on accessibility and responsive design.",
      impact: "40% latency reduction through optimization, seamless multi-LLM experience, high user satisfaction"
    },
    {
      title: "Voice Coach AI",
      subtitle: "Presentation Skills Platform",
      image: "/project-voice-coach.png",
      description: "SaaS platform with speech recognition for improving presentation skills and public speaking.",
      technologies: ["React.js", "Node.js", "Whisper ASR", "Docker"],
      highlights: [
        "Real-time speech analysis",
        "45% engagement boost",
        "Automated deployment"
      ],
      process: "Researched speech analysis APIs, prototyped real-time audio processing, designed feedback UI. Implemented Docker containerization for consistent deployment. Used CI/CD for automated testing and deployment.",
      collaboration: "Partnered with speech recognition experts for ASR integration, collaborated with product manager on feature prioritization, worked with QA team on testing strategy. Conducted user interviews for feedback.",
      designThinking: "Designed clear, actionable feedback UI that doesn't overwhelm users. Implemented progressive disclosure for advanced features. Created visualizations for speech patterns. Prioritized privacy and data security.",
      impact: "45% engagement boost, positive user testimonials, successful deployment to production"
    },
    {
      title: "GPU Infrastructure",
      subtitle: "LLM Application Platform",
      image: "/project-gpu-infrastructure.png",
      description: "GPU-based infrastructure for deploying and scaling LLM-powered applications efficiently.",
      technologies: ["React.js", "Node.js", "Docker", "Hugging Face", "Llama"],
      highlights: [
        "40% faster deployment",
        "25% cost reduction",
        "Scalable architecture"
      ],
      process: "Architected infrastructure from ground up, evaluated GPU providers, designed container orchestration. Created monitoring and logging systems. Implemented auto-scaling based on load.",
      collaboration: "Led cross-functional team including DevOps, ML engineers, and backend developers. Coordinated with cloud providers for GPU resources. Presented architecture decisions to stakeholders.",
      designThinking: "Designed for scalability and cost-efficiency. Implemented resource pooling to reduce costs. Created intuitive admin dashboard for monitoring. Balanced performance with cost constraints.",
      impact: "40% faster deployment times, 25% cost reduction through optimization, scalable to handle 10x load"
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-[hsl(var(--sky-blue))] dark:bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my recent work, showcasing process, collaboration, and design thinking
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line - centered in section, not inside cards */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block opacity-60 z-0" aria-hidden="true"></div>

          <div className="space-y-24 lg:space-y-32 relative z-10">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedProject === index;

              return (
                <div
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Desktop: 3-column grid so line stays in center column between image and card */}
                  <div className="flex flex-col lg:grid lg:grid-cols-[1fr_24px_1fr] lg:gap-x-6 items-center gap-8">
                    {/* Left column: image when even, card when odd (no order – stay in column 1 so image is visible) */}
                    <div className="w-full min-w-0">
                      {isEven ? (
                        <div
                          className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl hover:shadow-glow transition-all duration-500"
                          onClick={() => toggleExpand(index)}
                        >
                          <div className="aspect-[16/10] w-full relative bg-muted/30 overflow-hidden">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "/placeholder.svg";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span>Click for Details</span>
                                <ChevronRight className="h-4 w-4" />
                              </div>
                            </div>
                          </div>
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                        </div>
                      ) : (
                        <Card className="p-8 lg:p-10 bg-card/80 dark:bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group">
                          <ProjectCardContent project={project} index={index} isExpanded={isExpanded} onToggleExpand={() => toggleExpand(index)} />
                        </Card>
                      )}
                    </div>

                    {/* Center column: timeline dot only (line is absolute behind) */}
                    <div className="hidden lg:flex justify-center items-start pt-8">
                      <div className="w-6 h-6 rounded-full bg-primary border-4 border-background dark:border-muted/20 flex-shrink-0 shadow-lg animate-pulse-slow z-10" />
                    </div>

                    {/* Right column: card when even, image when odd */}
                    <div className="w-full min-w-0">
                      {isEven ? (
                        <Card className="p-8 lg:p-10 bg-card/80 dark:bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group">
                          <ProjectCardContent project={project} index={index} isExpanded={isExpanded} onToggleExpand={() => toggleExpand(index)} />
                        </Card>
                      ) : (
                        <div
                          className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl hover:shadow-glow transition-all duration-500"
                          onClick={() => toggleExpand(index)}
                        >
                          <div className="aspect-[16/10] w-full relative bg-muted/30 overflow-hidden">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "/placeholder.svg";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span>Click for Details</span>
                                <ChevronRight className="h-4 w-4" />
                              </div>
                            </div>
                          </div>
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
