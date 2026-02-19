// Arrays - [10,20,30,40]


let array = [10,3,4,5,6, "JS", true, 343.34, 34636] // index starts with 0 - first position element

//[0:10, 1:3, 2:4, 3:5, 4:6, 5:"JS", 6:true] // [index: value]
console.log(array[0])

let arr = 0
// There are 2 ways in which we can declare an array

// 1. Using square bracket - [] - Array Literal
// 2. Using new keyword - Array costructor - new Array()


// 1. Array Literal - []
// Syntax:
// let/const arrayName :datatype[](optional) = [value1, value2,....]

let array1: number[] = [12,34,5,67,89]
let array2 = [10,2,3,"JS","TS"]
console.log(Array.isArray(arr))
console.log(array2)


// 2. Array Constructor - new Array()

// Syntax:
// let arrayName = new Array<datatype>(value1, value2,...)

let array3 = new Array<any>(10,20,30, true)
console.log(array3);

// let array = [10,3,4,5,6, "JS", true, 343.34, 34636] 
// Syntax:
// arrayname[index]
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])

// property - length - return the total number of elements in an array
console.log("Array Length", array.length) // [0...8]



// Tradition for loop - Work on the index of an array
for(let i=0; i<array.length; i++){
    console.log(array[i])
}

console.log("**********************************");

// By using for ...of loop - It will iterate over the element of an array
// let array = [10,3,4,5,6, "JS", true, 343.34, 34636] 

// let i -  declaration
// let k = 10 - initialisation


// Syntax for -  for of loop
/*

for(variable declaration of arrayName)
{
   console.log(variable)
}

*/
// let array = [10,3,4,5,6, "JS", true, 343.34, 34636] 

for(let e of array){
    console.log(e)
}



console.log("***********Methods of an array***************");

let array4 = [10,20,30]
 
for(let ele of array4){
    console.log(ele)
 
}

let arr1 :any = [10,20,"apple","blue"] 
console.log(arr1);

// 1. push(ele, ele1, el2,....) - Adds the element to the end of array
// Syntax:
// arrayName.push(ele1, ele2)

arr1.push("true", 50,50, true)
console.log("after push method", arr1)

// 2. pop() - Removes the last element from an array
// Syntax:
// arrayName.pop()
const val = arr1.pop()
console.log(val);
console.log("after pop method", arr1);

// What is difference between push() and unshift()

// 3. unshift(ele1, ele2) - Adds the element to the beginning of an array
// Syntax:
// arrayName.unshift(ele1, ele2)
arr1.unshift(100)
console.log("after unshift method" , arr1);

// 4. shift() - Removes the first element from an array
// arrayname.shift()
arr1.shift()
console.log("after shift method", arr1);

// What is difference between slice() and splice()

// 5. slice(startIndex?, endIndex?) - Return the portion of an array from the startindex to endIndex-1
// Syntax:
// arrayName.slice(startIndex, endIndex(Exclusive))
// startIndex - The position where you want to start the slice
// endIndex - The position where you want to end the slice
// Note : startindex < endIndex, otherwise it returns an empty array

console.log("slice", arr1.slice(-7,-2))
console.log(arr1.slice(0,1));

// 6. splice(startIndex, deleteCount?, element1, element2,...) - Removes elements from an array and/or adds new elements
// Syntax:
// arr1.splice(startIndex, deleteCount, element1, element2,...)
// startIndex - The position where you want to add/delete the element
// deleteCount - The number of elements to be deleted from startIndex
// ele1, ele2 - The element that you want to add at the start index

let arr2 = [10,20,30,40,50,60]
console.log(arr2);
arr2.splice(2, 3, 25, 35)
console.log("after splice method2", arr2);

// 7. indexOf()


 
