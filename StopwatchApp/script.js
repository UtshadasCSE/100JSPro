const timer = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timer.textContent = formateTime(elapsedTime);
  }, 10);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function formateTime() {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime * 60) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

function stopTimer() {
  clearInterval(timerInterval); // Stops the timer from updating
  startButton.disabled = false; // Enables the Start button
  stopButton.disabled = true; // Disables the Stop button
}
function resetTimer() {
  clearInterval(timerInterval); // Stops the interval

  elapsedTime = 0; // Resets elapsed time
  timer.textContent = "00:00:00"; // Resets the timer display

  startButton.disabled = false; // Enables Start button
  stopButton.disabled = true; // Disables Stop button
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
