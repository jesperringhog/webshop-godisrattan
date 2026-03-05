import type { CartItem } from "../models/CartItem";
import { removeItem } from "../utils/cartActions";

export const renderCartRemove = (
  shoppingCart: CartItem[],
  index: number,
  createHtmlCartItems: (shoppingCart: CartItem[]) => void,
) => {
  const removeBtn = document.createElement("button");
  removeBtn.className = "removeBtn";
  removeBtn.textContent = "x";

  removeBtn.addEventListener("click", () => {
    removeItem(shoppingCart, index, createHtmlCartItems);
  });

  return removeBtn;
};
