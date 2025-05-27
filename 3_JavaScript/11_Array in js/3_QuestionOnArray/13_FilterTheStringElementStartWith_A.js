arr=[2,7,"hlo","Alpha Intern",6,"hii","Apple","AirForce",4,"Army"];
const b=arr.filter(str=>typeof str==="string" && str.startsWith("A"));
console.log(b);