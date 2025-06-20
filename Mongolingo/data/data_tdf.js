// supprimer les données des collections de foot 
db.tdf_equipes.deleteMany({});
db.tdf_cyclistes.deleteMany({});
db.tdf_etapes.deleteMany({});

db.tdf_equipes.insertMany([
  {
    _id: ObjectId("775000000000000000000001"),
    nom: "Ineos Grenadiers",
    sponsor: "Ineos"
  },
  {
    _id: ObjectId("775000000000000000000002"),
    nom: "Jumbo-Visma",
    sponsor: "Jumbo"
  },
  {
    _id: ObjectId("775000000000000000000003"),
    nom: "UAE Team Emirates",
    sponsor: "UAE"
  },
  {
    _id: ObjectId("775000000000000000000004"),
    nom: "Bora-Hansgrohe",
    sponsor: "Bora"
  },
  {
    _id: ObjectId("775000000000000000000005"),
    nom: "Deceuninck-QuickStep",
    sponsor: "Deceuninck"
  },
  {
    _id: ObjectId("775000000000000000000006"),
    nom: "Movistar Team",
    sponsor: "Movistar"
  },
  {
    _id: ObjectId("775000000000000000000007"),
    nom: "Team Bahrain Victorious",
    sponsor: "Bahrain"
  },
  {
    _id: ObjectId("775000000000000000000008"),
    nom: "Trek-Segafredo",
    sponsor: "Trek"
  },
  {
    _id: ObjectId("775000000000000000000009"),
    nom: "Astana Qazaqstan Team",
    sponsor: "Astana"
  },
  {
    _id: ObjectId("775000000000000000000010"),
    nom: "Cofidis",
    sponsor: "Cofidis"
  },
  {
    _id: ObjectId("775000000000000000000011"),
    nom: "Groupama-FDJ",
    sponsor: "Groupama"
  },
  {
    _id: ObjectId("775000000000000000000012"),
    nom: "Israel-Premier Tech",
    sponsor: "Israel"
  },
  {
    _id: ObjectId("775000000000000000000013"),
    nom: "Lotto Dstny",
    sponsor: "Lotto"
  },
  {
    _id: ObjectId("775000000000000000000014"),
    nom: "EF Education-EasyPost",
    sponsor: "EF Education"
  },
  {
    _id: ObjectId("775000000000000000000015"),
    nom: "Arkéa-Samsic",
    sponsor: "Arkéa"
  }
]);

db.tdf_cyclistes.insertMany([
  {
    nom: "Pogačar",
    prenom: "Tadej",
    nationalite: "Slovénie",
    equipe_id: ObjectId("775000000000000000000003")
  },
  {
    nom: "Vingegaard",
    prenom: "Jonas",
    nationalite: "Danemark",
    equipe_id: ObjectId("775000000000000000000002")
  },
  {
    nom: "Thomas",
    prenom: "Geraint",
    nationalite: "Royaume-Uni",
    equipe_id: ObjectId("775000000000000000000001")
  },
  {
    nom: "Alaphilippe",
    prenom: "Julian",
    nationalite: "France",
    equipe_id: ObjectId("775000000000000000000005")
  },
  {
    nom: "Sagan",
    prenom: "Peter",
    nationalite: "Slovaquie",
    equipe_id: ObjectId("775000000000000000000004")
  },
  {
    nom: "Roglič",
    prenom: "Primož",
    nationalite: "Slovénie",
    equipe_id: ObjectId("775000000000000000000002")
  },
  {
    nom: "Bernal",
    prenom: "Egan",
    nationalite: "Colombie",
    equipe_id: ObjectId("775000000000000000000001")
  },
  {
    nom: "Van Aert",
    prenom: "Wout",
    nationalite: "Belgique",
    equipe_id: ObjectId("775000000000000000000002")
  },
  {
    nom: "Hirschi",
    prenom: "Marc",
    nationalite: "Suisse",
    equipe_id: ObjectId("775000000000000000000003")
  },
  {
    nom: "Kuß",
    prenom: "Sepp",
    nationalite: "Allemagne",
    equipe_id: ObjectId("775000000000000000000002")
  }
]);

db.tdf_etapes.insertMany([
  {
    numero: 1,
    ville_depart: "Brest",
    ville_arrivee: "Landerneau",
    distance_km: 197.8
  },
  {
    numero: 2,
    ville_depart: "Perros-Guirec",
    ville_arrivee: "Mûr-de-Bretagne",
    distance_km: 183.5
  },
  {
    numero: 3,
    ville_depart: "Lorient",
    ville_arrivee: "Pontivy",
    distance_km: 182.9
  },
  {
    numero: 4,
    ville_depart: "Redon",
    ville_arrivee: "Fougères",
    distance_km: 150.4
  },
  {
    numero: 5,
    ville_depart: "Change",
    ville_arrivee: "Le Creusot",
    distance_km: 175.4
  },
  {
    numero: 6,
    ville_depart: "Tournus",
    ville_arrivee: "Chalon-sur-Saône",
    distance_km: 230.3
  },
  {
    numero: 7,
    ville_depart: "Vesoul",
    ville_arrivee: "Le Grand-Bornand",
    distance_km: 240.7
  },
  {
    numero: 8,
    ville_depart: "Albertville",
    ville_arrivee: "Valence",
    distance_km: 150.8
  },
  {
    numero: 9,
    ville_depart: "Clermont-Ferrand",
    ville_arrivee: "Tulle",
    distance_km: 145.1
  },
  {
    numero: 10,
    ville_depart: "Libourne",
    ville_arrivee: "Saint-Émilion",
    distance_km: 30.8
  },
  {
    numero: 11,
    ville_depart: "Saint-Émilion",
    ville_arrivee: "Libourne",
    distance_km: 162.3
  },
  {
    numero: 12,
    ville_depart: "Pau",
    ville_arrivee: "Laruns",
    distance_km: 137.8
  },
  {
    numero: 13,
    ville_depart: "Saint-Girons",
    ville_arrivee: "Foix",
    distance_km: 191.7
  },
  {
    numero: 14,
    ville_depart: "Carcassonne",
    ville_arrivee: "Quillan",
    distance_km: 183.7
  },
  {
    numero: 15,
    ville_depart: "Lodeve",
    ville_arrivee: "Mont Aigoual",
    distance_km: 175.1
  },
  {
    numero: 16,
    ville_depart: "Grenoble",
    ville_arrivee: "Villar-de-Lans",
    distance_km: 164.1
  },
  {
    numero: 17,
    ville_depart: "Digne-les-Bains",
    ville_arrivee: "Pra Loup",
    distance_km: 165.7
  },
  {
    numero: 18,
    ville_depart: "Gap",
    ville_arrivee: "Barcelonnette",
    distance_km: 171.1
  },
  {
    numero: 19,
    ville_depart: "Embrun",
    ville_arrivee: "Valloire",
    distance_km: 208.1
  },
  {
    numero: 20,
    ville_depart: "Albertville",
    ville_arrivee: "Val Thorens",
    distance_km: 59.1
  }
]);

