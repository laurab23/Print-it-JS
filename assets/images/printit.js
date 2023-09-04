// variable constante slides type tableau avec 4 objets
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

let position = 0; //position actuelle de la diapo

function verifieposition() {
  //vefifie et ajuste la position
  if (position >= slides.length) {
    position = 0; // si la position depasse le nombre de diapo revient a la 1ere
  } else if (position < 0) {
    position = slides.length - 1; // Si la position devient négative, passer à la dernière diapositive
  }
}
// Afficher l'image et la tagline pour faire fonctionner le gestionnaire d' events et changement d diapos
function imageTagline() {
  document.querySelector(".banner-img").src =
    "./assets/images/slideshow/" + slides[position].image; // Mise à jour de l'attribut src de l'image
  document.querySelector("#banner p").innerHTML = slides[position].tagLine; // Mise à jour du contenu HTML de la légende
}

// Gestionnaire d'événements pour le bouton gauche
const bgauche = document.querySelector(".arrow_left"); // Sélection de l'élément avec la classe "arrow_left"
bgauche.addEventListener("click", function () {
  // Ajout d'un événement de clic au bouton gauche
  changementslides(-1); // Appel de la fonction pour changer de diapositive vers la gauche
  console.log(position); // Affichage de la position actuelle dans la console
});

// Gestionnaire d'événements pour le bouton droit
const bdroit = document.querySelector(".arrow_right"); // Sélection de l'élément avec la classe "arrow_right"
bdroit.addEventListener("click", function () {
  // Ajout d'un événement de clic au bouton droit
  changementslides(+1); // Appel de la fonction pour changer de diapositive vers la droite
  console.log(position); // Affichage de la position actuelle dans la console
});

// faire fonction de changement de diapo pour que le code precedent fonctionne
function changementslides(direction) {
  position += direction; // mise a jour de la position en fonction de la direction
  verifieposition();
  imageTagline();
  //ensuite faire un changebullet pour mise a jour du point indicateur
}

// Création des points
const bullet = document.querySelector('.dots');
for (let i = 0; i < slides.length; i++) {
	const point = document.createElement("div");
	bullet.appendChild(point);
	point.classList.add("dot");
}

// Sélectionner le point indicateur en fonction de la position de la diapo
let bulletselect = positionbullet();
bulletselect.classList.add("dot_selected");

function positionbullet() {
	return document.querySelector(`.dots .dot:nth-child(${position + 1})`);
}
// Changement de point lors du changement de slide
function changebullet() {
	bulletselect.classList.remove("dot_selected");
	bulletselect = positionbullet();
	bulletselect.classList.add("dot_selected");
}
/

//defilement automatique
