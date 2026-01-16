import { Product } from "../models/Product";

export const showProductDetails = (product: Product) => {
  const productModal = document.getElementById("productModal");
  if (productModal) {
    const productDetails = productModal as HTMLDialogElement;
    productDetails.showModal();
  }

  const productContainer = document.getElementById("extDetailsContainer");
    const detailsContainer = document.createElement("div");
    const image = document.createElement("div");
    const name = document.createElement("h4");
    const info = document.createElement("p");
    const price = document.createElement("p");
    const button = document.createElement("button");
    const extInfo = document.createElement("p");

    detailsContainer.className = "detailsContainer";
    image.className = "imgContainer";
    image.style.backgroundImage = `url(${product.image})`;
    name.className = "name";
    name.innerHTML = product.name;
    info.className = "info";
    info.innerHTML = product.info;
    price.className = "price";
    price.innerHTML = product.price.toString();
    button.className = "buyBtnSmall";
    button.innerHTML = "Köp";
    extInfo.className = "extInfo";
    extInfo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quidem ullam impedit natus cumque reprehenderit dolore rerum dignissimos optio eveniet?";
    

    detailsContainer.appendChild(name);
    detailsContainer.appendChild(info);
    detailsContainer.appendChild(price);
    detailsContainer.appendChild(button);
    detailsContainer.appendChild(extInfo);
    productContainer?.appendChild(image);
    productContainer?.appendChild(detailsContainer);
};