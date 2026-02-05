// Conditional Statement - It allows use to execute different block of code {...} based on different condition

// if statement - This will handle only positive scenario
// if else statement - This will handle both positive and negative
// if else if else statement - This will validate mutliple conditions
// switch statement - This will handle multiple conditions based on the 
// Ternary operator (?:) - This is a short hand of if else statement



// 1. if statement:
// Syntax:

/*

if(condition){
    // code to be executed if condition is true
}

*/

let age = 10
if(age >=20){ // 10 >= 20
    console.log("Age is greater than 18")
}

// 2. if else statement:
// Syntax:

/*
if(condition){
    // code to be executed if condition is true
}
else{
    // code to be executed if condition is false
}

*/

let status1 = "failed"

if(status1 === "passed"){ // "failed" === "passed"
    console.log("Test has been passed ");
}
else{
    console.log("Test has been failed");
}

// 3. if else if else statement:
// Syntax:

/*

if(condition1){
    // code to be executed if condition1 is true
}
else if(condition2){
    // code to be executed if condition2 is true
}
else if(condition3){
    // code to be executed if condition3 is true
}
else{
    // code to be executed if all conditions are false
}

*/


let browser = "edge"

if(browser === "chrome"){ // "edge" === "chrome"
    console.log("launch the chrome browser")
}
else if(browser === "firefox"){
    console.log("launch the firefox browser")
}
else if(browser === "safari"){
    console.log("launch the safari browser")
}
else{
    console.log("please provide the valid browser name")
}


// When can we use if else if statement and when can we use switch statement?
  // 1. condition have ranges (>90, >80, >70) - if else if statement
  // 2. Datatypes are different - name = "string", salary - number
  // 3. Logical Operator (&&) or (||)

// 4. switch statement:
// Syntax:
/*

switch(expression){
    case value1:
        // code to be executed if expression matches value1
        break;
    case value2:
        // code to be executed if expression matches value2
        break;
    ...
    default:
        // code to be executed if expression doesn't match any case
}
*/

let browserName = "chrome"

switch(browserName){ // switch("chrome")
    case "chrome":
        console.log("launch the chrome browser")
        break;
    case "firefox":
        console.log("launch the firefox browser")
        break;
    case "safari":
        console.log("launch the safari browser")
        break;
    default:
        console.log("please provide the valid browser name")
}

// 5. Ternary operator (?:) - This is a short hand of if else statement
// Syntax:

/*

(condition) ? (value if true) : (value if false)

*/

// 1. condition?
// 2. The value if the condition is true
// 3. The value if the condition is false

// 2 and 3 will be separated by (:)

let age1 = 10;

(age1 >= 18)? console.log("Eligible for voting") : console.log("Not eligible for voting")

if(age1 >= 18){
    console.log("Eligible for voting")
}
else{
    console.log("Not eligible for voting")
}