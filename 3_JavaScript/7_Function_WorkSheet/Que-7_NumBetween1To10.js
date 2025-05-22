/* 7. Write a function that takes a number as input and determines if it is between 1 and 
10 */
let Number =(num)=>{
    if(num>=1 && num<=10){
        console.log(`${num} is between 1 and 10`);
    }
    else{
        console.log(`${num} is not between 1 and 10`);
    }
}
Number(11);