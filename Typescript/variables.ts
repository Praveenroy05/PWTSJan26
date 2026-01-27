// variable - storage/container - Which stores either a single value or multiple values

// There are 3 differnet keyword to declare a variable :

// var  - In modern JS & TS we do not use var - > version 5 (ES6)
// 2015 - ES 6  - ECMA SCRIPT 6
// let  - If the value of the variable can change at any point of time
// const - To declare a constant variable - final


// ++, --


// Scope of  variable:

// 1. Local scoped variable - When you try to declare a variable inside {...}
// 2. Global scoped variable - When you declare a variable outside of the {...}

// var



// What is differenc between var , let and const 


let name1 = "TS" // Global scoped 

// If you have the same variable at a global and local, which one will get used inside the local scoped.

{
  console.log("Line #30", name1)
  let age = 30
  console.log(age)
}

// console.log(age);

console.log("Line # 37", name1)



let language = "Typescript" // global
console.log(language)

{
   // console.log(language) // Local scoped variable wil be given a preference
    let language = "JS" // local
    console.log(language) // JS
}

// var p = 10
// var p = 90
// var p = 890

let age1 = 31
{
    console.log(age1)
    const age = 30 // Local scope
    console.log(age);
}

 // console.log(age);


// var - This was only the keyword to declare a variable before 2015

// 1. Scope - Global scope or Functional scope
// 2. Whenever you declare a variable using a var keyword it can be redeclared and re-initialised as well
// 3. Hoisting : We can access the variable before it's declaration as well but it will take the value as undefined
// 4. It is not mandatory to initialise the value of the variable at the declaration.

var num3 

num3 = "TS"


console.log(num1);
// Re-declaration 
var num1 = 10 // Initialisation
var num1 = 400
var num1 = 100
var num1 = 3454336

console.log(num1);

var num2 = 10
num2 = 90 // re-initialised


function add(){
  var i2 = 10 // local scoped variable
}

// {
//   var i3 = 10
// }

// console.log(i3);

var flag =  true // Global 

if(2>1){
   var flag = false // re-declaration
}

console.log(flag);


// let
// 1. Scope - Global scope or Block-level(local) scope {...}
// 2. Whenever we declare a variable using let keyword it can be re-initiliased but it cannot be re-declared
// 3. Hoisting : We cannot access the variable before it's declaration as well but it will take the value as undefined
// 4. It is not mandatory to initialise the value of the variable at the declaration.

// console.log(num4);
let num4
num4 = 90*2

// let num4 = 100 - This is not possible
// let num4 = 90


// let login
// pre-rcondition{
//   login = new Login()
// }


// {
//   login
// }


// const
// 1. Scope - Global scope or Block-level(local) scope {...}
// 2. Whenever we declare a variable using const keyword it cannot be re-initiliased and it cannot be re-declared as well.
// 3. Hoisting : We cannot access the variable before it's declaration as well but it will take the value as undefined
// 4. It is mandatory to initialise the value of the variable at the declaration.

// console.log(testing);
const testing = 10
// testing = false // This is not allowed
// const testing = true // This is not allowed



{
  const test = "Login"
  console.log(test);
  console.log(testing);
}


console.log(testing)


// var - This was only the keyword to declare a variable before 2015
// 1. Scope - Global scope or Functional scope
// 2. Whenever you declare a variable using a var keyword it can be redeclared and re-initialised as well
// 3. Hoisting : We can access the variable before it's declaration as well but it will take the value as undefined
// 4. It is not mandatory to initialise the value of the variable at the declaration.


// let
// 1. Scope - Global scope or Block-level(local) scope {...}
// 2. Whenever we declare a variable using let keyword it can be re-initiliased but it cannot be re-declared
// 3. Hoisting : We cannot access the variable before it's declaration as well but it will take the value as undefined
// 4. It is not mandatory to initialise the value of the variable at the declaration.


// const
// 1. Scope - Global scope or Block-level(local) scope {...}
// 2. Whenever we declare a variable using const keyword it cannot be re-initiliased and it cannot be re-declared as well.
// 3. Hoisting : We cannot access the variable before it's declaration as well but it will take the value as undefined
// 4. It is mandatory to initialise the value of the variable at the declaration.


