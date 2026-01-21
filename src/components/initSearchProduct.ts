import { products } from "../data/products";
import { showProductDetails } from "./showProductDetails";

//funktion för att kunna söka efter en produkt
export const initSearchProduct = () => {
  const searchInput = document.getElementById("searchInput"); //hämtar input-elementet från html

  let searchText = ""; //variabel för användarens söktext
  if (searchInput) { 
    searchText = (searchInput as HTMLInputElement).value; //om input-elementet finns -> ange användarens söktext som input-elementets värde
  }

  //loopa igenom alla produkter
  products.forEach((product) => {
    if (
      product.name.toLowerCase().includes(searchText.toLowerCase()) || //-> om söktexten innehåller en del av produktens namn 
      product.details.toLowerCase().includes(searchText.toLowerCase()) //eller detalj-info
    ) {
      showProductDetails(product); //-> anropa funktionen för att visa produktdetaljs-modalen för den sökta produkten
    }
  });

  //om det finns en söktext efter att modalen visas -> töm input-fältets värde (ta bort söktexten)
  if (searchText) {
    (searchInput as HTMLInputElement).value = "";
  }
};
