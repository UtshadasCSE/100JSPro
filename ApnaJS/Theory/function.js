/*==================================================
Question

Create a function that takes a string and returns the number of vowels.
================================================*/

// function countVowels(str) {
//   let conunt = 0;
//   let vowels = "aeiouAEIOU";

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       conunt++;
//     }
//   }
//   return conunt;
// }

// console.log(countVowels("Hello Methow"));

// function countVowels(str) {
//   if (!str || typeof str !== "string") return 0;

//   const vowels = "aeiou";
//   let count = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) count++;
//   }

//   return count;
// }

// console.log(countVowels("Shradha Khapra"));

/*==================================================
Question

Given array of numbers, print square of each.
================================================*/

// let numbers = [1, 2, 3, 4, 5];

// const printSquares = (arr) => {
//   if (!Array.isArray(arr)) return;

//   arr.forEach((num) => {
//     console.log(num ** 2);
//   });
// };
// printSquares(numbers);

/*==================================================
Question

Given marks array, return students who scored 90+.
================================================*/

let students = [
  { name: "Zihan", marks: 93 },
  { name: "Goni", marks: 95 },
  { name: "Elly", marks: 80 },
  { name: "Monica", marks: 50 },
  { name: "Mia", marks: 99 },
  { name: "Jhonny", marks: 80 },
  { name: "Ethan", marks: 70 },
];

let toppers = students.filter((student) => student.marks >= 90);

for (let mark of toppers) {
  console.log(mark.marks);
}
