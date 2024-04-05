//Objects are non-primitive data types 
//that allows you to store multiple collections of data.
// const object = {
//     key1:value1;
//     key2:value2;
// }
//Key value pairs are called properties
//With object literal
const person = {
    firstName:"Jeremiah",
    lastName:"Mulumbi",
    age:35,
    adress: {
        street:"815 North Brodway",
        city:"Saratoga Springs",
        state: "New York",
        country : "United States",
        zipCode: "78725"
    }
}
console.log(person)

//accessing properties of an Object
console.log(person.firstName);
console.log(person.lastName);
console.log(person["first Name"]);

//Updating the properties of an object

person.firstName = "Jason"
console.log(person.firstName + " " + person.lastName);

//adding properties to objects
person.company = "Tesla"
console.log(person);

//deleting properties from an object
delete person.age;
console.log(person)

//acesssing properties in nested objects
console.log(person.adress.street)

//check if property exists
//propertyName in objectName
console.log("firstName" in person)// pero

//The for in loop allows you to acess each property and 
//value of an object without knowing the specifc name of the property
for(let properties in person){
    console.log(properties +":" +person[properties]);
    
}

//Object with new
const newPerson = new Object();
newPerson.height = 171;
newPerson.age = 40;
newPerson.location = "LA";
console.log(newPerson);

const newerPerson = new Object({
    name:"John",
    lastName:"Doe",
    age:60,
})
console.log(newerPerson)

//An object method is a propety that contains a function definition
const human = {
    name:"Catherine",
    lastName:"Naki",
}

function greet(){
    console.log("Hello World");
}

human.greeting = greet;
human.greeting();
console.log(human);

//this keyword
//TO acess the other properties of an object within a method od the same object
const being = {
    firstName:"Joe",
    lastName:"Mama",
    getFullName: function(){
        return this.firstName + " " + this.lastName
    }


}
console.log(being.getFullName());