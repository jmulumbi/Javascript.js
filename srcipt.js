//Lesson 3: Scope and Visiblity
console.log("I'm happy to be here");

const a = 5;
console.log(a);

//Scope: Scope is the visiblity of funtions and variables in your section of code 
//Global scope is the outermost scope of the Javascript Program  
// These variables and functions decalred are visible from anywhere in the program
//and so we are able to access it from anywhere in the code.
var b = "Hello Jeremiah";
function example(){
    console.log(b);
}
example();

//Function Scope:is created when a fucntion is declared. 
//These variables and functions declared in the function scope are only 
//visible within that function

function example2(){
    var fs = "Hello Jeremiah";//Function scope as the variable was declared 

    console.log(fs);
}
example2();

//Block Scope: refers to the visiblity and of variables and functions within a block of code. 
//These variables and functions are only available within

function example3(){
    if (true){
        let c = "Mulumbi";
        console.log(c);
    }
}

example3();



