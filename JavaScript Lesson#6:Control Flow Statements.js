//Control Flow Statements are used to control the flow of execution 
//They are used to make decisions,execute loops and see errors 
//Conditional Statements 
//Used to exexcute different code based on different conditions
//if,else if, else 
//if - If a condition is ture then the code within the block executes 

let age = 18;
if (age < 18){
    console.log('You are too young');
}
 else if  (age >=18 && age <= 50){
    console.log("You are the correct age");
}
else{
    console.log("Sorry you are too old");
}

//Switch Statements: used to execute a bloack of code based on the value of the expression

let value = "Helo";
switch (typeof value){
    case "number":
        console.log("Number");
        break;
    case "string":
        console.log("String");
        break;
    case "boolean":
        console.log("Boolean");
            break;
    default:
        console.log("Other");
        break;
}

let dayName = 2
switch(dayName){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wedndesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
}

//Ternary Operator
//condition ? [Code to be executed if true] : [Value to be executed if false]

let ages = 10;
let msg = (ages >= 18) ? "You are an adult" : "You are a not an adult ";
console.log(msg);


//LOOPS
//for (initialization;condition;increment/decrement){
//}
for (i=0;i<=10;i++){
    console.log(i);
}

let coding = ["C","JavaScript","Java"]
for (let x = 0; x < coding.length;x++){
    console.log(coding[x]);
}
console.log("Nested For Loop")
for (y = 1;y <= 5;y++){
    console.log(y);
    for (let t = 1; t <= 3;t++){
        console.log("Inner Loop " + t);
    }
}

//While loop
//while (condition is true){}
console.log("While Loop")
let s = 0;
while ( s <= 10){
    console.log(s);
    s++
}

//Do while
//do{
//Code to be rpeated
//}while (condition)
console.log("Do-While Loop")
let g = 0;
do{
    console.log(g);
    g++;
}while(g <= 7);
//

//break / continue
for (let r = 1; r <= 5;r++){
    if (r == 4 ){
        continue;
    }
    console.log()
}
