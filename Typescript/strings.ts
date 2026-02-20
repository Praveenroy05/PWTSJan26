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
// Syntax:
// stringName.slice(startIndex, endIndex(exclusive))

let str3 = "This is a string"
console.log(str3.slice())
console.log(str3.slice(1))
console.log(str3.slice(10,5))

// 8. substring(startIndex, endIndex?) - return a portion of the string
// Syntax:
// stringName.substring(str, end?)
console.log(str3.substring(1))
console.log(str3.substring(10,5))




let str4 = "USD 1234"


// 9 . startsWith(string, startIndex?) - It checks if the string is starting with the specified string and return us the boolean value.
console.log(str3.startsWith("t", 11))
console.log(str3.startsWith("This"))

// 10 . endsWith(string, endIndex?) - It checks if the string is ending with the specified string and return us the boolean value.

// username -    username   

// 11. toUpperCase() - It converts the string to upper case letter and return a new string
console.log(str3)
console.log(str3.toUpperCase())
// 12. toLowerCase() - It converts the string to lower case letter and return a new string 
console.log(str3.toLowerCase())
console.log(str3)

// 13. trim() - It removes the leading and trailing whitespace from a string and return a new string

console.log("username" == "  username  ".trim());

// 14. trimStart() - It removes the leading whitespace from a string and return a new string

console.log("username  " == "  username  ".trimStart());

// 14. trimEnd() - It removes the trailing whitespace from a string and return a new string

console.log("  user name" == "  user name  ".trimEnd());

let str5 = "  This is a TS  "
console.log(str5)
console.log(str5.trim())


// 15. split(separator) - Splits the string into an array of substring based on the specified separator
// Syntax:
// stringName.split(sep)

let str6 = "Apple Banana mango Typescript JS Blue"
console.log(str6.split(" "))


let email = "praveen@qamitra.com"
// Print the domain name from the email
let domain = email.split("@")
console.log(domain[1].split(".")[1]);
console.log(email)


let str7: string = "Welcome to Typsescript class";
 
console.log("endsWith.." + str3.endsWith("class", 10));
 


// Object - 
// Class - POM framework

// Monday - Installation and understanding of the structure PW
