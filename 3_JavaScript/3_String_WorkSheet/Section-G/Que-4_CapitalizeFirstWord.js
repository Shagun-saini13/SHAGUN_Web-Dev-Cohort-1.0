//Capitalize the first letter of each word in a sentence. 
let str = "javascript is awesome";
let string = str.toLowerCase();
let array = string.split(" ");

for(let i=0 ; i<array.length ; i++){
    array[i]=array[i].substring(0,1).toUpperCase() + array[i].substring(1);
}
console.log(array);
console.log(array.join(""));
