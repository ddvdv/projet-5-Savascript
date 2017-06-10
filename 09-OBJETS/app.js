// //Exo POO

// // Exo PNJ
// var character = {
// 	name : 'johnny',
// 	age : 63,
// 	itemsToGive : ["sa guitare", "sa bite", "son couteau"],
// 	giveItem : function(){
//         var rand = Math.round( Math.random() * (this.itemsToGive.length - 1) );
//         return this.itemsToGive[rand];
// 	}
// }

// console.log(character.giveItem());

// // Exo Shop
// var toSell = [
//     { title : "épée",
//       physic : "4",
//       magic : "3",
//       minLevel : "15",
//       available : false },
//     { title : "hache",
//       physic : "3",
//       magic : "2",
//       minLevel : "8",
//       available : true },
//     { title : "sceptre",
//       physic : "5",
//       magic : "4",
//       minLevel : "12",
//       available : true },
//     { title : "bouclier",
//       physic : "2",
//       magic : "1",
//       minLevel : "10",
//       available : true },
//     { title : "parachute",
//       physic : "5",
//       magic : "3",
//       minLevel : "5",
//       available : true },
// ];

// var displayAll = function(array){
// 	for (var obj in array){
// 		console.log(toSell[obj]);
// 	}
// }
// displayAll(toSell);

// var displayAvailable = function(array){
// 	for (var obj in array){
// 		if (toSell[obj].available){
// 			console.log(toSell[obj]);
// 		}
// 	}
// }
// displayAvailable(toSell);

// var displayMin10 = function(array){
//     for (var obj in array){
//     	if (toSell[obj].minLevel >= 10){
//     		console.log(toSell[obj]);
//     	}
//     }
// }
// displayMin10(toSell);

// // Exo Personnage
// var mainCharacter = {
// 	name : 'Luke',
// 	level : 30,
// 	life : 6,
// 	weapon : { name : 'sword',
// 			   damage : 20 },
// 	attack : function(){
// 		return this.name + " attaque avec " + this.weapon.name + ". Les dégâts sont de " + this.level * this.weapon.damage + ".";
// 	}
// }
// console.log(mainCharacter.attack());

// Exo Adversaire
// name (string)
// level (int)
// life (int)
// weapon (object)
// attack (function)
// receiveDamage (function)

function Character(name, level, life, weaponName, weaponDamage){
	this.name = name;
	this.level = level;
	this.life = life;
	this.weapon = new Object();
	this.weapon.name = weaponName;
	this.weapon['damage'] = weaponDamage;
	this.attack = function(opponent){
		console.log(this.name + " attaque " + opponent.name + ".");
		console.log("Les dégâts sont de " + this.level * this.weapon.damage + ".");
		opponent.receiveDamage(this.level, this.weapon.damage);
		console.log(opponent.name + " a maintenant " + opponent.life + " de vie.");
	};
	this.receiveDamage = function(attackerLevel, weaponDamage){
		this.life = this.life - (attackerLevel * weaponDamage);
	};
}

var mainCharacter = new Character("Rey", 5, 5000, "laser", 300);
var opponentCharacter = new Character("Gargamel", 4, 2000, "chaudron", 40);
console.log(mainCharacter);

//  fonction doit afficher dans la console (ligne par lige)
// (le nom du personnage) attaque (nom de l'adversaire)
// avec l'arme (nom de l'arme)
// et lui inflige (niveau du personnage multiplié par le damage de l'arme) de dégats
// (nom de l'adversaire) a maintenant (life de l'adversaire) de vie

mainCharacter.attack(opponentCharacter);
opponentCharacter.attack(mainCharacter);