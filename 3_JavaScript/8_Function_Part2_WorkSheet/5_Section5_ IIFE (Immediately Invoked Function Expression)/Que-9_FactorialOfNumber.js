/*Q9. Write an IIFE that takes a number and logs its factorial*/
(function Fact(num){
    let fact=1;
    for(let i=num ; i>=1 ; i--){
        fact*=i;
    }
    console.log(`Facorial of ${num} is ${fact}`);
})(5);
//Fact(5);