import { Code2, Database, Cloud, Cpu, Server, Brain, Globe, Cog, Network, Layers } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiNestjs,
  SiSpring,
  SiApachekafka,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Skills = () => {
  // Custom icon components for skills without standard icons
  const RAGIcon = ({ className, color }: { className?: string; color?: string }) => (
    <div className={`${className} relative`} style={{ color }}>
      <Brain className="w-full h-full" />
    </div>
  );

  const RESTAPIIcon = ({ className, color }: { className?: string; color?: string }) => (
    <div className={`${className} relative flex items-center justify-center`} style={{ color }}>
      <Cog className="w-full h-full" />
      <Cloud className="w-1/2 h-1/2 absolute" />
    </div>
  );

  const LLMsIcon = ({ className, color }: { className?: string; color?: string }) => (
    <div className={`${className} relative flex items-center justify-center`} style={{ color }}>
      <Network className="w-full h-full" />
    </div>
  );

  const DynamoDBIcon = ({ className, color }: { className?: string; color?: string }) => (
    <div className={`${className} relative flex items-center justify-center`} style={{ color }}>
      <Layers className="w-full h-full" />
    </div>
  );

  // Brand colors for icons
  const brandColors: Record<string, string> = {
    "JavaScript": "#F7DF1E",
    "TypeScript": "#3178C6",
    "Python": "#3776AB",
    "Java": "#ED8B00",
    "C/C++": "#00599C",
    "HTML/CSS": "#E34F26",
    "React.js": "#61DAFB",
    "Next.js": "#000000",
    "Angular": "#DD0031",
    "Tailwind CSS": "#06B6D4",
    "Bootstrap": "#7952B3",
    "Node.js": "#339933",
    "Nest.js": "#E0234E",
    "Spring Boot": "#6DB33F",
    "Apache Kafka": "#231F20",
    "REST APIs": "#4A90E2",
    "AWS": "#FF9900",
    "Azure": "#0089D6",
    "Docker": "#2496ED",
    "Kubernetes": "#326CE5",
    "CI/CD": "#4A90E2",
    "Jenkins": "#D24939",
    "PostgreSQL": "#4169E1",
    "MongoDB": "#47A248",
    "MySQL": "#4479A1",
    "DynamoDB": "#4053D6",
    "Redis": "#DC382D",
    "PyTorch": "#EE4C2C",
    "TensorFlow": "#FF6F00",
    "LLMs": "#4A90E2",
    "RAG": "#8B5CF6",
    "Hugging Face": "#FFD21E",
  };

  // Map skill names to their icons
  const skillIconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> | { className?: string; color?: string }> | null> = {
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "Python": SiPython,
    "Java": FaJava,
    "C/C++": SiCplusplus,
    "HTML/CSS": SiHtml5,
    "React.js": SiReact,
    "Next.js": SiNextdotjs,
    "Angular": SiAngular,
    "Tailwind CSS": SiTailwindcss,
    "Bootstrap": SiBootstrap,
    "Node.js": SiNodedotjs,
    "Nest.js": SiNestjs,
    "Spring Boot": SiSpring,
    "Apache Kafka": SiApachekafka,
    "REST APIs": RESTAPIIcon as any,
    "AWS": SiAmazon,
    "Azure": null,
    "Docker": SiDocker,
    "Kubernetes": SiKubernetes,
    "CI/CD": null,
    "Jenkins": SiJenkins,
    "PostgreSQL": SiPostgresql,
    "MongoDB": SiMongodb,
    "MySQL": SiMysql,
    "DynamoDB": DynamoDBIcon as any,
    "Redis": SiRedis,
    "PyTorch": SiPytorch,
    "TensorFlow": SiTensorflow,
    "LLMs": LLMsIcon as any,
    "RAG": RAGIcon as any,
    "Hugging Face": SiHuggingface,
  };

  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C/C++", "HTML/CSS"]
    },
    {
      icon: Server,
      title: "Frontend",
      skills: ["React.js", "Next.js", "Angular", "Tailwind CSS", "Bootstrap"]
    },
    {
      icon: Cpu,
      title: "Backend & AI/ML",
      skills: ["Node.js", "Nest.js", "Spring Boot", "Apache Kafka", "REST APIs", "PyTorch", "TensorFlow", "LLMs", "RAG", "Hugging Face"]
    },
    {
      icon: Database,
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 overflow-hidden bg-background dark:bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto"></div>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, index) => {
            const isLeftToRight = index % 2 === 0; // Alternating directions

            return (
              <div key={index} className="space-y-6">
                {/* Category Title - Centered and Fixed */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-primary">
                      <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                    <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    {category.title}
                  </h3>
                </div>
                </div>

                {/* Scrolling Skills Icons - Centered and Synchronous */}
                <div className="relative overflow-hidden py-4">
                  <div className="flex justify-center">
                    <div
                      className={`flex gap-8 items-center ${
                        isLeftToRight ? "animate-scroll-left" : "animate-scroll-right"
                      }`}
                      style={{
                        animationDuration: `20s`,
                      }}
                    >
                      {/* Single set of skills - no duplicates */}
                      {category.skills.map((skill, idx) => {
                        const IconComponent = skillIconMap[skill];
                        const hasIcon = IconComponent !== null && IconComponent !== undefined;
                        const iconColor = brandColors[skill];
                        
                        return (
                    <div
                            key={skill}
                            className="flex-shrink-0 group flex flex-col items-center gap-2"
                            title={skill}
                          >
                            {hasIcon ? (
                              <>
                                <div className="w-20 h-20 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:scale-110 hover:shadow-glow">
                                  <IconComponent 
                                    className="w-10 h-10 transition-all" 
                                    color={iconColor}
                                  />
                                </div>
                                <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                                  {skill}
                                </span>
                              </>
                            ) : (
                              <div className="px-6 py-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:scale-110 hover:shadow-glow">
                                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                        {skill}
                      </span>
                    </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
