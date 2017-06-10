// Créer des éléments les ajouter au DOM
var p = document.createElement('p');
p.innerHTML = "arrache cheveux";
document.getElementById('first-paragraph').appendChild(p);

var h4 = document.createElement('h4');
h4.innerHTML = "titre ajouté";
document.getElementById('first-paragraph').appendChild(h4);


// Ajouter des classes
document.body.classList.add('orange');

// Supprimer des classes
document.getElementById('first-paragraph').classList.remove('bg-lime');

//Ajouter shadow à tous les paragraphes
document.getElementById('first-paragraph').classList.add('shadow');