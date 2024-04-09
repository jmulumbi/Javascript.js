//Statics Methods

//Static methods are bound to a class, not the 
//instances of that class. You can not call a static method 
//on an object,it can be only on the class

//You can call a static method without 
//creating the instance of the class

class Person{
    constructor(name){
        this.name = name;
    }
    //If you want to use the objects properties 
    //inside the static method then you can pass the object as a parameter

    static greet(){
        console.log("Hello ");
    }
    //If you want to use the objects properties 
    //inside the static method then you can pass the object as a parameter
   // x represents the object and name represents the property
    static meet(x){
        console.log("Hello " + x.name)
    }


}

const person1 = new Person("Peter");
Person.greet();
Person.meet(person1);

//If you want to use the objects properties 
//inside the static method then you can pass the object as a parameter
