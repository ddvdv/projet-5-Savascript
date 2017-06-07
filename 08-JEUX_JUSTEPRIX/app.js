// Jeux le Juste Prix

// Initialisation des variables
var message;
var nbTry = 0;
var valMin = 20;
var valMax = 80;

// Fonction de détermination du nombre à deviner
var setNb = function(min, max){
	var diff = max - min;
	var toGuess = Math.round(Math.random()*diff)+min;
	return toGuess;
}
// Détermination du nombre à deviner
toGuess = setNb(valMin, valMax);

// Fonction d'interrogation du joueur
var toTry = function(){
	var won = false;
	var myGuess = prompt('Quel est le juste prix?');

	if (toGuess == myGuess){
		message = "C'est juste, tu as trouvé en " + nbTry + " coups.";
		won = true;
	}
	else if (toGuess > myGuess){
		message = "C'est plus.";
	}
	else if (toGuess < myGuess){
		message = "C'est moins.";
	}
	// Si le joueur a gagné
	if (won){
		alert(message);
	} // Si le joueur continue à jouer
	else {
		nbTry++;
		confirm(message);
		toTry();
	}

}

// Appel initial de la fonction
toTry();