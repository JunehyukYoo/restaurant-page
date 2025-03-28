// home.js
import createElement from "./createElement.js";

export const testHome = () => console.log("Testing home module");

export const renderHome = function () {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const test = createElement("div", "THIS IS THE HOMEPAGE");
    content.appendChild(test);
}