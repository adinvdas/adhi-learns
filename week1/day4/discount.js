const product = {
    name : "Iphone",
    price : 1000,
    availability :true
}
function applyDiscount(product){
    
    const discountprice = (product.price) * 0.7;
    // console.log(discountprice);
    return{ name:product.name,
        price :+discountprice
};
}
console.log(applyDiscount(product));
