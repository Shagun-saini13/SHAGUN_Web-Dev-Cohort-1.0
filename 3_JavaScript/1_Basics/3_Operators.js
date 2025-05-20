/*
Operators in Javascript
Operators are used to perform operations on variables. Types include:
Assignment operator: (=, +=, -=, *=, /=, %=)
Arithmetic Operator: (+, -, *, /, %)
Comparison Operator: (==, ===, !=, !==, >, <, >=, <=)
Logical Operator: (&&, || )
*/ 

let a=6;
let b = 3;
//Assignment operator
console.log(a+=b);

//Arithmetic Operator
let c = a+b;
console.log(c);

//Comparison Operator
let x=9; // currently a=9
console.log(a==b)
console.log(a===x); //Strictly Equality -> Check both Value and DataType

//Logical Operator
console.log(a||c)