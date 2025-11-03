import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;
