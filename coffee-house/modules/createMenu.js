import { createElement } from "./createElement.js";
import  {coffee, tea, dessert} from "./products.js";

[coffee, tea, dessert].forEach(createMenu)

export function createMenu(listProducts){
    const menu = document.querySelector(".section__menu");

    let category = listProducts == coffee ? "coffee" : listProducts == tea ? "tea" : "dessert";

     const menuWraper = createElement({
            tag: "div",
            classes: ["section__menu-wraper"],
            parent: menu
        });

        menuWraper.id = category + "Menu";
        if(listProducts == coffee){
            menuWraper.classList.add("section__menu-wraper_active");
        }

    listProducts.forEach((product, index) => {
        const card = createElement({
            tag: "div",
            classes: ["card"],
            parent: menuWraper
        });

        card.setAttribute("data-number", `${category}_${index}`);

        const cardImageWraper =createElement({
            tag: "div",
            classes: ["card__image-wraper"],
            parent: card
        });

        const cardImage = createElement({
            tag: "img",
            classes: ["card__image"],
            parent: cardImageWraper
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