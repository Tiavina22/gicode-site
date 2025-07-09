import { Settings, GitBranch, Code, Key } from "lucide-react";
import { Button } from "@/components/ui/button";

const requirements = [
  {
    icon: GitBranch,
    title: "Git installé",
    description: "Avoir Git installé et configuré sur votre machine"
  },
  {
    icon: Code,
    title: "VS Code Workspace",
    description: "VS Code avec un workspace/projet ouvert"
  },
  {
    icon: Key,
    title: "Clé API Gemini",
    description: "Une clé API Gemini valide pour l'intelligence artificielle"
  }
];

export const ConfigurationSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Configuration
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prérequis et configuration nécessaires pour utiliser Gicode efficacement
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Requirements */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {requirements.map((req) => (
              <div 
                key={req.title}
                className="bg-card p-6 rounded-2xl shadow-elegant border border-border/50 text-center hover:shadow-glow transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <req.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {req.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {req.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Configuration block */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Configuration requise
              </h3>
            </div>
            
            <div className="bg-slate-900 rounded-xl p-6 text-white font-mono">
              <div className="text-green-400 mb-2"># Configuration VS Code Settings</div>
              <div className="text-blue-300">
                "gicode.apiKey": <span className="text-yellow-300">"votre-clé-gemini-ici"</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <Key className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                    Obtenir une clé API Gemini
                  </h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
                    Vous pouvez obtenir une clé API gratuite sur Google AI Studio pour utiliser Gemini.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://makersuite.google.com/app/apikey" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 border-blue-200 hover:bg-blue-50"
                    >
                      Obtenir une clé API
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};