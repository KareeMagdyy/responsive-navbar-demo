const navToggler = document.querySelector("#navToggler");
const navLinks = document.querySelector(".nav-bar__links");
const navLink = document.querySelectorAll(".nav-bar__link");

navToggler.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

navToggler.addEventListener("click", () => {
  navLink.classList.toggle(".nav-bar__link--active");
});
