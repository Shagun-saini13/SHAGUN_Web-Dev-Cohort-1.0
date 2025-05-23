function calculateDiscount (price){
    let discount = price*(20/100);
    return price-discount;
}
console.log(calculateDiscount(500));