// loops - Will execute the same block {...} of code multiple times until the condition is false

// 1 to 50
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("***************************");

// for(let i = 1; i<=5; i++){
//     console.log(i)
// }

// 1. for loop
    // a. for loop - Traditional for loop - when we know that how many times we have to run the iteration
    // b. for of loop - Loop through the iterable object like array, string,.....
    // c. for in loop  - Loop through the properties of an object - {key : value} - key - value
// 2. while loop - when we don't know that how many times we have to run the iteration
// 3. do while loop - when we want to execute the block of code at least once before we check the condition


// 1. for loop - Syntax:

/*

for(initialization; condition; increment/decrement){
    // block of code to be executed
}

initialization - Initialise the value of a variable to start the iteration. Ex:- let i = 0
condition - Condition to check whether the loop should continue or not. Ex:-  i<5
increment/decrement - Increment or decrement the value of the variable to move towards the condition. Ex:- i++/i-- (i = i+1)

*/

// 1 to 5
for(let i=1; i<=5; i++){ // 5++ = 5+1 = 6 <= 5 
    console.log(i) // 1 2 3 4 5
    if(i==3){
        break
    }

}


// break - which terminates the loop when the specified condition is met

// Assignment  - print from 5 to 1

console.log("***************************");

// 2. while loop - Syntax:
/*

initialization - let j =1

while(condition){ // j<=5
    // block of code to be executed
    increment/decrement j++/j--
}

*/

// print 10 to 1

// j =10 // while(j >=1) 

//  J>=1 ,j>0 , j !=0 - Can use

// j <=10 , j<=1, j<0, j==0 , j>=2,  j<=1 - Cannot use

let j = 10 
while(j <1){
    console.log(j) // 10
    j--
}

console.log("**************************");
// Do while loop - 

/*

initialization
do{
 // block of code to be executed
 
    increment/decrement
}while(condition);

*/

let k = 10 
do{
    console.log(k) // 10
    k--

}while(k <1);











