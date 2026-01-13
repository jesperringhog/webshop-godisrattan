import { Product } from "../models/Product";

//funktion - skapa html för varukorgen
export const createHtmlCartItems = (shoppingCart: Product[]) => {
  const cartItemsContainer = document.getElementById(
    "cartItems"
  ) as HTMLDivElement;
  const cartSum = document.getElementById("cartSum") as HTMLSpanElement;

  //Tömmer containern innan vi börjar
  cartItemsContainer.innerHTML = "";

  let total = 0;

  //loopa varukorgen (behöver utvecklas...)
  shoppingCart.forEach((product, index) => {
    total += product.price * product.quantity;

    //Skapar ett cart item
    const cartItem = document.createElement("div");
    cartItem.className = "cartItem";

    //Produktbilden
    const img = document.createElement("img");
    img.className = "cartImg";
    img.src = product.image;
    img.alt = product.name;
    //Skapar en div där info om produkten ska vara
    const cartInfo = document.createElement("div");
    cartInfo.className = "cartInfo";
    //Produktsnamn P
    const productName = document.createElement("p");
    productName.className = "productName";
    productName.textContent = product.name;
    //Produktsinfo P
    const productInfo = document.createElement("p");
    productInfo.className = "productInfo";
    productInfo.textContent = product.info;

    cartInfo.appendChild(productName);
    cartInfo.appendChild(productInfo);
    //Antal div
    const cartQty = document.createElement("div");
    cartQty.className = "cartQty";
    //Antal produkter
    const qtyText = document.createElement("span");
    qtyText.className = "qty";
    qtyText.innerText = "Antal ";
    //Antal produkter kontroll +/-
    const qtyControls = document.createElement("div");
    qtyControls.className = "qtyControls";

    const minusBtn = document.createElement("button");
    minusBtn.className = "minusBtn";
    minusBtn.textContent = "-";

    const numOfProducts = document.createElement("span");
    numOfProducts.className = "numOfProducts";
    numOfProducts.textContent = product.quantity.toString(); //Kanske ställer till det vid räkning

    const plusBtn = document.createElement("button");
    plusBtn.className = "plusBtn";
    plusBtn.textContent = "+";

    minusBtn.addEventListener("click", () => {
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        shoppingCart.splice(index, 1);
      }
      createHtmlCartItems(shoppingCart);
    });

    plusBtn.addEventListener("click", () => {
      product.quantity++;
      createHtmlCartItems(shoppingCart);
    });

    qtyControls.appendChild(minusBtn);
    qtyControls.appendChild(numOfProducts);
    qtyControls.appendChild(plusBtn);

    cartQty.appendChild(qtyText);
    cartQty.appendChild(qtyControls);

    //Priset på varan i item
    const cartItemPriceContainer = document.createElement("div");
    cartItemPriceContainer.className = "cartItemPriceContainer";

    const priceHead = document.createElement("span");
    priceHead.className = "priceHead";
    priceHead.textContent = "Pris";

    const cartItemPrice = document.createElement("span");
    cartItemPrice.className = "cartItemPrice";
    cartItemPrice.textContent = product.price * product.quantity + " kr"; //Räknar ut priset beroende på antal

    cartItemPriceContainer.appendChild(priceHead);
    cartItemPriceContainer.appendChild(cartItemPrice);

    //Ta bort item
    const removeBtn = document.createElement("button");
    removeBtn.className = "removeBtn";
    removeBtn.textContent = "x";
    removeBtn.addEventListener("click", () => {
      shoppingCart.splice(index, 1);
      createHtmlCartItems(shoppingCart);
    });

    // Bygg ihop hela kortet
    cartItem.appendChild(img);
    cartItem.appendChild(cartInfo);
    cartItem.appendChild(cartQty);
    cartItem.appendChild(cartItemPriceContainer);
    cartItem.appendChild(removeBtn);

    cartItemsContainer.appendChild(cartItem);
  }); // Hit går shoppingCart.forEach

  // Uppdatera totalsumman
  cartSum.textContent = `${total} kr`;
}; //
