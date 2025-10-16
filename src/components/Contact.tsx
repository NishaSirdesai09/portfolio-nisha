import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nishasirdesai09@gmail.com",
      link: "mailto:nishasirdesai09@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(857) 390-4697",
      link: "tel:+18573904697"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Boston, MA, USA",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/nisha-sirdesai-a89883189/",
      color: "secondary"
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/nishasirdesai",
      color: "primary"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a chat about technology!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-slide-in-left text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-gradient-primary mb-4">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 text-sm text-muted-foreground">
                  {item.label}
                </h3>
                {item.link ? (
                  <a 
                    href={item.link}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground">{item.value}</p>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6 animate-fade-in">
          <p className="text-muted-foreground">Connect with me on:</p>
          <div className="flex gap-4 justify-center">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className={`group border-${social.color}/50 hover:border-${social.color} hover:bg-${social.color}/10`}
                asChild
              >
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <social.icon className={`mr-2 h-5 w-5 group-hover:text-${social.color} transition-colors`} />
                  {social.label}
                </a>
              </Button>
            ))}
          </div>

          <div className="pt-8">
            <Card className="p-8 bg-gradient-primary text-center">
              <p className="text-2xl font-bold text-primary-foreground mb-4">
                Oracle Cloud Platform Certified
              </p>
              <p className="text-primary-foreground/90">
                Application Integration 2021 Specialist
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
