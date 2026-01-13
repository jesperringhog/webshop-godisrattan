//klass för varje produkt-objekt och vilka egenskaper det har
export class Product {
  image: string;
  name: string;
  info: string;
  quantity: number;
  price: number;

  constructor(
    image: string,
    name: string,
    info: string,
    quantity: number,
    price: number
  ) {
    this.image = image;
    this.name = name;
    this.info = info;
    this.quantity = quantity;
    this.price = price;
  }
}
