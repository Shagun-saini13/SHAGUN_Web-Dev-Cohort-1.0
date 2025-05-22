/* 8. Write a function that takes a string as input and determines if it contains the word 
"hello */
let String=(str)=>{
    if(str.includes("hello")){
        console.log(`Yes, ${str} contains hello`);
    }
    else{
        console.log(`No, ${str} does not contains the word hello`);
    }
}
String("helloWorld");