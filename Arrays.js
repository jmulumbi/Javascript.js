//Arrays are special types of objects that are used to 
//store multiple calues in a single variable.

//We can create arays using the literal [] or using the Array() constructor
scores = [10,90,100];
grades = new Array("A+","A","B");

//We can use the typeof operator to check if a variable is an array
//However typeof returns object for arrays as arrays are objects in JavaScript

colors = ["Black","Blue","Red"]
//Using typeof Operator to check type of arrays 
console.log(typeof colors);// Output: 'object'

//Using Array.isArray() method
console.log(Array.isArray(colors)// Output: true

//In JavaScript we can access elements within the array using square brackets notation
//The square brackets contain the index of the element you want to acess.
//Array indexing starts at zero so the first elemeent of an array has an ndex of 0, 
//the second element of an array has an index of 1 and so on 


const fruits = new Array("Banana","Apple","Cantelope"]
console.log(fruits[0]);//outputs Banana

//Negative indices return undefined 
console.log(fruit[-1];//Undefined (no element at index -1)
console.log(fruits[fruits.length -1]// Outputs Cantelope 

//We can update the array elements using square brackets [] notation to access the 
//element at a specific index and then assigning a new value to that element 

//Updating the elements at index 1 
fruits[1] = "BlueBerries "
console.log(fruits);// Output: ["Banana, "Blueberries, "Cantelope"]

//Updating the last element of the 
fruits[fruits.length - 1] = "Grapes"

console.log(fruits);// Output : ["Banana", "BlueBerries", "Grapes"];

//In JavaScript the length property returns the number of elements within the array
console.log(fruits);//Outputs:3 

//The pop method removes an element from the end of the list and returns it
let lastFruit = fruits.pop();
console.log(fruits);// ["Banana", "BlueBerries"]
console.log(lastFruit);//"Grapes"

//The push method adds one or more elements to the end of 
//an array and returns the length of the list
let newLength = fruits.push("BlackBerries", "Mango")
console.log(fruits);// Output:  ["Banana", "BlueBerries", "BlackBerries","Mango"];
console.log(newLength);//Output: 4


// The shift method removes the first element
//from an array and returns that element
//It mutates the original array by removing the frist element and
//shifting all subsequent elements one position to the left 
colors = ["Black","Blue","Red"]
const firstColor = colors.shift();//Removes "Red" and returns it 
console.log(colors);//Output: ["Black", "Blue"]
console.log(firstColor);//Output "red"

//The unshift methods adds one or more elements to the beginning of 
//an array and returns the new length of the array 
const numbers = [3,4,5];
var newLength = numbers.unshift(1,2);
console.log(numbers); //Output: [1,2,3,4,5]
console.log(newLength); //Output;5 

//Nested Arrays
const fruits = [["Apples", 4 ],["Banana", 3],["Carrot", 5]]
//Acessing Elements within this Array 
console.log(fruits[0][0])//Prints out the element banana
//How to shift,pop, unshift, and push elements in a nested arrays


