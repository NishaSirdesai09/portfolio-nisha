// import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center items-center">
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Nisha Sirdesai. All rights reserved.
          </p>
          {/* <p className="text-muted-foreground text-sm flex items-center gap-2">
            Built with <Heart className="h-4 w-4 text-primary animate-glow" /> using React & TypeScript
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
