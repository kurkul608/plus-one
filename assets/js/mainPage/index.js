const header = document.getElementById("rightHeader");
header.addEventListener("scroll", () => {
  console.log("hi");
});

window.addEventListener("scroll", () =>
  window.scrollY === 0 ? header.classList.add("homeMenu") : null
);
window.addEventListener("scroll", () =>
  header.classList.contains("homeMenu") && window.scrollY !== 0
    ? header.classList.remove("homeMenu")
    : null
);

const slider = document.querySelector(".sliderBlock__slider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  // slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  // console.log(startX);
  isDown = true;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  // console.log(walk);
  slider.scrollLeft = scrollLeft - walk;
});
