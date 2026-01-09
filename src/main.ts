import { products } from "./data/products";
import "./styles/style.scss";
import { mobileMenu } from "./utils/mobileMenu";
import "./utils/checkoutBtn";
import { mainProductContainer } from "./utils/mainProductContainer";
import { mainAddToCart } from "./utils/addToCart";
import type { Product } from "./models/Product";

mobileMenu();

mainProductContainer();

const shoppingCart: Product[] = [];

document.getElementById("buyBtnBig")?.addEventListener("click", () => {
    mainAddToCart(products, shoppingCart);
});

