function getShippingCost(country) {
    const def = "Sorry, there is no delivery to your country";
    let result = 0;
    switch (country) {
        case 'China':
            result = `Shipping to ${country} will cost 100 credits`;
            return result;
            break;
        case 'Chile':
            result = `Shipping to ${country} will cost 250 credits`;
            return result;
            break;
        case 'Australia':
            result = `Shipping to ${country} will cost 170 credits`;
            return result;
            break;
        case 'Jamaica':
            result = `Shipping to ${country} will cost 120 credits`;
            return result;
            break;
        default:
            return def;
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"