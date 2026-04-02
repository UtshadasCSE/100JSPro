const menuBtn = document.getElementById("menu");
const mobileHeader = document.querySelector(".mobile-header");
const logo = document.querySelector(".logo");
const menuIcon = menuBtn.querySelector("i");

const YOUTUBE_ID = "BWczaSneA0Q";

menuBtn.addEventListener("click", () => {
  mobileHeader.classList.toggle("active");
  menuBtn.classList.toggle("white");
  logo.classList.toggle("white");
  menuIcon.classList.toggle("rotate");
});

function playVideo() {
  const wrapper = document.getElementById("videoWrapper");
  const iFrame = document.getElementById("ytFrame");
  iFrame.src = `https://youtu.be/${YOUTUBE_ID}?si=O05uT4Tn7uCW_jZC`;
  wrapper.classList.add("playing");
}
