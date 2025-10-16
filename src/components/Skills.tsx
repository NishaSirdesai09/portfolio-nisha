import { Code2, Database, Cloud, Cpu, Server, Brain } from "lucide-react";

const Skills = () => {
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
      title: "Backend",
      skills: ["Node.js", "Nest.js", "Spring Boot", "Apache Kafka", "REST APIs"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Jenkins"]
    },
    {
      icon: Database,
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis"]
    },
    {
      icon: Brain,
      title: "AI/ML",
      skills: ["PyTorch", "TensorFlow", "LLMs", "RAG", "Hugging Face"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-glow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-primary">
                    <category.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/30 hover:bg-secondary/30 hover:border-secondary/50 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
