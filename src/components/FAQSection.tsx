import { AlertTriangle, Clock, Target } from "lucide-react";

const issues = [
  {
    icon: Clock,
    title: "Timeout sur gros diffs",
    description: "Les gros diffs peuvent provoquer un timeout lors de l'analyse",
    solution: "Commitez par petites parties ou réduisez la taille de vos changements"
  },
  {
    icon: Target,
    title: "Précision réduite",
    description: "Les changements complexes peuvent réduire la précision du message généré",
    solution: "Vérifiez et ajustez manuellement le message avant de commit"
  }
];

export const FAQSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Problèmes connus
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Voici les limitations actuelles et leurs solutions de contournement
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {issues.map((issue) => (
              <div 
                key={issue.title}
                className="bg-card p-8 rounded-2xl shadow-elegant border border-border/50 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <issue.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {issue.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {issue.description}
                    </p>
                    <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3 border border-green-200 dark:border-green-800">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-green-700 dark:text-green-300 text-sm">
                          <strong>Solution :</strong> {issue.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional note */}
          <div className="mt-12 bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Note importante
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  Gicode est en développement actif. Ces limitations sont temporaires et seront 
                  améliorées dans les futures versions. N'hésitez pas à rapporter tout problème 
                  ou suggestion d'amélioration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};