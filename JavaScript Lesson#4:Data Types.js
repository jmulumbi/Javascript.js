//Lesson 4:Data Types
//Primitive Data Types:
//String 
//Number(Int/Float)
//Boolean
//Null
//Undefined
//BigInt

//String: a sequence of zero or more integers 
//Uses ("") or (')
let firstName = "Jeremiah";
let lastName = ' Mulumbi';

console.log( "My name is", firstName + lastName);


//Number: represents integer and floating point numbers
let num = 100;
let numb = 11.0//The point zero wont matter cause the computer wants to save space
console.log(typeof numb);

//Boolean: has two values, True/False 

let learning = true;
let completed = false;

console.log(typeof completed);

//Undefined:if the variable is declared but the 
//value is not assigned then the valie of that variable will be undefined 
let age;
console.log(age);

//Null is a speicall value which represents empty or null
 let number = null;
 console.log(number);
 console.log(null == undefined);

 //Reference Data Types
 //An object is a collection of properties and dataTypes
 let person = {
    firstName: "Jeremiah",
    lastName: "Mulumbi",
    age: 20
 };
 console.log(typeof person)

 //Arrays are a type of object that store a range of values

 let numbers = [1,2,3,4,5];
 console.log(numbers);
 //To iterate through each value in
 for (i = 0;i < numbers.length;i++){
    console.log(numbers[i]);

 }

 //Functions are a type of object that can be used to execute code
 function msg(){
    console.log("Wagwan")
 }

 console.log(typeof msg);


 let y =6;
 son
  y =7;
