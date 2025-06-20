// FOOT - MATCHS

db.createCollection("foot_matchs", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["date", "stade", "equipe1_id", "equipe2_id", "score"],
        properties: {
          date: { bsonType: "date" },
          stade: { bsonType: "string" },
          equipe1_id: { bsonType: "objectId" },
          equipe2_id: { bsonType: "objectId" },
          score: {
            bsonType: "object",
            required: ["equipe1", "equipe2"],
            properties: {
              equipe1: { bsonType: "int" },
              equipe2: { bsonType: "int" }
            }
          }
        }
      }
    }
  });