//Find Method -> 
// The find() method in JavaScript returns the first element in an array that satisfies a provided testing function, or undefined if no such element is found.
//find() is a higher-order function in JavaScript because it takes another function (a callback) as an argument.

//Find even number in array
let arr=[1,5,7,8,5,4];
const b=arr.find(a=>a%2===0)
console.log(b);

