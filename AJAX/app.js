let btn = document.getElementById("loadBtn");
btn.addEventListener("click", loadData);
function loadData() {
  fetch("message.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.getElementById("messageDisplay").innerHTML = data;
    });
}
