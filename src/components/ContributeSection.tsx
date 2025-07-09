import { Heart, Github, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContributeSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contribuer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aidez-nous à améliorer Gicode et à le rendre encore meilleur pour la communauté
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center shadow-glow">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pull requests bienvenues !
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Que ce soit pour corriger un bug, ajouter une fonctionnalité ou améliorer la documentation, 
              toutes les contributions sont les bienvenues et appréciées.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" asChild>
                <a 
                  href="https://github.com/TiavinaRamilison/gicode" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  <Github className="w-5 h-5" />
                  Voir sur GitHub
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Star className="w-5 h-5 mr-3" />
                Donner une étoile
              </Button>
            </div>
          </div>
          
          {/* Ways to contribute */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card p-6 rounded-2xl shadow-elegant border border-border/50 text-center">
              <Github className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Code</h4>
              <p className="text-muted-foreground text-sm">
                Contribuez au code source, corrigez des bugs ou ajoutez des fonctionnalités
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl shadow-elegant border border-border/50 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Feedback</h4>
              <p className="text-muted-foreground text-sm">
                Partagez vos idées et suggestions pour améliorer l'expérience utilisateur
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl shadow-elegant border border-border/50 text-center">
              <Star className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Partage</h4>
              <p className="text-muted-foreground text-sm">
                Partagez Gicode avec vos collègues et aidez à faire grandir la communauté
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};