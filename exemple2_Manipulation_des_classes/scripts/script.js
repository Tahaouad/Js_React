// Exercice 1 : Manipulation des classes
//1
class Document{
    constructor(id,dateEdition){
        this.id = id ;
        this.dateEdition = dateEdition
    }
}
//2
class Livre extends Document{
    constructor(id,dateEdition,titre,auteur){
        super(id,dateEdition),
        this.titre = titre ,
        this.auteur = auteur
    }
}

//3
let D1 = new Document(1,'15-05-2023')
let D2 = new Document(2,'11-02-2023')

//4
let L1  = new Livre(D1.id,D1.dateEdition,'Livre 1','Auteur 1') 
let L2  = new Livre(D2.id,D2.dateEdition,'Livre 2','Auteur 2')

//5
function infoLivre(props){
    return `Livre : id:${props.id} titre:${props.titre} auteur:${props.auteur} Edition:${props.dateEdition}`
}

console.table(infoLivre(L1))

//Exercice 2 : Manipulation des classes

class book{
    constructor(title,author,descrption,pages,currentPage,read ){
        this.title = title ,
        this.author = author,
        this.descrption = descrption,
        this.pages = pages,
        this.currentPage = currentPage,
        this.read = read || false
    }
    readBook(page) {
        if (page < 1 || page > this.pages) {
            console.log(0);
        } else if (page >= 1 && page < this.pages) {
            this.currentPage = page;
            console.log(1);
        } else if (page === this.pages) {
            this.currentPage = page;
            this.read = true;
            console.log(1);
        }
    }
}


const Book1 = new book("Titre 1","Auteur 1",'TETETETET',200,3)
const Book2 = new book("Titre 2","Auteur 2",'TETETETET',100,5,true)
Books = Array(Book1,Book2)
console.log(Book1)
console.log(Book2)
Book1.readBook(200)
console.log(Book1)
console.log(Book2)
