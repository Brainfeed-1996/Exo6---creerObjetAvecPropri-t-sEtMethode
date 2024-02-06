let personneA = {
  nom: "Doe",
  prenom: "John",
  taille: 1.8,
  sexe: "homme",
  bonjour: function () {
    alert("Bonjour de " + this.prenom + " " + this.nom);
  },
};

// console.log(personne.nom);
personneA.bonjour();
