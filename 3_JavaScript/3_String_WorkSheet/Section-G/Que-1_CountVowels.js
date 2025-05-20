//Count vowels in a given string using includes() or any string method.
let str = "alphaintern";
let count=0;
let vowel = ["a","e","i","o","u"];

for(let i=0 ; i<str.length ; i++){
    //let a=str[i]
    if(vowel.includes(str[i])){
        count++;
    }
}
console.log(`Total Vowels in ${str} is ${count}`);