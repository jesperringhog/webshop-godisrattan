import { getCartTotalPrice } from "../utils/cartCalculations";
import { loadCart } from "../services/cartStorage";

export const renderCheckoutPriceSummary = () => {
  const checkoutItemsContainer = document.getElementById("checkoutItems");
  const checkoutTotal = document.getElementById("checkoutTotal");
  const checkoutShipping = document.getElementById("checkoutShipping");

  if (!checkoutItemsContainer || !checkoutTotal) return;

  const cart = loadCart();

  checkoutItemsContainer.innerHTML = "";

  cart.forEach((item) => {
    const summaryItem = document.createElement("div");
    summaryItem.className = "summary-item";

    const itemName = document.createElement("span");
    itemName.textContent = `${item.product.name} x ${item.quantity}`;

    const itemPrice = document.createElement("span");
    itemPrice.textContent = `${(item.product.price * item.quantity).toFixed(2)} kr`;

    summaryItem.appendChild(itemName);
    summaryItem.appendChild(itemPrice);
    checkoutItemsContainer.appendChild(summaryItem);
  });

  const cartTotal = getCartTotalPrice(cart);
  const shipping_fee = cartTotal >= 200 ? 0 : 39;
  const total = cartTotal + shipping_fee;

  if (checkoutShipping) {
    checkoutShipping.textContent =
      shipping_fee === 0 ? "0 kr" : `${shipping_fee} kr`;
  }

  checkoutTotal.textContent = `${total.toFixed(2)} kr`;
};
