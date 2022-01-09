// rate ranges in people's review
let ranges = document.querySelectorAll(".rate-range");

ranges.forEach((range) => {
  let { rate } = range.dataset;
  range.style.width = rate + "%";
});

// display an overlay when the user hover over the side navigation
let nav = document.querySelector(".navbar");
let overlay = document.querySelector(".back");

nav.addEventListener("mouseover", () => {
  window.innerWidth > 600 && overlay.classList.remove("hidden");
});
nav.addEventListener("mouseout", () => {
  overlay.classList.add("hidden");
});

// redirect the user when he clicks on a dish
// testing for the first dish
let dish = document.querySelector(".tajin");

dish.addEventListener("click", () => {
  window.location.href = "./dish.html";
});
