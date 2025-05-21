let s1=5;
let s2 = 7;
let s3 = 6;

if(s1==s2 && s2==s3){
    console.log("Its an Equilateral Triangle");
}
else if(s1==s2 || s1==s3 || s2 ==s3){
    console.log("it's a Isosceles Triangle");
}
else{
    console.log("it's a Scalene Triangle");
}