import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/Sreenu-y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/sreenu_y/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LeetCode"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className="h-5 w-5 invert-[0.5] hover:invert-0 transition-all"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sreenu-yelesam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/sreenu_yelesam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
