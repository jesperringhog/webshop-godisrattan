import type { CartItem } from "../models/CartItem";
import { getCartTotalPrice } from "../utils/cartCalculations";
import { renderCartIcon } from "./renderCartIcon";
import { renderCartTotal } from "./renderCartTotal";

const cartSum = document.getElementById("cartSum") as HTMLSpanElement;

export const initCartSum = (shoppingCart: CartItem[]) => {
  const total = getCartTotalPrice(shoppingCart);

  if (cartSum) {
    cartSum.textContent = `${total.toFixed(2)}kr`;
  }

  const cartTotal = document.getElementById("cartTotal") as HTMLDivElement;

  cartTotal.innerHTML = "";

  if (shoppingCart.length === 0) {
    return;
  }

  const cartTotalWrapper = renderCartTotal(total);

  cartTotal.appendChild(cartTotalWrapper);

  renderCartIcon(shoppingCart);
};
