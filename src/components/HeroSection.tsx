import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="inline-flex items-center justify-center mb-8 animate-slide-up">
            <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-glow">
              Gic
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Gicode
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Let AI write your commits
          </p>
          
          {/* Description */}
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            Générez automatiquement des messages de commit clairs et conventionnels avec l'IA (Gemini)
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              variant="hero" 
              size="lg" 
              asChild
              className="text-lg px-8 py-4 h-auto"
            >
              <a 
                href="https://marketplace.visualstudio.com/items?itemName=TiavinaRamilison.gicode" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <ExternalLink className="w-5 h-5" />
                Install Now on VS Code
              </a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 flex justify-center items-center gap-8 text-white/70 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">44</div>
              <div className="text-sm">Installations</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">v0.0.24</div>
              <div className="text-sm">Version</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">164KB</div>
              <div className="text-sm">Size</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};