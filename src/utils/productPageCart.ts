import { products } from "../data/products";
import { addToCart } from "../services/addToCart";
import { updateCartBadge } from "./cartIconQuantity";

export const initProductPageCart = () => {
  const buyButtons = document.querySelectorAll(".buyBtnSmall");

  buyButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (products[index]) {
        const updatedCart = addToCart(products[index]);
        updateCartBadge(updatedCart);
        console.log(`Lade till ${products[index].name} i varukorgen`);
      }
    });
  });
};
