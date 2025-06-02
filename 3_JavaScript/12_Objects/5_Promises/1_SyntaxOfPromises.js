//3 States of Promises
//1. pending
//2. resolve
//3. reject

// resolve
let mypromise = new Promise (function(resolve,reject){
    console.log("resolve");
    resolve(100)
})
console.log(mypromise);

//pending
let hlo = new Promise (function(resolve,reject){
    console.log("Pending");
})
console.log(hlo);

// reject
let byee = new Promise (function(resolve,reject){
    console.log("reject")
    reject("failed")
})
console.log(byee);
//UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "failed".

//That error means your code created a rejected Promise, but you didn’t handle the rejection properly using .catch() or a try...catch block (if using async/await).