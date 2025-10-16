import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C/C++", "HTML/CSS"],
      color: "primary"
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Angular", "Tailwind CSS", "Bootstrap"],
      color: "secondary"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Nest.js", "Spring Boot", "Apache Kafka", "REST APIs"],
      color: "accent"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Jenkins"],
      color: "primary"
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis"],
      color: "secondary"
    },
    {
      title: "AI/ML",
      skills: ["PyTorch", "TensorFlow", "LLMs", "RAG", "Hugging Face"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={idx}
                    variant="outline"
                    className={`
                      border-${category.color}/50 
                      hover:border-${category.color} 
                      hover:bg-${category.color}/10
                      transition-all duration-300
                      cursor-default
                    `}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
