let getBtn = document.getElementById("get");
let rateBtn = document.getElementById("rate");

window.addEventListener("DOMContentLoaded", showBtn);

getBtn.addEventListener("click", function () {
  if (JSON.parse(localStorage.getItem("get")) == 0) {
    Swal.fire("", "You've Chosen TAJINE DE Poulet, Enjoy Your Meal", "success");
    localStorage.setItem("get", 1);
    showBtn();
  }
});

function showBtn() {
  if (!JSON.parse(localStorage.getItem("get"))) { // !false in case 0 or null
    localStorage.setItem("get", 0);
  } else {
    getBtn.classList.add("disabled");
    rateBtn.style.display = "block";
  }
}