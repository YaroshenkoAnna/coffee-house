import { createElement } from "./createElement.js";
import  {coffee, tea, dessert} from "./products.js";

export function createMenu(category = "coffee"){
    const menu = document.querySelector(".section__menu");
    menu.textContent = "";

    let listProducts = category == "coffee" ? coffee : category == "tea" ? tea : dessert;

    listProducts.forEach((product, index) => {
        const card = createElement({
            tag: "div",
            classes: ["card"],
            parent: menu
        });

        card.setAttribute("data-number", `${category}_${index}`);

        const cardImage = createElement({
            tag: "img",
            classes: ["card__image"],
            parent: card
        });
        let extension = category == "coffee" ? "jpg" : "png"
        cardImage.src = `images/${category}-${index}.${extension}`;
        cardImage.alt = category;

        const cardWraper = createElement({
            tag: "div",
            classes: ["card__wraper"],
            parent: card
        });

        createElement({
            tag: "h3",
            classes: ["card__title"],
            parent: cardWraper,
            text: product.name
        });

        createElement({
            tag: "p",
            classes: ["card__description"],
            parent: cardWraper,
            text: product.description
        });

        createElement({
            tag: "span",
            classes: ["card__price"],
            parent: cardWraper,
            text: `$ ${product.price}`
        });

    })
}