
//déclarer les tableaux de produits
var vetements = [
  ["Hoody", "assets/img/homme2.jpeg", 10],
  ["Pule", "assets/img/pull.jpeg", 15],
  ["Chemise", "assets/img/chemise.jpeg", 18],
  ["Tshirt", "assets/img/homme3.jpeg", 8],
];

var auto = [
  ["Bmw", "assets/img/bmw.jpeg", 50000],
  ["Firari", "assets/img/firari.jpeg", 79000],
  ["Porsche", "assets/img/porsche.jpeg", 69000],
];

var watch = [
  ["Casio", "assets/img/casio1.jpeg", 450],
  ["Pulsar", "assets/img/pulsar.jpeg", 200],
  ["Omega", "assets/img/omega.jpeg", 9000],
];

var resultatVet = 0;
var resultatAuto = 0;
var resultatWatch = 0;
var resultat = 0;


// afficher la catégorie vêtement par défaut.
function afficherVetement() {
  document.getElementById("vetements").innerHTML = "";

  for (i = 0; i < vetements.length; i++) {
    document.getElementById("vetements").innerHTML +=
      "<section><button class='button' type='button'><div><h6  id='photo'>" +
      vetements[i][0] +
      "</h6></div><div><img class='sou_cat' src='" +
      vetements[i][1] +
      "'></div><div><p>" +
      vetements[i][2] +
      " €</p></div></button></section>";
  }
}
// afficher la catégorie vêtement on cliquant sur cat Vet.
function afficherVet() {
  document.getElementById("vetements").innerHTML = "";

  for (i = 0; i < vetements.length; i++) {
    document.getElementById("vetements").innerHTML +=
      "<section><div><h6  id='photo'>" +
      vetements[i][0] +
      "</h6></div><div><img class='sou_cat' src='" +
      vetements[i][1] +
      "'></div><div><p>" +
      vetements[i][2] +
      " €</p></div><button   onclick= 'vetAuPanier(" +
      i +
      ")' class='button' type='button'><i class='fas fa-cart-plus'></i></button></section>";
  }
}
// afficher la catégorie Auto on cliquant sur cat Auto.
function afficherAuto() {
  document.getElementById("vetements").innerHTML = "";
  for (i = 0; i < auto.length; i++) {
    document.getElementById("vetements").innerHTML +=
      "<section><div><h6  id='photo'>" +
      auto[i][0] +
      "</h6></div><div><img class='sou_cat' src='" +
      auto[i][1] +
      "'></div><div><p>" +
      auto[i][2] +
      " €</p><button   onclick= 'autoAuPanier(" +
      i +
      ")' class='button' type='button'><i class='fas fa-cart-plus'></i></button></div></section>";
  }
}

// afficher la catégorie Watch on cliquant sur cat Watch.
function afficherWatch() {
  document.getElementById("vetements").innerHTML = "";
  for (i = 0; i < watch.length; i++) {
    document.getElementById("vetements").innerHTML +=
      "<div><h6  id='photo'>" +
      watch[i][0] +
      "</h6></div><div><img class='sou_cat' src='" +
      watch[i][1] +
      "'></div><div><p id='prix'>" +
      watch[i][2] +
      " € </p><button   onclick= 'watchAuPanier(" +
      i +
      ")' class='button' type='button'><i class='fas fa-cart-plus'></i></button></div>";
  }
}

// ajouter les produits de la catégorie Vet par le client au panier.
function vetAuPanier(article) {
  resultatVet = resultatVet + vetements[article][2];

  document.getElementById("panier").innerHTML +=
    "<p> " +
    vetements[article][0] +
    " : " +
    vetements[article][2] +
    " <i class='fas fa-euro-sign'></i></p>";

  document.getElementById("totalvet").innerHTML = resultatVet;
}

// ajouter les produits de la catégorie Auto par le client au panier.

function autoAuPanier(article) {
  resultatAuto = resultatAuto + parseInt(auto[article][2]);
  document.getElementById("panier").innerHTML +=
    "<p> " + auto[article][0] + " : " + auto[article][2] + "   <i class='fas fa-euro-sign'></i></p>";
  document.getElementById("totalauto").innerHTML = resultatAuto;
}

//ajouter les produits de la catégorie Watch par le client au panier.
function watchAuPanier(article) {
  resultatWatch = resultatWatch + parseInt(watch[article][2]);
  document.getElementById("panier").innerHTML +=
    "<p> " + watch[article][0] + " : " + watch[article][2] + "  <i class='fas fa-euro-sign'></i></p>";
  document.getElementById("totalwatch").innerHTML = resultatWatch;
}

// affichez le tatal des achat hors tax, calculer la tva trois possibilités 5%, 10% ou 20%
//le taux de tva est selectionné par le client.

function totalAchats() {
  document.getElementById("total").innerHTML = "";

  var vet = document.getElementById("totalvet").innerHTML;
  var auto = document.getElementById("totalauto").innerHTML;
  var watch = document.getElementById("totalwatch").innerHTML;

  if (vet == "" && auto != "" && watch != "") {
    resultat = parseInt(auto) + parseInt(watch);
  } else if (auto == "" && vet != "" && watch != "") {
    resultat = parseInt(vet) + parseInt(watch);
  } else if (watch == "" && vet != "" && auto != "") {
    resultat = parseInt(auto) + parseInt(vet);
  } else if (watch != "" && vet == "" && auto == "") {
    resultat = parseInt(watch);
  } else if (auto != "" && vet == "" && watch == "") {
    resultat = parseInt(auto);
  } else if (vet != "" && auto == "" && watch == "") {
    resultat = parseInt(vet);
  } else {
    resultat = parseInt(vet) + parseInt(watch) + parseInt(auto);
  }

  var calculTva;
  var tva = parseInt(prompt("entrer le taux de TVA SVP : "));

  if (tva == 20) {
    alculTva = (resultat * 20) / 100;
  } else if (tva == 10) {
    alculTva = (resultat * 10) / 100;
  } else if (tva == 5) {
    alculTva = (resultat * 5) / 100;
  } else {
    alert(
      "Le taux de tva est soit 20 pour les particulier ou 10 pour les société ou bien 5 pour les startup "
    );

    prompt("entrer le taux de TVA SVP : ");
  }

  document.getElementById("total").innerHTML =
    "<p> prix hors tax: " +
    parseFloat(resultat).toFixed(2) +
    " <i class='fas fa-euro-sign'></i>" +
    "</p> <br> TVA @ " +
    tva +
    "% : " +
    alculTva +
    " <i class='fas fa-euro-sign'></i>" +
    " <p>Prix TTC :<span id='ttc'> " +
    parseFloat(resultat + alculTva).toFixed(2) +
    " </span><i class='fas fa-euro-sign'></i></p>  ";
}

//vider  le panier.
function annuler() {
  document.getElementById("panier").innerHTML = "";

  document.getElementById("totalvet").innerHTML = "";
  document.getElementById("totalauto").innerHTML = "";
  document.getElementById("totalwatch").innerHTML = "";
  document.getElementById("total").innerHTML = "";
}

// payer le montant parès avoir la possibilité de ganger une promotion
//par la méthode Math.random().
function payer() {
    
  var ttc = document.getElementById("ttc").innerHTML;

  document.getElementById("totalTtc").innerHTML =
    "<span>Totale Ttc : </span> " + ttc + "<i class='fas fa-euro-sign'></i>";

  var promo = parseInt(
    prompt("entrer un numero entre 1 et 3 pour avoir une promotion")
  );

  document.getElementById("avantPromo").innerHTML =
    "<span>Total avant la promotion est :</span> " +
    ttc +
    "<i class='fas fa-euro-sign'></i>";
  var payPromo;

  var random = Math.floor(Math.random() * 3);

  if (promo == random) {
    alert("vous avais gagner !" + random + " gagner " + promo);
    payPromo = ttc - (ttc * promo) / 100;
    document.getElementById("apresPromo").innerHTML =
      "<span>Totale après la promotion est : </span> " +
      payPromo +
      " <i class='fas fa-euro-sign'></i>";
  } else {
    document.getElementById("apresPromo").innerHTML =
      "<span>Totale sans la promotion est : </span> " +
      ttc +
      " <i class='fas fa-euro-sign'></i>";
  }
}


//la barre de recherche

function chercher(){
    var chercher = document.getElementById("rechercher").value;

    //document.getElementById("rechercher").style.textTransform = "capitalize";

var str = chercher;

str = str.toLowerCase().replace(/\b[a-z]/g, function(letter){
    return letter.toUpperCase();
});




 for(i = 0; i< vetements.length || i < auto.length || i < watch.length ; i++){
   // alert(chercher + " pour  " + vetements[i][0])

 if(str == vetements[i][0]  ){
    document.getElementById("article").innerHTML =   "<section id='article1'><div><h6  id='photo'>" +
    vetements[i][0] +
    "</h6></div><div><img class='sou_cat' src='" +
    vetements[i][1] +
    "'></div><div><p>" +
    vetements[i][2] +
    " €</p></div><button   onclick= 'vetAuPanier(" +
   i+
    ")' class='button' type='button'><i class='fas fa-cart-plus'></i></button></section>";
}else if(str == auto[i][0]){
    document.getElementById("article").innerHTML =   "<section><div><h6  id='photo'>" +
    auto[i][0] +
    "</h6></div><div><img class='sou_cat' src='" +
   auto[i][1] +
    "'></div><div><p>" +
    auto[i][2] +
    " €</p></div><button   onclick= 'autoAuPanier(" +
    i+
    ")' class='button' type='button'><i class='fas fa-cart-plus'></i></button></section>";

}else if(str == watch[i][0]){
    document.getElementById("article").innerHTML =   "<section><div><h6  id='photo'>" +
    watch[i][0] +
    "</h6></div><div><img class='sou_cat' src='" +
    watch[i][1] +
    "'></div><div><p>" +
    watch[i][2] +
    " €</p></div><button   onclick= 'watchAuPanier(" +
    i+
    ")' class='button' type='button'><i class='fas fa-cart-plus'></i></button></section>";
} else{

   // alert("Désolé se article n'est pas disponible!!")
}

 }

}
//invoquer la fonction afficherVetement() pour que la division de Nos produits soit remplit par défaut.
afficherVetement();

