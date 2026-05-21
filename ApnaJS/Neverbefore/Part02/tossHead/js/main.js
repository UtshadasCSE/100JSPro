// Get element from DOM
let flipBtn = document.getElementById("flipNow");
let resetBtn = document.getElementById("resetNow");
let shareBtn = document.getElementById("shareNow");

let coinContainer = document.querySelector(".coin-container");
let flipText = document.getElementById("flipText");

let flipSound = new Audio("assets/flip_sound.mp3");

// Flip Button
flipBtn.addEventListener("click", function () {
  // Play sound from beginning
  flipSound.currentTime = 0;
  flipSound.play();

  // Show flipping text
  flipText.textContent = "Flipping...";

  // Remove old classes
  coinContainer.classList.remove("active", "spin");

  // Restart animation
  void coinContainer.offsetWidth;

  // Add animation classes
  coinContainer.classList.add("active");
  coinContainer.classList.add("spin");

  // Generate random number
  const random = Math.floor(Math.random() * 2);

  // Wait for animation end
  setTimeout(() => {
    // HEAD
    if (random === 0) {
      flipText.textContent = "Head";
    }

    // TAIL
    else {
      flipText.textContent = "Tail";
    }

    // Stop spinning effect
    coinContainer.classList.remove("active");
    coinContainer.classList.remove("spin");
  }, 3000);
});

resetBtn.addEventListener("click", () => {
  coinContainer.classList.remove("active", "spin");
  flipText.textContent = "Flip Again";
});

shareBtn.addEventListener("click", async function () {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Headoss app",
        result: `Result is ${flipText.textContent}`,
        url: window.location.href,
      });
    } catch {
      console.log("Share Cancelled!");
    }
  } else {
    alert("Sharing not supported in your browser");
  }
});
