const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  hamburger.classList.toggle("hamburger-background");
  menu.classList.toggle("menu-active");
});
