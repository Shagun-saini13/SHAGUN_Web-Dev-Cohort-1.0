const greet=(name,callback)=>{
    console.log("hii "+ name);
    callback()
}
saybyee=()=>{
    console.log("Good Bye");
}
greet("alia",saybyee);