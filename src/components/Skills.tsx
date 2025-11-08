import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "MERN Stack",
      skills: ["React", "Next.js", "Node.js", "Express.js", "JavaScript", "TypeScript", "MongoDB"]
    },
    {
      category: "DSA & Programming",
      skills: ["Java", "Data Structures", "Algorithms", "Problem Solving"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "REST APIs", "Tailwind CSS", "Redux", "JWT"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Technologies I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
