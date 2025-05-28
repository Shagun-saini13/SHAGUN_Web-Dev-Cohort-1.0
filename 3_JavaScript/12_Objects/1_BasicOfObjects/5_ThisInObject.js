//This -> this is used in a function to access value of key in respective object in which function is present.
const Employee={
    name:"Sahil",
    age:32,
    job:"SE",
    greet:function(){console.log(this.name)}
}
Employee.greet();