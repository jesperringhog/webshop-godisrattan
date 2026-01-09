import { Product } from "../models/Product";
import { createHtmlCartItems } from "./createHtmlCartItems";

export const mainAddToCart = (products: Product[], shoppingCart: Product[]) => {
  shoppingCart.push(products[0]);
  createHtmlCartItems(shoppingCart);
};

// export const addToCart = (products: Product[]) => {};
