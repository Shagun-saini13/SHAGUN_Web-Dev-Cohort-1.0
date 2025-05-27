//map -> map is an inbuild function in js. it is a high order function which takes anotther function(callback) as an argument
let arr=[1,5,7,3,6];
//double the elements of array

//1. Way
// function double (x){
//     return x*2;
// }
// const b= arr.map(double);
// console.log(b);

//2. Way
// const b= arr.map(function double(x){
//     return x*2;
// })
// console.log(b);

//3. Way -> using arrow function
// arr = arr.map((x)=>{ return x*2});
// console.log(arr);

//4. Way -> Shortest way
arr= arr.map(x=>x*2);
console.log(arr);