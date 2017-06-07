// Exercice : addition
// crée un tableau qui contient les valeurs suivantes : 1, 2, 3, 4, 5, 6, 7, 8, 9
// faire une boucle qui permet d'additioner toutes ces valeurs
var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var addition = function(array){
	var resultat = 0;
	for (i = 0; i < array.length; i++){
		resultat = resultat + array[i];
	}
	console.log(resultat);
}
addition(tab);

// Exercice : Vos meilleurs choix
// crée un tableau qui contetient 3 nom d'acteurs
// Pour chaque acteur, afficher dans la console par exemple : "Le numero 1 est Stalone"
// Bonus:transformer en : "Le premier est Stalone", Le deuxième est Cruiz", etc...
var acteurs = ["Di Caprio", "Nicholson", "Affleck"];
var rank = ["premier", "deuxième", "troisième"];
var classement = function(array){
	for (i = 0; i < array.length; i++){
		console.log("Le " + rank[i] + " est " + array[i]);
	}
}
classement(acteurs);

// Exercice : clone
// crée un tableau qui contetient les valeurs suivantes : "Mario", "Luigi", "Peach"
// dupliquer le tableau et y ajouter "Bowser"
var joueurs = ["Mario", "Luigi", "Peach"];
var updated = joueurs.slice(0);
updated[updated.length] = 'Bowser';
console.log(joueurs);
console.log(updated);

// Exercice : aléatoire
// crée un tableau qui contetient les valeurs suivantes : Goro, Johnny Cago, Kano, Liu Kano, Raiden, Reptil, Scorpion, Shang Tsun, Sonya, Sub-Zero
// choisir un personnage aléatoirement dans le tableau
var perso = ['Goro', 'Johnny Cago', 'Kano', 'Liu Kano', 'Raiden', 'Reptil', 'Scorpion', 'Shang Tsun', 'Sonya', 'Sub-Zero'];
var random = Math.floor((Math.random() * perso.length));
console.log(perso[random]);