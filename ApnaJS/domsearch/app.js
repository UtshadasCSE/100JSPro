const searchField = document.getElementById("searchField");
const products = document.querySelectorAll(".product");

searchField.addEventListener("input", () => {
  const value = searchField.value.toLowerCase();
  products.forEach((product) => {
    const text = product.textContent.toLowerCase();
    if (text.includes(value)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
