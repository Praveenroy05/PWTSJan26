// Data types - Which defines what type of data a variable is storing

import { isLineBreak } from "typescript";

// int i = 10
// string s = "Test"
// let s1 :null= null

// Syntax:
// keyword(var/let/const) variableName: datatype(Optional) = value

// There are 2 types of datatypes

// 1. Primitive data type - Only have a single value
    
       // 1. number 
       // 2. string
       // 3. boolean
       // 4. null
       // 5. undefined
       // 6. union (|) - Combination of other datatype (number | string)
       // 7. any
       // 8. void

// Note : 1. By default any type of variable will have a value as "undefined"
// 2. By default the datatype of a variable will be "any"


// 1. number - Combination of integer (98, -90) and floating point number (34.45, -5435.4365)


let num5: number = 10 // Type Annotation

let num6  = 1999 // Type Inference

// typeof - Operator which return the datatype of a variable

console.log(typeof num6);

// Whenever we define the datatype of a variable explicitly is known as Type Annotation
// Whenever JS & TS is able to identify the datatype of a variable implicity is known as Type Inference



//  for(let i =0; i<3; i++){}
//  console.log(i)

// 2. string - Sequence of characters - string, text, hello

let str = "String"

// 1. Single quote ('') - String Literal
// 2. Double quote ("") - String literal
// 3. Backtick (``) - Template literal


let singleQuote :string= 'This is a single quote string'
let doubleQuote = "This is a double quote string"

// There are 2 main purpose of defining  the string by using backtick

// 1. Multi-line string

let multilineStr = `This is 
a multi isLineBreak
string`
console.log(multilineStr)


// 2. For string parameterization - ${variableName} - Calling a variable inside a string. Data driven testing in PW

let age = 30

let message = `Your age is ${age}`
console.log(message);


// 3. boolean - true/false
let isAdmin = false
let isEmployee = true

console.log(12>6);

// 4. null - Intentional absence of a value

let num :null= null

// 5. undefined - You have defined a variable but have not assigned any value to it.

// let any1
// console.log(any1);

// let lp : undefined
//  lp = new LoginPage()

let undefinedVar : undefined = undefined

// 6. union (|) - Combination of multiple DT

let num1 : (number |string |boolean |undefined) = 10
console.log(num1);
num1 = "TS"
console.log(num1);
num1 = undefined
console.log(num1);

// 7. any - Free to accept any type datatype

let num2 :any = 10
num2 = "TS"
num2 = true
num2 = null
num2 = undefined

// 8. void - nothing - It is used inside the function as a return type
// When a function is not returning anything by default that function will have a datatype as void

function add(): void{
    console.log("Welcome to addition");
}

let d = "  "
console.log(d);

























// 2. Non-primitive data type - Can store more than one value
   // 1. Functions 
   // 2. Array
   // 3. Object - {key :value}


// let str1
// console.log(str1);


// What is different between Type Annotation and Type Inference


let str3 :any = 10
str3 = "test"