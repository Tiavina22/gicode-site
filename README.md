# Gicode – Générateur IA de messages de commit pour VS Code

Bienvenue sur le site officiel de **Gicode**, l’extension VS Code qui révolutionne la rédaction de vos messages de commit grâce à l’intelligence artificielle (Gemini) !

## 🚀 Présentation
Gicode permet de générer automatiquement des messages de commit clairs, conventionnels et adaptés à vos changements Git, en s’appuyant sur l’IA. L’interface web présente toutes les étapes pour installer, configurer et utiliser l’extension, ainsi que ses principales fonctionnalités.

## ✨ Fonctionnalités principales
- Analyse automatique des changements Git mis en scène
- Génération de messages de commit conventionnels (feat, fix, docs, etc.)
- Possibilité d’éditer le message généré avant validation
- Commit en un clic depuis l’interface
- FAQ sur les limitations et solutions
- Guide de configuration (Git, VS Code, clé API Gemini)
- Documentation claire et moderne

## 🛠️ Installation
1. Ouvrez Visual Studio Code
2. Rendez-vous dans l’onglet Extensions (Ctrl+Shift+X)
3. Recherchez « Gicode »
4. Cliquez sur « Installer »

## ⚙️ Configuration requise
- Git installé et configuré
- VS Code avec un workspace ouvert
- Clé API Gemini valide (pour l’IA)

## 💡 Comment utiliser Gicode ?
1. Mettez en scène vos changements (`git add .`)
2. Ouvrez la Command Palette (`Ctrl+Shift+P`)
3. Lancez la commande `Gicode: Suggest Commit`
4. Relisez, modifiez si besoin, puis validez le commit

## 📝 Problèmes connus
- **Timeout sur gros diffs** : privilégiez de petits commits
- **Précision réduite sur changements complexes** : ajustez manuellement le message si besoin

## 🤝 Contribuer
Les contributions sont les bienvenues ! Corrigez un bug, proposez une fonctionnalité ou améliorez la doc : ouvrez une Pull Request sur [GitHub](https://github.com/TiavinaRamilison/gicode).

## 📦 Technologies utilisées
- React, TypeScript, Vite, Tailwind CSS, Radix UI

## 📂 Structure du projet (web)
```
src/
  components/         # Composants React (sections, UI)
  hooks/              # Hooks personnalisés
  lib/                # Fonctions utilitaires
  pages/              # Pages principales
```

## 📄 Licence
MIT

---
Extension créée par Tiavina Ramilison. Pour toute question, ouvrez une issue ou contactez-nous.
