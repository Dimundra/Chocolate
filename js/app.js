// setup nav
const navBtn = document.getElementById("navigation-bar-open");
const navbar = document.getElementById("navigation-bar");
const navClose = document.getElementById("navigation-bar-close");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
