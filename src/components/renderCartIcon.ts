import type { CartItem } from "../models/CartItem";
import { getCartTotalQuantity } from "../utils/cartCalculations";
import { updateCartBadge } from "../utils/cartIconQuantity";

export const renderCartIcon = (shoppingCart: CartItem[]) => {
  const totalQuantity = getCartTotalQuantity(shoppingCart);

  const cartIcon = document.querySelector(".cartIcon") as HTMLElement;

  if (cartIcon) {
    cartIcon.querySelector(".shoppingCartNumberContainer")?.remove();

    const badge = document.createElement("div");
    badge.className = "shoppingCartNumberContainer";
    badge.textContent = totalQuantity.toString();

    cartIcon.appendChild(badge);
  }
  updateCartBadge(shoppingCart);
};
