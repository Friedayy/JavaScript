/*
Requirements
Return the names of products that:
1. Are in stock
2. Have a price less than ₹20,000
Expected output:
["Mouse", "Monitor"]

Rules
You must use:
- .filter()
- .map()
- Arrow functions
- No for loop
 */
function getAvailableProducts(products) {
    return products
    .filter((user)=>{
        return user.price< 20000 && user.inStock===true;
    })
    .map((user)=> {
        return user.name;
    });
    
}

const products = [
    { name: "Laptop", price: 60000, inStock: true },
    { name: "Mouse", price: 800, inStock: true },
    { name: "Keyboard", price: 2500, inStock: false },
    { name: "Monitor", price: 15000, inStock: true },
    { name: "Headphones", price: 3000, inStock: false }
];

const result = getAvailableProducts(products);

console.log(result);
