const express = require('express');
const router = express.Router();
const Question = require('../models/question');
const mongoose = require('mongoose');

// GET toutes les questions
router.get('/', async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

// GET par niveau
router.get('/niveau/:niveau', async (req, res) => {
  const questions = await Question.find({ niveau: req.params.niveau });
  res.json(questions);
});

// GET pour afficher le schéma de la collection
router.get('/schema-dynamic/:collection', async (req, res) => {
  const collectionName = req.params.collection;

  try {
    const collection = mongoose.connection.collection(collectionName);
    const sampleDoc = await collection.findOne();

    if (!sampleDoc) return res.status(404).json({ error: 'Aucun document trouvé' });

    res.send(JSON.stringify(sampleDoc, null, 2)); // <-- texte brut lisible
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Route pour éxecuter les requetes
router.post('/execute', async (req, res) => {
  const { operation, collection, userQuery, userDocument, userUpdate, userFilter, userPipeline } = req.body;
  const db = mongoose.connection.db;
  const col = db.collection(collection);

  try {
    let result;
    switch (operation) {
      case 'find':
        result = await col.find(userQuery || {}).toArray();
        break;
      case 'insertOne':
        result = await col.insertOne(userDocument);
        break;
      case 'updateMany':
        result = await col.updateMany(userFilter, userUpdate);
        break;
      case 'deleteMany':
        result = await col.deleteMany(userFilter);
        break;
      case 'aggregate':
        result = await col.aggregate(userPipeline).toArray();
        break;
      default:
        return res.status(400).json({ error: "Opération non supportée" });
    }
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
