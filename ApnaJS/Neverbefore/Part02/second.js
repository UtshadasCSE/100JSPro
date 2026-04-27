// Dom manipulation

let dom = document.querySelector("h2");
dom.innerHTML = `<p>Bangladesh</p>`;
dom.hidden = true;
let a = document.querySelector("a");
a.setAttribute("href", "https://utshafiya.shop");

let image = document.querySelector("img");
image.setAttribute(
  "src",
  "https://img.freepik.com/free-photo/beautiful-lake-mountains_395237-44.jpg?semt=ais_hybrid&w=740&q=80",
);
console.log(a.getAttribute("href"));
a.removeAttribute("href");

let button = document.createElement("button");
button.textContent = "Shop Now";
console.dir(button);
document.querySelector("body").prepend(button);

let container = document.querySelector(".container");

let h4 = document.createElement("h4");
h4.textContent = "I am from DOM";
h4.style.color = "red";

container.appendChild(h4);

let headings = document.querySelectorAll("h4");
headings.forEach((heading) => {
  heading.classList.toggle("color");
});

let buyNow = document.querySelectorAll(".buy-now");
console.log(buyNow);

let allHeading = document.querySelectorAll("h4");
allHeading.forEach((heading) => {
  console.log(heading.textContent);
});
