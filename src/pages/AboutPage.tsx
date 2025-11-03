import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
