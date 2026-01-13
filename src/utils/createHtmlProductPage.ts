import { Product } from "../models/Product";

//funktion skapar html för produktkorten
export const createProductCard = (product: Product): HTMLDivElement => {
    const card: HTMLDivElement = document.createElement("div");
    card.className = "productCard";

    card.innerHTML = `
        <div class="productCardImageContainer">
            <img 
                class="productCardImg" 
                src="${product.image}" 
                alt="${product.name}"
            >
        </div>

        <div class="productTextContainer">
            <h3>${product.name}</h3>
            <p class="productDescription">${product.info}</p>
            <p class="priceSmall">${product.price}:-/hg</p>
            <button class="buyBtnSmall">Köp</button>
        </div>
    `;

    return card;
};

//funktion som placerar dem rätt på produktsidan
export const createHtmlProductPage = (
    products: Product[]
): HTMLDivElement => {

    const productPageContainer: HTMLDivElement = document.createElement("div");
    productPageContainer.id = "productPageContainer";

    productPageContainer.innerHTML = `
    <div id="productCardGrid"></div>

    `;

    const productGrid = productPageContainer.querySelector(
        "#productCardGrid"
    ) as HTMLDivElement;

    // visa första 4 produktkorten
    products.slice(0, 4).forEach(product => {
        productGrid.appendChild(createProductCard(product));
    });

    return productPageContainer;

};
