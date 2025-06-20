const copyBtn = document.getElementById("copy");
const modal = document.getElementById("pop-modal");
const paragraph = document.querySelector("p");

copyBtn.addEventListener("click", () => {
  // Copy the paragraph text to clipboard
  const text = paragraph.innerText;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Show popup
      modal.style.display = "block";

      // Hide after 2 seconds
      setTimeout(() => {
        modal.style.display = "none";
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
});
