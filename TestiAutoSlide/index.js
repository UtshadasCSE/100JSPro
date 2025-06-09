const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".name");

const testimonials = [
  {
    name: "Jhone Doe",
    photoUrl: "./assets/2.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "Jane Smith",
    photoUrl: "./assets/1.png",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Alice Johnson",
    photoUrl: "./assets/2.png",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Bob Brown",
    photoUrl: "./assets/1.png",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

let currentIndex = 0;
updateTestimonial();
function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[currentIndex];
  imgEl.src = photoUrl;
  textEl.textContent = text;
  nameEl.textContent = name;
  currentIndex++;
  if (currentIndex === testimonials.length) {
    currentIndex = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 1000);
}
