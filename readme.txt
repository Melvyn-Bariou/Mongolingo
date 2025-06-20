##############################################
#           README - Projet Mongolingo       #
##############################################

AUTEUR : Melvyn BARIOU gr2A1
DATE : 06/06/2025
PROJET : Un projet de quiz sur MongoDB
SYSTEME TESTÉ : Ubuntu 24.04 WSL

==================================================
1. DESCRIPTION DU PROJET
==================================================

Ce projet propose une interface web interactive permettant de répondre à des questions de type quiz basées sur des schémas de collections MongoDB. 
L'application est divisée en deux parties :
- Un **backend Node.js + Express** qui expose des APIs pour récupérer les questions et les schémas de collections, et les manipuler.
- Un **frontend React + Material UI** qui propose l'UI.

==================================================
2. STRUCTURE DU PROJET
==================================================

Le projet est organisé comme suit :

📁 Mongolingo/
├── 📁 backend/                  → Serveur Node.js + Express + MongoDB
│   ├── server.js                
│   ├── routes/                  → Routes API (questions, schémas, etc.)
│   └── data/                    → Données (schémas + collections de démo)
│
├── 📁 frontend/                 → Interface React
│   ├── src/
│   │   ├── components/          → Composants React (Accueil, QuestionCard, CollectionSchemaViewer)
│   │   ├── App.js               → Application principale
│   │   └── index.js             → Entrée React
│   └── public/                  
│
├── 📁 schemas/                  → Fichiers JSON des schémas MongoDB
├── 📁 datasample/               → Fichiers JSON des données de démonstration qui sont présents de base dans les collections
├── 📁 sauvegarde/               → Répertoire de sauvegarde des exports des collections
└── readme.txt                  

==================================================
3. INSTALLATION (SUR UBUNTU 22.04+)
==================================================

Prérequis :
- Node.js (v18+ recommandé)
- npm
- MongoD et MongoSH
- Une base de données nommée "MongoLingo"

Étapes d'installation :

1. Aller à la racine du projet :
```bash
cd Mongolingo
```

2. Avoir démarrer le serveur mongod

mongod -dbpath=chemin/vers/votre/mongodata

Exemple : mongod -dbpath=/home/melvyn/Documents/BUT_Info/Info_2/Semestre_4/R403MONGO/mongodata

3. Initialiser les données dans les différentes collections

- Aller dans un terminal, aller dans le shell MongoDB : mongosh

- Basculer vers la base de données MongoLingo, entrer dans le terminal mongosh :
```bash
use MongoLingo
```

- Entrez les 3 scripts dans le terminal mongosh ouvert (d'abord *data_foot.js* et *data_tdf.js*, *puis* data_qestions.js) qui se situent dans le répertoire /data, qui regroupent les données que doit avoir l'application au départ.

- Après l'exécution, vérifier que les données sont bien présentes dans quelques questions : 
db.questions.find().pretty()
db.foot_joueurs.find().count()
db.foot_matchs.find().count()
db.tdf_cyclistes.findOne()

4. Installer les dépendances backend et charger les données dans la bdd
```bash
cd backend
npm install
```

5. Lancer le serveur backend
```bash
npm start
```

6. IDans un autre terminal, installer et lancer le frontend
```bash
cd ../frontend
npm install
npm start
```

Le frontend sera accessible à : http://localhost:3000
Le backend écoute par défaut sur : http://localhost:3001

==================================================
4. UTILISATION
==================================================

- Choisissez une question parmi celles disponibles.

- Répondez selon le type : choix unique, multiple, ordonnancement.

- Validez et visualisez le score ou la correction si activée.

==================================================
5. LIEN VERS VIDEO DE DEMONSTRATION
==================================================

Lien vers la vidéo de démonstration :
➡️ Voir dans le répertoire principal /Mongolingo