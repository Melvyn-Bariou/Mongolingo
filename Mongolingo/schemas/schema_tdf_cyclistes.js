// TOUR DE FRANCE - CYCLISTES


db.createCollection("tdf_cyclistes", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["nom", "prenom", "nationalite", "equipe_id"],
        properties: {
          nom: { bsonType: "string" },
          prenom: { bsonType: "string" },
          nationalite: { bsonType: "string" },
          equipe_id: { bsonType: "objectId" }
        }
      }
    }
  });