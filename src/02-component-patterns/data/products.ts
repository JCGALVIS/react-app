import { Product } from "../interfaces/interfaces";

const productOne: Product = {
  id: "1",
  img: "./coffee-mug.png",
  title: "Coffe Mug",
};

const productTwo: Product = {
  id: "2",
  img: "./coffee-mug2.png",
  title: "Coffe Mug",
};

export const products: Product[] = [productOne, productTwo];
