
// esercizio 1

// creo la mia classe

class User{
    constructor(firstName, lastName, age , location){
        this.firstName=firstName;  // dopo this è la creazione oggetto la seconda e ilparamentro di rifrimento
        this.lastName=lastName;
        this.age=age;
        this.location=location;
// il this si riferisce sempre all'oggeto che stai creando

//  le funzioni possono essere non statiche usate da chiunque e tipo pubblico
// mentre static lo decide il togrammatore
    }
    static confrontoEta(user1, user2) {
        if (user1.age < user2.age) {
        console.log(`${user1.firstName} è più giovane di ${user2.firstName}.`);
        } else if (user1.age > user2.age) {
        console.log(`${user1.firstName} è più anziano di ${user2.firstName}.`);
        } else {
        console.log(`${user1.firstName} ha la stessa età di ${user2.firstName}.`);
        }
}


    }

const user1 = new User("coppi","francesco",34, "torino" )
const user2 = new User("pasciuti","gino",20,"francia")
const user3= new User("scamorza","franceso",20,"italia")
User.confrontoEta(user1,user2)


// esercizio 2-------------------------------------------------------------------------------------------------

const formNode = document.querySelector("form");
const petName= document.getElementById ("petName")
const ownerName= document.getElementById ("ownerName")
const species= document.getElementById ("species")
const breed= document.getElementById ("breed")






class Pet{
    constructor(nome,propietario,specie,razza){
        this.nome=nome;  
        this.propietario=propietario;
        this.specie=specie;
        this.razza=razza;
    }}

const pets=[]

formNode.onsubmit = function (e) {
    
    //  cosi si previene il comportamento di default del form
    e.preventDefault();
   
   
    const animale= new Animal(petName.value,ownerName.value,species.value, breed.value)

    pets.push(pet);


    petName.value="";
    ownerName.value="";
    species.value="";
    breed.value="";
    


    

console.log("form inviato")
}



    