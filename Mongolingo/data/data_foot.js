// supprimer les données des collections de foot 
db.foot_equipes.deleteMany({});
db.foot_joueurs.deleteMany({});
db.foot_matchs.deleteMany({});

db.foot_equipes.insertMany([
  { _id: ObjectId("665000000000000000000001"), nom: "France", groupe: "D", entraineur: "Didier Deschamps" },
  { _id: ObjectId("665000000000000000000002"), nom: "Brésil", groupe: "C", entraineur: "Tite" },
  { _id: ObjectId("665000000000000000000003"), nom: "Allemagne", groupe: "B", entraineur: "Hansi Flick" },
  { _id: ObjectId("665000000000000000000004"), nom: "Argentine", groupe: "A", entraineur: "Scaloni" },
  { _id: ObjectId("665000000000000000000005"), nom: "Espagne", groupe: "E", entraineur: "Luis de la Fuente" },
  { _id: ObjectId("665000000000000000000006"), nom: "Italie", groupe: "F", entraineur: "Roberto Mancini" },
  { _id: ObjectId("665000000000000000000007"), nom: "Angleterre", groupe: "G", entraineur: "Gareth Southgate" },
  { _id: ObjectId("665000000000000000000008"), nom: "Portugal", groupe: "H", entraineur: "Roberto Martinez" },
  {
    _id: ObjectId("665000000000000000000009"),
    nom: "Paris Saint-Germain",
    ville: "Paris",
    stade: "Parc des Princes",
    entraineur: "Christophe Galtier",
    groupe: "A"
  },
  {
    _id: ObjectId("665000000000000000000010"),
    nom: "Olympique de Marseille",
    ville: "Marseille",
    stade: "Stade Vélodrome",
    entraineur: "Jorge Sampaoli",
    groupe: "A"
  },
  {
    _id: ObjectId("665000000000000000000011"),
    nom: "AS Monaco",
    ville: "Monaco",
    stade: "Stade Louis II",
    entraineur: "Philippe Clement",
    groupe: "B"
  },
  {
    _id: ObjectId("665000000000000000000012"),
    nom: "Olympique Lyonnais",
    ville: "Lyon",
    stade: "Groupama Stadium",
    entraineur: "Laurent Blanc",
    groupe: "B"
  },
  {
    _id: ObjectId("665000000000000000000013"),
    nom: "LOSC Lille",
    ville: "Lille",
    stade: "Stade Pierre-Mauroy",
    entraineur: "Paulo Fonseca",
    groupe: "C"
  },
  {
    _id: ObjectId("665000000000000000000014"),
    nom: "Stade Rennais",
    ville: "Rennes",
    stade: "Roazhon Park",
    entraineur: "Bruno Génésio",
    groupe: "C"
  },
  {
    _id: ObjectId("665000000000000000000015"),
    nom: "OGC Nice",
    ville: "Nice",
    stade: "Allianz Riviera",
    entraineur: "Francesco Farioli",
    groupe: "D"
  },
  {
    _id: ObjectId("665000000000000000000016"),
    nom: "RC Lens",
    ville: "Lens",
    stade: "Stade Bollaert-Delelis",
    entraineur: "Franck Haise",
    groupe: "D"
  },
  {
    _id: ObjectId("665000000000000000000017"),
    nom: "Montpellier HSC",
    ville: "Montpellier",
    stade: "Stade de la Mosson",
    entraineur: "Michel Der Zakarian",
    groupe: "A"
  },
  {
    _id: ObjectId("665000000000000000000018"),
    nom: "FC Nantes",
    ville: "Nantes",
    stade: "Stade de la Beaujoire",
    entraineur: "Antoine Kombouaré",
    groupe: "B"
  },
  {
    _id: ObjectId("665000000000000000000019"),
    nom: "Stade de Reims",
    ville: "Reims",
    stade: "Stade Auguste-Delaune",
    entraineur: "Will Still",
    groupe: "C"
  },
  {
    _id: ObjectId("665000000000000000000020"),
    nom: "Angers SCO",
    ville: "Angers",
    stade: "Stade Raymond-Kopa",
    entraineur: "Alexandre Dujeux",
    groupe: "D"
  },
  {
    _id: ObjectId("665000000000000000000021"),
    nom: "RC Strasbourg",
    ville: "Strasbourg",
    stade: "Stade de la Meinau",
    entraineur: "Frédéric Antonetti",
    groupe: "A"
  },
  {
    _id: ObjectId("665000000000000000000022"),
    nom: "Toulouse FC",
    ville: "Toulouse",
    stade: "Stade de Toulouse",
    entraineur: "Carles Martínez Novell",
    groupe: "B"
  },
  {
    _id: ObjectId("665000000000000000000023"),
    nom: "FC Lorient",
    ville: "Lorient",
    stade: "Stade du Moustoir",
    entraineur: "Régis Le Bris",
    groupe: "C"
  }
]);

db.foot_joueurs.insertMany([
  // France
  { nom: "Mbappé", prenom: "Kylian", poste: "attaquant", age: 25, equipe_id: ObjectId("665000000000000000000001") },
  { nom: "Lloris", prenom: "Hugo", poste: "gardien", age: 36, equipe_id: ObjectId("665000000000000000000001") },
  { nom: "Griezmann", prenom: "Antoine", poste: "milieu", age: 33, equipe_id: ObjectId("665000000000000000000001") },
  { nom: "Varane", prenom: "Raphaël", poste: "défenseur", age: 30, equipe_id: ObjectId("665000000000000000000001") },
  // Brésil
  { nom: "Neymar", prenom: "Jr", poste: "attaquant", age: 32, equipe_id: ObjectId("665000000000000000000002") },
  { nom: "Alisson", prenom: "Becker", poste: "gardien", age: 31, equipe_id: ObjectId("665000000000000000000002") },
  { nom: "Casemiro", prenom: "Carlos", poste: "milieu", age: 31, equipe_id: ObjectId("665000000000000000000002") },
  { nom: "Thiago", prenom: "Silva", poste: "défenseur", age: 39, equipe_id: ObjectId("665000000000000000000002") },
  // Allemagne
  { nom: "Kimmich", prenom: "Joshua", poste: "milieu", age: 29, equipe_id: ObjectId("665000000000000000000003") },
  { nom: "Neuer", prenom: "Manuel", poste: "gardien", age: 38, equipe_id: ObjectId("665000000000000000000003") },
  { nom: "Müller", prenom: "Thomas", poste: "attaquant", age: 34, equipe_id: ObjectId("665000000000000000000003") },
  { nom: "Rüdiger", prenom: "Antonio", poste: "défenseur", age: 31, equipe_id: ObjectId("665000000000000000000003") },
  // Argentine
  { nom: "Messi", prenom: "Lionel", poste: "attaquant", age: 37, equipe_id: ObjectId("665000000000000000000004") },
  { nom: "Martinez", prenom: "Emiliano", poste: "gardien", age: 32, equipe_id: ObjectId("665000000000000000000004") },
  { nom: "De Paul", prenom: "Rodrigo", poste: "milieu", age: 29, equipe_id: ObjectId("665000000000000000000004") },
  { nom: "Otamendi", prenom: "Nicolas", poste: "défenseur", age: 36, equipe_id: ObjectId("665000000000000000000004") },
  // Espagne
  { nom: "Morata", prenom: "Alvaro", poste: "attaquant", age: 31, equipe_id: ObjectId("665000000000000000000005") },
  { nom: "Simon", prenom: "Unai", poste: "gardien", age: 27, equipe_id: ObjectId("665000000000000000000005") },
  { nom: "Pedri", prenom: "Pedro", poste: "milieu", age: 21, equipe_id: ObjectId("665000000000000000000005") },
  { nom: "Laporte", prenom: "Aymeric", poste: "défenseur", age: 30, equipe_id: ObjectId("665000000000000000000005") },
  // Italie
  { nom: "Immobile", prenom: "Ciro", poste: "attaquant", age: 34, equipe_id: ObjectId("665000000000000000000006") },
  { nom: "Donnarumma", prenom: "Gianluigi", poste: "gardien", age: 25, equipe_id: ObjectId("665000000000000000000006") },
  { nom: "Verratti", prenom: "Marco", poste: "milieu", age: 31, equipe_id: ObjectId("665000000000000000000006") },
  { nom: "Bastoni", prenom: "Alessandro", poste: "défenseur", age: 25, equipe_id: ObjectId("665000000000000000000006") },
  // Angleterre
  { nom: "Kane", prenom: "Harry", poste: "attaquant", age: 31, equipe_id: ObjectId("665000000000000000000007") },
  { nom: "Pickford", prenom: "Jordan", poste: "gardien", age: 30, equipe_id: ObjectId("665000000000000000000007") },
  { nom: "Rice", prenom: "Declan", poste: "milieu", age: 25, equipe_id: ObjectId("665000000000000000000007") },
  { nom: "Stones", prenom: "John", poste: "défenseur", age: 30, equipe_id: ObjectId("665000000000000000000007") },
  // Portugal
  { nom: "Ronaldo", prenom: "Cristiano", poste: "attaquant", age: 39, equipe_id: ObjectId("665000000000000000000008") },
  { nom: "Costa", prenom: "Diogo", poste: "gardien", age: 25, equipe_id: ObjectId("665000000000000000000008") },
  { nom: "Fernandes", prenom: "Bruno", poste: "milieu", age: 29, equipe_id: ObjectId("665000000000000000000008") },
  { nom: "Dias", prenom: "Ruben", poste: "défenseur", age: 27, equipe_id: ObjectId("665000000000000000000008") },

  // Ligue 1
  // Paris Saint-Germain
  {
    nom: "Messi",
    prenom: "Lionel",
    poste: "attaquant",
    age: 36,
    equipe_id: ObjectId("665000000000000000000009")
  },
  {
    nom: "Neymar",
    prenom: "Jr",
    poste: "attaquant",
    age: 32,
    equipe_id: ObjectId("665000000000000000000009")
  },
  {
    nom: "Donnarumma",
    prenom: "Gianluigi",
    poste: "gardien",
    age: 25,
    equipe_id: ObjectId("665000000000000000000009")
  },
  {
    nom: "Marquinhos",
    prenom: "",
    poste: "défenseur",
    age: 29,
    equipe_id: ObjectId("665000000000000000000009")
  },
  // Olympique de Marseille
  {
    nom: "Payet",
    prenom: "Dimitri",
    poste: "milieu",
    age: 36,
    equipe_id: ObjectId("665000000000000000000010")
  },
  {
    nom: "Lopez",
    prenom: "Pau",
    poste: "gardien",
    age: 39,
    equipe_id: ObjectId("665000000000000000000010")
  },
  {
    nom: "Gerson",
    prenom: "",
    poste: "milieu",
    age: 26,
    equipe_id: ObjectId("665000000000000000000010")
  },
  {
    nom: "Balerdi",
    prenom: "Gonzalo",
    poste: "défenseur",
    age: 24,
    equipe_id: ObjectId("665000000000000000000010")
  },
  // AS Monaco
  {
    nom: "Ben Yedder",
    prenom: "Wissam",
    poste: "attaquant",
    age: 33,
    equipe_id: ObjectId("665000000000000000000011")
  },
  {
    nom: "Volland",
    prenom: "Kevin",
    poste: "attaquant",
    age: 31,
    equipe_id: ObjectId("665000000000000000000011")
  },
  {
    nom: "Nübel",
    prenom: "Alexander",
    poste: "gardien",
    age: 27,
    equipe_id: ObjectId("665000000000000000000011")
  },
  {
    nom: "Disasi",
    prenom: "Axel",
    poste: "défenseur",
    age: 25,
    equipe_id: ObjectId("665000000000000000000011")
  },
  // Olympique Lyonnais
  {
    nom: "Lacazette",
    prenom: "Alexandre",
    poste: "attaquant",
    age: 32,
    equipe_id: ObjectId("665000000000000000000012")
  },
  {
    nom: "Depay",
    prenom: "Memphis",
    poste: "attaquant",
    age: 29,
    equipe_id: ObjectId("665000000000000000000012")
  },
  {
    nom: "Lopes",
    prenom: "Anthony",
    poste: "gardien",
    age: 33,
    equipe_id: ObjectId("665000000000000000000012")
  },
  {
    nom: "Gustavo",
    prenom: "Marcelo",
    poste: "milieu",
    age: 36,
    equipe_id: ObjectId("665000000000000000000012")
  },
  // LOSC Lille
  {
    nom: "David",
    prenom: "Jonathan",
    poste: "attaquant",
    age: 27,
    equipe_id: ObjectId("665000000000000000000013")
  },
  {
    nom: "Yazici",
    prenom: "Yusuf",
    poste: "milieu",
    age: 26,
    equipe_id: ObjectId("665000000000000000000013")
  },
  {
    nom: "Jardim",
    prenom: "Leonardo",
    poste: "gardien",
    age: 28,
    equipe_id: ObjectId("665000000000000000000013")
  },
  {
    nom: "Fonte",
    prenom: "José",
    poste: "défenseur",
    age: 30,
    equipe_id: ObjectId("665000000000000000000013")
  }
]);

db.foot_matchs.insertMany([
  {
    date: ISODate("2022-11-20T16:00:00Z"),
    stade: "Lusail Stadium",
    equipe1_id: ObjectId("665000000000000000000001"),
    equipe2_id: ObjectId("665000000000000000000002"),
    score: { equipe1: 2, equipe2: 1 }
  },
  {
    date: ISODate("2022-11-21T19:00:00Z"),
    stade: "Khalifa Stadium",
    equipe1_id: ObjectId("665000000000000000000003"),
    equipe2_id: ObjectId("665000000000000000000004"),
    score: { equipe1: 1, equipe2: 3 }
  },
  {
    date: ISODate("2022-11-22T20:00:00Z"),
    stade: "Stade de France",
    equipe1_id: ObjectId("665000000000000000000005"),
    equipe2_id: ObjectId("665000000000000000000006"),
    score: { equipe1: 0, equipe2: 0 }
  },
  {
    date: ISODate("2022-11-23T18:00:00Z"),
    stade: "Wembley",
    equipe1_id: ObjectId("665000000000000000000007"),
    equipe2_id: ObjectId("665000000000000000000008"),
    score: { equipe1: 2, equipe2: 2 }
  },
  {
    date: ISODate("2022-11-24T21:00:00Z"),
    stade: "Allianz Arena",
    equipe1_id: ObjectId("665000000000000000000003"),
    equipe2_id: ObjectId("665000000000000000000001"),
    score: { equipe1: 1, equipe2: 2 }
  },
  // Ligue 1 matchs
   {
    date: ISODate("2023-10-01T20:00:00Z"),
    stade: "Parc des Princes",
    equipe1_id: ObjectId("665000000000000000000009"),
    equipe2_id: ObjectId("665000000000000000000010"),
    score: { equipe1: 4, equipe2: 0 }
  },
  {
    date: ISODate("2023-10-02T17:00:00Z"),
    stade: "Stade Vélodrome",
    equipe1_id: ObjectId("665000000000000000000010"),
    equipe2_id: ObjectId("665000000000000000000011"),
    score: { equipe1: 2, equipe2: 2 }
  },
  {
    date: ISODate("2023-10-03T14:00:00Z"),
    stade: "Stade Louis II",
    equipe1_id: ObjectId("665000000000000000000011"),
    equipe2_id: ObjectId("665000000000000000000012"),
    score: { equipe1: 3, equipe2: 1 }
  },
  {
    date: ISODate("2023-10-04T16:00:00Z"),
    stade: "Groupama Stadium",
    equipe1_id: ObjectId("665000000000000000000012"),
    equipe2_id: ObjectId("665000000000000000000013"),
    score: { equipe1: 1, equipe2: 1 }
  },
  {
    date: ISODate("2023-10-05T20:00:00Z"),
    stade: "Stade Pierre-Mauroy",
    equipe1_id: ObjectId("665000000000000000000013"),
    equipe2_id: ObjectId("665000000000000000000009"),
    score: { equipe1: 0, equipe2: 2 }
  }
]);