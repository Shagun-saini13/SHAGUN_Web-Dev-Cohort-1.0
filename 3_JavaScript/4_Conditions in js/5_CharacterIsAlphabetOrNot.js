let a = "b";
let ascii = a.charCodeAt(0);
if((ascii>=65 && ascii<=90) || (ascii>=97 && ascii<=122)){
    console.log("Its an Alphabet");
}
else{
    console.log("Its not an Alphabet");
}