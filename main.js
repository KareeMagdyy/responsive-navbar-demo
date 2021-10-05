const navToggler = document.querySelector("#navToggler");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link");

navToggler.addEventListener("click", () => {
  //navToggler
  nav.classList.toggle("nav-active");
  //Links Animation
  navLinks.forEach((link, i) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${i / 5 + 0.5}s`;
    }
  });
  //Toggle Switch
  navToggler.classList.toggle("fa-times");
});
