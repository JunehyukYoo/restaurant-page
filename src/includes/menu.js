// menu.js
import createElement from "./createElement.js";

export const testMenu = () => console.log("Testing menu module");

export const renderMenu = function () {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const test = createElement("div", null, "THIS IS THE MENU!")
    content.appendChild(test);
}