const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

// URI de connexion à la base de données MongoDB locale (avoir le port 27017 de libre et le changer si config mongo différente)
const uri = 'mongodb://localhost:27017';
// Création d'une instance de MongoClient pour se connecter à la base de données
const client = new MongoClient(uri);

const questionRoutes = require('./routes/questionRoutes');
const backupRoutes = require('./routes/backupRoutes')(client);

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'})); // pour accepter les gros JSON

// toutes les routes commencent par /api/questions...
app.use('/api/questions', questionRoutes);
// toutes les routes commencent par /api/backup...
app.use('/api/backup', backupRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connecté");
    app.listen(process.env.PORT, () => console.log(`Serveur lancé sur http://localhost:${process.env.PORT}`));
  })
  .catch(err => console.error("Erreur connexion MongoDB :", err));
