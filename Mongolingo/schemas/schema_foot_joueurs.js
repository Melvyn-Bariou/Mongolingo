// Thème FOOT - JOUEURS

db.createCollection("foot_joueurs", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["nom", "prenom", "poste", "age", "equipe_id"],
        properties: {
          nom: { bsonType: "string", description: "doit être une chaîne et est requis" },
          prenom: { bsonType: "string", description: "doit être une chaîne et est requis" },
          poste: { enum: ["gardien", "défenseur", "milieu", "attaquant"], description: "est requis et doit être 'gardien', 'défenseur' ou 'milieu' ou 'attaquant'" },
          age: { bsonType: "int", minimum: 16, description: "doit être un entier et est requis" },
          equipe_id: { bsonType: "objectId", description: "identifiant de l'équipe et est requis" }
        }
      }
    }
  });