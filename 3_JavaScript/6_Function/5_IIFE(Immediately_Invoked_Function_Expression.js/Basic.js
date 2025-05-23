// Immediately invoked function expression-> the Function in js that is defined and execute immediately.

//Syntax->
//(Function(){
    // code   
//})();

//1. IIFE on traditional Function
(function(){
    console.log("Hello");
})();

//2. IIFE on Arrow Function
(()=>{
    console.log("hii");
})();

//3.Anonymous Function
const square=(function(a){
    return a*a;
})(5);
console.log(square);