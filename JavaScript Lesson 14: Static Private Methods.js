//Static Private Methods 
class Person {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }

    static #fullName(x) {
        return x.fName + " " + x.lName;
    }

    display() {
        console.log(Person.#fullName(this));
    }
}

const person1 = new Person('Big', 'Man');
person1.display(); // Output: Big Man
