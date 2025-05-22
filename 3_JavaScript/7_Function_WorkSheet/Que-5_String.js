/*5. Write a function that takes a string as input and determines if it contains the letter 'a' 
or ‘A’. */
function String (str){
    if(str.includes("a")){
        console.log(`${str} contains a`);
    }
    else if (str.includes("A")){
        console.log(`${str} contains A`);
    }
    else{
        console.log(`${str} neither contain a nor A`);
    }
}
String("water");