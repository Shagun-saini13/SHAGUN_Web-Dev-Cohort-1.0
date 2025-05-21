let n  = 21;
if(n<=1){
    console.log(`${n} is neither prime nor composite`);
}
else if(n==2){
    console.log(`${n} is a prime number`);
}
else{
    let isprime = true; 
    for(let i=2 ; i<n ; i++){
        if(n%i == 0){
            isprime = false;
            break;
        }
    }
    if(isprime==true){
    console.log(`${n} is a prime number`)
    }
    else{
        console.log(`${n} is a composite number`)
    }
}
