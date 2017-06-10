var resultat;

function reqListener(){
	resultat = (this.responseText);
	var parse = JSON.parse(resultat);
	var avecChiffre = parse.map(function(ob){
		chiffre = Math.round(Math.random() * 1000);
		ob.nombre = chiffre;
		return ob;
	});
	avecChiffre.sort(function(a,b){
		return a.nombre - b.nombre;
	});
	console.log(avecChiffre);
	var category = [ [], [], []];
	avecChiffre.forEach(function(person){
		if (person.nombre > 750){
			category[0].push(person);
		}
		else if (person.nombre > 500){
			category[1].push(person);
		}
		else if(person.nombre > 500){
			category[2].push(person);
		}
	});
	console.log(category);
	avecChiffre.sort(function(a,b){
		return b.nombre - a.nombre;
	});
	for(let i = 0; i < 10; i++){
		console.log(avecChiffre[i]);
	}
	avecChiffre.sort(function(a,b){
		return a.nombre - b.nombre;
	});
	for(let i = 0; i < 10; i++){
		console.log(avecChiffre[i]);
	}
}

var xhttp = new XMLHttpRequest();
xhttp.addEventListener("load", reqListener);
xhttp.open("GET", "data.json", true);
xhttp.send();

