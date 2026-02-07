const input = document.getElementById("qrInput");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.getElementById("qrCode");

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

let qrInstance = null;

function showPopup() {
  popup.classList.add("active");
}
function hidePopup() {
  popup.classList.remove("remove");
}

generateBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) {
    showPopup();
    return;
  }
  qrContainer.innerHTML = "";
  qrInstance = new QRCode(qrContainer, {
    text: value,
    width: 200,
    height: 200,
    colorDark: "#ffffff",
    colorLight: "#000000",
    correctLevel: QRCode.CorrectLevel.H,
  });

  setTimeout(() => {
    qrContainer.classList.add("show");
  }, 50);

  downloadBtn.disabled = false;
});

downloadBtn.addEventListener("click", () => {
  const img = qrContainer.querySelector("img");
  if (!img) return;

  const link = document.createElement("a");
  link.href = img.src;
  link.download = "qr-code.png";
  link.click();
});
closePopup.addEventListener("click", hidePopup);

// Optional: close popup on overlay click
popup.addEventListener("click", (e) => {
  if (e.target === popup) hidePopup();
});

// Enter key support
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") generateBtn.click();
});
