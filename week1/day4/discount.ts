interface product  {
    name :string;
    price : number;
    instock : boolean;
}
function applyDiscount(product : product){
    const discountprce = product.price * 0.7;
    return product.name;
   
}