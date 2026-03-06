import { Code2, Database, Cloud, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Expert in React, Next.js, Node.js, Spring Boot, and modern web technologies"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "AWS, Azure, and Oracle Cloud Infrastructure for scalable solutions"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Proficient in SQL and NoSQL databases including PostgreSQL, MongoDB"
    },
    {
      icon: Brain,
      title: "AI/ML Integration",
      description: "Experience with LLMs, RAG pipelines, PyTorch, and TensorFlow"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[hsl(var(--sky-blue))] dark:bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a software engineer with a <span className="text-primary font-semibold">Master's in Information Systems from Northeastern University</span>, focused on building user-facing products that are fast, reliable, and easy to use.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I recently completed a <span className="text-secondary font-semibold">Frontend Engineering Co-op at LendBuzz</span>, where I built a responsive GPS access module in Next.js and TypeScript, integrated Google Maps API for real-time geolocation, and improved performance using Sentry and Chrome DevTools.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 2 years of professional experience, I've successfully delivered enterprise-level applications, 
              implemented CI/CD pipelines, and architected GPU-based infrastructure for AI applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy working at the intersection of frontend, product, and AI, where good design and strong engineering come together to create real impact.
            </p>
            <div className="flex gap-4 text-sm">
              <div>
                <p className="text-accent font-semibold text-xl">3.8</p>
                <p className="text-muted-foreground">GPA</p>
              </div>
              <div className="border-l border-border pl-4">
                <p className="text-primary font-semibold text-xl">Oracle Certified</p>
                <p className="text-muted-foreground">Cloud Platform Specialist</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 animate-slide-in-right">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card 
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group hover:scale-[1.02]"
                >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
