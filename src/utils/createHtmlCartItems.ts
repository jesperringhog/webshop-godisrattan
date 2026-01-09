import type { Product } from "../models/Product";

// const cartItems = document.getElementById("cartItems");

export const createHtmlCartItems = (shoppingCart: Product[]) => {
  shoppingCart.forEach((product) => {
    const name = document.createElement("h5");
    
    name.innerHTML = product.name;

    console.log(shoppingCart);
    
  });
};
