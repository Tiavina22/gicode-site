import { Download, Search, MousePointer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Ouvrir VS Code",
    description: "Lancez Visual Studio Code sur votre machine"
  },
  {
    icon: Search,
    title: "Extensions",
    description: "Aller dans l'onglet Extensions (Ctrl+Shift+X)"
  },
  {
    icon: Search,
    title: "Rechercher",
    description: "Rechercher \"Gicode\" dans la barre de recherche"
  },
  {
    icon: CheckCircle,
    title: "Installer",
    description: "Cliquer sur \"Install\" pour l'extension Gicode"
  }
];

export const InstallationSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Installation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Installez Gicode en quelques clics simples et commencez à améliorer vos commits
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="relative text-center"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 z-0"></div>
                )}
                
                <div className="relative z-10 bg-card p-6 rounded-2xl shadow-elegant border border-border/50 hover:shadow-glow transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">
                    Étape {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Visual mockup placeholder */}
          <div className="mt-16 bg-card rounded-2xl p-8 shadow-elegant border border-border/50">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Installation dans VS Code
              </h3>
              <p className="text-muted-foreground">
                Voici à quoi ressemble l'installation dans l'interface VS Code
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-8 border-2 border-dashed border-border">
              <div className="text-center text-muted-foreground">
                <Download className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Capture d'écran de l'installation VS Code</p>
                <p className="text-sm mt-2">Interface Extensions → Recherche "Gicode" → Install</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};