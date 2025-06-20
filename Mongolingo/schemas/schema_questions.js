// Etape 2 : faire une collection pour les questions (qui seront à stocker)

db.createCollection("questions", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["intitule", "type", "niveau", "collection_cible", "reponses", "operation_mongo"],
      properties: {
        intitule: {
          bsonType: "string",
          description: "L'énoncé de la question"
        },

        type: {
          enum: ["choix_unique", "choix_multiple", "ordonner"],
          description: "Type de question"
        },

        niveau: {
          bsonType: "int",
          minimum: 1,
          maximum: 5,
          description: "Difficulté de 1 (facile) à 5 (expert)"
        },

        collection_cible: {
          enum: ["foot_equipes", "foot_joueurs", "foot_matchs", "tdf_cyclistes", "tdf_equipes", "tdf_etapes"],
          description: "Nom de la collection Mongo concernée"
        },

        reponses: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["texte", "correcte"],
            properties: {
              texte: { bsonType: "string" },
              correcte: { bsonType: "bool" }
            }
          }
        },

        explication: {
          bsonType: "string",
          description: "Explication pédagogique affichée après la réponse"
        },

        ordre_attendu: {
          bsonType: "array",
          items: { bsonType: "string" },
          description: "Uniquement pour les questions de type 'ordonner'"
        },

        operation_mongo: {
          bsonType: "object",
          required: ["operation"],
          properties: {
            operation: {
              bsonType: "string",
              enum: ["find", "insertOne", "updateMany", "deleteMany", "aggregate", "none"]
            },
            collection: { bsonType: "string" },
            query: { bsonType: "object" },
            document: { bsonType: "object" },
            filter: { bsonType: "object" },
            update: { bsonType: "object" },
            pipeline: { bsonType: "array" }
          }
        }
      }
    }
  }
});
