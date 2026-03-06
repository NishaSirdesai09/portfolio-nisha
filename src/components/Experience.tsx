import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "LendBuzz Inc.",
      role: "Frontend Engineering Co-op",
      location: "Boston, MA",
      period: "Jan 2025 — Aug 2025",
      highlights: [
        "Built GPS Access page from Figma using Next.js, TypeScript, React Hooks, and TailwindCSS for 100+ users",
        "Integrated Google Maps and backend loan APIs with draggable UI, improving dealer workflows by 30%",
        "Managed client state with Redux-style patterns for end-to-end loan eligibility flows",
        "Improved performance and reliability using Chrome DevTools, Lighthouse, Web Vitals, and Sentry"
      ]
    },
    {
      company: "Northeastern University – DMSB AI Strategic Hub",
      role: "Software Development Research Assistant",
      location: "Boston, MA",
      period: "Sep 2024 — Dec 2024; Sep 2025 — Dec 2025",
      highlights: [
        "Built Voice Coach AI (React + Node.js + Whisper ASR) for real-time speech feedback, increasing engagement by 45%",
        "Developed AI AgentWorld (React + Node.js) with RAG using Qdrant vector DB and multiple LLMs for faster support",
        "Implemented essay grading UI on AWS GPU (Gemma, Mistral, vLLM, RabbitMQ) with rubric-based feedback, improving efficiency by 60%",
        "Optimized GPU inference pipelines and monitoring, improving throughput by 40% and latency by 30%"
      ]
    },
    {
      company: "NTT DATA",
      role: "Information Technology Senior Associate",
      location: "Bangalore, IN",
      period: "Jul 2021 — Aug 2023",
      highlights: [
        "Led React/Next.js frontends integrated with Spring Boot REST APIs, boosting task completion rates by 45%",
        "Built and maintained component libraries and design system elements for consistent UI across modules",
        "Optimized APIs and UIs using logs, analytics, and refactoring, cutting render time by 35% and deployment time by 30%",
        "Automated invoice and reporting flows, reducing manual operations by 40%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-background dark:bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block animate-pulse-slow"></div>

                <Card className="md:ml-20 p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group hover:scale-[1.01]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-foreground/70 mb-2">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-semibold">{exp.company}</span>
                        <span className="text-muted-foreground">• {exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1">▹</span>
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
