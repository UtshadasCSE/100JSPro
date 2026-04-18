/* ====================== 
Element Selection
====================== */
const dropDown = document.getElementById("dropDown");
const dropDownItems = dropDown?.querySelector(".dropDown-items");
const dropIcon = dropDown?.querySelector(".fa-caret-down");

const mobileMenuBtn = document.getElementById("menuHam");
const menuItems = document.querySelector(".mobile-menu");
const header = document.querySelector(".header");

const pricingContainer = document.querySelector(".pricing-container");

/* ====================== 
Pricing Data
====================== */
const pricingData = [
  {
    title: "Starter",
    desc: "Ideal for freelancers and contractors just starting out.",
    price: 24,
    popular: false,
    features: [
      "All Templates",
      "Unlimited Clients & Projects",
      "Invoicing & Payments",
      "Proposals & Contracts",
      "Client CRM",
      "Expense Tracking",
      "Up to 5 Project Collaborators",
    ],
  },
  {
    title: "Professional",
    desc: "Everything a growing independent business needs to thrive.",
    price: 39,
    popular: true,
    features: [
      "Everything in Starter plus...",
      "Custom Branding",
      "Forms & Questionnaires",
      "Workflow Automations",
      "Client Portal",
      "QuickBooks Integration",
      "Calendly Integration",
      "Zapier Integration",
      "Up to 15 Project Collaborators",
    ],
  },
  {
    title: "Business",
    desc: "Perfect package for small businesses and agencies.",
    price: 79,
    popular: false,
    features: [
      "Everything in Starter and Professional plus...",
      "Subcontractor Management",
      "Hiring Agreement Templates",
      "Subcontractor Onboarding",
      "Talent Pool",
      "3 Team Seats",
      "Accountant Access",
      "Multiple Bank Accounts",
      "Unlimited Collaborators",
    ],
  },
];

/* ====================== 
Header JS
====================== */

// Dropdown hover
if (dropDown && dropDownItems && dropIcon) {
  dropDown.addEventListener("mouseenter", () => {
    dropDownItems.classList.add("active");
    dropIcon.classList.add("active");
  });

  dropDown.addEventListener("mouseleave", () => {
    dropDownItems.classList.remove("active");
    dropIcon.classList.remove("active");
  });
}

// Mobile menu toggle
if (mobileMenuBtn && menuItems && header) {
  mobileMenuBtn.addEventListener("click", () => {
    menuItems.classList.toggle("active");
    header.classList.toggle("active");
  });
}

/* ====================== 
Pricing JS
====================== */

function createPricingCard(data) {
  const card = document.createElement("div");
  card.classList.add("pricing-card");

  const badge = data.popular ? `<div class="badge">MOST POPULAR</div>` : "";

  const featuresHTML = data.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");

  card.innerHTML = `
    ${badge}
    <div class="card-content">
      <h3>${data.title}</h3>
      <p class="desc">${data.desc}</p>
      <div class="price">$${data.price} <span>/month</span></div>
      <ul class="features">${featuresHTML}</ul>
    </div>
    <a href="#" class="btn">START FREE</a>
  `;

  return card;
}

// Render pricing cards
if (pricingContainer) {
  pricingData.forEach((plan) => {
    pricingContainer.appendChild(createPricingCard(plan));
  });
}
 