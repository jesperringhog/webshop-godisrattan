import { Product } from "../models/Product";
import { createHtmlCartItems } from "./createHtmlCartItems";

//funktion landing-page - lägg till i varukorgen
export const mainAddToCart = (products: Product[], shoppingCart: Product[]) => {
  //lägg till produkt från produkt-listan(products) till varukorg(shoppingCart)
  shoppingCart.push(products[0]);
  //anrop funktion - skapa html för varukorgen
  createHtmlCartItems(shoppingCart);
};

// funktion allmän - lägg till i varukorgen (behöver utvecklas...)
// export const addToCart = (products: Product[]) => {};
