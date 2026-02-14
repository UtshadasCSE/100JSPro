// for (let i = 0; i < 10; i++) {
//   console.log("Hello world!");
// }

// let products = ["laptop", "phone", "tablet"];

// for (let i = 0; i < products.length; i++) {
//   console.log(  products[i], i);
// }

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// for (let i = 1; i >= 0; i++) {
//   console.log(i);
// }
// let i = 1;

// while (i < 10) {
//   console.log("1X" + i + "=" + i * 1);
//   i++;
// }

// let i = 20;
// do {
//   console.log("Hello world!");
// } while (i <= 10);

// let namee = "thegymshirk";

// for (let ch of namee) {
//   console.log(ch);
// }

// let products = ["Iphone", "Laptop", "Charger", "Shoes", "Ipad", "Macbook"];

// for (let item of products) {
//   console.log(item);
// }

let products = [
  { title: "Iphone 16 pro max", price: 999 },
  { title: "Macbook Air", price: 1200 },
  { title: "Ipad Gen 3", price: 600 },
  { title: "Airpod 3", price: 400 },
];

for (let product of products) {
  console.log(product.title);
}

let total = 0;
for (let product of products) {
  total += product.price;
}

console.log(total);
