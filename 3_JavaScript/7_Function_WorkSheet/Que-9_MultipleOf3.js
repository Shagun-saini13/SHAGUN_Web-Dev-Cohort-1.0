/* 9. Write a function that takes a number as input and determines if it is a multiple of 3*/
let Multiple = (num)=>{
    if(num%3===0){
        console.log(`${num} is multiple of 3`);
    }
    else{
        console.log(`${num} is not a multiple of 3`);
    }
}
Multiple(19);