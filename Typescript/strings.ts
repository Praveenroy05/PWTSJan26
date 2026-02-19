// string - Sequence of characters - string, text, hello

let str0 = "String"

// 1. Single quote ('') - String Literal
// 2. Double quote ("") - String literal
// 3. Backtick (``) - Template literal

// '[text="animal"]'

let singleQuote :string= 'This is a single quote string'
let doubleQuote = "This is a double quote string"

// There are 2 main purpose of defining  the string by using backtick

// 1. Multi-line string

let multilineStr = `This is 
a multi isLineBreak

string`
console.log(multilineStr.length)


// 2. For string parameterization - ${variableName} - Calling a variable inside a string. Data driven testing in PW

let age = 30

let message = `Your age is ${age}`
console.log(message);


console.log("********************************")
let str = "Welcome to Typescript "

// 1. length - Return the number of characters in a string
// Syntax:
// stringName.length
console.log('"Result"', str.length)

// 2. charAt(index) - return the character at a specified index
// Syntax:
console.log(str.charAt(4))

// "abcdabcd" - a2b2c2d2


// 3. concat(str1, str2) - similar to array
// Syntax:
// stringName.concat(str1, str2)

str.concat("hello", "JS")

// 4. includes(searchString, startIndex?)
// Syntax:
// stringName.includes("string or char", startIndex) - return a boolean (true/false)

// 5. indexOf(searchValue, fromIndex?) - return the index of the first occurrence of a substring
// Syntax:
// stringName.indexOf(char or string)

// 6. lastIndexOf(searchString, startIndex?) - return the index of the last occurrence of a substring
// Syntax:
// stringName.lastIndexOf(char or string)


// 7. slice(startIndex?, endIndex?) - return a portion of the string
// 8. substring()
// 9 .

