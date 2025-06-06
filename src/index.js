import "./css/style.css";
import "./css/reset.css";
import loadHomepage from "./pages/home";
import loadMenu from "./pages/menu";
import loadAbout from "./pages/about";

console.log("Miss Thư");

const btns = document.querySelectorAll(".btn");
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");

function setActiveButton(activeBtn) {
  btns.forEach((btn) => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}

document.addEventListener("DOMContentLoaded", (e) => {
  loadHomepage();
  setActiveButton(e.currentTarget);
});

home.addEventListener("click", (e) => {
  loadHomepage();
  setActiveButton(e.currentTarget);
});

menu.addEventListener("click", (e) => {
  loadMenu();
  setActiveButton(e.currentTarget);
});

about.addEventListener("click", (e) => {
  loadAbout();
  setActiveButton(e.currentTarget);
});
