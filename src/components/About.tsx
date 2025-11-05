import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions with modern technologies"
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful interfaces that users love to interact with"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing every detail for lightning-fast user experiences"
    }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Web Developer | MERN Stack | DSA with Java
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 border-border"
              >
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As a Web Developer specializing in the MERN Stack, I build full-stack applications with 
            modern technologies. With strong foundations in Data Structures and Algorithms using Java, 
            I create efficient, scalable solutions that deliver exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
