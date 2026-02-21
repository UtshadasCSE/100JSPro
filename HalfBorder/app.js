const steps = document.querySelectorAll(".step");

steps.forEach((step) => {
  step.addEventListener("click", () => {
    steps.forEach((s) => s.classList.remove("active"));
    step.classList.add("active");
  });
});
