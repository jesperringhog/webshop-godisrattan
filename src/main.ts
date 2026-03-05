import { products } from "./data/products";
import "./styles/style.scss";
import { mobileMenu } from "./components/mobileMenu";
import { showMoreHandleClick } from "./components/showmoreBtn";
import "./utils/goToCheckoutBtn";
import { createHtmlMainProductCard } from "./pages/createHtmlMainProductCard";
import { goToCheckoutBtn } from "./utils/goToCheckoutBtn";
import { createHtmlProductPage } from "./pages/createHtmlProductPage";
import { addToCart } from "./services/addToCart";
import "./components/showmoreBtn";
import { initProductPageCart } from "./utils/productPageCart";
import { loadCart } from "./services/cartStorage";
import { createHtmlCartItems } from "./pages/createHtmlCartItems";
import { payBtn } from "./components/payBtn";
import { updateCartBadge } from "./utils/cartIconQuantity";
import { setupCategoryFilters } from "./utils/filterProducts";
import { initProductPageDetails } from "./utils/productPageDetails";
import { renderCheckoutPriceSummary } from "./components/renderCheckoutPriceSummary";
import { initSearchProduct } from "./components/initSearchProduct";

mobileMenu();

document.getElementById("searchForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  initSearchProduct();
});

createHtmlMainProductCard();

const cart = loadCart();
updateCartBadge(cart);

document.getElementById("buyBtnBig")?.addEventListener("click", () => {
  const updatedCart = addToCart(products[0]);
  console.log("Varukorg:", updatedCart);
  updateCartBadge(updatedCart);
});

const productPageContainer = document.getElementById("productPageContainer");
if (productPageContainer !== null) {
  productPageContainer.appendChild(createHtmlProductPage(products));
}

initProductPageDetails();

initProductPageCart();

showMoreHandleClick();

const cartItemsContainer = document.getElementById("cartItems");
if (cartItemsContainer) {
  const cart = loadCart();
  createHtmlCartItems(cart);
}

goToCheckoutBtn();

document.getElementById("backToCartBtn")?.addEventListener("click", () => {
  window.location.href = "/shoppingCart.html";
});

renderCheckoutPriceSummary();

payBtn();

setupCategoryFilters();
