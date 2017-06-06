// Exercice : Pair et impair
// Ecrivez une boucle qui va itérer de 0 à 20.
// Pour chaque itération , il va vérifier si le nombre actuel est pair ou impair
// afficher dans la console par exemple : " 2 est pair "
for (var i = 0; i <= 20; i++){
	if ( (i % 2) == 0){
		console.log(i + ' est pair');
	}
	else {
		console.log(i);
	}
}

// Exercice : Multiplication Tables
// Écrire une boucle qui va itérer de 0 à 10
// Pour chaque itération de la boucle, il va multiplier le nombre de 9
// afficher dans la console le résultat par exemple : " 2 * 9 = 18".
for (var i = 0; i <= 10; i++){
	var resultat = i * 9;
	console.log(resultat);
}

// Exercice : assigner des grades
// Écrire une boucle qui va itérer de 0 à 100
// Écrire une fonction qui va retourner des grades selon les scores reçu
// si le score au dessus de 90 le grade est A
// si le score au dessus de 80 le grade est B
// si le score au dessus de 70 le grade est C
// si le score au dessus de 65 le grade est D
// si le score n'entre pas dans ces catégories le grade est F
// afficher dans la console le résultat par exemple : "Pour 82 points vous avez le grade B".
for (var i = 0; i <= 100; i++){
	var grade;
	if (i > 90){
		grade = "A";
	}
	else if (i > 90){
		grade = "A";
	}
	else if (i > 80){
		grade = "B";
	}
	else if (i > 70){
		grade = "C";
	}
	else if (i > 65){
		grade = "D";
	}
	else {
		grade = "F";
	}
	console.log("Pour " + i + " points vous avez le grade de " + grade);

}

// Exercice : pyramide
// Écrire une boucle qui va dessiner dans la console (ligne par ligne) le résulat suivant
// 	*  
// 	* *  
// 	* * *  
// 	* * * *  
// 	* * * * *
for (var i = 1; i <= 5; i++){
	if (i == 1){
		var etoile = '*';
	} else {
	var etoile = etoile + '*';
	}
	console.log(etoile);
}
