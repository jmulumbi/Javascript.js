//Private Methods
//Private methods are only accessible within the 
//class and this means that we are unable to call 
//private methods outside of that class

//By default methods are publc. To make methods private we need to
//begin the method with a #

class Person{
    constructor(fName,lName){
        this.fName = fName;
        this.lName = lName;
        
    }
    //Cant call this function outside the class
    #fullName(){
        return this.fName + " " + this.lName
    }

    display(){
        //This refers to the object
        console.log(this.#fullName());
    }
}

const person1 = new Person("Paul", "Pierce");
person1.display();
