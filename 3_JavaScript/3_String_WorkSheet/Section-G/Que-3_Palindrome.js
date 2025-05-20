//Check whether a given string is a palindrome or not. 
let str = "refer";
let reverse = str.split("").reverse().join("");

if(str==reverse){
    console.log(`${str} is a Palindrome`);
}
else{
    console.log(`${str} is not a Palindrome`);
}