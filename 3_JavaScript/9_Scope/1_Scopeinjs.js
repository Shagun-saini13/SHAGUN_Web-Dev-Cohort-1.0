// 3 Types of Scopes-
// 1- Global Scope
// 2- Function Scope
// 3- Block Scope

//1- Global Scope-> can be accessed anywhere in the code
let name="Alpha intern"; 
function greet(){
    console.log(name);
}
greet();


//2. Function Scope -> Only accessed within a function
//let/const/var-> All respect Function Scope
function hello(){
    let a=5;
    console.log(a);
}
hello();
//console.log(a); -> Reference Error- a is not defined


//3. Block Scope -> only acces within a block 
// -> let/const - both respect Block Scope
{
    let a=2;
    console.log(a);
}
//console.log(a); // Reference Error- a is not defined

// -> var - doesn't Respect Block Scope
{
    var a=9;
}
console.log(a); // var can be accessed outside the block scope