# SKT — MServices (SkyWay Technologies)

Plateforme web multiservices pour **SkyWay Technologies / Smart World Solutions**, couvrant trois pôles d’expertise :

- **Transport / Mobilité urbaine**
- **Data / IA / Ingénierie logicielle**
- **Événementiel & logistique événementielle**

Le site propose un front marketing moderne et un **back-office d’administration** (AdminDashboard) connecté à **Firebase** pour gérer les leads, les partenaires et certaines métriques d’audience.

---

## ✨ Fonctionnalités principales

### Front public

- **Pages métiers dédiées**
  - `Transport` : offre de mobilité urbaine, audit & devis express.
  - `Data & IA` : ERP, Big Data, applications métiers, audit digital.
  - `Événementiel` : organisation d’événements, location de matériel, dispositifs complets.
  - `Contact` : hub de contact multiservice.

- **Formulaires unifiés de demande projet**
  - Tous les formulaires (Contact, Transport, Data, Événementiel) créent des documents dans la **collection Firestore `leads`** avec le schéma :
   
    {
      name: string;
      email: string;
      pole: "transport" | "software" | "bigdata" | "event";
      description: string;
      source: string;         // ex: "contact-page", "transport-page", ...
      createdAt: Timestamp;
      status: "nouveau" | ... // pour la suite du workflow
    }
      - Les **gros boutons CTA** (“Lancer un projet”, “Lancer un partenariat communal”, “Concevoir un dispositif”…)
    font défiler la page jusqu’au bon formulaire, puis envoient le lead vers Firestore.

- **Intégration Firebase côté front**
  - Firestore (base de données temps réel).
  - Auth (compte admin pour l’accès au dashboard).
  - Storage (logos partenaires, médias).

---

### AdminDashboard (Back-office)

Accessible après authentification Firebase.

- **Tableau de bord statistiques**
  - Récupération des métriques depuis `analytics/overview` et `daily_analytics`.
  - Graphique de fréquentation hebdomadaire, KPIs synthétiques.

- **Boîte de réception des leads**
  - Liste des documents de la collection **`leads`**.
  - Affichage détaillé du brief (nom, email, pôle, description).
  - Possibilité de **supprimer / nettoyer** un lead.

- **Gestion des partenaires**
  - Ajout de partenaires dans la collection `partners` (nom, logo, description, createdAt).
  - Upload des logos dans Firebase Storage.
  - Suppression de partenaires.

- **Paramètres admin**
  - Mise à jour des informations de connexion (email et mot de passe admin) via Firebase Auth.
  - Section “sécurité” purement informative (UI).

---

## 🏗️ Stack technique

- **Front-end**
  - React + TypeScript
  - React Router (navigation multi-pages)
  - Tailwind CSS / classes utilitaires pour le design
  - Icônes `lucide-react`

- **Back-end / Services**
  - **Firebase**
    - Firestore (collections `leads`, `partners`, `daily_analytics`, `analytics/overview`)
    - Auth (compte admin)
    - Storage (logos partenaires)
    - Analytics (optionnel)

---

## 🚀 Démarrage du projet

### 1. Cloner le dépôt

git clone <url-de-ton-repo.git>
cd sws---smart-world-solutions### 2. Installer les dépendances

npm install
# ou
yarn install### 3. Configurer Firebase

Le projet utilise un fichier `services/firebase.ts` de ce type :

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "..."
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

let analytics = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, auth, db, storage, analytics };> Remplace les valeurs par celles de ton propre projet Firebase (console Firebase → Paramètres du projet → Config SDK Web).

### 4. Scripts disponibles

- **Développement**

npm run dev       # ou npm start / selon la config du projet- **Build de production**

npm run build- **Prévisualisation du build**

npm run preview   # si Vite, sinon utiliser un serveur statique---

## 🌍 Déploiement

Plusieurs options possibles :

### Option A — Hébergement mutualisé (ex. hebergementweb.ci)

1. Générer le build :

  
   npm run build
      → un dossier `build` ou `dist` est créé.

2. Sur ton hébergement (cPanel) :
   - Aller dans `public_html`.
   - Uploader le contenu du dossier de build (via **File Manager** ou **FTP**).
   - S’assurer que `index.html` est bien à la racine de `public_html`.
   - Activer le **certificat SSL** (Let’s Encrypt / AutoSSL) pour ton domaine.

3. Le site est ensuite accessible sur `https://tondomaine.com`  
   (les appels Firebase continuent de fonctionner côté client).

### Option B — Plateforme front moderne (Vercel, Netlify, Cloudflare Pages)

1. Pousser le code sur GitHub / GitLab.
2. Connecter le dépôt à la plateforme choisie.
3. Configurer la commande de build (`npm run build`) et le dossier de sortie (`build` ou `dist`).
4. Ajouter ton domaine personnalisé et configurer les DNS.

---

## 🔐 Sécurité & bonnes pratiques

- Les accès **Firebase** côté admin doivent être protégés par un compte admin (Firebase Auth).
- Évite de committer des **clés sensibles** (service accounts, secrets, etc.) dans le dépôt.
- Utilise des **règles Firestore** adaptées pour limiter l’écriture/lecture depuis le front public.

---

## 👤 Auteur

Ce projet a été conçu et développé par :

**Alloma Jean Luc**  
Développeur & architecte du projet **SWS — Smart World Solutions (SkyWay Technologies)**.

N’hésite pas à me contacter pour toute question, évolution ou collaboration autour de ce projet.
