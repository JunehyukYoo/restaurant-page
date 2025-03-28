// menu.js
import createElement from "./createElement.js";

export const renderMenu = function () {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.className = "menu-content"; // for custom menu styling

    const subtitle = createElement("p", null, "A curated selection of classic and contemporary Italian cuisine.", "subtitle");
    content.appendChild(subtitle);

    // Menu Sections
    const sections = [
        {
            name: "Starters",
            items: [
                { name: "Burrata al Tartufo", description: "Creamy burrata with black truffle and arugula." },
                { name: "Carpaccio di Manzo", description: "Thinly sliced beef tenderloin, parmesan, and lemon." },
                { name: "Polpo alla Griglia", description: "Grilled octopus with smoked paprika aioli." }
            ]
        },
        {
            name: "Mains",
            items: [
                { name: "Risotto ai Funghi", description: "Wild mushroom risotto with pecorino romano." },
                { name: "Tagliatelle al Ragù", description: "Fresh pasta with slow-cooked beef ragù." },
                { name: "Branzino al Forno", description: "Oven-roasted sea bass with lemon caper sauce." }
            ]
        },
        {
            name: "Desserts",
            items: [
                { name: "Tiramisù Classico", description: "Espresso-soaked ladyfingers, mascarpone cream." },
                { name: "Panna Cotta", description: "Vanilla bean panna cotta with raspberry coulis." },
                { name: "Cannoli Siciliani", description: "Crispy shell, sweet ricotta, and pistachio." }
            ]
        }
    ];

    sections.forEach(section => {
        const sectionElem = createElement("div", "menu-section");

        const heading = createElement("h2", "", section.name);
        sectionElem.appendChild(heading);

        section.items.forEach(item => {
            const itemElem = createElement("div", "menu-item");

            const nameElem = createElement("h3", "menu-item-name", item.name);
            const descElem = createElement("p", "menu-item-description", item.description);

            itemElem.appendChild(nameElem);
            itemElem.appendChild(descElem);
            sectionElem.appendChild(itemElem);
        });

        content.appendChild(sectionElem);
    });
};
