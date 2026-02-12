/* ========================= */
/* STEP 1: GET ALL THE ELEMENTS FROM HTML */
/* We need to find and grab the different parts of our promo bar */
/* ========================= */

// This finds the whole promo bar (the colored banner at top)
const promoBar = document.getElementById("promoBar");

// This finds the copy button (the button that copies the code)
const copyBtn = document.getElementById("copyBtn");

// This finds the coupon code text (example: NEWYEAR50)
const couponCode = document.getElementById("couponCode");

// This finds the timer container (the part that shows countdown)
const timer = document.getElementById("timer");

// This finds just the timer text (where we'll put the numbers)
const timerText = document.getElementById("timerText");

// This finds the close button (the X button to hide the bar)
const closeBtn = document.getElementById("closeBtn");

/* ========================= */
/* STEP 2: COPY COUPON CODE FEATURE */
/* When someone clicks "Copy", it copies the code to their clipboard */
/* ========================= */

// Listen for when someone clicks the copy button
copyBtn.addEventListener("click", () => {
  // Get the text from the coupon code (example: "NEWYEAR50")
  const code = couponCode.textContent;

  // Copy that text to the clipboard (like pressing Ctrl+C)
  navigator.clipboard.writeText(code);

  // Change button text to show it worked
  copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';

  // Change button color to green to show success
  copyBtn.style.background = "#10b981";

  // Wait 2 seconds (2000 milliseconds), then change it back
  setTimeout(() => {
    // Put the original text back
    copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy';
    // Put the original color back
    copyBtn.style.background = "#000";
  }, 2000);
});

/* ========================= */
/* STEP 3: CONTINUOUS COUNTDOWN TIMER */
/* This creates a timer that counts down and RESTARTS every 24 hours */
/* ========================= */

// Function to update the countdown timer
function updateTimer() {
  // Get the current time right now (in milliseconds)
  const now = new Date();

  // Calculate how many milliseconds have passed today
  const millisecondsSinceMidnight =
    now.getHours() * 60 * 60 * 1000 + // Hours to milliseconds
    now.getMinutes() * 60 * 1000 + // Minutes to milliseconds
    now.getSeconds() * 1000 + // Seconds to milliseconds
    now.getMilliseconds(); // Milliseconds

  // Calculate how many milliseconds until midnight (end of day)
  const millisecondsInDay = 24 * 60 * 60 * 1000; // Total milliseconds in 24 hours
  const millisecondsLeft = millisecondsInDay - millisecondsSinceMidnight;

  // Convert the remaining milliseconds to hours, minutes, and seconds

  // Calculate hours left (divide by milliseconds in an hour)
  const hours = Math.floor(millisecondsLeft / (1000 * 60 * 60));

  // Calculate minutes left (get remainder after hours, divide by milliseconds in a minute)
  const minutes = Math.floor(
    (millisecondsLeft % (1000 * 60 * 60)) / (1000 * 60),
  );

  // Calculate seconds left (get remainder after minutes, divide by milliseconds in a second)
  const seconds = Math.floor((millisecondsLeft % (1000 * 60)) / 1000);

  // Format the numbers to always show 2 digits (example: 09 instead of 9)
  // padStart(2, "0") adds a zero in front if the number is only 1 digit
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // Update the timer text on the page
  // Shows like: "Ends in 23:45:12"
  timerText.textContent = `Ends in ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

/* ========================= */
/* STEP 4: RUN THE TIMER */
/* This makes the timer update every single second */
/* ========================= */

// Run the updateTimer function immediately when page loads
updateTimer();

// Then run it every 1000 milliseconds (which is 1 second)
// This keeps the countdown updating continuously
setInterval(updateTimer, 1000);

/* ========================= */
/* STEP 5: CLOSE BUTTON FEATURE */
/* When someone clicks X, hide the promo bar */
/* ========================= */

// Listen for when someone clicks the close button
closeBtn.addEventListener("click", () => {
  // Hide the promo bar by setting display to none
  promoBar.style.display = "none";

  // OPTIONAL: Save to browser memory that user closed it
  // This remembers they closed it even if they refresh the page
  localStorage.setItem("promoBarClosed", "true");
});

/* ========================= */
/* STEP 6: CHECK IF USER ALREADY CLOSED IT */
/* If they closed it before, keep it hidden */
/* ========================= */

// When page loads, check if user closed the promo bar before
if (localStorage.getItem("promoBarClosed") === "true") {
  // If they did, hide it automatically
  promoBar.style.display = "none";
}

/* ========================= */
/* BONUS: OPTIONAL - RESET AT MIDNIGHT */
/* If you want to show the bar again at midnight, uncomment this code */
/* ========================= */

/*
// Function to reset the closed state at midnight
function checkMidnight() {
  const now = new Date();
  // If it's midnight (00:00), remove the closed state
  if (now.getHours() === 0 && now.getMinutes() === 0) {
    localStorage.removeItem("promoBarClosed");
    promoBar.style.display = "block";
  }
}
// Check every minute if it's midnight
setInterval(checkMidnight, 60000);
*/

/* ========================= */
/* HOW IT WORKS - SIMPLE EXPLANATION */
/* ========================= */

/*
1. When you load the page, we grab all the parts of the promo bar
2. The timer calculates how much time is left until midnight
3. Every second, it updates the countdown
4. When you click "Copy", it copies the coupon code
5. When you click "X", it hides the promo bar
6. The bar remembers you closed it even if you refresh
7. At midnight, the timer automatically resets to 24:00:00
*/
