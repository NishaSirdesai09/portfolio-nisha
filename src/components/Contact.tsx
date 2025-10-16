import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

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

  return (
    <section id="contact" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
            Contact
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to connect!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default Contact;
