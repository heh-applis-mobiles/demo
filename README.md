# PWA Éducative - Gestionnaire de Cours HEH

> PWA de référence pour le cours de développement mobile (Bac 3 Techniques Graphiques)

## Qu'est-ce que c'est ?

Une application de gestion de cours qui fonctionne **offline** et s'**installe** comme une vraie app mobile.

**Stack :** Vue.js 3 + TypeScript + Vite PWA + Express

## Démarrage rapide

### Installation et lancement

**Important :** Lancer les deux serveurs (backend + frontend) dans des terminaux séparés.

```bash
# Terminal 1 : Backend (API)
cd backend
npm install
npm start
# → API sur http://localhost:3000

# Terminal 2 : Frontend (PWA)
cd frontend
npm install
npm run dev
# → App sur http://localhost:5173
```

## Fichiers clés PWA

| Fichier | Rôle |
|---------|------|
| [`frontend/vite.config.ts`](frontend/vite.config.ts) | Config PWA : manifest, service worker (généré + enregistré auto), cache |
| [`frontend/src/main.ts`](frontend/src/main.ts) | Point d'entrée Vue (pas de code SW, géré par Vite PWA) |
| [`frontend/public/favicon.svg`](frontend/public/favicon.svg) | Icône (auto-générée en plusieurs tailles) |

## Tests PWA

### Tester le mode offline

1. Ouvrir DevTools (F12) > **Network**
2. Cocher **Offline**
3. Rafraîchir → l'app fonctionne !

### Tester l'installation

1. Build : `cd frontend && npm run build && npm run preview`
2. Chrome : cliquer l'icône ➕ dans la barre d'adresse

### Inspecter le service worker

DevTools (F12) > **Application** > **Service Workers**

## Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Accueil.vue      # Liste des cours
│   │   ├── Cours.vue        # Détail d'un cours
│   │   └── CourseCard.vue   # Carte de cours
│   ├── utils/courses.ts     # Types et accès aux données
│   └── main.ts              # Point d'entrée
└── vite.config.ts           # Config PWA

backend/
├── server.js                # API REST
└── courses.js               # Données de démonstration
```

## Personnalisation

### Nom de l'app
[`frontend/vite.config.ts`](frontend/vite.config.ts) → section `manifest.name`

### Couleurs
- **Thème PWA :** [`frontend/vite.config.ts`](frontend/vite.config.ts) → `manifest.theme_color`
- **CSS :** Modifier directement les couleurs dans les composants Vue ou ajouter des variables CSS personnalisées dans [`frontend/src/style.css`](frontend/src/style.css)

### Icônes
Remplacer [`frontend/public/favicon.svg`](frontend/public/favicon.svg) et rebuild

### Données
- Frontend : [`frontend/src/utils/courses.ts`](frontend/src/utils/courses.ts)
- Backend : [`backend/courses.js`](backend/courses.js)

## Stratégies de cache

| Type | Stratégie | Pourquoi |
|------|-----------|----------|
| Fichiers statiques (HTML, CSS, JS, images, fonts) | `CacheFirst` | Performance et offline |
| API (`http://localhost:3000/*`) | `NetworkFirst` | Données fraîches quand en ligne, cache si offline |

Configuration dans [`frontend/vite.config.ts`](frontend/vite.config.ts) :
- `globPatterns` : fichiers statiques pré-cachés au build
- `runtimeCaching` : stratégie pour les appels API

## Ressources

- [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
- [MDN - Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Vue.js 3](https://vuejs.org/)

---

**Version :** 1.0 | **Date :** Décembre 2025 | HEH - Bac 3 Techniques Graphiques
