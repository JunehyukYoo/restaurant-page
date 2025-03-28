// about.js
export const testAbout = () => console.log("Testing about module");

export const renderAbout = function () {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const test = document.createElement("div");
    test.textContent = "THIS IS THE ABOUT PAGE!!!";
    content.appendChild(test);
}