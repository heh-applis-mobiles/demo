# Contexte du projet PWA éducatif

## Vue d'ensemble

Ce projet est une **PWA de référence** créée pour servir de support pédagogique dans un cours intensif de 3 jours (24h) sur le développement d'applications mobiles PWA destiné à des étudiants de bac 3 en techniques graphiques (option développement Web).

### Objectif du projet

- Servir d'**exemple à décortiquer** pour la journée 1 du cours
- Démontrer les concepts fondamentaux des PWA (manifest, service workers, offline, installation)
- Fournir un **template de base** que les étudiants peuvent adapter et personnaliser
- Illustrer les bonnes pratiques Vue.js + PWA

## Public cible du cours

- **Profil** : Designers-développeurs, bac 3, option développement Web
- **Prérequis** : Cours de Vue.js 48h (framework, TypeScript, tests Jest, Git, architecture MVC)
- **Niveau responsive** : Acquis
- **Niveau Figma** : Formés en design graphique depuis bac 1

## Stack technique requise

### Technologies imposées

- **Frontend** : Vue.js 3 avec Composition API
- **Build tool** : Vite
- **PWA plugin** : `vite-plugin-pwa` ou `@vite-pwa/pwa`
- **TypeScript** : Obligatoire (les étudiants l'ont pratiqué)
- **Service Worker** : Workbox (via le plugin Vite PWA)

### Fonctionnalités PWA essentielles à démontrer

1. **Manifest Web App** (`manifest.json` ou intégré via plugin)
   - Nom de l'app, icônes, couleurs de thème
   - Configuration pour installation sur écran d'accueil
2. **Service Worker**
   - Stratégies de cache (NetworkFirst, CacheFirst, StaleWhileRevalidate)
   - Fonctionnement offline de base
   - Pré-cache des ressources statiques

3. **Installation**
   - Testable via DevTools
   - Idéalement avec un install prompt basique (peut être custom ou navigateur par défaut)

4. **Architecture**
   - 2 pages minimum (Home, List)
   - Composants Vue bien structurés et commentés pédagogiquement
   - Code lisible et didactique (pas optimisé à outrance)

## Structure du projet attendue

```
/
├── frontend/                   # Application PWA Vue.js
│   ├── public/                 # Ressources publiques statiques
│   ├── src/                    # Code source de l'application
│   │   ├── assets/             # Ressources (images, fonts, etc.)
│   │   ├── components/         # Composants Vue réutilisables
│   │   ├── utils/              # Utilitaires et helpers
│   │   ├── App.vue             # Composant racine de l'application
│   │   ├── main.ts             # Point d'entrée de l'app (initialisation Vue)
│   │   ├── style.css           # Styles globaux
│   │
│   ├── dist/                   # Build de production (généré)
│   ├── node_modules/           # Dépendances npm (généré)
│   │
│   ├── package.json            # Dépendances et scripts npm
│   ├── package-lock.json       # Lock des versions de dépendances
│   ├── vite.config.ts          # ⭐ Configuration Vite + PWA (IMPORTANT)
│   ├── pwa-assets.config.ts    # Configuration des icônes PWA
│   └── README.md               # Documentation du frontend
│
└── backend/                    # API Express simple (mock)
    ├── node_modules/           # Dépendances npm (généré)
    │
    ├── server.js               # ⭐ Serveur Express (endpoints API)
    ├── package.json            # Dépendances backend
    └── package-lock.json       # Lock des versions
```

### 📋 Fichiers clés à connaître

#### Configuration PWA

- **[frontend/vite.config.ts](frontend/vite.config.ts)** : Configuration du plugin PWA Vite, stratégies de cache, manifest
- **[frontend/pwa-assets.config.ts](frontend/pwa-assets.config.ts)** : Génération automatique des icônes PWA

#### Point d'entrée

- **[frontend/src/main.ts](frontend/src/main.ts)** : Initialisation de Vue, enregistrement du service worker
- **[frontend/index.html](frontend/index.html)** : Template HTML, balises meta pour PWA

#### Composants principaux

- **[frontend/src/App.vue](frontend/src/App.vue)** : Composant racine, gestion du routage simple
- **[frontend/src/components/Accueil.vue](frontend/src/components/Accueil.vue)** : Page d'accueil avec liste des cours
- **[frontend/src/components/Cours.vue](frontend/src/components/Cours.vue)** : Page de détail d'un cours

#### Données et types

- **[frontend/src/utils/courses.ts](frontend/src/utils/courses.ts)** : Types TypeScript et interface des cours

#### Backend (simple)

- **[backend/server.js](backend/server.js)** : API Express avec 2 endpoints (`GET /api/courses`, `GET /api/last-accessed`)
- **[backend/courses.js](backend/courses.js)** : Données mock des cours (pour démonstration)

## Exigences pédagogiques

### Le code doit être :

1. **Commenté** : Expliquer les concepts PWA, les choix techniques, les points d'attention
2. **Simple mais complet** : Éviter la sur-ingénierie, viser la clarté
3. **Testable offline** : Le mode offline doit être démontrable simplement (DevTools > Network > Offline)

### Éléments à inclure dans le README

- Instructions d'installation (`npm install`, `npm run dev`)
- Comment tester l'installation PWA
- Où sont les fichiers clés (manifest, service worker config)
- Comment modifier les couleurs/icônes/nom de l'app
- Explication de l'architecture du projet

### Points à démontrer explicitement dans le code

- Configuration du manifest (nom, couleurs, icônes)
- Configuration du service worker (stratégies de cache)
- Composants Vue avec props et computed properties
- Gestion des données mock (pas de vrai backend, données en dur dans le code)

## Contraintes techniques

### Ce que le projet NE doit PAS avoir :

- Base de données
- Authentification complexe
- Notifications push (Apple pose problème)
- Fonctionnalités avancées qui dépassent le scope du cours

### Ce qui est optionnel mais appréciable :

- Web Share API (simple et cross-platform)
- Install prompt personnalisé (Option B du cours)
- Stratégie de cache intelligente pour ressources spécifiques

## Notes pour Claude Code

### Lors de modifications demandées :

- Privilégier la **clarté pédagogique** sur la performance
- Commenter **abondamment** les parties liées aux PWA
- Garder le code **simple et lisible** (public = étudiants en apprentissage)
- Respecter la stack Vue.js + TypeScript + Vite PWA
- Penser "template modifiable" plutôt que "app de production"

### Ton à adopter :

- Pédagogique et didactique
- Éviter le jargon inutile
- Expliquer les "pourquoi" autant que les "comment"
- Assumer la simplicité comme une qualité, pas un défaut

## Ressources utiles

- [Documentation Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
- [MDN - Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Workbox - Service Worker Libraries](https://developer.chrome.com/docs/workbox/)
- [Vue.js 3 Documentation](https://vuejs.org/)

---

**Version** : 1.0  
**Date** : Décembre 2025
**Usage** : Support pédagogique pour cours PWA - Bac 3 Techniques Graphiques
