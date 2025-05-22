/*3. Write a function that takes a number as input and determines if it is positive or
negative.*/
let PositiveNegative=(a)=>{
    if(a>0){
        console.log(`${a} is a positive number`);
    }
    else if(a<0){
        console.log(`${a} is a Negative number`);
    }
    else{
        console.log(`${a} is Zero`);
    }
}
PositiveNegative(-9);