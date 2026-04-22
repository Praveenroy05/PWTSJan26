import data from '../testdata/login.json'
import dd from '../testdata/dd.json'

// Object - Is a collection of key:value pair inside the {}. Key inside the object will be stored in the form of string internally.
const Human = 
{
   name: "Rahul",
   age : 20,
   address: "Delhi"
}

// To get the value from object 1st way
// objName.key
console.log(Human.name);

// 2nd way
// objName[key]

console.log(Human["age"]);


// JSON - Javascript Object Notation

// {
//     "key":"value"
// }

console.log(data.url);

// const data = 
// {
//   url: 'https://rahulshettyacademy.com/client',
//   email: 'testnHNk@gmail.com',
//   password: 'Testing@1234',
//   incorrectPwd: 'Test'
// }

// console.log(dd);


// const dd1 = 
// [
//   {
//     url: 'https://rahulshettyacademy.com/client',
//     email: 'testnHNk@gmail.com',
//     password: 'Testing@1234',
//     productName: 'iphone 13 pro'
//   },
//   {
//     url: 'https://rahulshettyacademy.com/client',
//     email: 'testnHNk@gmail.com',
//     password: 'Testing@1234',
//     productName: 'Addidas'
//   },
//   {
//     url: 'https://rahulshettyacademy.com/client',
//     email: 'testnHNk@gmail.com',
//     password: 'Testing@1234',
//     productName: 'iphone 13 pro'
//   }
// ]

//console.log(dd[2].productName);

for(let data of dd){
    console.log(data.productName);
}






