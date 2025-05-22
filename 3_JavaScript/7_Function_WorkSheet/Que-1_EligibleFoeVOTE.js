/*1. Write a function that takes person age as a number as input and determines, person
are eligible or not for voting. */
function EligibleForVote(age){
    if(age>=18){
        console.log("You can vote");
    }
    else{
        console.log("You are too young to vote");
    }
}
EligibleForVote(18);