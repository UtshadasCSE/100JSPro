const products = [
  { id: 1, name: "Laptop", price: 1200, stock: 5 },
  { id: 2, name: "Mouse", price: 25, stock: 0 },
  { id: 3, name: "Keyboard", price: 75, stock: 10 },
  { id: 4, name: "Monitor", price: 300, stock: 3 },
];

products.forEach((product) => {
  console.log(`Title: ${product.name} and Price: ${product.price}`);
});

const productDetails = products.map((product) => {
  return { name: product.name, price: product.price };
});

const availableProducts = products.filter((product) => {
  return product.stock > 0;
});

console.log(productDetails);
console.log(availableProducts);
