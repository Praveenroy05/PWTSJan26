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



// 2. Anonymous Function - Function Expression - A function which is declared without any name and that function will be stored inside a variable is known as Function Expression. That variable becomes the name of the function.

// Syntax:
/*

let functionName = function(param: datatype(Optional)): returnType(Optional){
        // Code to be executed
        return .....
}

const result = functionName(argument)


*/


// Call back function - A function which will be utilised as a parameter of another function is know as call back function.


let message = function(name:string, age:number){
    console.log(`Your name is ${name} and age is ${age}`);
}

message("Rahul", 25);


// 3. Arrow function (=>) - ES6 2015 - Lambda Function
// 1. This function is also a part of anonymous function and will not have any name
// 2. This function will be declared by using (=>) arrow symbol after the paranthesis.
// 3. Arrow function use to shorten the number of lines of code
// 4. If there is only one line of code then we can skip the curly braces {} and the return keyword. It implicity return the value from that function.
// 5. If there is only one parameter for a function we can skip the paranthesis to define the parameter.

//Syntax
/*

let variable = (param:datatype)=>{
  // code
  return
}

variable(argument)


*/

let add1 = (a:number,b:number)=>{
    console.log(a-b);
}

add1(10,5);

let sum1 = (a:number, b:number, c:number)=> (a+b+c) //{return a+b+b} 
let sum1Result = sum1(10,20,30)
console.log(sum1Result);


let square = a => console.log(a**2)

square(10)


// Method Overloading - A method which have same name but different parameter is known as method overloading.

// function name1(a:number){

// }

// function name1(a:number,b:number){

// }

// name1(1)
// name1(12,34)

// Default parameter and Optional parameter

// Default parameter - A parameter which has a default value is known as Default parameter.

function name1(a:number, b:number=5){
   console.log(a+b);
}

name1(10)
name1(10,20)

// Optional Parameter (p?) - A parameter which may or may not be provided with a value during the function call 


function display(name:string, age?:number){
   console.log(name, age);
}

display("Rahul")
display("Rahul", 30)

// Assignment - Complete the above function by writing the logic to print only Name if age parameter has not value given.


