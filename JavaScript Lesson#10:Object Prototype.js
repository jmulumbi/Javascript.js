//Object Prototype
//Every object and function has its own 
//inherent property called Protoype which 

//A protoype itself has another object.
//So the prototype has its own protype 
// Prototype: In programming, a prototype is like
//  a blueprint or template for creating objects. 
// It defines the structure and behavior of an object.

// Object: An object is a real instance created based on 
// a prototype. It's like a building constructed 
// based on a blueprint.

// const person = {
//     name: "Elon"
// }
// console.log(person);

//Prototype inheritance
function Person(fName,lName){
    this.firstName = fName,
    this.lastName = lName
}



//Once we define the variables
// in the constructor we are unable to add any 
//other variables to the constructor using 
//console.log(Person.age)
//How to add variable to constructor 
Person.prototype.age = 20;


const person1 = new Person("Jason", "Toad");
const person2 = new Person("Dick", "Grayson");

console.log(person2)

//How to add method to constructor 
//The method is not added in Person 1 or Person 2 the 
//person1 and and person2 are inherting the method from the protorype of the Person
Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
}

console.log(person2.getFullName());
/**
 * This approach is important because it allows you to define methods and properties 
 * that are shared among all instances of a particular type of object, rather than 
 * duplicating them for each instance. 
 * It helps save memory and makes your code more efficient and easier to maintain.
 */



