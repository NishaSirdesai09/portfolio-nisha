import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Information Systems",
      school: "Northeastern University",
      location: "Boston, MA",
      period: "Sep 2023 — Dec 2025",
      gpa: "3.8/4.0",
      coursework: [
        "Application Engineering & Development",
        "Data Science Engineering",
        "Web Design & User Experience",
        "Network Structures & Cloud Computing"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "Basaveshwar Engineering College",
      location: "Bagalkot, India",
      period: "Aug 2016 — May 2020",
      gpa: "",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Computer Networks",
        "Software Engineering"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-glow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-primary shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-secondary font-semibold mb-1">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-accent" />
                      <span className="font-semibold text-accent">{edu.gpa}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-glow">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-primary" />
              <div className="p-10 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-50" />
                    <div className="relative p-6 rounded-2xl bg-gradient-primary">
                      <Award className="h-16 w-16 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-block px-4 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                      Professional Certification
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                      Oracle Cloud Platform Certified
                    </h3>
                    <p className="text-xl text-muted-foreground mb-2">
                      Application Integration 2021 Specialist
                    </p>
                    <p className="text-sm text-muted-foreground/80">
                      Certified in designing and implementing integration solutions on Oracle Cloud Platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
