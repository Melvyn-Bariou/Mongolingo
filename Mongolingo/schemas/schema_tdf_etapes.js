  // TOUR DE FRANCE - ETAPES
  
  db.createCollection("tdf_etapes", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["numero", "ville_depart", "ville_arrivee", "distance_km"],
        properties: {
          numero: { bsonType: "int" },
          ville_depart: { bsonType: "string" },
          ville_arrivee: { bsonType: "string" },
          distance_km: { bsonType: "double" }
        }
      }
    }
  });