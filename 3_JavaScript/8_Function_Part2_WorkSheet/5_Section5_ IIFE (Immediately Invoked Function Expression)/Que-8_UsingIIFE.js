/*Q8. Write an IIFE that prints "IIFE executed!" to the console*/
// let Print=(()=>{console.log("IIFE Executed!");})();
// Print();
let Print=(function(){
    console.log("IIFE Executed!");
})();