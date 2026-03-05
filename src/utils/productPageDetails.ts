import { showProductDetails } from "../components/showProductDetails";
import { products } from "../data/products";

export const initProductPageDetails = () => {
  const cardNames = document.querySelectorAll(".productCardName");

  cardNames.forEach((image, index) => {
    image.addEventListener("click", () => {
      if (products[index]) {
        showProductDetails(products[index]);
      }
    });
  });
};
