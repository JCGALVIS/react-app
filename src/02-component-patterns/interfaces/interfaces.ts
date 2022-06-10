import { ReactElement } from "react";

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  product: Product;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Buttons: () => JSX.Element;
  Image: ({ img }: { img?: string | undefined }) => JSX.Element;
  Title: ({ title }: { title?: string | undefined }) => JSX.Element;
}
