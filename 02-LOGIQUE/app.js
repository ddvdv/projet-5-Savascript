// Exo Langue
var lang = "fr";
var message = "";

if (lang == "en"){
	message =  "Hello World";
}
else if (lang == "es") {
	message = "Hola, Mondu"
}
else if (lang == "fr") {
	message =  "Bonjour le monde";
}

console.log(message);

//Exo scores
var score = 89, resultat = "";

if (score >= 90){
	resultat = 'A';
}
else if (score < 90) {
	resultat = 'B';
}
else if (score <= 50) {
	resultat = 'C';
}
console.log(resultat);

// Mettre au pluriel
var mot = 'pomme';
var nombre = 1;
var resultat;

if (nombre > 1){
	mot = mot + 's';
}
resultat = 'Je possède ' + nombre + ' ' + mot;
console.log(resultat);


