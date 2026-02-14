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

function countVowels(str) {
  if (!str || typeof str !== "string") return 0;

  const vowels = "aeiou";
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }

  return count;
}

console.log(countVowels("Shradha Khapra"));
