function calculate (a,b,operation){
    return operation(a,b)
}
let add=(a,b)=>{
    return a+b
}
let sub=(a,b)=>a-b

let mul=(a,b)=>a*b

let divide=(a,b)=>a/b

console.log (calculate (10,5,mul));