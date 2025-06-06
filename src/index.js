import "./css/style.css";
import "./css/reset.css";
import loadHomepage from "./pages/home";
import loadMenu from "./pages/menu";
import loadAbout from "./pages/about";

console.log("Miss Thư");

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");

document.addEventListener("DOMContentLoaded", () => {
  loadHomepage();
});

home.addEventListener("click", () => {
  loadHomepage();
});

menu.addEventListener("click", () => {
  loadMenu();
});

about.addEventListener("click", () => {
  loadAbout();
});
