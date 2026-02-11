// Functions - It is a set of instruction that performs a specific task

function login(){
    // fill the username
    // fill the password - #username, changed to #email
    // click on login button
}

// login() - This is how we will call the function



// 105
// 100 Test case -  300 lines of code - 195 line codes

// Duplication - Solve the problem of dup
// Maintenance - If there is any change in the username field then we need to change in all the 100 test cases - 99 steps
// Reusability - We can reuse the same function in multiple test cases

let i = Function  // Function Expression

// 1. Named Function - Function Declaration - Whenever you are declaring a function which can be utilised at multiple
// 2. Anonymous Function - Function Expression
// 3. Arrow Function - Lambda Function - ES 6 (2015)
// 4. Constructor Function - Class 

// Whenever you declare a function as a parameter of another function is know as call back function


// function sum(something:Function){
//      something(name)
// }


// sum(function name1(name){
//     console.log("Welcome to sum function")
// })


// 1. Named Function - Function Declaration - A function which will be declared along with the name is known as Function Declaration.
// Syntax:
// JS:
/*

function functionName(parameter){
    // block of code to be executed
    return 
}

functionName(argument)

// TS:

function functionName(parameter: datatype(optional)): returnType(optional){
    // block of code to be executed
    return 
} // void - No return type

functionName(argument)

*/

// 1. Non-Parametrised  and non-returning function

function greet(){
    console.log("Welcome to TypeScript")
}

greet()

// 2. Parametrised and non-returning function

function addition(a:number,b:number){
    console.log(a+b);
}

addition(30,40)

// 3. Parametrised and returning function

function add(a:number, b:number){
    return a+b // return keyword should be the last statement of the function
   
}

const result = add(10,90)
console.log(result)

// 4. Non-Parametrised and returning function
function greetings(){
    return "Welcome to TypeScript"
}

const result1 = greetings()
console.log(result1)