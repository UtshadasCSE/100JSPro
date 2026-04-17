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

function checkGrade(mark) {
  if (mark >= 90 && mark <= 100) return "A+";
  if (mark >= 80 && mark <= 89) return "A";
  if (mark >= 70 && mark <= 79) return "B";
  if (mark >= 60 && mark <= 69) return "C";

  return "MF try hard! Next time";
}
console.log(checkGrade(22));
