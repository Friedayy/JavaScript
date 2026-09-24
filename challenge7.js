function getCartTotal(cart) {
    const total = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);
    return total;
}

const cart = [
    { name: "Laptop", price: 60000, quantity: 1 },
    { name: "Mouse", price: 800, quantity: 2 },
    { name: "Keyboard", price: 2500, quantity: 1 }
];

const result = getCartTotal(cart);
console.log(result)