// restaurant.js
import "./style.css";
import { renderAbout, testAbout } from "./includes/about.js";
import { renderHome, testHome } from "./includes/home.js";
import { renderMenu, testMenu } from "./includes/menu.js";

renderHome();

const content = document.querySelector("#content");
const links = document.querySelectorAll(".header-link");

const handleLinkChange = function (link) {
    link.addEventListener("click", (e) => {
        const which = e.target.text;
        if (which === "Menu") {
            renderMenu();
        } else if (which === "Home") {
            renderHome();
        } else {
            renderAbout();
        }
    });
}

links.forEach((link) => handleLinkChange(link));