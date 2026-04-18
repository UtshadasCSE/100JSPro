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

let sum = 0;
for (let i = 1; i <= 100; i++) {}
