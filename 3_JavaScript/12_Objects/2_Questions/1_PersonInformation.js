const person={
    name:"Alia",
    age:30
}
function Update(personobj,newage){
    personobj.age=newage;
}
Update(person,20);
console.log(person)