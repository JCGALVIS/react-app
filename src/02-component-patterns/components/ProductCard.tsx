import { createContext, CSSProperties, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import {
  onChangeArgs,
  Product,
  ProductContextProps,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  style?: CSSProperties;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  className,
  onChange,
  product,
  style,
  value,
}: Props) => {
  const productProps = useProduct({ onChange, product, value });

  return (
    <Provider value={{ ...productProps, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
