/*Q7. Create a function called operate that takes two numbers and a function. It should
return the result of the function applied to the numbers*/

function Operate(a, b, operation) {
  return operation(a, b);
}

function multiply(a, b) {
  return a * b;
}

console.log(Operate(7, 7, multiply));