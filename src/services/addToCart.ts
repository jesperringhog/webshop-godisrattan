import type { Product } from "../models/Product";
import type { CartItem } from "../models/CartItem";
import { saveCart, loadCart } from "./cartStorage";
import { createHtmlCartItems } from "../pages/createHtmlCartItems";

export const addToCart = (product: Product): CartItem[] => {
  const cart = loadCart();

  const existingItem = cart.find((item) => item.product.name === product.name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      product: product,
      quantity: 1,
    });
  }

  saveCart(cart);
  createHtmlCartItems(cart);

  return cart;
};
