function soustraire(nb1, nb2){
	var resultat = nb1 - nb2;
	return resultat;
}
console.log(soustraire(1,2));

function diviser(nb1, nb2){
	var resultat = nb1 / nb2;
	return resultat;
}
console.log(diviser(5,2));

function multiplier(nb1, nb2){
	var resultat = nb1 * nb2;
	return resultat;
}
console.log(multiplier(3,5));

function pourcentage(val, prc){
	var resultat = (prc/100) * val + ' pourcent';
	return resultat;
}
console.log(pourcentage(3,200));

function vitesse(dist, tempsHeure){
	var resultat = (dist / tempsHeure) + 'km/h';
	return resultat;
}
console.log(vitesse(30,4));