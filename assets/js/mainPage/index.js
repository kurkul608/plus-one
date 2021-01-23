const header = document.getElementById("rightHeader");
//
// window.addEventListener("scroll", () =>
//   window.scrollY === 0 ? header.classList.add("_active") : null
// );
window.addEventListener("scroll", () =>
  header.classList.contains("_active") && window.scrollY !== 0
    ? header.classList.remove("_active")
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

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        if (!animItem.classList.contains("homeMenu")) {
          animItem.classList.add("_active");
        } else {
          if (window.scrollY === 0) {
            animItem.classList.add("_active");
          }
        }
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }


  
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => animOnScroll(), 300);
}
