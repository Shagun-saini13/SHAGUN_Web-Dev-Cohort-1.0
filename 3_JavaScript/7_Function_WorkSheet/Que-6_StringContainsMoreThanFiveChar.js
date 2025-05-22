/* 6. Write a function that takes a string as input and determines if it is longer than 5 
characters */

let Length=(str)=>{
    if(str.length>5){
        console.log(`${str} is longer than 5 Characters`);
    }
    else{
     console.log(`${str} is shorter than or equal to 5 Characters`);   
    }
}
Length("helloo");