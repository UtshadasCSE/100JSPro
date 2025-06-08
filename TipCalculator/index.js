const billAmount = document.getElementById("billAmount");
const tipPercentage = document.getElementById("tipAmount");
const submitBtn = document.getElementById("submitBtn");
const totalAmount = document.getElementById("totalAmount");

function calculateTip() {
  const bill = parseFloat(billAmount.value);
  const tipPercent = parseFloat(tipPercentage.value);
  const totalBill = bill + bill * (tipPercent / 100);
  totalAmount.textContent = `$${totalBill.toFixed(2)}`;
}

submitBtn.addEventListener("click", calculateTip);
