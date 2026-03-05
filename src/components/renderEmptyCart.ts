import type { CartItem } from "../models/CartItem";

export const renderEmptyCart = (shoppingCart: CartItem[]) => {
  const cartItemsContainer = document.getElementById(
    "cartItems",
  ) as HTMLDivElement;

  const cartSum = document.getElementById("cartSum") as HTMLSpanElement;
  const goToCheckoutBtn = document.getElementById(
    "goToCheckoutBtn",
  ) as HTMLButtonElement;

  if (shoppingCart.length === 0) {
    const emptyMessage = document.createElement("div");
    emptyMessage.className = "emptyCart";
    emptyMessage.innerHTML = `
      <p>Tyvärr är varukorgen tom just nu, men det är lätt att ändra på!</p>
      <a href="/product.html" class="shopLink">Shoppa loss här</a>
    `;
    cartItemsContainer.appendChild(emptyMessage);

    if (cartSum) {
      cartSum.textContent = "0 kr";
    }

    if (goToCheckoutBtn) {
      goToCheckoutBtn.style.display = "none";
    }
    return;
  }
  if (goToCheckoutBtn) {
    goToCheckoutBtn.style.display = "";
  }

  return cartItemsContainer;
};
