import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "LendBuzz",
      role: "Frontend Engineering Co-op",
      location: "Boston, MA",
      period: "Jan 2025 — Aug 2025",
      highlights: [
        "Built responsive GPS access module from Figma designs using Angular 17, TypeScript, and Angular Material through rapid prototyping, improving usability for 100+ users",
        "Integrated Google Maps API with draggable UI components for real-time geolocation, increasing user engagement by 30%",
        "Optimized frontend performance using Chrome DevTools and Lighthouse, reducing page load times by 40%",
        "Implemented NgRx state management for loan eligibility workflows, reducing manual underwriting time by 30%",
        "Collaborated in Agile sprints to ship features weekly with changing requirements and tight deadlines"
      ]
    },
    {
      company: "Northeastern University",
      role: "Software Development Research Assistant",
      location: "Boston, MA",
      period: "Oct 2024 — Feb 2025",
      highlights: [
        "Architected GPU-based infrastructure for LLM-powered apps",
        "Built scalable AI-powered grading apps, increasing efficiency by 60%",
        "Led development of Voice Coach AI with React.js/Node.js + Whisper ASR",
        "Automated deployment pipelines with CI/CD + Docker"
      ]
    },
    {
      company: "NTT Data Services",
      role: "Information Technology Senior Associate",
      location: "Bangalore, IN",
      period: "Jul 2021 — Aug 2023",
      highlights: [
        "Led frontend development of React/Next.js interfaces for internal ERP tools",
        "Engineered Spring Boot REST APIs for invoice automation",
        "Reduced manual processes by 40% through automation",
        "Lowered defect recurrence by 30% through code refactoring"
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
