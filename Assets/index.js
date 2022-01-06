// rate ranges in people reviews
let ranges = document.querySelectorAll(".rate-range");
console.log(ranges);

ranges.forEach((range) => {
  let width = range.dataset["rate"];
  range.style.width = width + "%";
});
// display an overlay when the user hover over the side navigation
let nav = document.querySelector(".navbar");
let overlay = document.querySelector(".back");

nav.addEventListener("mouseover", () => {
  overlay.classList.remove("hidden");
});
nav.addEventListener("mouseout", () => {
  overlay.classList.add("hidden");
});
