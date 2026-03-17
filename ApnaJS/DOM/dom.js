const foods = ["Pizza", "Burger", "Sushi", "Pasta"];

foods.forEach((food) => {
  console.log(food + " is my first choice!");
});

const numbers = [1, 2, 3, 4, 5];

const sqNumbers = numbers.map((num) => {
  return num * num;
});
console.log(sqNumbers);

const things = ["desk", 5, "chair", "table", true, "clock", 2, null];

const numFill = things.filter((thing) => {
  return typeof thing === "number";
});
console.log(numFill);

const jumbledNums = [123, 25, 78, 5, 2];

const lessThanTen = jumbledNums.findIndex((num) => {
  return num < 10;
});
console.log(lessThanTen);
