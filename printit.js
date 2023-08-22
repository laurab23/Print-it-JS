const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let numero = 0; // création de la variable "numéro", qui va changer tout au long du programme Et je l'initialise à 0

//Ajout du Eventlistener (ajoute un événement au clique de la souris sur chaque flèche)
const flecheGauche = document.querySelector(".arrow_left");
flecheGauche.addEventListener("click", function () {
  console.log(flecheGauche);
  ChangeSlide(-1);
});

const flecheDroite = document.querySelector(".arrow_right");
flecheDroite.addEventListener("click", function () {
  console.log(flecheDroite);
  ChangeSlide(1);
});

//creation du point avec class "dot_selected"
let selectedBullet = document.createElement("div");
selectedBullet.classList.add("dot", "dot_selected");
document.getElementById("points").appendChild(selectedBullet);

// Ajout de 4 bullet points, création d'éléments child (du parent "dots")
for (let i = [0]; i < slides.length - 1; i++) {
  //boucle, avec l'instruction suivante :
  let bulletPoint = document.createElement("div"); //creation d'une Div
  bulletPoint.classList.add("dot"); //à laquelle j'attribue la class "dot"
  document.getElementById("points").appendChild(bulletPoint); //puis récupération de l'élément parent pour y ajouter l'élément enfant ainsi créé
}
