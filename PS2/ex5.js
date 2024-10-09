let data = "jajka, mleko, masło, chleb"

let array = []



let products = data.split(",")

console.log(products)

products.forEach((product) => {
    let price = Math.floor(Math.random() * 10 +1 ).toFixed(2)
    array.push({ product: product.trim() , price: price })
})

console.table(array)

let shoppingCart = []
let maxItems = Math.floor(array.length / 2)

for(let i=0; i<maxItems; i++)
{
    let random=Math.floor(Math.random() * array.length)
    let item = array[random]
    let quantity = Math.floor(Math.random() * 5 )+1
    shoppingCart.push({product: item.product,price: item.price, quantity: quantity})
    array.splice(random,1)
}

let totalPrice = shoppingCart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);

console.table(shoppingCart);
console.log(totalPrice.toFixed(2));