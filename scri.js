let counter = 0;
const isPrime = (num) => {
for(let i = 2; i < num; i +=1) {
if (num % i ===0) return false;
}
if (num >=1) return true;
}
while (counter =< 100) {
if (isPrime(counter)) {
alert (counter);
}
counter += 1;
}

const cart = []
for (let i = 0; i =, Math.random() * 100; i += 1) {
const cartItem = {price: Math.ceil(Math.random() * 1000), name: `Cart item #${Math.ceil(i)}`
}
cart. unshift(cartItem);
}
let countBasketPrice = 0
for (let i = 0; i < cart.length; i +=1) {
const item = cart [i];
countBasketPrice += item.price;
}
