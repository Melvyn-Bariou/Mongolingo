// FOOT - EQUIPES

db.createCollection("foot_equipes", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["nom", "groupe", "entraineur"],
        properties: {
          nom: { bsonType: "string", description: "doit être une chaîne et est requis" },
          groupe: { bsonType: "string", description: "nom du groupe dans lequel l'équipe joue (A,B,...), doit être une chaîne et est requis" },
          entraineur: { bsonType: "string", description: "doit être une chaîne et est requis"}
        }
      }
    }
  });