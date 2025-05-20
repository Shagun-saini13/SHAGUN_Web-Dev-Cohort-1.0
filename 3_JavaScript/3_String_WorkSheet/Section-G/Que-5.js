/* Write a function that takes a string input and returns the number of times "Alpha" appears 
using replaceAll() and length. */

function count(inputString) {
  const modifiedString = inputString.replaceAll('Alpha', '');
  console.log(modifiedString.length)
  const count = (inputString.length - modifiedString.length) / 'Alpha'.length;
  
  return count;
}

const String = "Alpha Intern Alpha Intern Alpha Intern";
console.log(String.length);
const result = count(String);
console.log(`'Alpha' appears ${result} times.`);
