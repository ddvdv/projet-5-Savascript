// Exercice : Minimum et maximum
// Déclarez les variables suivantes :
// La valeur est égal au chiffre le plus petit dans l'enssemble suivant : 7, 5, -12, 6, 32, 18, 14, -2
// La valeur est égal au chiffre le plus grand dans l'enssemble suivant : -3, 9, 21, 36, 27, 54, 17, 35
// La valeur est égal a l'addition des deux précédentes variables
var numMin = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
var numMax = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
var numTotal = numMin + numMax;
console.log(numMin, numMax, numTotal);

// Exercice : Aléatoire
// Faire une variable floatBateau dont la valeur est 10.4
// Faire une variable couleBateau dont la valeur est floatBateau arrondie vers le bas
// Faire une variable voleBateau dont la valeur est floatBateau arrondie vers le haut
var floatBateau = 10.4;
var couleBateau = Math.floor(floatBateau);
var voleBateau = Math.ceil(floatBateau);
console.log(floatBateau, couleBateau, voleBateau);

// Exercice : Aléatoire
// Déclarez les variables suivantes :
// La valeur aléatoire entre 50 et 100
// La valeur aléatoire peut être seulement 0 ou 1
// La valeur aléatoire peut aller de 0 à 10 inclu
var rand = Math.floor(Math.random()*50)+50;
var rand01 = Math.round(Math.random());
var rand010 = Math.round(Math.random()*10);
console.log(rand, rand01, rand010); 