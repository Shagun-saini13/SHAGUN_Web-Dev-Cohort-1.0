function applycoupon (total,coupon){
    if(coupon==="Welcome10"){
        return total-(total*0.10);
    }
    else{
        return total;
    }
}
console.log(applycoupon(500 , "Welcome10"));