import { initCartSum } from "../components/initCartSum";
import { renderCartPrice } from "../components/renderCartPrice";
import { renderCartProducts } from "../components/renderCartProducts";
import { renderCartQuantity } from "../components/renderCartQuantity";
import { renderCartRemove } from "../components/renderCartRemove";
import { renderEmptyCart } from "../components/renderEmptyCart";
import type { CartItem } from "../models/CartItem";

export const createHtmlCartItems = (shoppingCart: CartItem[]) => {
  const cartItemsContainer = document.getElementById(
    "cartItems",
  ) as HTMLDivElement;

  if (!cartItemsContainer) return;

  cartItemsContainer.innerHTML = "";

  renderEmptyCart(shoppingCart);

  shoppingCart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cartItem";

    const cartProduct = renderCartProducts(item);
    const cartQuantity = renderCartQuantity(
      shoppingCart,
      item,
      index,
      createHtmlCartItems,
    );
    const cartPrice = renderCartPrice(item);
    const cartRemove = renderCartRemove(
      shoppingCart,
      index,
      createHtmlCartItems,
    );

    cartItem.appendChild(cartProduct);
    cartItem.appendChild(cartQuantity);
    cartItem.appendChild(cartPrice);
    cartItem.appendChild(cartRemove);

    cartItemsContainer.appendChild(cartItem);
  });

  initCartSum(shoppingCart);
};
