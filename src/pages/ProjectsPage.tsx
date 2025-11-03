import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
