let z = 1;
function flip(page) {
  page.classList.toggle("flipped");
  page.style.zIndex = z++;
}
