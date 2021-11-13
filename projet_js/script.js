var vetements = ["Hoody", "Pule", "Chemise", "Tshirt"];
var vetPhots = [
  "assets/img/homme2.jpeg",
  "assets/img/pull.jpeg",
  "assets/img/chemise.jpeg",
  "assets/img/homme3.jpeg",
];
var vetPrix = [10, 15, 18, 8];

var auto = ["Bmw", "Firari", "Porsche"];
var autoPhotos = [
  "assets/img/bmw.jpeg",
  "assets/img/firari.jpeg",
  "assets/img/porsche.jpeg",
];
var autoPrix = [20000, 79000, 69000];

var watch = ["Casio", "Pulsar", "Omega"];
var watchPhotos = [
  "assets/img/casio1.jpeg",
  "assets/img/pulsar.jpeg",
  "/Users/raouf/afpa/projet_js/assets/img/omega.jpeg",
];
var watchPrix = [450, 200, 9000];

function afficherVetement() {
  document.getElementById("vetements").innerHTML = "";

  for (i = 0; i < vetements.length || i < vetPhots.length || i < vetPrix; i++) {
    document.getElementById("vetements").innerHTML +=
      "<section><button class='button' type='button'><div><h6  id='photo'>" +
      vetements[i] +
      "</h6></div><div><img class='sou_cat' src='" +
      vetPhots[i] +
      "'></div><div><p>"+vetPrix[i]+" €</p></div></button></section>";
  }
}

function afficherVet() {
  document.getElementById("vetements").innerHTML = "";

  for (i = 0; i < vetements.length || i < vetPhots.length; i++) {
    document.getElementById("vetements").innerHTML +=
      "<section><button class='button' type='button'><div><h6  id='photo'>" +
      vetements[i] +
      "</h6></div><div><img class='sou_cat' src='" +
      vetPhots[i] +
      "'></div><div><p>"+vetPrix[i]+" €</p></div></button></section>";
  
  }
}

function afficherAuto() {
  document.getElementById("vetements").innerHTML = "";
  for (i = 0; i < auto.length || i < autoPhotos.length; i++) {
    document.getElementById("vetements").innerHTML +=
    "<section><button class='button' type='button'><div><h6  id='photo'>" +
    auto[i] +
    "</h6></div><div><img class='sou_cat' src='" +
    autoPhotos[i] +
    "'></div><div><p>" +autoPrix[i]+ " €</p></div></button></section>";

  }
}

function afficherWatch() {
  document.getElementById("vetements").innerHTML = "";
  for (i = 0; i < watch.length || i < watchPhotos.length; i++) {
    document.getElementById("vetements").innerHTML +=
    "<section data-bs-toggle='modal' data-bs-target='#modal'><button class='button' type='button'><div><h6  id='photo'>" +
    watch[i] +
    "</h6></div><div><img class='sou_cat' src='" +
    watchPhotos[i] +
    "'></div><div><p>"+watchPrix[i]+" €</p></div></button></section>";
}
}



afficherVetement();
