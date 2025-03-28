// home.js
import createElement from "./createElement.js";

import goodAwardImage from "../asset/goodFoodAward.png";
import michelinStarImage from "../asset/michelinStar.png";
import luxuryAwardImage from "../asset/luxuryRestaurantAward.png";
import interiorGif from "../asset/restaurantInterior.gif";


export const renderHome = function () {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.classList.add("home-content");

    // Creating title and description
    const title = createElement("h1", "title", "MAGNIFICO");
    content.appendChild(title);

    const message = `Chicago's best Italian restaurant. Eat real Italian food made by real Italian chefs.`;
    const description = createElement("p", "", message);
    content.appendChild(description);

    const disclaimer = "Disclaimer: This is a fake restaurant."
    content.appendChild(createElement("p", "", disclaimer));

    // Creating restaurant interior gif
    const gif = createElement("div", "gif");
    const interior = createElement("img");
    interior.src = interiorGif;
    interior.alt = "Restaurant interior";
    gif.appendChild(interior);
    content.appendChild(gif);

    // Creating Awards
    const awardsWrapper = createElement("div", "awards-wrapper");

    const goodAward = createElement("img");
    goodAward.src = goodAwardImage;
    goodAward.alt = "Good Food's Award 2023";

    const luxury = createElement("img");
    luxury.src = luxuryAwardImage;
    luxury.alt = "World luxury restaurant awards 2023";

    const michelin = createElement("img");
    michelin.src = michelinStarImage;
    michelin.alt = "Michelin 3 Stars";

    awardsWrapper.appendChild(goodAward);
    awardsWrapper.appendChild(luxury);
    awardsWrapper.appendChild(michelin);

    content.appendChild(awardsWrapper);

}