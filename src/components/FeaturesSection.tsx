import { GitBranch, Zap, FileText, Edit, MousePointer } from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Analyse automatique",
    description: "Analyse automatique des changements Git mis en scène pour comprendre le contexte"
  },
  {
    icon: FileText,
    title: "Messages conventionnels",
    description: "Génération de messages de commit clairs et conventionnels suivant les standards"
  },
  {
    icon: Zap,
    title: "Types de commit",
    description: "Support complet des types : feat, fix, docs, style, refactor, et plus encore"
  },
  {
    icon: Edit,
    title: "Édition possible",
    description: "Possibilité d'éditer et de personnaliser le message avant de commit"
  },
  {
    icon: MousePointer,
    title: "Commit en un clic",
    description: "Interface simple pour commit directement avec le message généré"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fonctionnalités
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment Gicode révolutionne votre workflow Git avec l'intelligence artificielle
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="bg-card p-8 rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};