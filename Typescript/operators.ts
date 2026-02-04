// Operators - Operators is a symbol that perform various operations

// 1. Arithemetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operators
// 5. Ternary Operators - Statement


// 1. Arithemetic operator - used to perform mathematical calculation
       // 1. Addition (+) - Addition or concatenation
       // 2. Subtraction (-)
       // 3. Multiplication (*)
       // 4. Division (/)
       // 5. Modulus (%) - Remainder - 9/2
       // 6. Exponential (**) - Power - 5 ** 3 = 5*5*5
       // 7. Increment (++) - Increase the value by 1
       // 8. Decrement (--) - Decreases the value by 1

let number1 = 10
let number2 = "4"

let number3 = Number("TS")
console.log(number3)



// 1. Addition
console.log(number1 + number2); // 104

console.log(number1 /number2) //  10/4
// 5. Modulus (%) - Remainder after the division
console.log(number1 % number2)

// 6. Exponential (**) - Power of one value to the other
 // number1 ** number2 // 10 ** 4 - 10*10*10*10
 console.log(number1 ** number2);

// --> Type conversion vs Type Coercion
 // When JS/TS convert one datatype into other implicitly is known as Type Coercion
 // When you convert it explictily - Number("4") - Type Conversion

// 7. Increment (++) - Increases the value by 1

let num5 = 10
  // pre-increment (++a) - First the a value of the variable will be incremented and the action will be performed

  //console.log(++num5) // 11 // ++num5 = num5 = num5+1 = 10+1- num5=11
  console.log(num5++) // 10++ = 10 = 10+1 = 11 = 12
  //console.log(num5) // 12


  // Post-increment (a++) - First the action will be performed and then the value of the variable will be incremented

  // 8. Decrement (--) - Decreases the value by 1
  // pre-decrement (--a)
  // post-decrement (a--)


// What is difference between =, ==, ===

// 2. Comparison Operator - used to compare two values and return the result in the form of boolean (true/false)

       // 1. Equal to (==)
       // 2. Not Equal to (!=)
       // 3. Strict Equal to (===)
       // 4. Strict Not Equal to (!==)

       // 5. Greater than (>)
       // 6. greater than or equal (>=)
       // 7. Less than (<)
       // 8. Less than or equal (<=)

// 1. Equal to (==) - Checks if the two VALUES are same or not

let num6 = 10
let num7 = "10"

console.log(num6 == num7) // true

// 2. Not Equal to (!=)
console.log(num6 != num7);

// 3. Strict Equal to (===) - Checks if the VALUES and DATATYPES of the variables are same or not
console.log(num6 === num7) // false

// 4. Strict Not Equal to (!==)
console.log(num6 !== num7);

console.log(10 > 30);
console.log(10 >= 10)// 
console.log(10 < 5); // false
console.log(5 <= 5);


console.log("***********************************")

// 3. Logical Operators - Used to combine multiple condition to get the final result. The result should be in the form of boolean

   // 1. Logical AND (&&) - Both the condition should be true to get the result as true
   // 2. Logical OR (||) - Either of the condition has to be trur to get the result as true
   // 3. Logical NOT (!) - It will reverse the result from true to false and vice-versa

   // 1. AND (&&) - (condition) && (condition)

   // true && true - true
   // true && false - false
   // false && true - false
   // false && false - false

   console.log("OR", (10 > 5) || (10> 9))
   console.log("OR", (10 > 5) || (10> 90))
   console.log("OR", (10 > 50) || (10> 9))
   console.log("OR", (10 > 50) || (10> 90))

   // 2. OR (||)

   // true || true - true
   // true || false - true
   // false || true - true
   // false || false - false

   console.log("AND", (10 > 5) && (10> 9))
   console.log("AND", (10 > 5) && (10> 90))
   console.log("AND", (10 > 50) && (10> 9))
   console.log("AND", (10 > 50) && (10> 90))



// calendar - Month year -> Next - select 5th may 2027


// 3. Logical NOT (!) = !false 
// !true - false
console.log(!(10 < 5));


// 4. Assignment Operator(=) - Assigns the value to a variable

let i1 = 100

// i1 = i1+5 // i1 = 100+5 = 105

i1 += 5 // i1 = i1+5
console.log(i1);




