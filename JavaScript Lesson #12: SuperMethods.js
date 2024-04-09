//Super Method
//The super() method used inside a child class denotes its parent class

class Person{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log("Hello Person " + this.name);
    }

   
} 

class Student extends Person{
        constructor(name){
            //Refers to the parent class
            super(name);
        }

        greet(){
            console.log("Hellow Student + " + this.name);
        }
    }

    //The method of the child class will override the 
    //method of the parent class

