//Lesson 9 constructor
//constructor is used to create objects
const person = {
    firstName:"Joe",
    lastName :"Mama"
}

function Person(first,last){
    this.firstName = first
    this.lastName = last
    this.getFullName = function(){
        return this.firstName + " " + this.lastName
    }
}


const person1 = new Person("Jake","Austin");
const person2 = new Person("Mark","Johnson");

console.log(person1);
console.log(person2);

person1.age = 51
console.log(person1);
person2.greet = function(){
    console.log("Hello Bro");
}

person2.greet();
console.log(person1.getFullName());

//Javascript Object Prototypes 
const human = {
    name:"James"
}
//We can use the Prototype to add properties and methods to a constructor function
console.log(human)