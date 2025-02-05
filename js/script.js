const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// Make mobile navigation work
const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", () => {
  headerEL.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll(".main-nav-link");

allLinks.forEach(function (link) {
  link.addEventListener("click", (e) => {
    headerEL.classList.remove("nav-open");
  });
});

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js