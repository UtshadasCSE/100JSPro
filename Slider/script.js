const cardData = [
  {
    image: "https://picsum.photos/400/300?1",
    title: "Mountain",
    category: "Travel",
    button: "Explore",
  },
  {
    image: "https://picsum.photos/400/300?2",
    title: "Food",
    category: "Lifestyle",
    button: "Read",
  },
  {
    image: "https://picsum.photos/400/300?3",
    title: "Tech",
    category: "Technology",
    button: "Discover",
  },
  {
    image: "https://picsum.photos/400/300?4",
    title: "Business",
    category: "Finance",
    button: "Learn",
  },
  {
    image: "https://picsum.photos/400/300?5",
    title: "Design",
    category: "Creative",
    button: "View",
  },
  {
    image: "https://picsum.photos/400/300?6",
    title: "Fitness",
    category: "Health",
    button: "Start",
  },
];

const slider = document.querySelector(".slider");
const visibleCards = 3;

// 1️⃣ Create original cards
cardData.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${item.image}">
    <div class="content">
      <div class="category">${item.category}</div>
      <div class="title">${item.title}</div>
      <button>${item.button}</button>
    </div>
  `;

  slider.appendChild(card);
});

// 2️⃣ Clone first 3 and last 3 cards

const cards = document.querySelectorAll(".card");

for (let i = 0; i < visibleCards; i++) {
  const firstClone = cards[i].cloneNode(true);
  slider.appendChild(firstClone);

  const lastClone = cards[cards.length - 1 - i].cloneNode(true);
  slider.insertBefore(lastClone, slider.firstChild);
}

const allCards = document.querySelectorAll(".card");

let index = visibleCards;
const cardWidth = allCards[0].clientWidth + 20;

// Start position
slider.style.transform = `translateX(-${cardWidth * index}px)`;

// 3️⃣ Navigation

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => {
  index++;
  slider.style.transition = "transform 0.5s ease";
  slider.style.transform = `translateX(-${cardWidth * index}px)`;
});

prevBtn.addEventListener("click", () => {
  index--;
  slider.style.transition = "transform 0.5s ease";
  slider.style.transform = `translateX(-${cardWidth * index}px)`;
});

// 4️⃣ Infinite Reset

slider.addEventListener("transitionend", () => {
  if (index >= cardData.length + visibleCards) {
    slider.style.transition = "none";
    index = visibleCards;
    slider.style.transform = `translateX(-${cardWidth * index}px)`;
  }

  if (index <= 0) {
    slider.style.transition = "none";
    index = cardData.length;
    slider.style.transform = `translateX(-${cardWidth * index}px)`;
  }
});
