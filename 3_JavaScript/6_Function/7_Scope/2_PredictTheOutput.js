//1.
// let a=4; // Global Scope
// function print(){
//     console.log(a); //4
// }
//print();

//2.
// let b=4;
// function fun(){
//     let b=5; // redeclaration is possible in another scope
//     console.log(b); //5
// }
// fun();

//3.
let c=100;
function App(){
    //console.log("1",c); // Reference Error- Cannot access 'c' before initialization

    let c=42;
    console.log("2",c); // 2 42
    {
        let c = 100;
    }
    console.log("3",c); //3 42
}
App();

//4.
if(true){
    let z=2;
}
console.log(z); // ReferenceError: z is not defined