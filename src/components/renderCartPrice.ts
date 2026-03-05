import type { CartItem } from "../models/CartItem";
import { getItemTotalPrice } from "../utils/cartCalculations";

export const renderCartPrice = (item: CartItem) => {
  const cartItemPriceContainer = document.createElement("div");
  cartItemPriceContainer.className = "cartItemPriceContainer";

  const priceHead = document.createElement("span");
  priceHead.className = "priceHead";
  priceHead.textContent = "Pris";

  const cartItemPrice = document.createElement("span");
  cartItemPrice.className = "cartItemPrice";
  cartItemPrice.textContent = getItemTotalPrice(item).toFixed(2) + " kr";

  cartItemPriceContainer.appendChild(priceHead);
  cartItemPriceContainer.appendChild(cartItemPrice);

  return cartItemPriceContainer;
};
