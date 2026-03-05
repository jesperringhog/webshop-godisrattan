import type { CartItem } from "../models/CartItem";

const CART_KEY = "shoppingCart";

export const saveCart = (cart: CartItem[]): void => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const loadCart = (): CartItem[] => {
  const saved = localStorage.getItem(CART_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const clearCart = (): void => {
  localStorage.removeItem(CART_KEY);
};
