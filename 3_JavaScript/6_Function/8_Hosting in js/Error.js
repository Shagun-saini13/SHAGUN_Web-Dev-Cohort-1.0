//Error- 3 Types of Error
//1. Reference Error -> access variable before declaration
//2. Syntax Error -> mistake in code
//3. Type of error -> The input you provided is of a different data type than expected.

//Reference error
//function hello(){
    //console.log(a); ////ReferenceError: Cannot access 'a' before initialization
    //let a=5;
//}
//hello(); 

//Syntax error
//const a=(a;b)=>a+b; //SyntaxError: Unexpected token ';'
//console.log(a(2,4));

//Type error
const b=str=>str.length; //Expected a string value as input
console.log(b(hlo)); //ReferenceError: hlo is not defined