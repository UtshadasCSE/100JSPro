const givenDate = document.getElementById("birthday");
const checkBtn = document.getElementById("checkBtn");
const insModalShadow = document.querySelector(".ins-backdrop");
const insModal = document.querySelector(".ins-modal");
const resBackrdrop = document.querySelector(".res-backdrop");
const resModal = document.querySelector(".res-modal");
const closeModalBtn = document.getElementById("closeModal");
const closeModalRes = document.getElementById("closeModalRes");
const resultAge = document.getElementById("resultAge");

function calculateAge() {
  const dateValue = givenDate.value;
  if (dateValue === "") {
    // Show modal
    insModalShadow.style.display = "block";
    insModal.style.display = "block";
  } else {
    resBackrdrop.style.display = "block";
    resModal.style.display = "block";
    const age = getAge(dateValue);
    resultAge.textContent = `${age}`;
  }
}
function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthDateValue = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthDateValue.getFullYear();
  const month = currentDate.getMonth() - birthDateValue.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDateValue.getDate())
  ) {
    age--;
  }
  return age;
}
function closeModal() {
  insModalShadow.style.display = "none";
  insModal.style.display = "none";
}
function closeModalResult() {
  insModalShadow.style.display = "none";
  insModal.style.display = "none";
}
checkBtn.addEventListener("click", calculateAge);
closeModalBtn.addEventListener("click", closeModal);
closeModalRes.addEventListener("click", closeModalResult);

// Optional: close modal when clicking outside modal box
insModalShadow.addEventListener("click", closeModal);
