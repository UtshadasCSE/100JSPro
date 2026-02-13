// let x = 20;
// if (x > 10) {
//   console.log("Hello World");
// }

// const a = 4;

// // Global scope
// var carName = "Volvo";

// function myFunction() {
//   console.log(carName);
// }
// myFunction();

// const Is_status = true;

// if (Is_status) {
//   let message = "Hello World is true";
//   console.log(message);
// }
// console.log(message);

// function greet(firstName, lastName) {
//   return `Hello ${firstName} ${lastName}!`;
// }

// console.log(greet("John", "Doe")); // Output: Hello John Doe!

// function f1(x) {
//   function f2(y) {
//     return x * y;
//   }
//   return f2;
// }

// let result = f1(5);
// console.log(result(2));

// function display(result) {
//   console.log(result);
// }

// function sum(a, b, callBack) {
//   let result = a + b;
//   callBack(result);
// }
// sum(5, 10, display);

// function sameCase(a, b) {
//   if (a.toLowerCase() === a.toUpperCase()) {
//     return -1;
//   }
//   if (b.toLowerCase() === b.toUpperCase()) {
//     return -1;
//   }
// }

// const productName = "Apple iPhone 13 Pro Max (256GB) - Sierra Blue";
// const price = 1299.99;
// const inStock = true;

// const color = ["Sierra Blue", "Graphite", "Gold", "Silver"];

// const product = {
//   name: "Apple iPhone 13 Pro Max",
//   storage: "256GB",
//   price: 1299.99,
//   inStock: true,
//   colors: ["Sierra Blue", "Graphite", "Gold", "Silver"],
//   getPrice: function () {
//     return this.price;
//   },
// };
// const badge = ["New", "Hot", "Sale"];
// product.badge = badge;
// console.log(product);
// console.log(product.getPrice());

function Product(title, price, inStock) {
  this.title = title;
  this.price = price;
  this.inStock = inStock;

  this.inStockStatus = function () {
    return this.inStock > 0;
  };
  this.getPrice = function () {
    return this.price;
  };
}

const Iphone = new Product("iPhone 13 Pro Max", 1299.99, 50);
console.log(Iphone);
console.log(Iphone.inStockStatus());
console.log(Iphone.getPrice());
