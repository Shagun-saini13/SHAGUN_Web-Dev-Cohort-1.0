// if amount>=500 return 0 (Free Delievery)
// if amount<500 return 50
function GetDelieveryCharges (amount){
    if(amount>=500){
        return 0;
    }
    else{
        return 50;
    }
}
console.log(GetDelieveryCharges(600));