/*
For:

getTotalByCategory(orders, "electronics");

Expected:

63300

This time, use filter() + reduce().
 */

function getTotalByCategory(orders, category) {
    return  orders
            .filter((order)=> {
                return order.category === category;
            })
            .reduce((acc , order)=> {
                return acc + order.amount;
            },0);
}

const orders = [
    { product: "Laptop", category: "electronics", amount: 60000 },
    { product: "Mouse", category: "electronics", amount: 800 },
    { product: "Shirt", category: "clothing", amount: 1500 },
    { product: "Keyboard", category: "electronics", amount: 2500 },
    { product: "Jeans", category: "clothing", amount: 2000 }
];
const result = getTotalByCategory(orders, "electronics");
console.log(result)