  // TOUR DE FRANCE - EQUIPES
  
  db.createCollection("tdf_equipes", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["nom", "sponsor"],
        properties: {
          nom: { bsonType: "string" },
          sponsor: { bsonType: "string" }
        }
      }
    }
  });