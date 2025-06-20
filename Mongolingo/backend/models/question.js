const mongoose = require('mongoose');

const reponseSchema = new mongoose.Schema({
  texte: String,
  correcte: Boolean
});

const questionSchema = new mongoose.Schema({
  intitule: String,
  type: { type: String, enum: ['choix_unique', 'choix_multiple', 'ordonner', 'complete_requete'] },
  niveau: { type: Number, min: 1, max: 5 },
  collection_cible: String,
  reponses: [reponseSchema],
  explication: String,
  ordre_attendu: [String],
  requete_mongo_valide: Object
});

module.exports = mongoose.model('Question', questionSchema);
