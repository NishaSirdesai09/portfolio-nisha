import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Information Systems",
      school: "Northeastern University",
      location: "Boston, MA",
      period: "Sep 2023 — May 2025",
      gpa: "3.7/4.0",
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
      period: "Aug 2017 — Jul 2021",
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
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur-xl" />
            <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center transition-all duration-300 group-hover:border-primary/50">
              <div className="inline-flex p-4 rounded-full bg-gradient-primary mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Oracle Cloud Platform Certified
              </h3>
              <p className="text-lg text-muted-foreground">
                Application Integration 2021 Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
