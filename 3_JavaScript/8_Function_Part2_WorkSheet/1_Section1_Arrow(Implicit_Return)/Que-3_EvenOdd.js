/**Q3. Create a one-liner arrow function that returns "Even" if a number is divisible by 2,
else returns "Odd".*/
let EvenOdd=num=>{
    if(num%2===0) return `${num} is Even Number`;
    else return `${num} is Odd Number`;
}
console.log(EvenOdd(7));