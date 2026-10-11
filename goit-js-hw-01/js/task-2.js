function getShippingMessage(country, price, deliveryFee) {
    totalPrice = price + deliveryFee;
    const sum = (`Shipping to ${country} will cost ${totalPrice} credits`);
    return sum;
}

console.log(getShippingMessage("Australia", 120, 50)); 
console.log(getShippingMessage("Germany", 80, 20)); 
console.log(getShippingMessage("Sweden", 100, 20));