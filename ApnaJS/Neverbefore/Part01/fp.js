// /*========================
// problem 01
// ==========================*/

// let x = 10;
// let y = 210;

// if (x > 5 && y < 25) {
//   console.log(`Yes ${x} is greater than 5 and ${y} is smaller than 25`);
// } else {
//   console.log("Something went wrong!");
// }

// /*========================
// problem 02
// ==========================*/

// let isAdmin = true;
// let isLoggedIn = true;

// if (isAdmin || isLoggedIn) {
//   console.log("Access granted!");
// } else {
//   console.log("Access denied!");
// }

// /*========================
// problem 03
// ==========================*/

// let temp = 35;

// if (!(temp > 30)) {
//   console.log("Not hot");
// } else {
//   console.log("Too hot");
// }

// /*========================
// problem 04
// ==========================*/

// let number = 0;
// if (number) {
//   console.log("Truthy");
// } else {
//   console.log("Falsey");
// }

// /*========================
// problem 05
// ==========================*/

// let mark = 95;

// let grade = mark >= 90 ? "A" : mark >= 70 ? "B" : mark >= 50 ? "C" : "F";
// console.log(grade);

// /*========================
// problem 06
// ==========================*/

// let isAccess = true;
// let isToken = true;

// let accessMessage = isAccess && isToken ? "Access granted!" : "Access denied!";
// console.log(accessMessage);

// /*========================
// problem 07
// ==========================*/

// let n = 10;
// let sum = n++ + ++n;
// console.log(sum);

// /*========================
// problem 08
// ==========================*/

// let likes = 100;

// function likePost() {
//   return ++likes;
// }
// console.log(likePost());
// console.log(likes);

// /*========================
// problem 09
// ==========================*/

// let count = 5;
// let matched = "Matched";
// let Unmatched = "Not Matched";

// if (count-- === 5) {
//   console.log(matched);
// } else {
//   console.log(Unmatched);
// }

// /*========================
// problem 10
// ==========================*/

/*
function rps(user, computer) {
  if (user === computer) return "It's a tie!";

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  )
    return "You win!";
  else {
    return "Computer Win";
  }
}
console.log(rps("rock", "scissors"));
*/

// /*========================
// problem 11 1-10
// ==========================*/

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// /*========================
// problem 11 10-1
// ==========================*/

// let number = 10;
// while (number >= 1) {
//   console.log(number);
//   number--;
// }

// /*========================
// problem 11 even
// ==========================*/

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// /*========================
// problem 12 odd
// ==========================*/

// let number = 1;
// while (number <= 15) {
//   if (number % 2 === 1) {
//     console.log(number);
//   }
//   number++;
// }

// /*========================
// problem 13 odd
// ==========================*/

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 X ${i} = ` + 5 * i);
// }

// /*========================
// problem 13 odd
// ==========================*/

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// /*========================
// problem 13 odd
// ==========================*/

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// /*========================
// problem 13 odd
// ==========================*/

// let numberOfUser = 34;

// for (let i = 1; i <= numberOfUser; i++) {
//   if (numberOfUser % 2 === 0) {
//     console.log(`User ${i} is even`);
//   } else {
//     console.log(`User ${i} is odd`);
//   }
// }

// /*========================
// problem 13 odd
// ==========================*/

// for (let i = 1; i <= 105; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//     break;
//   }
// }
// window.location.href = "https://www.google.com";

/* ============================================
What is the difference between function declration and expression  in terms of hoisting?
============================================= */

// // Declration can be hoitinig
// hoisting();
// function hoisting() {}

// // Expression can't be hoisting
// greet();
// let greet = function () {};

// function add(a, b, c) {
//   return a + b + c;
// }
// let sum = add(12, 12, 12);
// console.log(sum);

// function getScore(...scores) {
//   let total = 0;
//   scores.forEach(function (val) {
//     total += val;
//   });
//   return total;
// }
// let total = getScore(12, 3, 4);
// console.log(total);

// let outer = function () {
//   let counter = 0;
//   return function inner() {
//     counter++;
//     console.log(counter);
//   };
// };
// const increment = outer();
// increment();
// increment();
// increment();

// (function () {
//   let score = 0;
//   return {
//     getScore: function () {
//       console.log(score);
//     },
//     setScore: function (val) {
//       score = val;
//     },
//   };
// })();

// function discount(discount) {
//   return function (price) {
//     return price - price * (discount / 100);
//   };
// }
// let tenPercentDiscount = discount(10);
// console.log(tenPercentDiscount(100));

// let fruit = ["apple", "banana", "orange"];

// fruit.pop();
// fruit.push("grape");
// console.log(fruit);

// let toys = ["car", "doll", "puzzle"];
// toys.forEach(function (toy) {
//   console.log(toy);
// });

// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map((num) => {
//   return num * 2;
// });
// console.log(doubled);

// let ages = [18, 22, 15, 30, 25];

// let adults = ages.filter((age) => {
//   return age >= 18;
// });
// console.log(adults);

// let marks = [85, 92, 78, 90, 88];
// let odd = marks.filter((mark) => {
//   return mark % 2 === 1;
// });
// console.log(odd);

// let finds = [1, 2, 3, 4, 5];
// let firstEven = finds.find((num) => {
//   return num % 2 === 0;
// });
// console.log(firstEven);

// let sum = [1, 2, 3, 4, 5].reduce((acc, num) => {
//   return acc + num;
// }, 0);
// console.log(sum);

// let counts = [12, 34, 5, 67, 64, 33, 23, 45, 43];
// let total = counts.reduce((total, count) => {
//   return total + count;
// }, 0);
// console.log(total);

// let colors = ["Blue", "Red", "Green", "White", "Pink"];

// // let [first, second] = colors;
// // console.log(first, second);

// let findRed = colors.map((color) => {
//   if (color === "Blue") return color;
// });
// console.log(findRed);

// let fruits = ["apple", "banana", "grape", "cherry", "apple", "banana"];

// let count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});
// console.log(count);

let products = [
  {
    id: "sk001",
    name: "Iphone 17 Pro Max",
    price: 167000,
    stock: 11,
    category: "phone",
  },
  {
    id: "sku002",
    name: "Macbook Neo",
    price: 840000,
    stock: 20,
    category: "laptop",
  },
  {
    id: "sk003",
    name: "Ipad Gen 6",
    price: 70000,
    stock: 25,
    category: "ipad",
  },
  {
    id: "sku004",
    name: "Apple Series 7",
    price: 67000,
    stock: 30,
    category: "watch",
  },
  {
    id: "sku005",
    name: "Airpods 4",
    price: 25000,
    stock: 50,
    category: "earbuds",
  },
];

// products.forEach((product) => {
//   product.id === "sk003" ? console.log(product) : ""; 
// });
// products.map((product) => {
//   return product.id === "sk003" ? console.log(product) : "";
// });

// let find = products.find((product) => {
//   return product.id === "sk003";
// });
// console.log(find);

let { name, price } = products[1];
