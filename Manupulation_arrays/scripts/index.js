const result = document.getElementById('result')

// Exercice 3 : Manipulation des Array

const input = [1,2,3,4,5] 
const output = input.map(e=>e**2)

result.innerHTML = output

//Exercice 4 :

const input2 = [1,-2,3,4,-5]

const output1 = input2.filter(e=>e>0) 
result.innerHTML = output1 //output : [1, 3, 4]


const output2 = input2.reduce((t,e)=>t +=e,0)
result.innerHTML = output2 //output : 1

const output3 = input2.filter(e=>e>0).reduce((t,e)=>t+=e,0)
result.innerHTML = output3 // output : 8


//Exercice 5 : Manipulation des Array
let livres = [
    { id: 10, titre: 'POO', auteur: 'RAMI', prix: 300 },
    { id: 11, titre: 'JS ES6', auteur: 'FAMI', prix: 230 },
    { id: 12, titre: 'Algorithme', auteur: 'KARIMI', prix: 330 },
    { id: 13, titre: 'HTMH& CSS', auteur: 'RAMI', prix: 340 }
];
// Créer la liste titres contenant tous les titres à partir de Livres utiliser map

const titre_livre = livres.map(e=>e.titre)
result.innerHTML = titre_livre

// Créer la liste titres contenant tous les livres de l’auteur ‘RAMI’ à partir de Livres filter

const livre_rami = livres.filter(e=>e.auteur==='RAMI')
result.innerHTML = livre_rami

//Chercher le livre dont le id égal à 12 utiliser find

const chercher_par_id = livres.find(e => e.id === 12);

result.innerHTML = JSON.stringify(chercher_par_id)
console.log(JSON.stringify(chercher_par_id))

//output : {"id":12,"titre":"Algorithme","auteur":"KARIMI","prix":330}

//Calculer le total des prix utiliser reduce

const total = livres.reduce((t,e)=>t+=e.prix,0)
result.innerHTML = total

//COPYLIVRE 

let mesLivre = {...livres}
console.log(mesLivre)

