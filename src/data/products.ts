import { Product } from "../models/Product";

//lista med alla produkt-objekt som vi behöver använda när vi skapar html 
//ex: products[i].name (kolla models/Product för att se egenskaps-namn)
export const products: Product[] = [
    new Product(
        "/src/assets/produktbilder/surakarameller.jpg",
        "Zing-Zong Zour",
        "Sensationellt sura!",
        7.90
    ),
    new Product(
        "/src/assets/produktbilder/polkaklubba.jpg",
        "Swirly Polka",
        "Nostalgiskt god klubba",
        9.90
    ),
    new Product(
        "/src/assets/produktbilder/fruity.jpg",
        "Farmors Fruity",
        "Njut av en klassiker",
        6.90
    ),
    new Product(
        "/src/assets/produktbilder/fizzy.jpg",
        "FizzyBombz",
        "Med sprudlande smak!",
        8.90
    ),
    new Product(
        "/src/assets/produktbilder/suraremmar.jpg",
        "SourSwirls",
        "Svindlande goda!",
        8.90
    ),
    new Product(
        "/src/assets/produktbilder/mashmallows.jpg",
        "Marshmallows",
        "Fantastiskt fluffiga",
        9.90
    ),
    new Product(
        "/src/assets/produktbilder/hjartan.jpg",
        "Lovehearts",
        "Sprider kärlek",
        7.90
    ),
    new Product(
        "/src/assets/produktbilder/bonor.jpg",
        "Dreambeans",
        "Runda, söta & fina",
        6.90
    ),
    new Product(
        "/src/assets/produktbilder/banana-toffee.jpg",
        "Bubbs",
        "Banan & toffee",
        9.90
    ),
    new Product(
        "/src/assets/produktbilder/saltavral.jpg",
        "Saltvrål",
        "Supersalt!",
        8.90
    )
    ,
    new Product(
        "/src/assets/produktbilder/hallonlakrits2.jpg",
        "Salta Hallon",
        "Lagom salt & sött",
        7.90
    )
    ,
    new Product(
        "/src/assets/produktbilder/saltaskallar2.jpg",
        "SaltSkulls",
        "Saltiga favoriter",
        8.90
    )
];
