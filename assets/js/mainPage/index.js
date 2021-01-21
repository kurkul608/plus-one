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

function scrollDown() {
  var windowCoords = document.documentElement.clientHeight;
  (function scroll() {
    if (window.pageYOffset < windowCoords) {
      window.scrollBy(0, 10);
      setTimeout(scroll, 0);
    }
    if (window.pageYOffset > windowCoords) {
      window.scrollTo(0, windowCoords);
    }
  })();
}
let checker = true;
addEventListener("wheel", (e) => {
  if (checker) {
    checker = false;
    var scroll = e.deltaY || e.detail || e.wheelDelta;
    // console.log(scroll);
    if (scroll < 0) {
      // window.scrollBy(0, -window.innerHeight);
      window.scrollBy({
        top: -window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
    } else {
      // window.scrollBy(0, window.innerHeight);
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
    }
    setTimeout(() => {
      checker = true;
    }, 1000);
  }
});
let checkerButtons = true;
addEventListener("keydown", (e) => {
  if (checkerButtons) {
    checkerButtons = false;
    if (e.key === "ArrowDown") {
      // window.scrollBy(0, window.innerHeight);
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
    }

    if (e.key === "ArrowUp") {
      // window.scrollBy(0, -window.innerHeight);
      window.scrollBy({
        top: -window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
    }
    setTimeout(() => {
      checkerButtons = true;
    }, 1000);
  }
});
