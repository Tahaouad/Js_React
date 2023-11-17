const root = document.getElementById('root');

class Person {
     talk() {
         return 'TALKING';
     }
 }

let p1 = new Person();
console.log(p1.talk());

Person.prototype.talk = function () {
     return 'HELLO';
 };

 console.log(p1.talk());


const Person2 = {  
    talk() {
        return `Hello`;  
    }
};

let Taha = Object.create(Person2);