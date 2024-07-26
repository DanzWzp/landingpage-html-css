// toggle active
const navbarNav = document.querySelector(".navbar-nav");
// click hamburger menu
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click diluar navbar
const hamburger = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
