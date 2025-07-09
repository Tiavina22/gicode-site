import { ExternalLink, Github, Twitter, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold">
                Gic
              </div>
              <span className="text-xl font-bold">Gicode</span>
            </div>
            <p className="text-white/80 mb-4">
              L'extension VS Code qui révolutionne vos messages de commit avec l'intelligence artificielle.
            </p>
            <div className="flex items-center gap-2 text-white/90">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm">Built with ❤️ for developers</span>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens utiles</h4>
            <div className="space-y-3">
              <Button variant="ghost" size="sm" asChild className="text-white/80 hover:text-white hover:bg-white/10 justify-start p-0 h-auto">
                <a 
                  href="https://marketplace.visualstudio.com/items?itemName=TiavinaRamilison.gicode" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  VS Code Marketplace
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-white/80 hover:text-white hover:bg-white/10 justify-start p-0 h-auto">
                <a 
                  href="https://github.com/TiavinaRamilison/gicode" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Code source
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-white/80 hover:text-white hover:bg-white/10 justify-start p-0 h-auto">
                <a 
                  href="https://makersuite.google.com/app/apikey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Clé API Gemini
                </a>
              </Button>
            </div>
          </div>
          
          {/* Author */}
          <div>
            <h4 className="font-semibold mb-4">Auteur</h4>
            <div className="space-y-3">
              <div>
                <p className="text-white/90 font-medium">Tiavina Ramilison</p>
                <p className="text-white/70 text-sm">Développeur & Créateur de Gicode</p>
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 p-2">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 p-2">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 p-2">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-white/70 text-sm">
              <span>Version 0.0.24</span>
              <span>•</span>
              <span>Licence MIT</span>
              <span>•</span>
              <span>Dernière mise à jour: 19 mai 2025</span>
            </div>
            <div className="text-white/70 text-sm">
              © 2025 Tiavina Ramilison. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};