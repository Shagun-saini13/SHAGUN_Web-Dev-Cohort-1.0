//Hosting-> we can access the Variable before it's declaration
/*Hoisting is JavaScript's default behavior of moving declarations to the top of the scope before code execution.
▫️ var is hoisted to the top and initialized with undefined.
▫️ let and const are hoisted but not initialized. They reside in a "𝑻𝒆𝒎𝒑𝒐𝒓𝒂𝒍 𝑫𝒆𝒂𝒅 𝒁𝒐𝒏𝒆 (𝑻𝑫𝒁)", meaning you can't access them before declaration. */

console.log(a);
var a=5; //undefined

console.log(b);
let b=6;//ReferenceError: Cannot access 'b' before initialization

greet();
function greet(){
    console.log("Hello"); //Hello
}