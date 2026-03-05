import { Product } from "../models/Product";

export const createProductCard = (product: Product): HTMLDivElement => {
  const card: HTMLDivElement = document.createElement("div");
  card.className = "productCard";
  card.setAttribute("data-category", product.category);

  card.innerHTML = `
        <div class="productCardImageContainer">
            <img 
                class="productCardImg" 
                src="${product.image}" 
                alt="${product.name}"
            >
        </div>

        <div class="productTextContainer">
            <h3 class="productCardName">${product.name}</h3>
            <p class="productDescription">${product.info}</p>
            <p class="priceSmall">${product.price}:-/hg</p>
            <button class="buyBtnSmall">Köp</button>
        </div>
    `;

  return card;
};

export const createHtmlProductPage = (products: Product[]): HTMLDivElement => {
  const productPageContainer: HTMLDivElement = document.createElement("div");
  productPageContainer.id = "productPageContainer";

  productPageContainer.innerHTML = `
    <div id="productCardGrid0">
    <div id="productCardGrid"></div>
    <div id="productCardGrid2"></div>
    </div>

    `;

  const productGrid = productPageContainer.querySelector(
    "#productCardGrid",
  ) as HTMLDivElement;

  const productGrid2 = productPageContainer.querySelector(
    "#productCardGrid2",
  ) as HTMLDivElement;

  products.slice(0, 4).forEach((product) => {
    productGrid.appendChild(createProductCard(product));
  });

  const showMoreBtnContainer = document.getElementById("showMoreBtnContainer");
  if (showMoreBtnContainer !== null) {
    productGrid.appendChild(showMoreBtnContainer);
  }

  products.slice(4, 15).forEach((product) => {
    productGrid2.appendChild(createProductCard(product));
  });

  return productPageContainer;
};
