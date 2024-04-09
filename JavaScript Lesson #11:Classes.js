//Classes is a template for creating object 
// class ClassName{
//     //Always add a constructor function to the class
//     constructor(){
//     }
// }

class Person{
    constructor(fName,lName,age){
        this.fName = fName;
        this.lName = lName;
        this.age = age
    }

//JavaScript Class Methods
    // Getter is a method called when a property is acccessed.
   // It can be used to do things like validate the value of 
   //the property or convert it to a different format
   //this allows you to call the method without having parentheses 
   get greet(){
        return "Hello " + this.fName + " " + this.lName;
    }
    
    changeName(newFName,newLName){
        this.fName = newFName;
        this.lName = newLName;

    }
    //setter functions are only allowed to have one parameter
    //A setter is a method that is called when a property is modified 
    //It can be used to do things like update the value of a property or
    // perform some other action
    set changeFirstName(newfName){
        this.fName = newfName;
    }
    //
    //getters and setters are special methods that allow you to control 
    //how properties are accesedd and modified.
}

const person1 = new Person("ELon","Musk",  24);
const person2 = new Person("Josh", "Henry", 45);

console.log(person2.greet);
person2.changeName("Mark","Josh");
console.log(person2.lName);
person2.changeFirstName = "August"
console.log(person2)



//JavaScript Class Expressions
// A class expression provides an alternative way to define a new class
//It uses the function keyword of the function keyword
//Class expressions can be either named or unamed
//If they are named the name can be used to refer to the class later
//if they are unamed they can only be reffered
 //by the variable that they are assigned 

 let Human = class {
    constructor(name){
        this.name = name
    }

    get getName(){
        return this.name;
    }
 }

 const human = new Human('JM');
 console.log(human)
 console.log(human.getName)

 //JavaScript Class Inheritance allows you to create new class on the 
 //basis of already existing class.
 //Using class inhertiance a class can inherit all 
 //the method and properties of another class

 class Humanoid{
    constructor(name){
        this.name = name;
    }
    greet(){
        return "Hello " + this.name;
    }
 }

 class Student extends Humanoid{
 }

 const student1 = new Student("Peter Paul")
 console.log(student1.greet())
