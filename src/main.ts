import { products } from "./data/products";
import "./styles/style.scss";
import { mobileMenu } from "./utils/mobileMenu";
import { showMoreHandleClick } from "./utils/showmoreBtn";
import "./utils/checkoutBtn";
import { createHtmlMainProductCard } from "./utils/createHtmlMainProductCard";
import { mainAddToCart } from "./utils/addToCart";
import type { Product } from "./models/Product";

mobileMenu();

//anrop funktion - skapa html för mainProductCard på landing-page för att kunna lägga objektet i varukorgen
createHtmlMainProductCard();

//lista för varukorgen där de klickade produkt-objekten kommer läggas till
const shoppingCart: Product[] = [];

//klick-event för köp-knappen på landing page
document.getElementById("buyBtnBig")?.addEventListener("click", () => {
    //anrop funktion landing-page - lägg till produkt från produkt-listan(products) till varukorg(shoppingCart)
    mainAddToCart(products, shoppingCart);
});

import "./utils/showmoreBtn";

mobileMenu();
showMoreHandleClick();
