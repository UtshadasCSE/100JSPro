setTimeout(() => {
  console.log("Hello, World!");
}, 2000);

let count = 10;

let interval = setInterval(() => {
  if (count >= 1) {
    count--;
    console.log(count);
  } else {
    clearInterval(interval);
  }
}, 1000);
