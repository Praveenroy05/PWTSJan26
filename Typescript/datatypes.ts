// Data types - Which defines what type of data a variable is storing

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

// Note : 1. By default any type of variable will have a value as "undefined"
// 2. By default the datatype of a variable will be "any"


// 1. number - Combination of integer (98, -90) and floating point number (34.45, -5435.4365)


let num5: number = 10 // Type Annotation

let num6 :undefined = undefined // Type Inference

// Whenever we define the datatype of a variable explicitly is known as Type Annotation
// Whenever JS & TS is able to identify the datatype of a variable implicity is known as Type Inference


// 2. string





















// 2. Non-primitive data type - Can store more than one value
   // 1. Functions 
   // 2. Array
   // 3. Object - {key :value}


let str1
console.log(str1);


// What is different between Type Annotation and Type Inference


let str3 :any = 10
str3 = "test"