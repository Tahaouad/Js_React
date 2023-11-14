export default class personne {
    constructor(Nom,Prenom){
        this.nom = Nom ;
        this.prenom = Prenom ;

    }
}
export function afficher(object){
    return ` NOM : ${object.nom} | Prenom : ${object.prenom} | Filiere : ${object.filiere}`
}

class Stagaire extends personne  {
    constructor(nom,prenom,filiere){
        super(nom,prenom)
        this.filiere = filiere
    }
}
let E1 = new personne('Ouad','Taha')

export let S1 =new Stagaire(E1.nom,E1.prenom,'DD102')

let P = new personne('AHmad','douiry')