// Jeu du pendu

var toGuess = ['B','O','N','J','O','U','R']; // Mot à deviner
var guessed = ['', '', '', '', '', '', '']; // Mot (partiellement) déviné
var tried = []; // Lettres proposées
var left = 10; // Nombre de tentatives restantes

var guessLetter = function(){
    // Demander au joueur de rentrer une lettre
	var letter = prompt("Your guess so far: " + guessed + "\nYou have " + left + " chances left. Please enter a letter");
	letter = letter.toUpperCase();
	var blank = false;
	var alreadyTried = false;  // Si lettre déjà proposée

	// Vérifier si la lettre a déjà été proposée
	for (var i = 0; i < tried.length; i++ ){
		if (letter == tried[i]){
			alreadyTried = true;
		}
	}

	// Si lettre pas encore proposée
	if (alreadyTried == false){

		// -1 chance d'essai et ajouter aux lettres essayées
		left = left - 1;
		tried.push(letter);

		// Parcourir chaque lettre du mot à deviner et comparer avec la lettre entrée
		for (var i = 0; i < toGuess.length; i++ ){
			if (letter == toGuess[i]){
				guessed[i] = letter;
				console.log(guessed);
			}
		}
		// Vérifier s'il reste des blancs dans le mot deviné
		for (var i = 0; i < guessed.length; i++ ){
			if ('' === guessed[i]){
				blank = true;
			}
		}

		// S'il reste des blancs
		if (blank){
			// Vérifier qu'il reste des chances
			if (left != 0){
				guessLetter();
			} else  {
				alert("You lost!");
			}
		} else { // S'il ne reste pas de blancs; c'est gagné!
	 		alert("You won!");
	 	}
	} else {// Si lettre déjà proposée
	 	var keepGoing = confirm("You have tried this letter already!");
		if (keepGoing){
			guessLetter();
		}
	}

}

// Appeler la fonction une première fois au chargement
guessLetter();
