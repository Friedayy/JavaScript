/*
For example:

getCategoryTotal(products, "electronics");

should return:

{
    category: "electronics",
    totalItems: 9,
    totalRevenue: 121000
}
 */

function getCategoryTotal(products, category) {
    return products
    .filter((product)=> {
        return  product.category === category ;
    })
    .reduce((acc, product) => {
            acc.totalItems += product.quantity;
            acc.totalRevenue += product.price * product.quantity;

            return acc;
        }, {
            totalItems: 0,
            totalRevenue: 0
        });
}

const products = [
    { name: "Laptop", category: "electronics", price: 60000, quantity: 2 },
    { name: "Mouse", category: "electronics", price: 800, quantity: 5 },
    { name: "Shirt", category: "clothing", price: 1500, quantity: 3 },
    { name: "Keyboard", category: "electronics", price: 2500, quantity: 2 },
    { name: "Jeans", category: "clothing", price: 2000, quantity: 2 }
];

const result = getCategoryTotal(products, "electronics");
console.log(result);
