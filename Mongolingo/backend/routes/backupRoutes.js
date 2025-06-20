module.exports = (client) => {

  const express = require('express');
  const { exec } = require('child_process');
  const path = require('path');
  const fs = require('fs');
  const router = express.Router();
  const { ObjectId } = require('mongodb');
  const BSON = require('bson');

    const DB_NAME = 'MongoLingo';
    const SAVE_DIR = path.join(__dirname, '../sauvegarde');
    // Liste des tables disponibles dans l'app
    const COLLECTIONS = [
      "foot_equipes",
      "foot_joueurs",
      "foot_matchs",
      "tdf_cyclistes",
      "tdf_equipes",
      "tdf_etapes"
    ];

    // Export JSON : toutes les collections dans un zip
    router.get('/export/json', async (req, res) => {
      try {
        const db = client.db(DB_NAME);
        const exportData = {};

        for (const col of COLLECTIONS) {
          exportData[col] = await db.collection(col).find().toArray();
        }

        const exportDir = path.join(__dirname, '../../sauvegarde');
        if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir, { recursive: true });

        const fileName = `mongolingo_export_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
        const filePath = path.join(exportDir, fileName);

        fs.writeFileSync(filePath, JSON.stringify(exportData, null, 2), 'utf-8');
        res.download(filePath);
      } catch (err) {
        console.error("Erreur lors de l'exportation de la base de données", err);
        res.status(500).send(err);
      }
    });

    // Route pour exporter toute la base de données en BSON
    router.get('/export/bson', async (req, res) => {
      try {
        const db = client.db(DB_NAME);
        const exportData = {};

        for (const col of COLLECTIONS) {
          exportData[col] = await db.collection(col).find().toArray();
        }

        const bsonData = BSON.serialize(exportData);

        const exportDir = path.join(__dirname, '../../sauvegarde');
        if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir, { recursive: true });

        const fileName = `mongolingo_export_bson_${new Date().toISOString().replace(/[:.]/g, '-')}.bson`;
        const filePath = path.join(exportDir, fileName);

        // Écrit le BSON sur le disque
        fs.writeFileSync(filePath, bsonData);

        // Propose le téléchargement du fichier BSON
        res.download(filePath, fileName, (err) => {
          if (err) {
            console.error("Erreur lors du téléchargement BSON :", err);
          }
        });
      } catch (err) {
        console.error("Erreur lors de l'exportation BSON", err);
        res.status(500).send(err);
      }
    });

    // Import JSON a partir d'un fichier
    router.post('/import/json', async (req, res) => {
      try {
        const db = client.db(DB_NAME);
        const data = req.body;

        for (const col of COLLECTIONS) {
          if (Array.isArray(data[col])) {
            await db.collection(col).deleteMany({});

            const docs = data[col].map(doc => {
              let newDoc = { ...doc };

              // corrections pour la table foot_joueurs
              // Conversion _id
              if (newDoc._id && typeof newDoc._id === 'string' && /^[a-fA-F0-9]{24}$/.test(newDoc._id)) {
                newDoc._id = new ObjectId(newDoc._id);
              }
              // Conversion equipe_id
              if (newDoc.equipe_id && typeof newDoc.equipe_id === 'string' && /^[a-fA-F0-9]{24}$/.test(newDoc.equipe_id)) {
                newDoc.equipe_id = new ObjectId(newDoc.equipe_id);
              }
              // Conversion age en int (si string ou float)
              if (typeof newDoc.age !== 'undefined') {
                newDoc.age = parseInt(newDoc.age, 10);
              }

              // corrections pour la table foot_matchs
              // Conversion equipe_id (pour joueurs/cyclistes)
              if (newDoc.equipe_id && typeof newDoc.equipe_id === 'string' && /^[a-fA-F0-9]{24}$/.test(newDoc.equipe_id)) {
                newDoc.equipe_id = new ObjectId(newDoc.equipe_id);
              }
              // Conversion equipe1_id et equipe2_id (pour matchs)
              if (newDoc.equipe1_id && typeof newDoc.equipe1_id === 'string' && /^[a-fA-F0-9]{24}$/.test(newDoc.equipe1_id)) {
                newDoc.equipe1_id = new ObjectId(newDoc.equipe1_id);
              }
              if (newDoc.equipe2_id && typeof newDoc.equipe2_id === 'string' && /^[a-fA-F0-9]{24}$/.test(newDoc.equipe2_id)) {
                newDoc.equipe2_id = new ObjectId(newDoc.equipe2_id);
              }
              // Conversion date (pour matchs)
              if (newDoc.date && typeof newDoc.date === 'string') {
                newDoc.date = new Date(newDoc.date);
              }

              return newDoc;
            });
            if (docs.length > 0) {
              try {
                await db.collection(col).insertMany(docs);
              } catch (insertErr) {
                // Log les documents et l’erreur pour debug
                console.error(`Erreur lors de l'insertion dans ${col}:`, insertErr);
                console.error('Premier document:', JSON.stringify(docs[0], null, 2));
                throw insertErr;
              }
            }
          }
        }

        res.send('Import JSON réussi');
      } catch (err) {
        console.error("Erreur import JSON", err);
        res.status(500).send('Erreur import JSON');
      }
    });

    // Import BSON a partir d'un seul fichier
    router.post('/import/bson', async (req, res) => {
      try {
          let data = [];
          req.on('data', chunk => data.push(chunk));
          req.on('end', async () => {
              try {
                  const buffer = Buffer.concat(data);
                  const importData = BSON.deserialize(buffer);

                  const db = client.db(DB_NAME);

                  // pour chaque collection du fichier importé
                  for (const collectionName in importData) {
                      const collectionData = importData[collectionName];
                      if (collectionData && collectionData.length > 0) {
                          await db.collection(collectionName).deleteMany({});
                          await db.collection(collectionName).insertMany(collectionData);
                      }
                  }
                  res.status(200).send("Importation BSON réussie");
              } catch (err) {
                  console.error("Erreur lors de l'importation BSON", err);
                  res.status(500).send(err);
              }
          });
      } catch (err) {
          console.error("Erreur lors de l'importation BSON", err);
          res.status(500).send(err);
      }
  });

  return router;
};