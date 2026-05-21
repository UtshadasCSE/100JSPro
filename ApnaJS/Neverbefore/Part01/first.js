/* ===========================
Variable 
============================== */

// Variable declare three way using

// 1. Var - backdated
// 2. Let - updated and Block scope
// 3. Const - not assignable secound time

/*

var b = 10;
var b = 20;

*/

/* =================================
Its called temporial dead zone = Means JS know variable exists but can't access
================================= */

/*

console.log(a);

let a = 10;

*/

/* =================================
Hoisting = JS move all variable and function declaration to top of the code
================================= */

// var -> hoist -> undefined
// let -> hoist -> X  ReferenceError
// const -> hoist -> X  ReferenceError

/*

console.log(ab);
var ab = 10;

*/

/*

console.log(ab);
let ab= 12;

*/

/*

console.log(number);
const number = 40;

*/

/*

console.log(name);
var name = "Dev";

*/

/*=================================
Global scope -> Local scope -> Block scope
================================== */

// Global scope

/*

var x = 13;

{
  var x = 20;
}

console.log(x);

*/

// Block scope + Global scope

/*

let y = 90;

{
  let y = 100;
  console.log("Inside y = ", y);
}
console.log("Outside y = ", y);
 */

/*================================
Data types 
================================= */

// Primitive data type -> String, Number, Boolean, Null, Undefined, Symbol
// Non-primitive(Reference) data type -> Object, Array, Function

/*

let a = 10;
let b = a;

a = a + b;
console.log(a);
console.log(b);

*/

/*

let a = [1, 2, 3];
let b = a;

a.push(4);
console.log(a);
console.log(b);

*/

// "" -> Double quote
// '' -> Single quote
// `` -> Backtick

// Symbol

/*

let person = {
  uid: 1,
  name: "Developer",
  address: "Dhaka, Bangladesh",
  age: 21,
};

let u1 = Symbol("uid");
person[u1] = 21;

console.log(person);
console.log(Number.MAX_SAFE_INTEGER);

*/

/* ===========================
Dynamic typing 
============================== */

// Type coresiance -> JS automatically convert one data type to another data type

/*

let a = 12;
a = "Developer";
a = true;
a = null;
a = undefined;
console.log(a);

*/

// console.log(!!null);

/* ===========================
Opeerator
============================== */

// Operator is a symbol that perform some operation on one or more operands and produce a result

// 1. Arithmetic operator -> +, -, *, /, %, ++, --
// 2. Assignment operator -> =, +=, -=, *=, /=, %=
// 3. Comparison operator -> ==, ===, !=, !==, >, <, >=, <=

// !=== Strict not equal to -> check value and data type both are not equal
//!== Loose not equal to -> check value is not equal but data type can be different

/*

console.log(12 === "12");
console.log(12 == "12");
console.log(12 != "12");
console.log(12 !== "12");
console.log(12 <= "12");
console.log(12 >= "12");

*/

/*

let a = 10;

a+3
a+3
console.log(a);

*/

// Logical operator -> &&, ||, !

/*

true && true; // true
true && false; // false
false && true; // false
false && false; // false
true || true; // true
true || false; // true
false || true; // true
false || false; // false
 true != false; // true
 true != true; // false

 */

/*

console.log(!!12);
console.log(+"12");

*/

/*

let a = 10;
console.log(++a);

13 > 12 ? console.log("true") : console.log("false");
console.log(typeof 12);
console.log(typeof null);
console.log(typeof NaN);

*/

/*

let a = 10;
let b = {};
let c = function () {};

console.log(a instanceof Array);
console.log(b instanceof Object);
console.log(c instanceof Function);

*/

/* ===========================
If else, else-if switch case and ternary operator
============================== */

/*

if (isLoggedIn && isAdmin) {
} else if (isLoggedIn && !isAdmin) {
} else {
}

*/

/*

function checkGrade(mark) {
  if (mark >= 90 && mark <= 100) return "A+";
  if (mark >= 80 && mark <= 89) return "A";
  if (mark >= 70 && mark <= 79) return "B";
  if (mark >= 60 && mark <= 69) return "C";

  return "MF try hard! Next time";
}
console.log(checkGrade(22));

*/

/* ===========================
Loop is a programming construct that allows you to repeat a block of code multiple times. There are three types of loops in JavaScript:

1. For loop
2. While loop
3. Do-while loop
=============================== */

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// /*

// start
// while(end){
//   CODE
// change condition
// }

// */

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let j = 10;
// do {
//   console.log(j);
//   j++;
// } while (j <= 6);

// let user = [
//   "Mirza",
//   "Dev",
//   "Rafi",
//   "Sabbir",
//   "Shuvo",
//   "Shakil",
//   "Sabbir",
//   "Shuvo",
//   "Shakil",
// ];

// for (let i = 0; i <= user.length - 1; i++) {
//   console.log(user[i]);
//   if (user[i] === "Dev") break;
// }

/*===========================

function reuse and modularity. There are three types of function in js

1. Function declaration
2. Function expression
3. Arrow function

============================= */

// function add(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }

//   return sum;
// }

// console.log(add(1, 2, 3, 4, 5));

// function hello(val) {
//   val();
// }
// const greet = hello(() => {
//   console.log("Hello");
// });

// function upper() {
//   let a = 10;
//   return function middle() {
//     let b = 20;
//     return function lower() {
//       let c = 30;
//       console.log(a, b, c);
//     };
//   };
// }
// let check = upper();
// console.log(check);

/* ===========================
Array is a data structure that can hold a collection of values. It is a special type 
of object that has a length property and a set of methods for manipulating the elements in the array.
====================================*/

// // Play with end of the array
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);

// // Play with start of the array
// arr.unshift(0);
// console.log(arr);
// arr.shift();
// console.log(arr);

/* ===========================
Splice method -> The splice() method is used to add or remove elements from an array. 
It takes three parameters: the starting index, the number of elements to remove, and the elements to add (optional). 
The method modifies the original array and returns an array containing the removed elements.
============================ */
// arr.splice(2, 2);
// console.log(arr);

/* ===========================
Slice method -> The slice() method is used to extract a portion of an array and return a new array.
It takes two parameters: the starting index and the ending index (optional). The method does not modify the original array.
============================ */
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(1, 3);
// console.log(newArr);

/* ===========================
Reverse method -> The reverse() method is used to reverse the order of the elements in an array. It modifies the original array and returns the reversed array.
============================ */
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

/* ===========================================
Sort method -> The sort() method is used to sort the elements of an array in place and returns the sorted array. 
By default, the sort() method sorts the elements as strings in alphabetical and ascending order. However, 
you can provide a compare function to specify a different sorting order.
============================================ */

// let arr = [5, 2, 9, 1, 5, 6];
// arr.sort((a, b) => a - b);
// console.log(arr);

/*==============================
forEach method -> The forEach() method is used to execute a provided function once for each array element. It does not return a new array and does not modify the original array.
=============================== */

// let arr = [11, 2, 32, 42, 5, 45, 12, 43];
// let newArr = [];
// arr.forEach((val) => {
//   newArr.push(val);
// });
// newArr.sort((a, b) => a - b);
// console.log(newArr);

/*======================
Map method -> The map() method is used to create a new array by applying a provided 
function to each element of the original array. It does not modify the original array. 
=============================*/

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((val) => val < 0);
// console.log(newArr);

/*======================
Filter method -> The filter() method is used to create a new array with all elements 
that pass the test implemented by the provided function. It does not modify the original array.
=============================*/

// let newArr2 = arr.filter((val) => {
//   if (val > 3) return true;
// });
// console.log(newArr2);

// /*======================
// Reduce method -> The reduce() method is used to apply a function against an accumulator and
//  each element in the array (from left to right) to reduce it to a single value. It does not modify the original array.
// =============================*/

// let sum = arr.reduce((acc, val) => acc + val, 0);
// console.log(sum);

// /*======================
// Find method -> The find() method is used to return the value of the
// first element in the array that satisfies the provided testing function. It does not modify the original array.
// =============================*/

// let findVal = arr.find((val) => val > 3);
// console.log(findVal);

/*======================
Destructuring assignment -> The destructuring assignment is a syntax that allows you to
unpack values from arrays or properties from objects into distinct variables. It provides a 
convenient way to extract data from complex structures and assign them to variables in a more concise and readable manner.
=============================*/

// Array destructuring
// let arr = [1, 2, 3, 4, 5];
// let [a, b] = arr;
// console.log(a, b);

/*======================
Array spread operator -> The spread operator is a syntax that allows you to expand an iterable (like an array or object) 
into individual elements. It is denoted by three dots (...). The spread operator can be used in various contexts, such 
as function calls, array literals, and object literals, to create new arrays or objects by combining existing 
ones or to pass elements as individual arguments to functions.
=============================*/

let marks = [85, 92, 78, 96, 88];
let allMarks = [...marks];
console.log(marks);

console.log(allMarks);
