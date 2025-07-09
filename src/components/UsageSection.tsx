import { GitCommit, Terminal, Lightbulb, CheckCircle } from "lucide-react";

const usageSteps = [
  {
    icon: GitCommit,
    title: "Stage tes changements",
    description: "Utilise git add pour mettre en scène tes modifications",
    command: "git add ."
  },
  {
    icon: Terminal,
    title: "Ouvre la Command Palette",
    description: "Appuie sur Ctrl+Shift+P (Cmd+Shift+P sur Mac)",
    command: "Ctrl+Shift+P"
  },
  {
    icon: Lightbulb,
    title: "Lance Gicode",
    description: "Tape \"Gicode: Suggest Commit\" et appuie sur Entrée",
    command: "Gicode: Suggest Commit"
  },
  {
    icon: CheckCircle,
    title: "Relis et valide",
    description: "Relis le message généré, modifie si nécessaire, puis valide",
    command: "✓ Commit"
  }
];

export const UsageSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comment l'utiliser
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Suivez ces étapes simples pour générer des messages de commit parfaits avec l'IA
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {usageSteps.map((step, index) => (
              <div 
                key={step.title}
                className="bg-card p-8 rounded-2xl shadow-elegant border border-border/50 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-primary mb-1">
                      Étape {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <div className="bg-muted/50 rounded-lg p-3 font-mono text-sm text-foreground border">
                      {step.command}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Demo mockup */}
          <div className="mt-16 bg-card rounded-2xl p-8 shadow-elegant border border-border/50">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Exemple d'utilisation
              </h3>
              <p className="text-muted-foreground">
                Voici comment Gicode génère un message de commit parfait
              </p>
            </div>
            
            <div className="bg-slate-900 rounded-xl p-6 text-green-400 font-mono text-sm">
              <div className="mb-4">
                <span className="text-blue-400">$</span> git add src/components/Button.tsx
              </div>
              <div className="mb-4">
                <span className="text-blue-400">$</span> # Ouvre Command Palette et tape "Gicode: Suggest Commit"
              </div>
              <div className="mb-2 text-yellow-400">
                🤖 Gicode analyse vos changements...
              </div>
              <div className="bg-slate-800 rounded p-3 border-l-4 border-green-400">
                <div className="text-white font-semibold mb-1">Message généré :</div>
                <div className="text-green-300">feat(ui): add hover animation to Button component</div>
                <div className="text-gray-400 text-xs mt-2">
                  - Add smooth hover transition with scale effect<br/>
                  - Improve user interaction feedback
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};