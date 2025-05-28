//Sync
console.log("1. Start");
function greet() {
    console.log("2. Hello, world!");
}
greet();
console.log("3. End");

//Async
console.log("1. Start");

setTimeout(() => {
    console.log("2. Delayed log");
},2000);

console.log("3. End");
