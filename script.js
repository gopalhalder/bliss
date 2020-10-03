function parallax(className, elementSpeed) {
  const parallaxEL = document.querySelector(`.${className}`);
  let scrollPosition = window.pageYOffset;

  parallaxEL.style.transform =
    "translateY(" + scrollPosition * elementSpeed + "px)";
}

window.addEventListener("scroll", () => {
  parallax("header__parallax", -0.15);
  parallax("header__normal-text", 0.23);
});
