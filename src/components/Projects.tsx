import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import projectTalentIQ from "@/assets/project-talentiq.jpg";
import projectSensai from "@/assets/project-sensai.jpg";

const Projects = () => {
  //
  const projects = [
    {
      title: "Sensai - AI Career Coach",
      description: "AI-powered career platform with personalized roadmaps, skill-gap analysis, resume & cover letter generation, role-based interview prep with AI feedback, and an interactive career insights dashboard.",
      image: projectSensai,
      tags: ["Next.js", "Clerk Auth", "Prisma", "NeonDB", "Gemini AI"],
      github: "https://github.com/Sreenu-y/Sensai-AI-Career-Coach",
      live: ""
    },
    {
      title: "Talent IQ",
      description: "Real-time technical interview platform with VSCode-powered code editor, 1-on-1 video rooms, live coding practice with auto-evaluation, screen sharing, and secure isolated code execution.",
      image: projectTalentIQ,
      tags: ["React", "Clerk Auth", "Stream", "NodeJS", "Inngest", "MongoDB"],
      github: "https://github.com/Sreenu-y/TalentIQ",
      live: "https://talent-iq-53ev.onrender.com/"
    },
    {
      title: "Learnify",
      description: "A comprehensive learning platform where instructors can sell courses and students can purchase and learn from a wide variety of educational content.",
      image: project1,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Sreenu-y/Learnify",
      live: "https://learnify-neon-eight.vercel.app/"
    },
    {
      title: "Job-Hunt",
      description: "Professional job portal connecting employers and job seekers. Post job openings or apply to opportunities that match your skills.",
      image: project2,
      tags: ["MERN Stack", "Redux", "JWT", "REST API"],
      github: "https://github.com/Sreenu-y/JobHunt",
      live: "https://jobhunt-ebsr.onrender.com/"
    }
  ];


  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            A selection of my recent work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-6">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
