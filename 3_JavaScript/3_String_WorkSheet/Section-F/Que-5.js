/*
Given a string: "JavaScript is Awesome", convert it to: 
a. All lowercase 
b. All uppercase 
c. Replace "Awesome" with "Powerful" 
d. Check if the string starts with "Java"  
*/
let str = "JavaScript is Awesome";
//Lowercase
console.log(str.toLowerCase());
//uppercase
console.log(str.toUpperCase());
//Replace
console.log(str.replace("Awesome","Powerful"));
//startwith
console.log(str.startsWith("java"));