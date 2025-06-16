const rollBtn = document.getElementById("rollBtn");
const diceEl = document.getElementById("dice");
const rollHistory = document.getElementById("rollHistory");

let rollHistoryList = [];

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceEl.src = diceFace;
  rollHistoryList.push(rollResult);
  updateRollHistory(rollResult);
}

function updateRollHistory(rollResult) {
  rollHistory.innerHTML = ""; // Clear previous history

  rollHistoryList.forEach((result, index) => {
    const historyItem = document.createElement("li");
    historyItem.textContent = `Roll ${index + 1}: ${result} `;

    const img = document.createElement("img");
    img.src = `assets/dice${result}.png`; // adjust path and naming as needed
    img.alt = `Dice showing ${result}`;
    img.style.width = "30px"; // optional: set size
    img.style.marginLeft = "10px";

    historyItem.appendChild(img);
    rollHistory.appendChild(historyItem);
  });
}
function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "./assets/dice1.png";
    case 2:
      return "./assets/dice2.png";
    case 3:
      return "./assets/dice3.png";
    case 4:
      return "./assets/dice4.png";
    case 5:
      return "./assets/dice5.png";
    case 6:
      return "./assets/dice6.png";
    default:
      return "";
  }
}
rollBtn.addEventListener("click", () => {
  const playSound = new Audio("./assets/roll.mp3");
  playSound.play();
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
