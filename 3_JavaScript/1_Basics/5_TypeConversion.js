//Type Conversion -> Converting Value of one datatype into another datatype
//Types of TypeConversion->
//1. Implicit TypeConversion -> Conversion done by js Interpreter
//2. Explicit Typeconversion -> done by developer manually

//Implicit TypeConversion
console.log('5'+1) // Interpreter convert it into String whenever (String + any other datatype)->String

let a=2;
let b = "hii";
let c=a+b;
console.log(typeof c);
console.log(c);

let x= '5'; //String
let y=1; //Number
let z= x-y;
console.log(typeof z);
console.log(z);