import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Download, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Make sure resume.pdf is inside the public folder
    link.download = "Srinu_Yelesam_Resume.pdf";
    link.click();
  };

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's connect and discuss opportunities
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a
                      href="mailto:srinuyelesam123@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      srinuyelesam123@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a
                      href="tel:+918074804166"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 8074804166
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-muted-foreground">
                      Tirupati, Andhra Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Resume + Social Links */}
          <div className="space-y-6">
            <Card className="bg-card border-border transition-transform hover:scale-[1.01]">
              <CardContent className="p-8 space-y-6">
                {/* Resume Download */}
                <div className="text-center space-y-4">
                  <h3 className="font-display text-2xl font-semibold">
                    Download Resume
                  </h3>
                  <p className="text-muted-foreground">
                    Get a copy of my resume to learn more about my experience and
                    skills.
                  </p>
                  <Button
                    onClick={handleDownloadResume}
                    className="w-full"
                    size="lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <h4 className="font-medium mb-4 text-center">
                    Connect With Me
                  </h4>
                  <div className="flex justify-center gap-4">
                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com/in/sreenu-yelesam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-transform duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/Sreenu-y"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-transform duration-200"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5 text-primary" />
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:srinuyelesam123@gmail.com"
                      className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-transform duration-200"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
