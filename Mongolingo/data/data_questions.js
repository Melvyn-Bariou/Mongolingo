// 35 questions en tout

db.questions.insertMany([
  {
    "intitule": "Requête simple : retrouver tous les joueurs de l'équipe de France.",
    "type": "ordonner",
    "niveau": 1,
    "collection_cible": "foot_joueurs",
    "reponses": [
      { "texte": "{ equipe_id: ObjectId(\"665000000000000000000001\") }", "correcte": false },
      { "texte": "db.foot_joueurs.find(", "correcte": false }
    ],
    "ordre_attendu": [
      "db.foot_joueurs.find(",
      "{ equipe_id: ObjectId(\"665000000000000000000001\") }"
    ],
    "explication": "On utilise find avec un filtre sur l'identifiant de l'équipe de France.",
    "operation_mongo": {
      "operation": "find",
      "collection": "foot_joueurs",
      "query": { "equipe_id": { "$oid": "665000000000000000000001" } }
    }
  },

  {
    "intitule": "Afficher tous les attaquants ayant plus de 30 ans.",
    "type": "ordonner",
    "niveau": 2,
    "collection_cible": "foot_joueurs",
    "reponses": [
      { "texte": "{ poste: \"attaquant\", age: { $gt: 30 } }", "correcte": false },
      { "texte": "db.foot_joueurs.find(", "correcte": false }
    ],
    "ordre_attendu": [
      "db.foot_joueurs.find(",
      "{ poste: \"attaquant\", age: { $gt: 30 } }"
    ],
    "explication": "Combinaison de deux filtres avec find.",
    "operation_mongo": {
      "operation": "find",
      "collection": "foot_joueurs",
      "query": { "poste": "attaquant", "age": { "$gt": 30 } }
    }
  },

  {
    "intitule": "Lister tous les matchs joués au Lusail Stadium.",
    "type": "ordonner",
    "niveau": 2,
    "collection_cible": "foot_matchs",
    "reponses": [
      { "texte": "db.foot_matchs.find(", "correcte": false },
      { "texte": "{ stade: \"Lusail Stadium\" }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.foot_matchs.find(",
      "{ stade: \"Lusail Stadium\" }"
    ],
    "explication": "Requête simple sur un champ texte.",
    "operation_mongo": {
      "operation": "find",
      "collection": "foot_matchs",
      "query": { "stade": "Lusail Stadium" }
    }
  },

  {
    "intitule": "Trouvez tous les cyclistes slovènes.",
    "type": "ordonner",
    "niveau": 1,
    "collection_cible": "tdf_cyclistes",
    "reponses": [
      { "texte": "{ nationalite: \"Slovénie\" }", "correcte": false },
      { "texte": "db.tdf_cyclistes.find(", "correcte": false }
    ],
    "ordre_attendu": [
      "db.tdf_cyclistes.find(",
      "{ nationalite: \"Slovénie\" }"
    ],
    "explication": "Filtre simple sur un champ.",
    "operation_mongo": {
      "operation": "find",
      "collection": "tdf_cyclistes",
      "query": { "nationalite": "Slovénie" }
    }
  },

  {
    "intitule": "Afficher les étapes de plus de 200 km.",
    "type": "ordonner",
    "niveau": 2,
    "collection_cible": "tdf_etapes",
    "reponses": [
      { "texte": "{ distance_km: { $gt: 200 } }", "correcte": false },
      { "texte": "db.tdf_etapes.find(", "correcte": false }
    ],
    "ordre_attendu": [
      "db.tdf_etapes.find(",
      "{ distance_km: { $gt: 200 } }"
    ],
    "explication": "Requête avec opérateur de comparaison.",
    "operation_mongo": {
      "operation": "find",
      "collection": "tdf_etapes",
      "query": { "distance_km": { "$gt": 200 } }
    }
  },

  {
    "intitule": "Ajouter un nouveau joueur à l'équipe de France.",
    "type": "ordonner",
    "niveau": 3,
    "collection_cible": "foot_joueurs",
    "reponses": [
      { "texte": "db.foot_joueurs.insertOne(", "correcte": false },
      { "texte": "{ nom: \"Kanté\", prenom: \"N'Golo\", poste: \"milieu\", age: 32, equipe_id: ObjectId(\"665000000000000000000001\") }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.foot_joueurs.insertOne(",
      "{ nom: \"Kanté\", prenom: \"N'Golo\", poste: \"milieu\", age: 32, equipe_id: ObjectId(\"665000000000000000000001\") }"
    ],
    "explication": "Requête d'insertion d'un document.",
    "operation_mongo": {
      "operation": "insertOne",
      "collection": "foot_joueurs",
      "document": {
        "nom": "Kanté",
        "prenom": "N'Golo",
        "poste": "milieu",
        "age": 32,
        "equipe_id": { "$oid": "665000000000000000000001" }
      }
    }
  },

  {
    "intitule": "Changer l'entraîneur du Brésil.",
    "type": "ordonner",
    "niveau": 3,
    "collection_cible": "foot_equipes",
    "reponses": [
      { "texte": "db.foot_equipes.updateMany(", "correcte": false },
      { "texte": "{ nom: \"Brésil\" },", "correcte": false },
      { "texte": "{ $set: { entraineur: \"Diniz\" } }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.foot_equipes.updateMany(",
      "{ nom: \"Brésil\" },",
      "{ $set: { entraineur: \"Diniz\" } }"
    ],
    "explication": "Mise à jour d’un champ avec $set.",
    "operation_mongo": {
      "operation": "updateMany",
      "collection": "foot_equipes",
      "filter": { "nom": "Brésil" },
      "update": { "$set": { "entraineur": "Diniz" } }
    }
  },

  {
    "intitule": "Supprimer les gardiens de plus de 35 ans.",
    "type": "ordonner",
    "niveau": 4,
    "collection_cible": "foot_joueurs",
    "reponses": [
      { "texte": "{ poste: \"gardien\", age: { $gt: 35 } }", "correcte": false },
      { "texte": "db.foot_joueurs.deleteMany(", "correcte": false }
    ],
    "ordre_attendu": [
      "db.foot_joueurs.deleteMany(",
      "{ poste: \"gardien\", age: { $gt: 35 } }"
    ],
    "explication": "Suppression conditionnelle avec deleteMany.",
    "operation_mongo": {
      "operation": "deleteMany",
      "collection": "foot_joueurs",
      "filter": { "poste": "gardien", "age": { "$gt": 35 } }
    }
  },

  {
    "intitule": "Afficher les scores des matchs joués par la France.",
    "type": "ordonner",
    "niveau": 4,
    "collection_cible": "foot_matchs",
    "reponses": [
      { "texte": "{ $match: { $or: [ { equipe1_id: ObjectId(\"665000000000000000000001\") }, { equipe2_id: ObjectId(\"665000000000000000000001\") } ] } }", "correcte": false },
      { "texte": "db.foot_matchs.aggregate([", "correcte": false }
    ],
    "ordre_attendu": [
      "db.foot_matchs.aggregate([",
      "{ $match: { $or: [ { equipe1_id: ObjectId(\"665000000000000000000001\") }, { equipe2_id: ObjectId(\"665000000000000000000001\") } ] } }"
    ],
    "explication": "Filtrage dans un pipeline d'agrégation.",
    "operation_mongo": {
      "operation": "aggregate",
      "collection": "foot_matchs",
      "pipeline": [
        {
          "$match": {
            "$or": [
              { "equipe1_id": { "$oid": "665000000000000000000001" } },
              { "equipe2_id": { "$oid": "665000000000000000000001" } }
            ]
          }
        }
      ]
    }
  }
]);

// plus de questions 

db.questions.insertMany([
  {
    "intitule": "Quelle requête permet de trouver le cycliste nommé 'Tadej Pogačar' ?",
    "type": "choix_unique",
    "niveau": 2,
    "collection_cible": "tdf_cyclistes",
    "reponses": [
      { "texte": "db.tdf_cyclistes.find({ nom: \"Pogačar\" })", "correcte": true },
      { "texte": "db.tdf_cyclistes.find({ nationalite: \"Slovénie\" })", "correcte": false },
      { "texte": "db.tdf_cyclistes.find({ equipe_id: ObjectId(\"775000000000000000000003\") })", "correcte": false }
    ],
    "explication": "La bonne requête utilise le nom du cycliste pour le trouver.",
    "operation_mongo": {
      "operation": "find",
      "collection": "tdf_cyclistes",
      "query": { "nom": "Pogačar" }
    }
  },
  {
    "intitule": "Quelle requête permet de trouver les équipes avec un sponsor commençant par 'I' ?",
    "type": "choix_multiple",
    "niveau": 3,
    "collection_cible": "tdf_equipes",
    "reponses": [
      { "texte": "db.tdf_equipes.find({ sponsor: /^I/ })", "correcte": true },
      { "texte": "db.tdf_equipes.find({ nom: /^I/ })", "correcte": false },
      { "texte": "db.tdf_equipes.find({ sponsor: { $regex: \"I\" } })", "correcte": true }
    ],
    "explication": "Les requêtes correctes utilisent une expression régulière pour trouver les sponsors commençant par 'I'.",
    "operation_mongo": {
      "operation": "find",
      "collection": "tdf_equipes",
      "query": { "sponsor": { "$regex": "^I" } }
    }
  },
  {
    "intitule": "Mettez à jour l'entraîneur de l'équipe 'Paris Saint-Germain' pour le définir à 'Mauricio Pochettino'.",
    "type": "ordonner",
    "niveau": 3,
    "collection_cible": "foot_equipes",
    "reponses": [
      { "texte": "db.foot_equipes.updateMany(", "correcte": false },
      { "texte": "{ nom: \"Paris Saint-Germain\" },", "correcte": false },
      { "texte": "{ $set: { entraineur: \"Mauricio Pochettino\" } }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.foot_equipes.updateMany(",
      "{ nom: \"Paris Saint-Germain\" },",
      "{ $set: { entraineur: \"Mauricio Pochettino\" } }"
    ],
    "explication": "Utilisation de updateMany pour mettre à jour l'entraîneur d'une équipe spécifique.",
    "operation_mongo": {
      "operation": "updateMany",
      "collection": "foot_equipes",
      "filter": { "nom": "Paris Saint-Germain" },
      "update": { "$set": { "entraineur": "Mauricio Pochettino" } }
    }
  },
  {
    "intitule": "Insérez un nouveau cycliste nommé 'Mathieu van der Poel' de nationalité 'Pays-Bas' dans l'équipe 'Alpecin-Deceuninck'.",
    "type": "ordonner",
    "niveau": 3,
    "collection_cible": "tdf_cyclistes",
    "reponses": [
      { "texte": "db.tdf_cyclistes.insertOne(", "correcte": false },
      { "texte": "{ nom: \"van der Poel\", prenom: \"Mathieu\", nationalite: \"Pays-Bas\", equipe_id: ObjectId(\"775000000000000000000005\") }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.tdf_cyclistes.insertOne(",
      "{ nom: \"van der Poel\", prenom: \"Mathieu\", nationalite: \"Pays-Bas\", equipe_id: ObjectId(\"775000000000000000000005\") }"
    ],
    "explication": "Insertion d'un nouveau document dans la collection des cyclistes.",
    "operation_mongo": {
      "operation": "insertOne",
      "collection": "tdf_cyclistes",
      "document": {
        "nom": "van der Poel",
        "prenom": "Mathieu",
        "nationalite": "Pays-Bas",
        "equipe_id": { "$oid": "775000000000000000000005" }
      }
    }
  },
  {
    "intitule": "Quelle requête permet de trouver le joueur nommé 'Kylian Mbappé' ?",
    "type": "choix_unique",
    "niveau": 1,
    "collection_cible": "foot_joueurs",
    "reponses": [
      { "texte": "db.foot_joueurs.find({ nom: \"Mbappé\" })", "correcte": true },
      { "texte": "db.foot_joueurs.find({ poste: \"attaquant\" })", "correcte": false },
      { "texte": "db.foot_joueurs.find({ age: 25 })", "correcte": false }
    ],
    "explication": "La bonne requête utilise le nom du joueur pour le trouver.",
    "operation_mongo": {
      "operation": "find",
      "collection": "foot_joueurs",
      "query": { "nom": "Mbappé" }
    }
  },
  {
    "intitule": "Quelle requête permet de trouver les étapes dont la distance est supérieure à 150 km mais inférieure à 200 km ?",
    "type": "choix_multiple",
    "niveau": 3,
    "collection_cible": "tdf_etapes",
    "reponses": [
      { "texte": "db.tdf_etapes.find({ distance_km: { $gt: 150, $lt: 200 } })", "correcte": true },
      { "texte": "db.tdf_etapes.find({ distance_km: { $gt: 200 } })", "correcte": false },
      { "texte": "db.tdf_etapes.find({ $and: [ { distance_km: { $gt: 150 } }, { distance_km: { $lt: 200 } } ] })", "correcte": true }
    ],
    "explication": "Les requêtes correctes utilisent des opérateurs de comparaison pour filtrer les étapes selon la distance.",
    "operation_mongo": {
      "operation": "find",
      "collection": "tdf_etapes",
      "query": { "distance_km": { "$gt": 150, "$lt": 200 } }
    }
  },
  {
    "intitule": "Mettez à jour le sponsor de l'équipe 'Trek-Segafredo' pour le définir à 'Trek-Bikes'.",
    "type": "ordonner",
    "niveau": 3,
    "collection_cible": "tdf_equipes",
    "reponses": [
      { "texte": "db.tdf_equipes.updateMany(", "correcte": false },
      { "texte": "{ nom: \"Trek-Segafredo\" },", "correcte": false },
      { "texte": "{ $set: { sponsor: \"Trek-Bikes\" } }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.tdf_equipes.updateMany(",
      "{ nom: \"Trek-Segafredo\" },",
      "{ $set: { sponsor: \"Trek-Bikes\" } }"
    ],
    "explication": "Utilisation de updateMany pour mettre à jour le sponsor d'une équipe spécifique.",
    "operation_mongo": {
      "operation": "updateMany",
      "collection": "tdf_equipes",
      "filter": { "nom": "Trek-Segafredo" },
      "update": { "$set": { "sponsor": "Trek-Bikes" } }
    }
  },
  {
    "intitule": "Supprimez tous les cyclistes de nationalité 'Slovaquie'.",
    "type": "ordonner",
    "niveau": 4,
    "collection_cible": "tdf_cyclistes",
    "reponses": [
      { "texte": "db.tdf_cyclistes.deleteMany(", "correcte": false },
      { "texte": "{ nationalite: \"Slovaquie\" }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.tdf_cyclistes.deleteMany(",
      "{ nationalite: \"Slovaquie\" }"
    ],
    "explication": "Utilisation de deleteMany pour supprimer des documents selon un critère spécifique.",
    "operation_mongo": {
      "operation": "deleteMany",
      "collection": "tdf_cyclistes",
      "filter": { "nationalite": "Slovaquie" }
    }
  },
    {
    "intitule": "Quelle requête permet de trouver l'équipe nommée 'Jumbo-Visma' ?",
    "type": "choix_unique",
    "niveau": 1,
    "collection_cible": "tdf_equipes",
    "reponses": [
      { "texte": "db.tdf_equipes.find({ nom: \"Jumbo-Visma\" })", "correcte": true },
      { "texte": "db.tdf_equipes.find({ sponsor: \"Jumbo\" })", "correcte": false },
      { "texte": "db.tdf_equipes.find({ nom: \"Ineos Grenadiers\" })", "correcte": false }
    ],
    "explication": "La bonne requête utilise le nom de l'équipe pour la trouver.",
    "operation_mongo": {
      "operation": "find",
      "collection": "tdf_equipes",
      "query": { "nom": "Jumbo-Visma" }
    }
  },
  {
    "intitule": "Quelle requête permet de trouver les matchs joués au 'Stade de France' ?",
    "type": "choix_unique",
    "niveau": 2,
    "collection_cible": "foot_matchs",
    "reponses": [
      { "texte": "db.foot_matchs.find({ stade: \"Stade de France\" })", "correcte": true },
      { "texte": "db.foot_matchs.find({ equipe1_id: ObjectId(\"665000000000000000000001\") })", "correcte": false },
      { "texte": "db.foot_matchs.find({ score: { equipe1: 2 } })", "correcte": false }
    ],
    "explication": "La bonne requête utilise le nom du stade pour trouver les matchs.",
    "operation_mongo": {
      "operation": "find",
      "collection": "foot_matchs",
      "query": { "stade": "Stade de France" }
    }
  },
  {
    "intitule": "Quelle requête permet de trouver les joueurs de l'équipe d'Allemagne ?",
    "type": "choix_multiple",
    "niveau": 3,
    "collection_cible": "foot_joueurs",
    "reponses": [
      { "texte": "db.foot_joueurs.find({ equipe_id: ObjectId(\"665000000000000000000003\") })", "correcte": true },
      { "texte": "db.foot_joueurs.find({ nationalite: \"Allemagne\" })", "correcte": false },
      { "texte": "db.foot_joueurs.find({ poste: \"défenseur\" })", "correcte": false }
    ],
    "explication": "La bonne requête utilise l'identifiant de l'équipe pour trouver ses joueurs.",
    "operation_mongo": {
      "operation": "find",
      "collection": "foot_joueurs",
      "query": { "equipe_id": { "$oid": "665000000000000000000003" } }
    }
  },
  {
    "intitule": "Mettez à jour la ville de départ de l'étape numéro 5 pour la définir à 'Chalon-sur-Saône'.",
    "type": "ordonner",
    "niveau": 3,
    "collection_cible": "tdf_etapes",
    "reponses": [
      { "texte": "db.tdf_etapes.updateMany(", "correcte": false },
      { "texte": "{ numero: 5 },", "correcte": false },
      { "texte": "{ $set: { ville_depart: \"Chalon-sur-Saône\" } }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.tdf_etapes.updateMany(",
      "{ numero: 5 },",
      "{ $set: { ville_depart: \"Chalon-sur-Saône\" } }"
    ],
    "explication": "Utilisation de updateMany pour mettre à jour la ville de départ d'une étape spécifique.",
    "operation_mongo": {
      "operation": "updateMany",
      "collection": "tdf_etapes",
      "filter": { "numero": 5 },
      "update": { "$set": { "ville_depart": "Chalon-sur-Saône" } }
    }
  },
  {
    "intitule": "Insérez une nouvelle équipe nommée 'Team TotalEnergies' avec le sponsor 'TotalEnergies'.",
    "type": "ordonner",
    "niveau": 3,
    "collection_cible": "tdf_equipes",
    "reponses": [
      { "texte": "db.tdf_equipes.insertOne(", "correcte": false },
      { "texte": "{ nom: \"Team TotalEnergies\", sponsor: \"TotalEnergies\" }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.tdf_equipes.insertOne(",
      "{ nom: \"Team TotalEnergies\", sponsor: \"TotalEnergies\" }"
    ],
    "explication": "Insertion d'un nouveau document dans la collection des équipes.",
    "operation_mongo": {
      "operation": "insertOne",
      "collection": "tdf_equipes",
      "document": {
        "nom": "Team TotalEnergies",
        "sponsor": "TotalEnergies"
      }
    }
  },
  {
    "intitule": "Supprimez toutes les étapes dont la distance est inférieure à 100 km.",
    "type": "ordonner",
    "niveau": 4,
    "collection_cible": "tdf_etapes",
    "reponses": [
      { "texte": "db.tdf_etapes.deleteMany(", "correcte": false },
      { "texte": "{ distance_km: { $lt: 100 } }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.tdf_etapes.deleteMany(",
      "{ distance_km: { $lt: 100 } }"
    ],
    "explication": "Utilisation de deleteMany pour supprimer des documents selon un critère spécifique.",
    "operation_mongo": {
      "operation": "deleteMany",
      "collection": "tdf_etapes",
      "filter": { "distance_km": { "$lt": 100 } }
    }
  },
  {
    "intitule": "Quelle requête permet de trouver le cycliste nommé 'Peter Sagan' ?",
    "type": "choix_unique",
    "niveau": 1,
    "collection_cible": "tdf_cyclistes",
    "reponses": [
      { "texte": "db.tdf_cyclistes.find({ nom: \"Sagan\" })", "correcte": true },
      { "texte": "db.tdf_cyclistes.find({ nationalite: \"Slovaquie\" })", "correcte": false },
      { "texte": "db.tdf_cyclistes.find({ equipe_id: ObjectId(\"775000000000000000000004\") })", "correcte": false }
    ],
    "explication": "La bonne requête utilise le nom du cycliste pour le trouver.",
    "operation_mongo": {
      "operation": "find",
      "collection": "tdf_cyclistes",
      "query": { "nom": "Sagan" }
    }
  },
  {
    "intitule": "Quelle requête permet de trouver les matchs où l'équipe d'Espagne a joué ?",
    "type": "choix_unique",
    "niveau": 2,
    "collection_cible": "foot_matchs",
    "reponses": [
      { "texte": "db.foot_matchs.find({ $or: [{ equipe1_id: ObjectId(\"665000000000000000000005\") }, { equipe2_id: ObjectId(\"665000000000000000000005\") }] })", "correcte": true },
      { "texte": "db.foot_matchs.find({ stade: \"Stade de France\" })", "correcte": false },
      { "texte": "db.foot_matchs.find({ score: { equipe1: 0 } })", "correcte": false }
    ],
    "explication": "La bonne requête utilise l'opérateur $or pour trouver les matchs où l'Espagne a joué.",
    "operation_mongo": {
      "operation": "find",
      "collection": "foot_matchs",
      "query": { "$or": [{ "equipe1_id": { "$oid": "665000000000000000000005" } }, { "equipe2_id": { "$oid": "665000000000000000000005" } }] }
    }
  },
  {
    "intitule": "Quelle requête permet de trouver les équipes dont le sponsor contient la lettre 'a' ?",
    "type": "choix_multiple",
    "niveau": 3,
    "collection_cible": "tdf_equipes",
    "reponses": [
      { "texte": "db.tdf_equipes.find({ sponsor: /a/ })", "correcte": true },
      { "texte": "db.tdf_equipes.find({ sponsor: { $regex: \"a\" } })", "correcte": true },
      { "texte": "db.tdf_equipes.find({ sponsor: \"a\" })", "correcte": false }
    ],
    "explication": "Les requêtes correctes utilisent une expression régulière pour trouver les sponsors contenant la lettre 'a'.",
    "operation_mongo": {
      "operation": "find",
      "collection": "tdf_equipes",
      "query": { "sponsor": { "$regex": "a" } }
    }
  },
  {
    "intitule": "Mettez à jour la distance de l'étape numéro 10 pour la définir à 35.5 km.",
    "type": "ordonner",
    "niveau": 3,
    "collection_cible": "tdf_etapes",
    "reponses": [
      { "texte": "db.tdf_etapes.updateMany(", "correcte": false },
      { "texte": "{ numero: 10 },", "correcte": false },
      { "texte": "{ $set: { distance_km: 35.5 } }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.tdf_etapes.updateMany(",
      "{ numero: 10 },",
      "{ $set: { distance_km: 35.5 } }"
    ],
    "explication": "Utilisation de updateMany pour mettre à jour la distance d'une étape spécifique.",
    "operation_mongo": {
      "operation": "updateMany",
      "collection": "tdf_etapes",
      "filter": { "numero": 10 },
      "update": { "$set": { "distance_km": 35.5 } }
    }
  },
  {
    "intitule": "Insérez un nouveau match entre l'équipe d'Italie et l'équipe du Portugal au stade 'San Siro' avec un score de 1-0 pour l'Italie.",
    "type": "ordonner",
    "niveau": 3,
    "collection_cible": "foot_matchs",
    "reponses": [
      { "texte": "db.foot_matchs.insertOne(", "correcte": false },
      { "texte": "{ date: ISODate(\"2023-11-01T00:00:00Z\"), stade: \"San Siro\", equipe1_id: ObjectId(\"665000000000000000000006\"), equipe2_id: ObjectId(\"665000000000000000000008\"), score: { equipe1: 1, equipe2: 0 } }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.foot_matchs.insertOne(",
      "{ date: ISODate(\"2023-11-01T00:00:00Z\"), stade: \"San Siro\", equipe1_id: ObjectId(\"665000000000000000000006\"), equipe2_id: ObjectId(\"665000000000000000000008\"), score: { equipe1: 1, equipe2: 0 } }"
    ],
    "explication": "Insertion d'un nouveau document dans la collection des matchs.",
    "operation_mongo": {
      "operation": "insertOne",
      "collection": "foot_matchs",
      "document": {
        "date": "2023-11-01T00:00:00Z",
        "stade": "San Siro",
        "equipe1_id": { "$oid": "665000000000000000000006" },
        "equipe2_id": { "$oid": "665000000000000000000008" },
        "score": { "equipe1": 1, "equipe2": 0 }
      }
    }
  },
    {
    "intitule": "Supprimez tous les cyclistes de l'équipe 'Astana Qazaqstan Team'.",
    "type": "ordonner",
    "niveau": 4,
    "collection_cible": "tdf_cyclistes",
    "reponses": [
      { "texte": "db.tdf_cyclistes.deleteMany(", "correcte": false },
      { "texte": "{ equipe_id: ObjectId(\"775000000000000000000009\") }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.tdf_cyclistes.deleteMany(",
      "{ equipe_id: ObjectId(\"775000000000000000000009\") }"
    ],
    "explication": "Utilisation de deleteMany pour supprimer des documents selon un critère spécifique.",
    "operation_mongo": {
      "operation": "deleteMany",
      "collection": "tdf_cyclistes",
      "filter": { "equipe_id": { "$oid": "775000000000000000000009" } }
    }
  },
  {
    "intitule": "Quelle requête permet de trouver le joueur nommé 'Lionel Messi' ?",
    "type": "choix_unique",
    "niveau": 1,
    "collection_cible": "foot_joueurs",
    "reponses": [
      { "texte": "db.foot_joueurs.find({ nom: \"Messi\" })", "correcte": true },
      { "texte": "db.foot_joueurs.find({ age: 37 })", "correcte": false },
      { "texte": "db.foot_joueurs.find({ poste: \"milieu\" })", "correcte": false }
    ],
    "explication": "La bonne requête utilise le nom du joueur pour le trouver.",
    "operation_mongo": {
      "operation": "find",
      "collection": "foot_joueurs",
      "query": { "nom": "Messi" }
    }
  },
  {
    "intitule": "Quelle requête permet de trouver l'équipe nommée 'Olympique Lyonnais' ?",
    "type": "choix_unique",
    "niveau": 1,
    "collection_cible": "foot_equipes",
    "reponses": [
      { "texte": "db.foot_equipes.find({ nom: \"Olympique Lyonnais\" })", "correcte": true },
      { "texte": "db.foot_equipes.find({ ville: \"Lyon\" })", "correcte": false },
      { "texte": "db.foot_equipes.find({ entraineur: \"Laurent Blanc\" })", "correcte": false }
    ],
    "explication": "La bonne requête utilise le nom de l'équipe pour la trouver.",
    "operation_mongo": {
      "operation": "find",
      "collection": "foot_equipes",
      "query": { "nom": "Olympique Lyonnais" }
    }
  },
  {
    "intitule": "Quelle requête permet de trouver les cyclistes de nationalité 'France' ?",
    "type": "choix_multiple",
    "niveau": 2,
    "collection_cible": "tdf_cyclistes",
    "reponses": [
      { "texte": "db.tdf_cyclistes.find({ nationalite: \"France\" })", "correcte": true },
      { "texte": "db.tdf_cyclistes.find({ nom: \"Alaphilippe\" })", "correcte": false },
      { "texte": "db.tdf_cyclistes.find({ equipe_id: ObjectId(\"775000000000000000000005\") })", "correcte": false }
    ],
    "explication": "La bonne requête utilise la nationalité pour trouver les cyclistes.",
    "operation_mongo": {
      "operation": "find",
      "collection": "tdf_cyclistes",
      "query": { "nationalite": "France" }
    }
  },
  {
    "intitule": "Mettez à jour le nom du stade 'Stade de la Mosson' pour le définir à 'Stade de Montpellier'.",
    "type": "ordonner",
    "niveau": 3,
    "collection_cible": "tdf_etapes",
    "reponses": [
      { "texte": "db.tdf_etapes.updateMany(", "correcte": false },
      { "texte": "{ ville_arrivee: \"Montpellier\" },", "correcte": false },
      { "texte": "{ $set: { ville_arrivee: \"Stade de Montpellier\" } }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.tdf_etapes.updateMany(",
      "{ ville_arrivee: \"Stade de la Mosson\" },",
      "{ $set: { ville_arrivee: \"Stade de Montpellier\" } }"
    ],
    "explication": "Utilisation de updateMany pour mettre à jour le nom du stade.",
    "operation_mongo": {
      "operation": "updateMany",
      "collection": "tdf_etapes",
      "filter": { "ville_arrivee": "Stade de la Mosson" },
      "update": { "$set": { "ville_arrivee": "Stade de Montpellier" } }
    }
  },
  {
    "intitule": "Insérez une nouvelle étape de 180 km entre 'Bordeaux' et 'Toulouse'.",
    "type": "ordonner",
    "niveau": 3,
    "collection_cible": "tdf_etapes",
    "reponses": [
      { "texte": "db.tdf_etapes.insertOne(", "correcte": false },
      { "texte": "{ numero: 22, ville_depart: \"Bordeaux\", ville_arrivee: \"Toulouse\", distance_km: 180.0 }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.tdf_etapes.insertOne(",
      "{ numero: 22, ville_depart: \"Bordeaux\", ville_arrivee: \"Toulouse\", distance_km: 180.0 }"
    ],
    "explication": "Insertion d'une nouvelle étape dans la collection.",
    "operation_mongo": {
      "operation": "insertOne",
      "collection": "tdf_etapes",
      "document": {
        "numero": 22,
        "ville_depart": "Bordeaux",
        "ville_arrivee": "Toulouse",
        "distance_km": 180.0
      }
    }
  },
  {
    "intitule": "Supprimez tous les matchs où le score de l'équipe 1 est de 0.",
    "type": "ordonner",
    "niveau": 4,
    "collection_cible": "foot_matchs",
    "reponses": [
      { "texte": "db.foot_matchs.deleteMany(", "correcte": false },
      { "texte": "{ \"score.equipe1\": 0 }", "correcte": false }
    ],
    "ordre_attendu": [
      "db.foot_matchs.deleteMany(",
      "{ \"score.equipe1\": 0 }"
    ],
    "explication": "Utilisation de deleteMany pour supprimer des documents selon un critère spécifique.",
    "operation_mongo": {
      "operation": "deleteMany",
      "collection": "foot_matchs",
      "filter": { "score.equipe1": 0 }
    }
  },
]);