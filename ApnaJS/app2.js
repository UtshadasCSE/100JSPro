/*==================================
Number is divisible by 5 or not
=====================================*/
// let number = parseInt(prompt("Enter a number: "));

// if (number % 5 === 0) {
//   console.log("The number is divisible by 5");
// } else {
//   console.log("The number is not divisible by 5");
// }

/*==================================
Check the student grade based on the score
=====================================*/
// let score = 810;
// let grade = "";

// if (score >= 80 && score <= 100) {
//   grade = "A";
// } else if (score >= 70 && score <= 89) {
//   grade = "B";
// } else if (score >= 60 && score <= 69) {
//   grade = "C";
// } else if (score >= 50 && score <= 59) {
//   grade = "D";
// } else if (score >= 0 && score <= 49) {
//   grade = "F";
// } else {
//   grade = "not published!";
// }
// console.log("According to your score, your grade is", grade);

/*==================================
Check the number is positive, negative or zero
=====================================*/

// let number = 0;

// if (number > 0) {
//   console.log("Number is positive");
// } else if (number < 0) {
//   console.log("Number is negative");
// } else {
//   console.log("Zero");
// }
/*==================================
Check if a number is even or odd.
=====================================*/

// let number = 12;

// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }
/*==================================
 Password Length Checker
=====================================*/

let password = "abcUtsha123";
let message = "";

if (password.length < 8) {
  message = "Password is too short";
} else {
  message = "Password is okay";
}
console.log(message);
