import { Mail, MapPin, Phone } from "lucide-react";

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
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
            Contact
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and explore opportunities together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="group animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-8 text-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-glow">
                  <div className="inline-flex p-4 rounded-full bg-gradient-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {item.label}
                  </h3>
                  {item.link ? (
                    <a 
                      href={item.link}
                      className="text-base font-medium text-foreground hover:text-primary transition-colors block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
